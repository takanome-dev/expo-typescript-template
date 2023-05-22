import {
  type StackNavigationOptions,
  createStackNavigator,
} from '@react-navigation/stack';
import React from 'react';
import { View } from 'react-native';

import HeaderIcon from '~/navigation/stacks/header-icon';
import ActivityDetails from '~/screens/activity-details';
import Home from '~/screens/home';
import { Intro } from '~/screens/intro';
import News from '~/screens/news';
import NewsDetails from '~/screens/news-details';
import Notifications from '~/screens/notifications';
// import Profile from '~/screens/profile';
// import Security from '~/screens/security';
import SignUp from '~/screens/signup';
import Settings from '~/src/screens/activities';
import Login from '~/src/screens/login';
import colors from '~/theme/colors';

// const HomeStack = createStackNavigator<HomeStackNavigationParams>();

const navigationProps: StackNavigationOptions = {
  headerTintColor: colors.common.white,
  headerStyle: { backgroundColor: colors.slate[500] },
  headerTitleStyle: { fontSize: 18 },
};

const StackNavigator = createStackNavigator<AuthNavigationParams>();

export function AuthNavigation() {
  return (
    <StackNavigator.Navigator
      initialRouteName="Intro"
      screenOptions={{
        // ...screenOptions,
        headerShown: false,
        headerMode: 'screen',
      }}
    >
      <StackNavigator.Screen name="Intro" component={Intro} />
      <StackNavigator.Screen name="Signup" component={SignUp} />
      <StackNavigator.Screen name="Login" component={Login} />
    </StackNavigator.Navigator>
  );
}
