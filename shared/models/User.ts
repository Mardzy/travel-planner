import type { NamedEntity } from './Common';

export type User = NamedEntity & {
  email: string;
};
