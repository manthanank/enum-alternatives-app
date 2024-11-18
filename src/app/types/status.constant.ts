export const STATUS = {
  Active: 'Active',
  Inactive: 'Inactive',
  Pending: 'Pending',
} as const;

export type StatusValues = (typeof STATUS)[keyof typeof STATUS];
