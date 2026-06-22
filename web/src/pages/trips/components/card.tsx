import { Card, CardHeader, Text } from '@fluentui/react-components';

import type { Trip } from '@travel-planner/shared';

import { paths } from '@/api';
import { CtaLink } from '@/components';

type TripCardProps = {
  trip: Trip;
};

export const TripCard = ({ trip: { id, description, name } }: TripCardProps) => {
  const cardDescription = description ? <Text size={300}>{description}</Text> : undefined;

  const cardHeader = (
    <Text size={500} weight="semibold">
      {name}
    </Text>
  );

  const action = <CtaLink to={paths.tripById(id)}>View</CtaLink>;

  return (
    <Card>
      <CardHeader header={cardHeader} description={cardDescription} action={action} />
    </Card>
  );
};
