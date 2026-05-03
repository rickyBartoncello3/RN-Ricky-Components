import React, {useContext} from 'react';
import {CardProps} from './interfaces.ts';
import styles from './Card.styles.ts';
import {ThemeContext} from '../../../../r.presentation/context/ThemeContext.tsx';
import {Card as RNCard} from 'react-native-paper';

export const Card = ({children}: CardProps) => {
  const {colors} = useContext(ThemeContext);

  return (
    <RNCard
      mode="contained"
      style={[
        styles.card,
        {
          backgroundColor: colors.insightCardBackground,
          borderColor: colors.border,
        },
      ]}>
      <RNCard.Content style={styles.content}>{children}</RNCard.Content>
    </RNCard>
  );
};
