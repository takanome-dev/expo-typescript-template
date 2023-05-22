import React, { useEffect, useRef, useState } from 'react';
import { Animated, ScrollView, View } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';

import ExpoIcon from '~/assets/icons/client.svg';
import { Button } from '~/src/components/ui/button';
import { Text } from '~/src/components/ui/text';
import theme from '~/src/theme';
import colors from '~/src/theme/colors';
import { DIMENSIONS } from '~/src/utils/constants';


function PageContainer({
  children,
  index,
}: {
  children: React.ReactNode;
  index: number;
}) {
  return (
    <View
      key={index}
      style={{
        flex: 1,
        width: DIMENSIONS.width,
        height: DIMENSIONS.height,
        backgroundColor: theme.colors.slate[100],
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <View style={{ marginTop: -50 }}>
        <ExpoIcon width={100} height={100} />
      </View>
      <View
        style={{
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        {children}
      </View>
    </View>
  );
}

function Page1({ index }: { index: number }) {
  return (
    <PageContainer index={index}>
      <View style={{ paddingHorizontal: 20, marginTop: 20 }}>
        <Text
          variant="bold"
          style={{
            textAlign: 'center',
            fontSize: RFValue(30, DIMENSIONS.height),
            color: theme.colors.slate[600],
            marginBottom: 20,
            textTransform: 'uppercase',
            lineHeight: 50,
          }}
        >
          Welcome to Expo the TS Template
        </Text>
      </View>
    </PageContainer>
  );
}

function Page2({
  index,
  handleNavigate,
}: {
  index: number;
  handleNavigate: (path: keyof AuthNavigationParams) => void;
}) {
  return (
    <PageContainer index={index}>
      <View
        style={{
          paddingHorizontal: 20,
          marginTop: 20,
          // borderWidth: 1,
          // borderColor: 'red',
        }}
      >
        <Text
          style={{
            textAlign: 'center',
            marginTop: 10,
            fontSize: RFValue(20, DIMENSIONS.height),
            lineHeight: 30,
            paddingHorizontal: 20,
            color: theme.colors.slate[600],
          }}
        >
          This is a basic template for Expo with TypeScript, React Navigation v5
          and React Native Elements.
        </Text>
        <View
          style={{
            flexDirection: 'row',
            marginTop: 20,
            paddingHorizontal: 10,
          }}
        >
          <Button
            title="Login"
            containerStyle={{
              width: '50%',
              marginRight: 10,
            }}
            buttonStyle={{ backgroundColor: colors.slate[500] }}
            onPress={() => handleNavigate('Login')}
          />
          <Button
            title="Signup"
            containerStyle={{ width: '50%', marginRight: 10 }}
            buttonStyle={{
              backgroundColor: colors.common.white,
              borderWidth: 1,
              borderColor: colors.slate[300],
            }}
            titleStyle={{ color: colors.slate[500] }}
            onPress={() => handleNavigate('Signup')}
          />
        </View>
      </View>
    </PageContainer>
  );
}

export function Intro({ navigation }: AuthNavigationScreenProps<'Intro'>) {
  const [index, setIndex] = useState(0);
  const btnOpacity = useRef(new Animated.Value(0)).current;
  useEffect(() => {
    Animated.timing(btnOpacity, {
      useNativeDriver: false,
      toValue: index >= 2 ? 1 : 0,
      duration: 400,
    }).start();
  }, [index]);

  return (
    <View style={{ flex: 1 }}>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        pagingEnabled
        bounces={false}
        onScroll={(e) => {
          setIndex(Math.ceil(e.nativeEvent.contentOffset.x / DIMENSIONS.width));
        }}
        scrollEventThrottle={16}
      >
        <Page1 index={0} />
        <Page2 index={1} handleNavigate={(path) => navigation.navigate(path)} />
        {/* <Login navigation={navigation} route={route} /> */}
      </ScrollView>
    </View>
  );
}
