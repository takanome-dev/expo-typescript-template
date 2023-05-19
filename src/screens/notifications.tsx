import React from 'react';
import { View } from 'react-native';

import { Text } from '~/src/components/ui/text';
import colors from '~/src/theme/colors';

const Notifications = () => (
  <View
    style={{
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
    }}
  >
    <Text style={{ fontSize: 20, color: colors.slate[800] }}>
      Nothing to show here 🤷‍♀️
    </Text>
  </View>
);

export default Notifications;
