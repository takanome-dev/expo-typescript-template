import {
  type StackNavigationOptions,
  createStackNavigator,
} from '@react-navigation/stack';

import HeaderLeft from '~/src/navigation/stacks/header-icon';
import Activities from '~/src/screens/activities';
import ActivityDetails from '~/src/screens/activity-details';
import News from '~/src/screens/news';
import NewsDetails from '~/src/screens/news-details';
import Notifications from '~/src/screens/notifications';
import colors from '~/src/theme/colors';

const ActivitiesStack = createStackNavigator<ActivitiesStackNavigationParams>();

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

export const ActivityNavigator = () => (
  <ActivitiesStack.Navigator
    initialRouteName="Activities"
    screenOptions={{
      headerStyle: { backgroundColor: colors.slate[500] },
      headerTintColor: colors.common.white,
      headerTitleStyle: { fontSize: 18 },
    }}
  >
    <ActivitiesStack.Screen
      name="Activities"
      component={Activities}
      options={({ navigation }) => ({
        title: 'News',
        headerLeft: () => renderHeaderLeft('bars', colors.common.white),
        headerRight: () =>
          renderHeaderRight('bell', colors.common.white, () =>
            console.log('bell pressed')
          ),
      })}
    />
    <ActivitiesStack.Screen
      name="ActivitiesDetails"
      component={ActivityDetails}
    />
    {/* <ActivitiesStack.Screen
      name="Notifications"
      component={Notifications}
      options={() => ({
        title: 'Notifications',
        headerTitleStyle: { color: colors.common.white },
        headerStyle: { backgroundColor: colors.slate[500] },
      })}
    /> */}
  </ActivitiesStack.Navigator>
);
