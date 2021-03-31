import { signIn, useSession } from 'next-auth/client';

import * as S from './styles';

type SubscribeButtonProps = {
  priceId: string;
};

export const SubscribeButton = ({ priceId }: SubscribeButtonProps) => {
  const [session] = useSession();

  const handleSubscribe = () => {
    if (!session) {
      signIn('github');
    }
  };

  return (
    <S.Container type="button" onClick={handleSubscribe}>
      Subscribe now
    </S.Container>
  );
};
