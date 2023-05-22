import { type StackScreenProps } from '@react-navigation/stack';

import type { BottomTabScreenProps } from '@react-navigation/bottom-tabs';
import type {
  CompositeScreenProps,
  NavigatorScreenParams,
} from '@react-navigation/native';

declare global {
  type BottomTabNavigationParamList = {
    Home: undefined;
    NewsStack: NavigatorScreenParams<NewsStackNavigationParams> | undefined;
    ActivitiesStack:
      | NavigatorScreenParams<ActivitiesStackNavigationParams>
      | undefined;
    ProfileStack:
      | NavigatorScreenParams<ProfileStackNavigationParams>
      | undefined;
  };

  type AuthNavigationParams = {
    Intro: undefined;
    Login: undefined;
    Signup: undefined;
  };

  type NewsStackNavigationParams = {
    News: undefined;
    NewsDetails: undefined;
    Notifications: undefined;
  };

  type ActivitiesStackNavigationParams = {
    Activities: undefined;
    ActivitiesDetails: undefined;
  };

  type ProfileStackNavigationParams = {
    Profile: undefined;
    Security: undefined;
  };

  type RootStackParamList = {
    Intro: undefined;
    Login: undefined;
    Signup: undefined;

    Home: undefined;
    NewsStack: NavigatorScreenParams<NewsStackNavigationParams> | undefined;
    ActivitiesStack:
      | NavigatorScreenParams<ActivitiesStackNavigationParams>
      | undefined;
    ProfileStack:
      | NavigatorScreenParams<ProfileStackNavigationParams>
      | undefined;
  };

  namespace ReactNavigation {
    // eslint-disable-next-line @typescript-eslint/no-empty-interface
    interface RootParamList extends RootStackParamList {}
  }

  type BottomTabNavigationScreenProps<
    Screen extends keyof BottomTabNavigationParamList
  > = BottomTabScreenProps<BottomTabNavigationParamList, Screen>;

  type AuthNavigationScreenProps<Screen extends keyof AuthNavigationParams> =
    StackScreenProps<AuthNavigationParams, Screen>;

  type NewsNavigationScreenProps<
    Screen extends keyof NewsStackNavigationParams
  > = CompositeScreenProps<
    BottomTabScreenProps<NewsStackNavigationParams, Screen>,
    BottomTabNavigationScreenProps<'NewsStack'>
  >;

  type ProfileNavigationScreenProps<
    Screen extends keyof ProfileStackNavigationParams
  > = CompositeScreenProps<
    BottomTabScreenProps<ProfileStackNavigationParams, Screen>,
    BottomTabNavigationScreenProps<'ProfileStack'>
  >;

  type ActivityNavigationScreenProps<
    Screen extends keyof ActivitiesStackNavigationParams
  > = CompositeScreenProps<
    BottomTabScreenProps<ActivitiesStackNavigationParams, Screen>,
    BottomTabNavigationScreenProps<'ActivitiesStack'>
  >;
}
