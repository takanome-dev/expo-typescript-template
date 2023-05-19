import {
  type StackNavigationOptions,
  createStackNavigator,
} from '@react-navigation/stack';
import React from 'react';
import { View } from 'react-native';

import Home from '~/pages/home';
import SignUp from '~/pages/signup';
import HeaderIcon from '~/src/navigator/stacks/header-icon';
import ActivityDetails from '~/src/pages/activity-details';
import ConfirmDonation from '~/src/pages/confirm-donation';
import Donation from '~/src/pages/donation';
import EditPassword from '~/src/pages/edit-password';
import EditUserInfos from '~/src/pages/edit-user-infos';
import Filters from '~/src/pages/filters';
import { Intro } from '~/src/pages/intro';
import News from '~/src/pages/news';
import NewsDetails from '~/src/pages/news-details';
import Notifications from '~/src/pages/notifications';
import Profile from '~/src/pages/profile';
import Security from '~/src/pages/security';
import Settings from '~/src/pages/settings';
import UserInfos from '~/src/pages/user-infos';
import {
  type HomeNavigationScreenProps,
  type AuthNavigationParams,
  type HomeStackNavigationParams,
  type NewsStackNavigationParams,
  type ProfileStackNavigationParams,
  type SettingsStackNavigationParams,
} from '~/src/types';
import colors from '~/theme/colors';

const HomeStack = createStackNavigator<HomeStackNavigationParams>();
const ProfileStack = createStackNavigator<ProfileStackNavigationParams>();
const NewsStack = createStackNavigator<NewsStackNavigationParams>();
const SettingsStack = createStackNavigator<SettingsStackNavigationParams>();

const navigationProps: StackNavigationOptions = {
  headerTintColor: colors.white,
  headerStyle: { backgroundColor: colors.slate[500] },
  headerTitleStyle: { fontSize: 18 },
};

interface ActivityDetailOptionsProps {
  navigation: HomeNavigationScreenProps<'ActivityDetails'>['navigation'];
  route: {
    params?: {
      title: string;
    };
  };
}
// interface NewsOptionsProps {
//   navigation: HomeNavigationScreenProps<'ActivityDetails'>['navigation'];
//   route: {
//     params?: {
//       title: string;
//     };
//   };
// }

const renderHeaderLeft = (
  icon: string,
  color: string,
  onPress?: () => void,
) => (
  <HeaderIcon
    icon={icon}
    color={color}
    style={{
      marginLeft: 20,
    }}
    onPress={onPress}
  />
);

const renderHeaderRight = (
  icon: string,
  color: string,
  onPress?: () => void,
) => (
  <HeaderIcon
    icon={icon}
    color={color}
    style={{
      marginRight: 20,
    }}
    onPress={onPress}
  />
);

export const HomeNavigator = () => (
  <HomeStack.Navigator initialRouteName="Home" screenOptions={navigationProps}>
    <HomeStack.Screen
      name="Home"
      component={Home}
      options={({ navigation }: ActivityDetailOptionsProps) => ({
        title: '',
        headerLeft: () => renderHeaderLeft('bars', colors.white),
        headerRight: () =>
          renderHeaderRight('bell', colors.white, () =>
            navigation.navigate('Notifications'),
          ),
        headerTransparent: true,
      })}
    />
    <HomeStack.Screen
      name="ActivityDetails"
      component={ActivityDetails}
      options={({ navigation }: ActivityDetailOptionsProps) => ({
        title: 'Activity Details',
        headerTitleStyle: { color: colors.slate[600] },
        headerLeft: () =>
          renderHeaderLeft('arrow-left', colors.slate[600], () =>
            navigation.goBack(),
          ),
        headerRight: () => renderHeaderRight('ellipsis-v', colors.slate[600]),
        headerTransparent: true,
      })}
    />
    <HomeStack.Screen
      name="Donation"
      component={Donation}
      options={({ navigation }: ActivityDetailOptionsProps) => ({
        title: 'Donation',
        headerStyle: { backgroundColor: colors.primary },
      })}
    />
    <HomeStack.Screen
      name="ConfirmDonation"
      component={ConfirmDonation}
      options={() => ({
        title: 'Confirm Donation',
        headerStyle: { backgroundColor: colors.primary },
      })}
    />
    <HomeStack.Screen
      name="Filters"
      component={Filters}
      options={({ navigation }) => ({
        title: 'Home',
        headerTitleStyle: { color: colors.white },
        headerStyle: { backgroundColor: colors.primary },
        headerLeft: () => renderHeaderLeft('bars', colors.white),
        // eslint-disable-next-line react/no-unstable-nested-components
        headerRight: () => (
          <View style={{ flexDirection: 'row' }}>
            <HeaderIcon
              icon="bell"
              color={colors.white}
              style={{
                marginRight: 20,
              }}
              /* eslint-disable */
              onPress={() => navigation.navigate('Notifications')}
            />
            <HeaderIcon
              icon="user-circle"
              color={colors.white}
              style={{
                marginRight: 20,
              }}
              /* eslint-disable */
              onPress={() => navigation.navigate('Profile')}
            />
          </View>
        ),
      })}
    />
    <HomeStack.Screen
      name="Notifications"
      component={Notifications}
      options={() => ({
        title: 'Notifications',
        headerTitleStyle: { color: colors.white },
        headerStyle: { backgroundColor: colors.primary },
      })}
    />
  </HomeStack.Navigator>
);

