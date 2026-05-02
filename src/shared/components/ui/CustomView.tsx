import {StyleProp, View, ViewStyle} from 'react-native';
import {globalStyles} from '../../theme/theme.tsx';
import {ReactNode, useContext} from 'react';
import {ThemeContext} from '../../../r.presentation/context/ThemeContext.tsx';

interface Props {
  style?: StyleProp<ViewStyle>;
  children?: ReactNode;
  margin?: boolean;
}

export const CustomView = ({style, children, margin = false}: Props) => {
  const {colors} = useContext(ThemeContext);

  return (
    <View
      style={[
        globalStyles.mainContainer,
        margin ? globalStyles.globalMargin : null,
        {backgroundColor: colors.background},
        style,
      ]}>
      {children}
    </View>
  );
};
