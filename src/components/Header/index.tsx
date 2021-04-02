import { useRouter } from 'next/dist/client/router';
import Link from 'next/link';

import { ActiveLink } from '../ActiveLink';
import { AuthButton } from '../AuthButton';
import * as S from './styles';

export const Header = () => {
  const { asPath } = useRouter();

  return (
    <S.Container>
      <header>
        <img src="/images/logo.svg" alt="ig.news" />

        <nav>
          <ActiveLink href="/">Home</ActiveLink>
          <ActiveLink href="/posts">Posts</ActiveLink>
        </nav>

        <AuthButton />
      </header>
    </S.Container>
  );
};
