import {HomeScreen} from '../../r.presentation/screens/home/HomeScreen.tsx';
import {Animation101Screen} from '../../r.presentation/screens/animations/Animation101Screen.tsx';
import Routes from './routes.ts';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import TabBar from '../../shared/components/ui/TabBar/TabBar.tsx';

const Tab = createBottomTabNavigator();

const BottomTabs = () => {
  return (
    <Tab.Navigator
      initialRouteName={Routes.HOME}
      screenOptions={{
        headerShown: false,
      }}
      tabBar={props => <TabBar {...props} />}>
      <Tab.Screen
        name={Routes.HOME}
        options={{tabBarLabel: 'Home'}}
        component={HomeScreen}
      />
      <Tab.Screen
        name={Routes.TRANSACTIONS}
        options={{tabBarLabel: 'Transactions'}}
        component={Animation101Screen}
      />
      <Tab.Screen
        name={Routes.ADD}
        options={{tabBarLabel: ''}}
        component={Animation101Screen}
      />
      <Tab.Screen
        name={Routes.REPORTING}
        options={{tabBarLabel: 'Reports'}}
        component={Animation101Screen}
      />
      <Tab.Screen
        name={Routes.SETTINGS}
        options={{tabBarLabel: 'More'}}
        component={Animation101Screen}
      />
    </Tab.Navigator>
  );
};

export default BottomTabs;
