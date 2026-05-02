import {Text, View} from 'react-native';
import {CustomView} from '../../../shared/components/ui/CustomView';
import {Title} from '../../../shared/components/ui/Title';
import {Button} from '../../../shared/components/ui/Button';
import {useContext} from 'react';
import {ThemeContext} from '../../context/ThemeContext';
import {darkTheme, lightTheme} from '../../../shared/theme/theme.tsx';

export const ChangeThemeScreen = () => {
  const {setTheme, currentTheme, colors} = useContext(ThemeContext);

  return (
    <CustomView margin>
      <Title text={`Cambiar tema: ${currentTheme}`} safe />

      <Button text="Light" onPress={() => setTheme(lightTheme)} />

      <View style={{height: 10}} />

      <Button text="Dark" onPress={() => setTheme(darkTheme)} />

      <View style={{height: 10}} />

      <Text style={{color: colors.text}}>
        {JSON.stringify(colors, null, 2)}
      </Text>
    </CustomView>
  );
};
