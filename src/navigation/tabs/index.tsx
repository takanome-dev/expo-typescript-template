import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React from 'react';
import FontIcon from '@expo/vector-icons/FontAwesome5';

import {
  HomeNavigator,
  NewsNavigator,
  ProfileNavigator,
  SettingsNavigator,
} from '~/navigator/stacks';
import TabBar from '~/navigator/tabs/tab-bar';
import colors from '~/src/theme/colors';
import { type BottomTabNavigationParamList } from '~/src/types';

const Tab = createBottomTabNavigator<BottomTabNavigationParamList>();

const TabNavigator = () => (
  <Tab.Navigator
    // tabBar={(props) => <TabBar {...props} />}
    screenOptions={() => ({
      unmountOnBlur: true,
      headerTintColor: colors.white,
      headerStyle: { backgroundColor: colors.slate[500] },
      headerTitleStyle: { fontSize: 18 },
      tabBarIcon: ({ color, size }) => {
        let iconName: keyof typeof Feather.glyphMap

        if (route.name === 'HomeStack') {
          iconName = 'home'
        } else if (route.name === 'ExamplesStack') {
          iconName = 'list'
        } else {
          iconName = 'alert-triangle'
        }

        // You can return any component that you like here!
        return <FontIcon name={iconName} size={size} color={color} />
      },
    })}
    initialRouteName="HomeStack"
  >
    <Tab.Screen
      name="HomeStack"
      component={HomeNavigator}
      options={() => ({
        title: '',
        tabBarIcon: require('../../../assets/icons/home.png'),
        tabBarLabel: 'Home',
        headerShown: false,
      })}
    />
    <Tab.Screen
      name="NewsStack"
      component={NewsNavigator}
      options={{
        tabBarLabel: 'News',
        headerShown: false,
      }}
    />
    <Tab.Screen
      name="SettingsStack"
      component={SettingsNavigator}
      options={{
        title: 'Settings',
        tabBarLabel: 'Settings',
        headerStyle: { backgroundColor: colors.primary },
        headerTintColor: colors.white,
        headerTitleStyle: { fontSize: 18 },
        headerShown: false,
      }}
    />
    <Tab.Screen
      name="ProfileStack"
      component={ProfileNavigator}
      options={{
        tabBarIcon: require('../../../assets/icons/profile.png'),
        tabBarLabel: 'Profile',
        headerShown: false,
      }}
    />
  </Tab.Navigator>
);

export default TabNavigator;
