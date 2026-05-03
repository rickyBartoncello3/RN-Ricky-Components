import {Text, View} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import {CustomView} from '../../../shared/components/ui/CustomView';
import {useContext} from 'react';
import {ThemeContext} from '../../context/ThemeContext.tsx';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {HeroCard} from '../../../shared/components/ui/HeroCard/HeroCard.tsx';
import {Highlights} from '../../../shared/components/ui/Highlight/Highlight.tsx';
import {Card} from '../../../shared/components/ui/Card/Card.tsx';
import {AccountItem} from '../../../shared/components/ui/AccountsSummary/interfaces.ts';
import {AccountsSummary} from '../../../shared/components/ui/AccountsSummary/AccountsSummary.tsx';
import {getRandomInt} from '../../../shared/utils/getRandomInt.ts';

export const HomeScreen = () => {
  const {colors} = useContext(ThemeContext);
  const {top} = useSafeAreaInsets();

  const monthlyBudget = getRandomInt(0, 1000000);
  const spent = getRandomInt(0, monthlyBudget);

  const accounts: AccountItem[] = [
    {
      id: 'cash-ars',
      name: 'Efectivo pesos',
      type: 'cash',
      currency: 'ARS',
      balance: monthlyBudget,
      mainCurrency: 'ARS',
    },
    {
      id: 'cash-usd',
      name: 'Efectivo dólar',
      type: 'cash',
      currency: 'USD',
      balance: getRandomInt(0, 1000),
      equivalentInMainCurrency: 481900,
      mainCurrency: 'ARS',
    },
    {
      id: 'bbva-visa',
      name: 'Visa',
      type: 'creditCard',
      currency: 'ARS',
      balance: getRandomInt(-100000, 0),
      mainCurrency: 'ARS',
    },
    {
      id: 'bbva-mastercard',
      name: 'Mastercard',
      type: 'creditCard',
      currency: 'ARS',
      balance: getRandomInt(-100000, 0),
      mainCurrency: 'ARS',
    },
  ];

  return (
    <CustomView margin>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginTop: top,
            borderWidth: 1,
            paddingVertical: 8,
            marginBottom: 8,
          }}>
          <View>
            <Text style={{color: colors.text}}>Home</Text>
          </View>
          <View>
            <Text style={{color: colors.text}}>May 2026</Text>
          </View>
          <View>
            <Text style={{color: colors.text}}>Home</Text>
          </View>
        </View>
        <View style={{gap: 8}}>
          <HeroCard
            currentBalance={monthlyBudget - spent}
            spent={spent}
            monthlyBudget={monthlyBudget}
          />
          <Highlights
            weeklyPercentage={getRandomInt(-10, 10)}
            monthlyPercentage={getRandomInt(-10, 10)}
            weeklyValues={[32000, 28000, 42000, 36000, 30000, 25000, 22000]}
            monthlyValues={[360000, 390000, 410000, 420000]}
          />
          <Card>
            <Text style={{color: colors.text}}>Home</Text>
          </Card>
          <AccountsSummary
            accounts={accounts}
            mainCurrency="ARS"
            onPressSeeAll={() => {
              console.log('Ver todas las cuentas');
            }}
            onPressAccount={account => {
              console.log('Cuenta seleccionada:', account.name);
            }}
          />
        </View>
      </ScrollView>
    </CustomView>
  );
};
