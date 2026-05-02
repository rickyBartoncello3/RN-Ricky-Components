import {Text, View} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import {CustomView} from '../../../shared/components/ui/CustomView';
import {useContext} from 'react';
import {ThemeContext} from '../../context/ThemeContext.tsx';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {HeroCard} from '../../../shared/components/ui/HeroCard/HeroCard.tsx';

export const HomeScreen = () => {
  const {colors} = useContext(ThemeContext);
  const {top} = useSafeAreaInsets();

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
            currentBalance={180000}
            spent={420000}
            monthlyBudget={600000}
          />
          <View>
            <Text style={{color: colors.text}}>Home</Text>
          </View>
          <View>
            <Text style={{color: colors.text}}>Home</Text>
          </View>
          <View>
            <Text style={{color: colors.text}}>Home</Text>
          </View>
        </View>
      </ScrollView>
    </CustomView>
  );
};
