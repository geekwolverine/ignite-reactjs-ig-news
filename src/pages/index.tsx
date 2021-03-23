import { MetaTags, SubscribeButton } from '../components';
import * as S from '../styles/home';

export default function Home() {
  return (
    <>
      <MetaTags title="Home" />

      <S.Container>
        <S.Section>
          <span>👏 Hey, welcome</span>

          <h1>
            News about <br /> the <strong>React</strong> world{' '}
          </h1>

          <p>
            Get access to all the articles <strong>for U$9.90/month</strong>{' '}
          </p>

          <SubscribeButton />
        </S.Section>

        <img src="/images/avatar.svg" alt="Girl Coding" />
      </S.Container>
    </>
  );
}
