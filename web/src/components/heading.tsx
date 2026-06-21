import { Text } from '@fluentui/react-components';
import type { ReactNode } from 'react';

type HeadingProps = {
  children: ReactNode;
};

export const Heading = ({ children }: HeadingProps) => (
  <Text as="h1" size={800} weight="semibold">
    {children}
  </Text>
);
