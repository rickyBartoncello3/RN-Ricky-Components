import 'react-native-gesture-handler';

import {RootNavigator} from './app/navigation/RootNavigator.tsx';
import {ThemeProvider} from './r.presentation/context/ThemeContext.tsx';
import {PaperProvider} from 'react-native-paper';

export const ComponentsApp = () => {
  return (
    <ThemeProvider>
      <PaperProvider>
        <RootNavigator />
      </PaperProvider>
    </ThemeProvider>
  );
};
