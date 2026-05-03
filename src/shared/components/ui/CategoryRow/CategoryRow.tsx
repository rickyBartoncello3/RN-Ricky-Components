import React, {useContext} from 'react';
import styles from './CategoryRow.styles.ts';
import {Pressable, View} from 'react-native';
import {CategoryRowProps} from './interfaces.ts';
import Text from '../Text/Text.tsx';
import {formatMoney} from '../../../utils/formatMoney.ts';
import {ThemeContext} from '../../../../r.presentation/context/ThemeContext.tsx';

export const CategoryRow = ({
  category,
  currencySymbol = '$',
  onPress,
}: CategoryRowProps) => {
  const {colors} = useContext(ThemeContext);

  return (
    <Pressable
      onPress={() => onPress?.(category)}
      style={({pressed}) => [
        styles.container,
        {
          opacity: pressed ? 0.72 : 1,
        },
      ]}>
      <View style={styles.leftContent}>
        <View
          style={[
            styles.dot,
            {
              backgroundColor: category.color,
            },
          ]}
        />

        <Text
          size={12}
          weight={700}
          numberOfLines={1}
          style={[
            styles.name,
            {
              color: colors.text,
            },
          ]}>
          {category.name}
        </Text>
      </View>

      <View style={styles.rightContent}>
        <Text
          size={12}
          weight={800}
          style={[
            {
              color: colors.text,
            },
          ]}>
          {formatMoney(category.amount, currencySymbol)}
        </Text>

        <Text
          size={10}
          weight={600}
          style={[
            {
              color: colors.textSecondary,
            },
          ]}>
          {category.percentage}%
        </Text>
      </View>
    </Pressable>
  );
};
