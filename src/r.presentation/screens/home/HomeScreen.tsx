import {Text, View} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import {CustomView} from '../../../shared/components/ui/CustomView';
import {useContext} from 'react';
import {ThemeContext} from '../../context/ThemeContext.tsx';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {HeroCard} from '../../../shared/components/ui/HeroCard/HeroCard.tsx';
import {Highlights} from '../../../shared/components/ui/Highlight/Highlight.tsx';
import {Card} from '../../../shared/components/ui/Card/Card.tsx';

export const HomeScreen = () => {
  const {colors} = useContext(ThemeContext);
  const {top} = useSafeAreaInsets();

  const getRandomInt = (min = 0, max: number): number => {
    const minCeil = Math.ceil(min);
    const maxFloor = Math.floor(max);
    return Math.floor(Math.random() * (maxFloor - minCeil + 1)) + minCeil;
  };

  const monthlyBudget = getRandomInt(0, 1000000);
  const spent = getRandomInt(0, monthlyBudget);

  return (
    <CustomView margin>
      <ScrollView>
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
          <Card>
            <Text style={{color: colors.text}}>Home</Text>
          </Card>
        </View>
      </ScrollView>
    </CustomView>
  );
};
