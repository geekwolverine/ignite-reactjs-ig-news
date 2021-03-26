import * as S from './styles';

type SubscribeButtonProps = {
  priceId: string;
};

export const SubscribeButton = ({ priceId }: SubscribeButtonProps) => (
  <S.Container type="button">Subscribe now</S.Container>
);
