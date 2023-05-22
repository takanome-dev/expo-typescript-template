import React from 'react';
import { ActivityIndicator, Image, View } from 'react-native';

import { Text } from '~/src/components/ui/text';
import colors from '~/src/theme/colors';
import { DIMENSIONS } from '~/src/utils/constants';

function Splash() {
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: colors.slate[500],
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <Text>LOGO</Text>
      <ActivityIndicator
        color={colors.common.white}
        size="large"
        style={{ marginTop: 50 }}
      />
    </View>
  );
}

export default Splash;
