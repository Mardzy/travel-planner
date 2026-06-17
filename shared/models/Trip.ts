import type { Auditable, NamedEntity } from './Common';

export type Trip = Auditable &
  NamedEntity & {
    description?: string;
  };
