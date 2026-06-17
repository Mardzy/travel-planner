export type AuditInfo = {
  byUserId: string;
  at: string;
};

export type Auditable = {
  created?: AuditInfo;
  updated?: AuditInfo;
};

export type NamedEntity = {
  id: string;
  name: string;
};
