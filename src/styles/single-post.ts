import styled, { css } from 'styled-components';

export const PostContainer = styled.main`
  ${() => css`
    max-width: 70rem;
    margin: 0 auto;
    padding: 0 2rem;
  `}
`;

export const Post = styled.article`
  ${({ theme }) => css`
    max-width: 45rem;
    margin: 5rem auto 0;

    > header {
      h1 {
        font-size: 3.5rem;
        font-weight: 900;
        color: ${theme.colors.titles};
      }

      time {
        display: block;
        font-size: 1rem;
        color: ${theme.colors.text};
      }

      + div {
        margin: 2rem 0 4rem !important;
      }
    }

    img {
      border-radius: 1rem;
    }
  `}
`;

export const PostContent = styled.section`
  ${({ theme }) => css`
    line-height: 2rem;
    font-size: 1.125rem;
    color: ${theme.colors.text};

    h3 {
      margin-top: 1.5rem;
    }

    p,
    ul {
      margin: 1.5rem 0;
    }

    ul {
      padding-left: 1.5rem;
      list-style-type: disc;

      li {
        margin: 0.5rem 0;
      }
    }
  `}
`;
