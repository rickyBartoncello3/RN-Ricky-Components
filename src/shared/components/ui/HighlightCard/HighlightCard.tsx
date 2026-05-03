import React, {useContext} from 'react';
import {HighlightCardProps} from './interfaces.ts';
import {ThemeContext} from '../../../../r.presentation/context/ThemeContext.tsx';
import Text from '../Text/Text.tsx';
import {getPercentageLabel} from '../../../utils/getPercentageLabel.ts';
import {HighlightHeader} from '../HighlightHeader/HighlightHeader.tsx';
import {Card} from '../Card/Card.tsx';

export const HighlightCard = ({item}: HighlightCardProps) => {
  const {colors} = useContext(ThemeContext);

  const isPositiveForSpending = item.percentage < 0;

  const percentageColor = isPositiveForSpending
    ? colors.positive
    : item.percentage > 0
    ? colors.negative
    : colors.textSecondary;

  return (
    <Card>
      <HighlightHeader item={item} />
      <Text
        size={20}
        weight={800}
        style={[
          {
            color: percentageColor,
          },
        ]}>
        {getPercentageLabel(item.percentage)}
      </Text>
    </Card>
  );
};
