import { signIn, useSession } from 'next-auth/client';

import { api, getStripeClient } from '../../services';
import * as S from './styles';

type SubscribeButtonProps = {
  priceId: string;
};

export const SubscribeButton = ({ priceId }: SubscribeButtonProps) => {
  const [session] = useSession();

  const handleSubscribe = async () => {
    if (!session) {
      signIn('github');
    }

    try {
      const { data } = await api.post<{ sessionId: string }>('/subscribe');

      const { sessionId } = data;

      const stripe = await getStripeClient();

      await stripe.redirectToCheckout({ sessionId });
    } catch (err) {
      alert(err.message);
    }
  };

  return (
    <S.Container type="button" onClick={handleSubscribe}>
      Subscribe now
    </S.Container>
  );
};
