const StatusValues = {
  Active: 'Active',
  Inactive: 'Inactive',
  Pending: 'Pending',
} as const;

export type MappedStatusType = keyof typeof StatusValues;
