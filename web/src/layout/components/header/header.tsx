import { NavLink } from 'react-router-dom';

import { routes } from '@/app';
import { useHeaderStyles } from './header.styles';

export const Header = () => {
  const styles = useHeaderStyles();

  return (
    <header className={styles.root}>
      <div className={styles.inner}>
        <NavLink to={routes.home.path} className={styles.brand}>
          Travel Planner
        </NavLink>

        <nav className={styles.nav}>
          <NavLink to={routes.trips.path}>Trips</NavLink>
          <NavLink to={routes.users.path}>Users</NavLink>
        </nav>
      </div>
    </header>
  );
};