export const NewsNavigator = () => (
  <NewsStack.Navigator
    initialRouteName="News"
    screenOptions={{
      headerStyle: { backgroundColor: colors.primary },
      headerTintColor: colors.white,
      headerTitleStyle: { fontSize: 18 },
    }}
  >
    <NewsStack.Screen
      name="News"
      component={News}
      options={({ navigation }: ActivityDetailOptionsProps) => ({
        title: 'News',
        headerLeft: () => renderHeaderLeft('bars', colors.white),
        headerRight: () =>
          renderHeaderRight('bell', colors.white, () =>
            navigation.navigate('Notifications'),
          ),
      })}
    />
    <NewsStack.Screen name="NewsDetails" component={NewsDetails} />
    <NewsStack.Screen
      name="Notifications"
      component={Notifications}
      options={() => ({
        title: 'Notifications',
        headerTitleStyle: { color: colors.white },
        headerStyle: { backgroundColor: colors.primary },
      })}
    />
  </NewsStack.Navigator>
);

export const ProfileNavigator = () => (
  <ProfileStack.Navigator
    initialRouteName="Profile"
    screenOptions={{
      ...navigationProps,
      headerStyle: { backgroundColor: colors.primary },
    }}
  >
    <ProfileStack.Screen
      name="Profile"
      component={Profile}
      options={() => ({
        title: '',
        headerTransparent: true,
      })}
    />
    <ProfileStack.Screen
      name="UserInfos"
      component={UserInfos}
      options={() => ({
        title: 'User Information',
      })}
    />
    <ProfileStack.Screen
      name="EditUserInfos"
      component={EditUserInfos}
      options={() => ({
        title: 'User Information',
      })}
    />
    <ProfileStack.Screen
      name="EditPassword"
      component={EditPassword}
      options={() => ({
        title: 'Edit Password',
      })}
    />
    <ProfileStack.Screen
      name="Security"
      component={Security}
      options={() => ({
        title: 'Security',
      })}
    />
  </ProfileStack.Navigator>
);

export const SettingsNavigator = () => (
  <SettingsStack.Navigator
    initialRouteName="Settings"
    screenOptions={{
      ...navigationProps,
      headerStyle: { backgroundColor: colors.primary },
    }}
  >
    <SettingsStack.Screen
      name="Settings"
      component={Settings}
      options={() => ({
        title: '',
        headerTransparent: true,
      })}
    />
    <SettingsStack.Screen
      name="Notifications"
      component={Notifications}
      options={() => ({
        title: 'Notifications',
      })}
    />
    {/* <SettingsStack.Screen
      name="EditUserInfos"
      component={EditUserInfos}
      options={() => ({
        title: 'User Information',
      })}
    />
    <SettingsStack.Screen
      name="EditPassword"
      component={EditPassword}
      options={() => ({
        title: 'Edit Password',
      })}
    /> */}
  </SettingsStack.Navigator>
);

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
    </StackNavigator.Navigator>
  );
}
