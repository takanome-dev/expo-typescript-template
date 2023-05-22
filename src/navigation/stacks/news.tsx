import {
  type StackNavigationOptions,
  createStackNavigator,
} from '@react-navigation/stack';

import HeaderLeft from '~/src/navigation/stacks/header-icon';
import News from '~/src/screens/news';
import NewsDetails from '~/src/screens/news-details';
import Notifications from '~/src/screens/notifications';
import colors from '~/src/theme/colors';

const NewsStack = createStackNavigator<NewsStackNavigationParams>();

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

export const NewsNavigator = () => (
  <NewsStack.Navigator
    initialRouteName="News"
    screenOptions={{
      headerStyle: { backgroundColor: colors.slate[500] },
      headerTintColor: colors.common.white,
      headerTitleStyle: { fontSize: 18 },
    }}
  >
    <NewsStack.Screen
      name="News"
      component={News}
      options={({ navigation }) => ({
        title: 'News',
        headerLeft: () => renderHeaderLeft('bars', colors.common.white),
        headerRight: () =>
          renderHeaderRight('bell', colors.common.white, () =>
            console.log('bell pressed')
          ),
      })}
    />
    <NewsStack.Screen name="NewsDetails" component={NewsDetails} />
    <NewsStack.Screen
      name="Notifications"
      component={Notifications}
      options={() => ({
        title: 'Notifications',
        headerTitleStyle: { color: colors.common.white },
        headerStyle: { backgroundColor: colors.slate[500] },
      })}
    />
  </NewsStack.Navigator>
);
