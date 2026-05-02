import {createStackNavigator} from '@react-navigation/stack';
import {HomeScreen} from '../../r.presentation/screens/home/HomeScreen.tsx';
import {Animation101Screen} from '../../r.presentation/screens/animations/Animation101Screen.tsx';
import {Animation102Screen} from '../../r.presentation/screens/animations/Animation102Screen.tsx';
import {SwitchScreen} from '../../r.presentation/screens/switches/SwitchScreen.tsx';
import {AlertScreen} from '../../r.presentation/screens/alerts/AlertScreen.tsx';
import {TextInputScreen} from '../../r.presentation/screens/inputs/TextInputScreen.tsx';
import {PullToRefreshScreen} from '../../r.presentation/screens/ui/PullToRefreshScreen.tsx';
import {CustomSectionListScreen} from '../../r.presentation/screens/ui/CustomSectionListScreen.tsx';
import {ModalScreen} from '../../r.presentation/screens/ui/ModalScreen.tsx';
import {InfiniteScrollScreen} from '../../r.presentation/screens/ui/InfiniteScrollScreen.tsx';
import {SlidesScreen} from '../../r.presentation/screens/ui/SlidesScreen.tsx';
import {ChangeThemeScreen} from '../../r.presentation/screens/theme/ChangeThemeScreen.tsx';
import {useContext} from 'react';
import {ThemeContext} from '../../r.presentation/context/ThemeContext.tsx';

const Stack = createStackNavigator();

export const RootNavigator = () => {
  const {colors} = useContext(ThemeContext);

  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        cardStyle: {
          backgroundColor: colors.background,
        },
      }}>
      <Stack.Screen name="HomeScreen" component={HomeScreen} />
      <Stack.Screen name="Animation101Screen" component={Animation101Screen} />
      <Stack.Screen name="Animation102Screen" component={Animation102Screen} />

      <Stack.Screen name="SwitchScreen" component={SwitchScreen} />
      <Stack.Screen name="AlertScreen" component={AlertScreen} />
      <Stack.Screen name="TextInputScreen" component={TextInputScreen} />

      <Stack.Screen
        name="PullToRefreshScreen"
        component={PullToRefreshScreen}
      />
      <Stack.Screen
        name="CustomSectionListScreen"
        component={CustomSectionListScreen}
      />
      <Stack.Screen name="ModalScreen" component={ModalScreen} />
      <Stack.Screen
        name="InfiniteScrollScreen"
        component={InfiniteScrollScreen}
      />

      <Stack.Screen name="SlidesScreen" component={SlidesScreen} />
      <Stack.Screen name="ChangeThemeScreen" component={ChangeThemeScreen} />
    </Stack.Navigator>
  );
};
