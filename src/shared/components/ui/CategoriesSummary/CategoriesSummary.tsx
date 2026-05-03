import React, {useContext, useMemo, useState} from 'react';
import styles from './CategoriesSummary.styles.ts';
import {View} from 'react-native';
import {TouchableRipple} from 'react-native-paper';
import {ThemeContext} from '../../../../r.presentation/context/ThemeContext.tsx';
import {CategoriesSummaryProps} from './interfaces.ts';
import Text from '../Text/Text.tsx';
import {Card} from '../Card/Card.tsx';
import {DonutChart} from '../DonutChart/DonutChart.tsx';
import {formatMoney} from '../../../utils/formatMoney.ts';
import {CategoryRow} from '../CategoryRow/CategoryRow.tsx';

export const CategoriesSummary = ({
  categories,
  maxVisible = 6,
  title = 'Categorías',
  currencySymbol = '$',
  onPressShowMore,
  onPressCategory,
}: CategoriesSummaryProps) => {
  const {colors, isDark} = useContext(ThemeContext);
  const [showAll, setShowAll] = useState(false);

  const visibleCategories = useMemo(
    () => (showAll ? categories : categories.slice(0, maxVisible)),
    [showAll],
  );

  const hiddenCategoriesCount = Math.max(categories.length - maxVisible, 0);

  const totalAmount = categories.reduce((total, category) => {
    return total + category.amount;
  }, 0);

  const chartTrackColor = isDark
    ? 'rgba(255,255,255,0.10)'
    : 'rgba(15,23,42,0.08)';

  return (
    <Card>
      <View style={styles.header}>
        <Text
          size={14}
          weight={800}
          style={[
            {
              color: colors.text,
            },
          ]}>
          {title}
        </Text>
        <View>
          {hiddenCategoriesCount > 0 ? (
            <TouchableRipple
              borderless
              onPress={onPressShowMore}
              style={styles.headerAction}>
              <Text
                size={12}
                weight={800}
                style={[
                  {
                    color: colors.primary,
                  },
                ]}>
                Ver más
              </Text>
            </TouchableRipple>
          ) : null}
        </View>
      </View>
      <View style={styles.chartAndList}>
        <View style={styles.chartContainer}>
          <DonutChart
            categories={categories}
            centerLabel="gastado"
            centerValue={formatMoney(totalAmount, currencySymbol)}
            textColor={colors.text}
            mutedTextColor={colors.textSecondary}
            trackColor={chartTrackColor}
          />
        </View>
        <View style={styles.listContainer}>
          {visibleCategories.map(category => (
            <CategoryRow
              key={category.id}
              category={category}
              currencySymbol={currencySymbol}
              onPress={onPressCategory}
            />
          ))}
        </View>
      </View>

      {hiddenCategoriesCount > 0 ? (
        <TouchableRipple
          borderless
          onPress={() => setShowAll(prev => !prev)}
          style={[styles.showMoreButton]}>
          <Text
            size={12}
            weight={800}
            style={[
              {
                color: colors.textMuted,
              },
            ]}>
            {showAll
              ? 'Mostrar menos ↑'
              : `Mostrar ${hiddenCategoriesCount} más ↓`}
          </Text>
        </TouchableRipple>
      ) : null}
    </Card>
  );
};
