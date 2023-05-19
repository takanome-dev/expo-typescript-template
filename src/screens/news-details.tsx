import React, { useEffect } from 'react';
import { Image, View, ScrollView } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { Text } from '~/src/components/ui/text';
import colors from '~/src/theme/colors';
import { type NewsNavigationScreenProps } from '~/src/types';

const NewsDetails = ({
  navigation,
  route,
}: NewsNavigationScreenProps<'NewsDetails'>) => {
  const insets = useSafeAreaInsets();
  const { news } = route.params;

  useEffect(() => {
    navigation.setOptions({
      title: news.title,
      headerTitleStyle: { fontSize: 16 },
    });
  }, []);

  return (
    <ScrollView
      style={{
        marginTop: insets.top,
        paddingHorizontal: 20,
        backgroundColor: colors.slate[100],
      }}
    >
      <View
        style={{
          width: '100%',
          height: 300,
          borderRadius: 10,
          overflow: 'hidden',
        }}
      >
        <Image
          resizeMode="cover"
          source={news.image}
          style={{ width: '100%', height: '100%' }}
        />
      </View>
      <View
        style={{
          marginTop: 20,
          backgroundColor: colors.white,
          paddingHorizontal: 10,
          paddingVertical: 20,
          borderRadius: 10,
        }}
      >
        <Text variant="bold" style={{ fontSize: 18, marginBottom: 10 }}>
          {news.title}
        </Text>
        <Text style={{ fontSize: 12 }}>{news.description}</Text>
      </View>
    </ScrollView>
  );
};

export default NewsDetails;
