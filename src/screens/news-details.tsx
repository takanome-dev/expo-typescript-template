import React from 'react';
import { View, ScrollView } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { Text } from '~/src/components/ui/text';
import colors from '~/src/theme/colors';

const NewsDetails = () => {
  const insets = useSafeAreaInsets();

  return (
    <ScrollView
      style={{
        marginTop: insets.top,
        paddingHorizontal: 20,
      }}
    >
      <View
        style={{
          marginTop: 20,
          backgroundColor: colors.common.white,
          paddingHorizontal: 10,
          paddingVertical: 20,
          borderRadius: 10,
        }}
      >
        <Text variant="bold" style={{ fontSize: 18, marginBottom: 10 }}>
          News Title
        </Text>
        <Text style={{ fontSize: 12 }}>News Desc</Text>
      </View>
    </ScrollView>
  );
};

export default NewsDetails;
