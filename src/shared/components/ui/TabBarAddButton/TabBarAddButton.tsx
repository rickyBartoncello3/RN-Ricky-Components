import React, {FC, useContext} from 'react';
import {TouchableOpacity, View, TouchableOpacityProps} from 'react-native';
import styles from './TabBarAddButton.styles.ts';
import {TabBarButtonProps} from './interfaces';
import {ThemeContext} from '../../../../r.presentation/context/ThemeContext.tsx';
import {AddCircleIcon} from '../../../assets/icons';

const TabBarAddButton: FC<TabBarButtonProps & TouchableOpacityProps> = ({
  isFocused,
  ...props
}) => {
  const {currentTheme} = useContext(ThemeContext);

  return (
    <TouchableOpacity {...props} style={styles.root}>
      <View
        style={[
          styles.container,
          {backgroundColor: currentTheme.colors.background},
        ]}>
        <AddCircleIcon
          color={'white'}
          width={60}
          height={60}
          fill={currentTheme.colors.primary}
        />
      </View>
    </TouchableOpacity>
  );
};

export default TabBarAddButton;
