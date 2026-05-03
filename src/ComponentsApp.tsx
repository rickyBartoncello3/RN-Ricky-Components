import 'react-native-gesture-handler';

import {RootNavigator} from './app/navigation/RootNavigator.tsx';
import {ThemeProvider} from './r.presentation/context/ThemeContext.tsx';
import {PaperProvider} from 'react-native-paper';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import {BottomSheetModalProvider} from '@gorhom/bottom-sheet';

export const ComponentsApp = () => {
  return (
    <GestureHandlerRootView>
      <ThemeProvider>
        <PaperProvider>
          <BottomSheetModalProvider>
            <RootNavigator />
          </BottomSheetModalProvider>
        </PaperProvider>
      </ThemeProvider>
    </GestureHandlerRootView>
  );
};
