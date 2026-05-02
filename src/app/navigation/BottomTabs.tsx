import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {HomeScreen} from '../../r.presentation/screens/home/HomeScreen.tsx';
import {Animation101Screen} from '../../r.presentation/screens/animations/Animation101Screen.tsx';

const Tab = createBottomTabNavigator();

const BottomTabs = () => {
  return (
    <Tab.Navigator initialRouteName={'HomeScreen'}>
      <Tab.Screen name="HomeScreen" component={HomeScreen} />
      <Tab.Screen name="Profile" component={Animation101Screen} />
    </Tab.Navigator>
  );
};

export default BottomTabs;
