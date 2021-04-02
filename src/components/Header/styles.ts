import styled, { css } from 'styled-components';

export const Container = styled.div`
  ${({ theme }) => css`
    width: 100%;
    border-bottom: 1px solid ${theme.colors.detail};

    > header {
      display: flex;
      align-items: center;
      margin: 0 auto;
      padding: 0 2rem;
      width: 100%;
      max-width: 63.75rem;
      height: 5rem;

      > nav {
        margin-left: 5rem;
        height: 100%;
      }

      > button {
        margin-left: auto;
      }
    }
  `}
`;
