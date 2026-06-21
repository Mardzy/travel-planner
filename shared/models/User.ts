import type { NamedEntity, PersonNames } from './Common';

export type User = PersonNames & {
  id: string;
  email: string;
};
