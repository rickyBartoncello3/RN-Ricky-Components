import React, {useContext} from 'react';
import {View} from 'react-native';
import styles from './HeroCard.styles';
import {MetricProps} from './interfaces.ts';
import {ThemeContext} from '../../../../r.presentation/context/ThemeContext.tsx';
import Text from '../Text/Text.tsx';
import {formatMoney} from '../../../utils/formatMoney.ts';

export const Metric = ({title, amount, currencySymbol = '$'}: MetricProps) => {
  const {colors} = useContext(ThemeContext);

  return (
    <View style={styles.metric}>
      <Text
        size={10}
        weight={500}
        style={[
          {
            color: colors.balanceCardMutedText,
          },
        ]}>
        {title}
      </Text>
      <Text
        size={14}
        weight={800}
        style={[
          {
            color: colors.balanceCardText,
          },
        ]}>
        {formatMoney(amount, currencySymbol)}
      </Text>
    </View>
  );
};
