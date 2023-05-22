import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { View, ScrollView } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { Button } from '~/src/components/ui/button';
import { Text } from '~/src/components/ui/text';

const ActivityDetails = () => {
  const insets = useSafeAreaInsets();
  return (
    <>
      <ScrollView
        style={{
          marginTop: insets.top + 50,
          paddingHorizontal: 20,
        }}
      >
        <View style={{ flexDirection: 'row', marginVertical: 20 }}>
          <Text variant="bold" style={{ fontSize: 20, marginBottom: 5 }}>
            Activity Details
          </Text>
        </View>
        <Button
          title="Whatever"
          containerStyle={{ width: '100%', marginVertical: 30 }}
        />
      </ScrollView>
      <StatusBar style="dark" />
    </>
  );
};

export default ActivityDetails;
