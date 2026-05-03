import {ComponentType} from 'react';
import {
  AddCircleIcon,
  Chart02Icon,
  CreditCardIcon,
  HomeIcon,
  LeftToRightListBulletIcon,
  MoreHorizontalCircle01Icon,
} from '../shared/assets/icons';
import {IconName} from '../shared/constants/iconNames.ts';
import Cash02 from '../shared/assets/icons/Cash02.tsx';

export const iconMapper = {
  home: HomeIcon,
  transactions: LeftToRightListBulletIcon,
  addTransaction: AddCircleIcon,
  reports: Chart02Icon,
  more: MoreHorizontalCircle01Icon,
  cash: Cash02,
  creditCard: CreditCardIcon,
} as Record<IconName, ComponentType<any>>;
