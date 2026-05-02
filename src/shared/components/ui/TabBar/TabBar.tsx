import React, {useContext} from 'react';
import {View} from 'react-native';
import styles from './TabBar.styles.ts';
import {BottomTabBarProps} from '@react-navigation/bottom-tabs';
import TabBarButton from '../TabBarButton/TabBarButton.tsx';
import {TabBarIcon} from '../TabBarIcon/TabBarIcon.tsx';
import {ThemeContext} from '../../../../r.presentation/context/ThemeContext.tsx';
import Routes from '../../../../app/navigation/routes.ts';
import TabBarAddButton from '../TabBarAddButton/TabBarAddButton.tsx';

const TabBar = ({state, descriptors, navigation}: BottomTabBarProps) => {
  const {currentTheme} = useContext(ThemeContext);

  return (
    <View
      style={[
        styles.root,
        {backgroundColor: currentTheme.colors.cardBackground},
      ]}>
      {state.routes.map((route, index) => {
        const {options} = descriptors[route.key];
        const label =
          options.tabBarLabel !== undefined
            ? options.tabBarLabel
            : options.title !== undefined
            ? options.title
            : route.name;

        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
            canPreventDefault: true,
          });

          if (
            !isFocused &&
            !event.defaultPrevented &&
            route.name !== Routes.ADD
          ) {
            navigation.navigate(route.name, route.params);
          }
        };

        const onLongPress = () => {
          navigation.emit({
            type: 'tabLongPress',
            target: route.key,
          });
        };

        return route.name === Routes.ADD ? (
          <TabBarAddButton isFocused={isFocused} children={undefined} />
        ) : (
          <TabBarButton
            key={route.key}
            title={label}
            renderIcon={({color, strokeWidth}) => (
              <TabBarIcon
                name={String(label).toLowerCase()}
                color={color}
                strokeWidth={strokeWidth}
              />
            )}
            accessibilityState={isFocused ? {selected: true} : {}}
            accessibilityLabel={options.tabBarAccessibilityLabel}
            testID={options.tabBarTestID}
            onPress={onPress}
            onLongPress={onLongPress}
            children={undefined}
            isFocused={isFocused}
          />
        );
      })}
    </View>
  );
};

export default TabBar;

/*


*
* */
