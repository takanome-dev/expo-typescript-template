/* eslint-disable @typescript-eslint/no-use-before-define */
import { Image } from '@rneui/base'
import React, { useEffect, useRef, useState } from 'react'
import { Animated, ScrollView, View, Linking, StyleSheet, type ViewStyle } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { RFValue } from 'react-native-responsive-fontsize'
import FontIcon from 'react-native-vector-icons/FontAwesome5'

import { Text } from '~/src/components/ui/text'
import Login from '~/screens/login'
import theme from '~/src/theme'
// import { type AuthNavigationScreenProps } from '~/src/types';
import { DIMENSIONS } from '~/src/utils/constants'

function Icon({ name, styles }: { name: string; styles?: ViewStyle }) {
  return (
    <View
      style={[
        {
          flexDirection: 'row',
          width: 40,
          height: 40,
          borderRadius: 20,
          borderColor: theme.colors.common.white,
          borderWidth: 1,
          justifyContent: 'center',
          alignItems: 'center',
        },
        styles,
      ]}
    >
      <FontIcon name={name} size={18} color={theme.colors.common.white} />
    </View>
  )
}

function PageContainer({ children, index }: { children: React.ReactNode; index: number }) {
  return (
    <View
      key={index}
      style={{
        width: DIMENSIONS.width,
        height: DIMENSIONS.height,
        backgroundColor: theme.colors.common.primary,
      }}
    >
      <View
        style={{
          height: DIMENSIONS.height - 140,
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        {children}
      </View>
      <View
        style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
          paddingBottom: 40,
        }}
      >
        <FontIcon name="share-alt" size={20} color={theme.colors.common.white} />
        <View style={{ flexDirection: 'row', marginVertical: 10 }}>
          <TouchableOpacity onPress={() => Linking.openURL('https://facebook.com')}>
            <Icon name="facebook-f" styles={styles.socialIcon} />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => Linking.openURL('https://twitter.com')}>
            <Icon name="twitter" styles={styles.socialIcon} />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => Linking.openURL('https://instagram.com')}>
            <Icon name="instagram" styles={styles.socialIcon} />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => Linking.openURL('https://linkedin.com')}>
            <Icon name="linkedin" styles={styles.socialIcon} />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => Linking.openURL('https://linkedin.com')}>
            <Icon name="youtube" styles={styles.socialIcon} />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => Linking.openURL('https://tiktok.com')}>
            <Icon name="tiktok" styles={styles.socialIcon} />
          </TouchableOpacity>
        </View>
        <Text style={{ color: theme.colors.common.white }}>@Karamtheapp</Text>
      </View>
    </View>
  )
}

function Page1({ index }: { index: number }) {
  return (
    <PageContainer index={index}>
      <Image
        resizeMode="contain"
        source={require('../../assets/images/logo-lg.png')}
        style={{
          width: DIMENSIONS.width * 0.5,
          height: DIMENSIONS.width * 0.5,
        }}
      />
      <Text
        variant="normal"
        style={{
          textAlign: 'center',
          marginTop: 20,
          fontSize: RFValue(35, DIMENSIONS.height),
          paddingHorizontal: 10,
          color: theme.colors.common.white,
          width: 200,
        }}
      >
        Welcome to Karam
      </Text>
    </PageContainer>
  )
}

function Page2({ index }: { index: number }) {
  return (
    <PageContainer index={index}>
      <Image
        resizeMode="contain"
        source={require('../../assets/images/intro.png')}
        style={{
          width: DIMENSIONS.width * 0.8,
          height: DIMENSIONS.width * 0.8,
        }}
      />
      <View style={{ paddingHorizontal: 20, marginTop: 20 }}>
        <Text
          variant="normal"
          style={{
            textAlign: 'center',
            fontSize: RFValue(40, DIMENSIONS.height),
            color: theme.colors.common.white,
            marginBottom: 20,
          }}
        >
          Charity
        </Text>
        <Text
          style={{
            textAlign: 'center',
            marginTop: 10,
            fontSize: RFValue(16, DIMENSIONS.height),
            paddingHorizontal: 20,
            color: theme.colors.common.white,
          }}
        >
          Karam est une application qui permet de générer des fonds pour optimiser le travail de
          l’Association Maghreb Secours ( AMS).
        </Text>
      </View>
    </PageContainer>
  )
}

export function Intro({ navigation, route }: AuthNavigationScreenProps<'Intro'>) {
  const [index, setIndex] = useState(0)
  const btnOpacity = useRef(new Animated.Value(0)).current
  useEffect(() => {
    Animated.timing(btnOpacity, {
      useNativeDriver: false,
      toValue: index >= 2 ? 1 : 0,
      duration: 400,
    }).start()
  }, [index])

  return (
    <View style={{ flex: 1 }}>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        pagingEnabled
        bounces={false}
        onScroll={(e) => {
          setIndex(Math.ceil(e.nativeEvent.contentOffset.x / DIMENSIONS.width))
        }}
        scrollEventThrottle={16}
      >
        <Page1 index={0} />
        <Page2 index={1} />
        <Login navigation={navigation} route={route} />
      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
  socialIcon: {
    width: 30,
    height: 30,
    marginLeft: 5,
  },
})
