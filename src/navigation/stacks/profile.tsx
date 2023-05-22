import {
  type StackNavigationOptions,
  createStackNavigator,
} from '@react-navigation/stack';

import HeaderLeft from '~/src/navigation/stacks/header-icon';
import News from '~/src/screens/news';
import NewsDetails from '~/src/screens/news-details';
import Notifications from '~/src/screens/notifications';
import Profile from '~/src/screens/profile';
import colors from '~/src/theme/colors';

const ProfileStack = createStackNavigator<ProfileStackNavigationParams>();

const renderHeaderLeft = (
  icon: string,
  color: string,
  onPress?: () => void
) => (
  <HeaderLeft
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
  onPress?: () => void
) => (
  <HeaderLeft
    icon={icon}
    color={color}
    style={{
      marginRight: 20,
    }}
    onPress={onPress}
  />
);

export const ProfileNavigator = () => (
  <ProfileStack.Navigator
    initialRouteName="Profile"
    screenOptions={{
      // ...navigationProps,
      headerStyle: { backgroundColor: colors.slate[500] },
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
  </ProfileStack.Navigator>
);
