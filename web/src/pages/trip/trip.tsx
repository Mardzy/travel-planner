import { Card, CardHeader, Text } from '@fluentui/react-components';
import { useParams } from 'react-router-dom';

import { useTrip } from './hooks';
import { useTripStyles } from './trip.styles';

export const Trip = () => {
  const styles = useTripStyles();
  const { tripId = '' } = useParams();

  const { data: trip, isError, isPending, isSuccess } = useTrip(tripId);

  if (isPending) {
    return (
      <section className={styles.page}>
        <Card>
          <Text>Loading trip...</Text>
        </Card>
      </section>
    );
  }

  if (isError) {
    return (
      <section className={styles.page}>
        <Card>
          <Text>Trip could not be loaded.</Text>
        </Card>
      </section>
    );
  }

  if (!isSuccess) {
    return null;
  }

  const description = trip.description ? <Text>{trip.description}</Text> : undefined;

  const header = (
    <Text size={700} weight="semibold">
      {trip.name}
    </Text>
  );

  return (
    <section className={styles.page}>
      <Card>
        <CardHeader header={header} description={description} />
      </Card>
    </section>
  );
};
