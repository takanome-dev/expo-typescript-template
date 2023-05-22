import * as SplashScreen from 'expo-splash-screen';
import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect } from 'react';
import { View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Provider } from 'react-redux';

import Splash from '~/components/splash';
import Navigator from '~/navigation/navigator';
import store from '~/src/redux/root';
import colors from '~/theme/colors';
import { fontAssets } from '~/theme/fonts';
// import { imageAssets } from '~/theme/images'
import '~/utils/ignore';

SplashScreen.preventAutoHideAsync();

const App = () => {
  const [appIsReady, setAppIsReady] = useState(false);

  const handleLoadAssets = async () => {
    try {
      // await Promise.all([...imageAssets, ...fontAssets])
      await Promise.all([...fontAssets]);
    } catch (e) {
      console.warn(e);
    } finally {
      setAppIsReady(true);
      await SplashScreen.hideAsync();
    }
  };

  useEffect(() => {
    handleLoadAssets();
  }, []);

  if (!appIsReady) return <Splash />;

  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: colors.slate[100],
      }}
    >
      <Provider store={store}>
        <Navigator />
      </Provider>
      <StatusBar style="dark" />
    </SafeAreaView>
  );
};

export default App;
