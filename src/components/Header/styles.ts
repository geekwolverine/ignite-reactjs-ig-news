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

type NavLinkProps = {
  active: boolean;
};

export const NavLink = styled.a<NavLinkProps>`
  ${({ theme, active: isActive }) => css`
    display: inline-block;
    position: relative;
    padding: 0 0.5rem;
    height: 100%;
    line-height: 5rem;
    color: ${theme.colors[isActive ? 'titles' : 'text']};
    transition: 180ms 80ms ease-in-out;

    :hover {
      color: ${theme.colors.titles};
    }

    & + & {
      margin-left: 2rem;
    }

    ${isActive &&
    css`
      font-weight: bold;

      ::after {
        content: '';
        position: absolute;
        right: 0;
        bottom: 1px;
        left: 0;
        width: 100%;
        height: 0.1875rem;
        border-radius: 0.1875rem 0.1875rem 0 0;
        background: ${theme.colors.yellow};
      }
    `}
  `}
`;
