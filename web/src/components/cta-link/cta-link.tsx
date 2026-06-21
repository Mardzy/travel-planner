// cta-link.tsx
import type { ReactNode } from 'react';
import { Link } from 'react-router-dom';

import { useCtaLinkStyles } from './cta-link.styles';

type CtaLinkProps = {
  children: ReactNode;
  to: string;
};

export const CtaLink = ({ children, to }: CtaLinkProps) => {
  const styles = useCtaLinkStyles();

  return (
    <Link className={styles.root} to={to}>
      {children}
    </Link>
  );
};
