import styled, { css } from 'styled-components';

export const Container = styled.main`
  ${({ theme }) => css`
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 1rem;
    margin: 0 auto;
    padding: 2rem;
    width: 100%;
    max-width: 63.75rem;
    height: calc(100vh - 5rem);
    color: ${theme.colors.text};
  `}
`;

export const Section = styled.section`
  ${({ theme }) => css`
    font-size: 1.5rem;
    font-weight: 700;

    > h1 {
      margin: 2.5rem 0 1.25rem;
      font-size: 4.5rem;
      font-weight: 900;
      line-height: 4.5rem;
      color: ${theme.colors.titles};

      > strong {
        color ${theme.colors.blue};
      }
    }

    > p {
      font-weight: normal;
      margin-bottom: 2.5rem;

      > strong {
        display: block;
        color ${theme.colors.blue};
      }
    }
  `}
`;
