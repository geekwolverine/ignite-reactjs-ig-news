import * as S from './styles';

export const Header = () => (
  <S.Container>
    <header>
      <img src="/images/logo.svg" alt="ig.news" />

      <nav>
        <S.NavLink active href="/">
          Home
        </S.NavLink>
        <S.NavLink active={false} href="/posts">
          Posts
        </S.NavLink>
      </nav>
    </header>
  </S.Container>
);
