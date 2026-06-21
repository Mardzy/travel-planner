// pages/users.tsx
import { Card, CardHeader, Text } from '@fluentui/react-components';

export const Users = () => (
  <Card>
    <CardHeader
      header={
        <Text size={600} weight="semibold">
          Users
        </Text>
      }
    />
    <Text>Users will be listed here.</Text>
  </Card>
);
