import { signIn, useSession } from 'next-auth/client';
import { useRouter } from 'next/dist/client/router';

import { api, getStripeClient } from '../../services';
import * as S from './styles';

export const SubscribeButton = () => {
  const [session] = useSession();
  const router = useRouter();

  const handleSubscribe = async () => {
    if (!session) {
      signIn('github');
    }

    if (session.activeSubscription) {
      router.push('/posts');
      return;
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
