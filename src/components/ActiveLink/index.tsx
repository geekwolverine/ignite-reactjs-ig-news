import { useRouter } from 'next/dist/client/router';
import Link, { LinkProps } from 'next/link';
import { ReactNode } from 'react';

import * as S from './styles';

type ActiveLinkProps = LinkProps & {
  children: ReactNode;
};

export const ActiveLink = ({ children, ...rest }: ActiveLinkProps) => {
  const { asPath } = useRouter();

  const isActive = asPath === rest.href;

  return (
    <Link {...rest}>
      <S.NavLink $active={isActive}>{children}</S.NavLink>
    </Link>
  );
};
