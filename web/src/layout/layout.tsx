import type { ReactNode } from 'react';

import { Footer, Header } from './components';
import { useLayoutStyles } from './layout.styles';

type LayoutProps = {
  children: ReactNode;
};

export const Layout = ({ children }: LayoutProps) => {
  const styles = useLayoutStyles();

  return (
    <div className={styles.root}>
      <Header />
      <main className={styles.body}>{children}</main>
      <Footer />
    </div>
  );
};
