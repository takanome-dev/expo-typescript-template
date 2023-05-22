import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React from 'react';

import TabBar from '~/navigation/tabs/tab-bar';
import { ActivityNavigator } from '~/src/navigation/stacks/activities';
import { NewsNavigator } from '~/src/navigation/stacks/news';
import { ProfileNavigator } from '~/src/navigation/stacks/profile';
import Home from '~/src/screens/home';
import colors from '~/src/theme/colors';

const Tab = createBottomTabNavigator<BottomTabNavigationParamList>();

const TabNavigator = () => (
  <Tab.Navigator
    tabBar={(props) => <TabBar {...props} />}
    screenOptions={() => ({
      unmountOnBlur: true,
      headerTintColor: colors.common.white,
      headerStyle: { backgroundColor: colors.slate[500] },
      headerTitleStyle: { fontSize: 18 },
    })}
    initialRouteName="Home"
  >
    <Tab.Screen
      name="Home"
      component={Home}
      options={() => ({
        tabBarLabel: 'Home',
        tabBarIcon: {
          name: 'home',
        } as any,
        headerShown: false,
      })}
    />
    <Tab.Screen
      name="NewsStack"
      component={NewsNavigator}
      options={{
        tabBarLabel: 'News',
        tabBarIcon: {
          name: 'newspaper',
        } as any,
        headerShown: false,
      }}
    />
    <Tab.Screen
      name="ActivitiesStack"
      component={ActivityNavigator}
      options={{
        title: 'Activities',
        tabBarLabel: 'Activities',
        tabBarIcon: {
          name: 'calendar',
        } as any,
        headerStyle: { backgroundColor: colors.slate[500] },
        headerTintColor: colors.common.white,
        headerTitleStyle: { fontSize: 18 },
        headerShown: false,
      }}
    />
    <Tab.Screen
      name="ProfileStack"
      component={ProfileNavigator}
      options={{
        tabBarLabel: 'Profile',
        tabBarIcon: { name: 'account' } as any,
        headerShown: false,
      }}
    />
  </Tab.Navigator>
);

export default TabNavigator;
