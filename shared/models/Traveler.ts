import type { Auditable, NamedEntity, PersonNames } from './Common';

export type Traveler = Auditable &
  PersonNames & {
    id: string;

    email?: string;

    nationality?: string;
    birthDate?: string;
  };
