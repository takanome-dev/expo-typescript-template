import React from 'react';
import { ActivityIndicator, Image, View } from 'react-native';

import colors from '~/src/theme/colors';
import { DIMENSIONS } from '~/src/utils/constants';

function Splash() {
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: colors.primary,
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <Image
        resizeMode="contain"
        source={require('../../assets/images/logo-lg.png')}
        style={{
          width: DIMENSIONS.width * 0.4,
          height: DIMENSIONS.width * 0.4,
        }}
      />
      <ActivityIndicator
        color={colors.white}
        size="large"
        style={{ marginTop: 50 }}
      />
    </View>
  );
}

export default Splash;
