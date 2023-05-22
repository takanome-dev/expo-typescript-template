import React from 'react';
import { View, ScrollView } from 'react-native';

import { Text } from '~/src/components/ui/text';
import colors from '~/theme/colors';

const Home = () => (
  <ScrollView
    contentContainerStyle={{
      flex: 1,
      backgroundColor: colors.slate[100],
      justifyContent: 'center',
      alignItems: 'center',
    }}
  >
    <View
      style={{
        paddingHorizontal: 20,
        marginTop: 20,
      }}
    >
      <Text variant="bold">HOME PAGE</Text>
    </View>
  </ScrollView>
);

export default Home;
