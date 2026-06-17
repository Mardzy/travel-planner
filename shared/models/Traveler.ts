import type { Auditable, NamedEntity } from './Common';

export type Traveler = Auditable &
  NamedEntity & {
    email?: string;
  };
