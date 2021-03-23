import { useState } from 'react';

import { useTheme } from 'styled-components';
import { GoMarkGithub, GoX } from 'react-icons/go';

import * as S from './styles';

export const AuthButton = () => {
  const theme = useTheme();

  const [isLoggedIn] = useState(false);

  const githubIconColor = theme.colors[isLoggedIn ? 'green' : 'yellow'];

  return (
    <S.Container type="button">
      <GoMarkGithub color={githubIconColor} size="1.25rem" />
      <span>Sign in with GitHub</span>

      {isLoggedIn && <GoX color={theme.colors.detailLight} size="1.25rem" />}
    </S.Container>
  );
};
