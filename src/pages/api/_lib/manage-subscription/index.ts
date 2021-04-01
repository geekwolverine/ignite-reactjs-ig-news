import { query as q } from 'faunadb';

import { fauna, stripe } from '../../../../services';
import { getUserByStripeId } from '../../_utils';

type SaveSubscription = {
  subscriptionId: string;
  customerId: string;
};

type UserRef = {
  id: string;
};

export const saveSubscription = async (
  { subscriptionId, customerId }: SaveSubscription,
  isCreatingSubscription: boolean,
) => {
  const userRefPromise = fauna.query<UserRef>(
    q.Select('ref', q.Get(getUserByStripeId(customerId))),
  );
  const subscriptionPromise = stripe.subscriptions.retrieve(subscriptionId);

  const [userRef, subscription] = await Promise.all([
    userRefPromise,
    subscriptionPromise,
  ]);

  const subscriptionData = {
    id: subscription.id,
    user: userRef,
    status: subscription.status,
    price_id: subscription.items.data[0].price.id,
  };

  if (isCreatingSubscription) {
    await fauna.query(
      q.Create(q.Collection('subscriptions'), {
        data: subscriptionData,
      }),
    );
  } else {
    await fauna.query(
      q.Replace(
        q.Select(
          'ref',
          q.Get(q.Match(q.Index('subscription_by_id'), subscriptionId)),
        ),
        { data: subscriptionData },
      ),
    );
  }
};
