import React from 'react';
import type {TabBarIconProps} from './interfaces.ts';
import {iconMapper} from '../../../../mappers/iconMapper.ts';
import {ICON_NAMES} from '../../../constants/iconNames.ts';

export const TabBarIcon = ({
  name,
  color,
  size = 24,
  strokeWidth = 1.8,
}: TabBarIconProps) => {
  const Icon = iconMapper[name] ?? iconMapper[ICON_NAMES.ADD_TRANSACTION];

  return (
    <Icon
      width={size}
      height={size}
      color={color}
      strokeWidth={strokeWidth}
      fill={color}
    />
  );
};
