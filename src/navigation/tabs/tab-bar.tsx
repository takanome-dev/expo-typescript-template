import { MaterialCommunityIcons as MCIcons } from '@expo/vector-icons';
import { type IconProps } from '@rneui/themed';
import React from 'react';
import { TouchableOpacity, View } from 'react-native';

import { Text } from '~/src/components/ui/text';
import colors from '~/src/theme/colors';

import type { BottomTabBarProps } from '@react-navigation/bottom-tabs';
import type { BottomTabDescriptor } from '@react-navigation/bottom-tabs/lib/typescript/src/types';

export default function TabBar({
  state,
  descriptors,
  navigation,
}: BottomTabBarProps) {
  const routes = [...state.routes];
  const activeColor = colors.slate[500];

  return (
    <View
      style={{
        backgroundColor: colors.common.white,
      }}
    >
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'center',
          minHeight: 55,
          width: '100%',
        }}
      >
        {routes.map((route, index) => {
          const { options } = descriptors[route.key] as BottomTabDescriptor;

          const isFocused = state.index === index;
          const onPress = () => {
            const event = navigation.emit({
              type: 'tabPress',
              target: route.key,
              canPreventDefault: true,
            });

            if (!isFocused && !event.defaultPrevented) {
              navigation.navigate(route.name);
            }
          };

          return (
            // eslint-disable-next-line react/no-array-index-key
            <View style={{ flex: 1 }} key={index}>
              <TouchableOpacity
                accessibilityRole="button"
                accessibilityLabel={options.tabBarAccessibilityLabel}
                testID={options.tabBarTestID}
                onPress={onPress}
                style={{
                  flex: 1,
                  justifyContent: 'center',
                  paddingVertical: 3,
                }}
              >
                {options.tabBarBadge}

                {options.tabBarIcon && (
                  <MCIcons
                    {...(options.tabBarIcon as IconProps)}
                    name={
                      options.tabBarIcon.name as keyof typeof MCIcons.glyphMap
                    }
                    color={isFocused ? activeColor : colors.slate[400]}
                    size={24}
                    style={{
                      alignSelf: 'center',
                    }}
                  />
                )}

                {options.tabBarBadge}
                <Text
                  variant="bold"
                  style={{
                    textAlign: 'center',
                    fontSize: 10,
                    color: isFocused ? activeColor : colors.slate[400],
                    marginTop: 2,
                  }}
                >
                  {options.tabBarLabel as string}
                </Text>
              </TouchableOpacity>
            </View>
          );
        })}
      </View>
    </View>
  );
}
