// pages/home/home.tsx
import { Card, CardHeader, Text } from '@fluentui/react-components';

import { routes } from '@/app';
import { Heading } from '@/components';

import { useHomeStyles } from './home.styles';
import { CtaLink } from '@/components/cta-link/cta-link';

export const Home = () => {
  const styles = useHomeStyles();

  return (
    <section className={styles.root}>
      <div className={styles.intro}>
        <Heading>Travel Planner</Heading>

        <Text size={400}>Coordinate trips, users, and travelers from one simple dashboard.</Text>
      </div>

      <div className={styles.cards}>
        <Card>
          <CardHeader header={<Text weight="semibold">Trips</Text>} description="View and manage planned trips." />

          <CtaLink to={routes.trips.path}>View trips</CtaLink>
        </Card>

        <Card>
          <CardHeader header={<Text weight="semibold">Users</Text>} description="View and manage users." />

          <CtaLink to={routes.users.path}>View users</CtaLink>
        </Card>
      </div>
    </section>
  );
};
