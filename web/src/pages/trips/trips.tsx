import { Button, Card, CardHeader, Text } from '@fluentui/react-components';

import { TripCard, TripsSkeleton } from './components/';

import { useTrips } from './hooks';
import { useTripsStyles } from './trips.styles';

export const Trips = () => {
  const styles = useTripsStyles();
  const { data: trips, isFetching, isPending, isSuccess } = useTrips();

  const action = <Button appearance="primary">Create trip</Button>;

  const description = <Text>Plan group travel, compare routes, and manage travelers.</Text>;

  const header = (
    <Text size={700} weight="semibold">
      Trips
    </Text>
  );

  const updatingText = <Text size={200}>Updating trips...</Text>;

  return (
    <section className={styles.page}>
      <Card>
        <CardHeader header={header} description={description} action={action} />

        {isSuccess && isFetching && updatingText}
      </Card>

      <div className={styles.list}>
        {isPending && <TripsSkeleton />}

        {isSuccess && trips.map((trip) => <TripCard key={trip.id} trip={trip} />)}
      </div>
    </section>
  );
};
