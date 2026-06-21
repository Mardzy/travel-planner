// pages/trips.tsx
import { Card, CardHeader, Text } from '@fluentui/react-components';

export const Trips = () => (
  <Card>
    <CardHeader
      header={
        <Text size={600} weight="semibold">
          Trips
        </Text>
      }
    />
    <Text>Trips will be listed here.</Text>
  </Card>
);
