import React, {useContext} from 'react';
import {View} from 'react-native';
import styles from './HeroCard.styles';
import {Card} from 'react-native-paper';
import {CircularProgress} from '../CircularProgress/CircularProgress.tsx';
import type {HeroCardProps} from './interfaces.ts';
import {ThemeContext} from '../../../../r.presentation/context/ThemeContext.tsx';
import Text from '../Text/Text.tsx';
import {Metric} from './Metric.tsx';
import {Chip} from '../Chip/Chip.tsx';

const formatMoney = (value: number, currencySymbol = '$') => {
  return `${currencySymbol}${value.toLocaleString('es-AR')}`;
};

export const HeroCard = ({
  currentBalance,
  spent,
  monthlyBudget,
  currencySymbol = '$',
  title = 'Saldo actual',
  badgeLabel = 'Disponible ahora',
}: HeroCardProps) => {
  const {colors} = useContext(ThemeContext);

  const budgetProgress = monthlyBudget > 0 ? spent / monthlyBudget : 0;

  const normalizedProgress = Math.min(Math.max(budgetProgress, 0), 1);

  return (
    <Card
      mode="contained"
      style={[
        styles.card,
        {
          backgroundColor: colors.balanceCardBackground,
        },
      ]}>
      <Card.Content style={styles.content}>
        <View style={styles.topRow}>
          <View style={styles.balanceContainer}>
            <Text
              size={16}
              weight={600}
              style={[
                styles.title,
                {
                  color: colors.balanceCardMutedText,
                },
              ]}>
              {title}
            </Text>
            <Text
              size={40}
              weight={800}
              style={[
                styles.amount,
                {
                  color: colors.balanceCardText,
                },
              ]}>
              {formatMoney(currentBalance, currencySymbol)}
            </Text>
            <Chip
              text={badgeLabel}
              color={colors.badgeText}
              backgroundColor={colors.badgeBackground}
            />
          </View>

          <CircularProgress
            progress={normalizedProgress}
            color={colors.primary}
            trackColor="rgba(255,255,255,0.22)"
            textColor={colors.balanceCardText}
          />
        </View>

        <View style={styles.divider} />

        <View style={styles.bottomRow}>
          <Metric title={'Gastado este mes'} amount={spent} />
          <Metric title={'Presupuesto'} amount={monthlyBudget} />
        </View>
      </Card.Content>
    </Card>
  );
};
