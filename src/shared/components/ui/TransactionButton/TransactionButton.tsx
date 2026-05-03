import React, {useContext} from 'react';
import {View} from 'react-native';
import styles from './TransactionButton.styles.ts';
import {TransactionButtonProps} from './interfaces.ts';
import Text from '../Text/Text.tsx';
import {TouchableRipple} from 'react-native-paper';
import {ThemeContext} from '../../../../r.presentation/context/ThemeContext.tsx';
import {iconMapper} from '../../../../mappers/iconMapper.ts';
import {ICON_NAMES} from '../../../constants/iconNames.ts';

export const TransactionButton = ({
  handlePressIncome,
  icon,
  text,
}: TransactionButtonProps) => {
  const {colors, isDark} = useContext(ThemeContext);
  const Icon = iconMapper[icon] ?? iconMapper[ICON_NAMES.ADD];

  return (
    <TouchableRipple
      borderless
      onPress={handlePressIncome}
      style={[
        styles.actionButton,
        {
          backgroundColor:
            icon === ICON_NAMES.ADD
              ? colors.badgeBackground
              : isDark
              ? 'rgba(248,113,113,0.12)'
              : 'rgba(239,68,68,0.08)',
        },
      ]}>
      <View style={styles.actionContent}>
        <View
          style={[
            styles.iconBubble,
            {
              backgroundColor:
                icon === ICON_NAMES.ADD ? colors.income : colors.expense,
            },
          ]}>
          <Icon color={'white'} width={50} height={50} />
        </View>

        <View style={styles.actionTextContainer}>
          <Text
            size={16}
            weight={600}
            style={[
              {
                color: colors.text,
              },
            ]}>
            {text}
          </Text>
        </View>
      </View>
    </TouchableRipple>
  );
};
