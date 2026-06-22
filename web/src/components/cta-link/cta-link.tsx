// cta-link.tsx
import type { ReactNode } from 'react';
import { Link } from 'react-router-dom';

import { useCtaLinkStyles } from './cta-link.styles';

type CtaLinkProps = {
  ariaLabel?: string;
  children: ReactNode;
  to: string;
};

export const CtaLink = ({ ariaLabel, children, to }: CtaLinkProps) => {
  const styles = useCtaLinkStyles();

  return (
    <Link aria-label={ariaLabel} className={styles.root} to={to}>
      {children}
    </Link>
  );
};
