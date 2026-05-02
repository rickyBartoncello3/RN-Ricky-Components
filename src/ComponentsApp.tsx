import 'react-native-gesture-handler';

import {RootNavigator} from './app/navigation/RootNavigator.tsx';
import {ThemeProvider} from './r.presentation/context/ThemeContext.tsx';

export const ComponentsApp = () => {
  return (
    <ThemeProvider>
      <RootNavigator />
    </ThemeProvider>
  );
};
