import {ComponentType} from 'react';
import {
  AddCircleIcon,
  Chart02Icon,
  HomeIcon,
  LeftToRightListBulletIcon,
  MoreHorizontalCircle01Icon,
} from '../shared/assets/icons';
import {IconName} from '../shared/constants/iconNames.ts';

export const iconMapper = {
  home: HomeIcon,
  transactions: LeftToRightListBulletIcon,
  addTransaction: AddCircleIcon,
  reports: Chart02Icon,
  more: MoreHorizontalCircle01Icon,
} as Record<IconName, ComponentType<any>>;
