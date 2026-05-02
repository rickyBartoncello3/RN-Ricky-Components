import {PropsWithChildren, useContext} from 'react';

import {StyleProp, ViewStyle} from 'react-native';
import {View} from 'react-native';
import {ThemeContext} from '../../../r.presentation/context/ThemeContext.tsx';

interface Props extends PropsWithChildren {
  style?: StyleProp<ViewStyle>;
}

export const Card = ({style, children}: Props) => {
  const {colors} = useContext(ThemeContext);

  return (
    <View
      style={[
        {
          backgroundColor: colors.cardBackground,
          borderRadius: 10,
          padding: 10,
        },
        style,
      ]}>
      {children}
    </View>
  );
};
