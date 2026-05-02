export const ICON_NAMES = {
  HOME: 'home',
  TRANSACTIONS: 'transactions',
  ADD_TRANSACTION: 'addTransaction',
  REPORTS: 'reports',
  MORE: 'more',
} as const;

export type IconName = (typeof ICON_NAMES)[keyof typeof ICON_NAMES];
