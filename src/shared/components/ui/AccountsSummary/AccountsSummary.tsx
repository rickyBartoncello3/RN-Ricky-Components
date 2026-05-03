import React, {useContext} from 'react';
import {View} from 'react-native';
import styles from './AccountsSummary.styles';
import {AccountRow} from '../AccountRow/AccountRow';
import type {AccountsSummaryProps} from './interfaces';
import {ThemeContext} from '../../../../r.presentation/context/ThemeContext.tsx';
import Text from '../Text/Text.tsx';
import {Card} from '../Card/Card.tsx';

export const AccountsSummary = ({
  accounts,
  mainCurrency = 'ARS',
  title = 'Cuentas',
  onPressAccount,
}: AccountsSummaryProps) => {
  const {colors} = useContext(ThemeContext);

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
      </View>
      <View style={styles.list}>
        {accounts.map((account, index) => {
          const isLast = index === accounts.length - 1;

          return (
            <View key={account.id}>
              <AccountRow
                account={{
                  ...account,
                  mainCurrency,
                }}
                onPress={onPressAccount}
              />
              {!isLast ? (
                <View
                  style={[
                    styles.divider,
                    {
                      backgroundColor: colors.divider,
                    },
                  ]}
                />
              ) : null}
            </View>
          );
        })}
      </View>
    </Card>
  );
};
