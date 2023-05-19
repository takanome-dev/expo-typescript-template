import React from 'react'
import { ImageBackground, View, Image } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { RFValue } from 'react-native-responsive-fontsize'

import { Button } from '~/src/components/ui/button'
import { Input } from '~/src/components/ui/input'
import { Text } from '~/src/components/ui/text'
import { authenticate } from '~/src/redux/slices/app.slice'
import colors from '~/src/theme/colors'
import { DIMENSIONS } from '~/src/utils/constants'
import { useAppDispatch } from '~/src/redux/root'

import { type AuthNavigationScreenProps } from '../types'

const SignUp = ({ navigation }: AuthNavigationScreenProps<'Intro'>) => {
  const dispatch = useAppDispatch()

  return (
    <View
      style={{
        flex: 1,
      }}
    >
      <View
        style={{
          flex: 1,
          width: DIMENSIONS.width,
          height: DIMENSIONS.width - 120,
          position: 'relative',
        }}
      >
        <ImageBackground
          resizeMode="cover"
          source={require('../../assets/images/help-bg-1.jpg')}
          style={{
            flex: 1,
            width: '100%',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <View
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              width: '100%',
              height: '100%',
              backgroundColor: '#1f1f1f',
              opacity: 0.6,
              zIndex: 1,
            }}
          />
          <View style={{ zIndex: 2, width: DIMENSIONS.width * 0.8 }}>
            <View style={{ justifyContent: 'center', alignItems: 'center' }}>
              <Image
                resizeMode="contain"
                source={require('../../assets/images/logo-sm.png')}
                style={{
                  width: DIMENSIONS.width * 0.3,
                  height: DIMENSIONS.width * 0.3,
                }}
              />
            </View>
            <View
              style={{
                marginTop: 20,
              }}
            >
              <Input
                placeholder="Full name"
                placeholderTextColor={colors.white}
                containerStyle={{ marginTop: 20 }}
              />
              <Input
                placeholder="Username"
                placeholderTextColor={colors.white}
                containerStyle={{ marginTop: 20 }}
              />
              <Input
                placeholder="Email"
                placeholderTextColor={colors.white}
                containerStyle={{ marginTop: 20 }}
              />
              <Input
                placeholder="password"
                placeholderTextColor={colors.white}
                containerStyle={{ marginTop: 20 }}
              />
              <Button
                title="S'inscrire"
                buttonStyle={{
                  backgroundColor: colors.white,
                }}
                containerStyle={{
                  marginTop: 30,
                  width: '100%',
                }}
                titleStyle={{ color: colors.slate[800] }}
                onPress={() => dispatch(authenticate({ loggedIn: true }))}
              />
            </View>
          </View>
        </ImageBackground>
      </View>
      <View
        style={{
          paddingVertical: 20,
          // marginTop: 20,
          backgroundColor: colors.white,
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <View
          style={{
            flexDirection: 'row',
            marginVertical: 10,
            alignItems: 'center',
          }}
        >
          <Text
            style={{
              // fontSize: RFValue(20, DIMENSIONS.height),
              color: colors.slate[800],
            }}
          >
            Already have Karam account?
          </Text>
          <TouchableOpacity onPress={() => navigation.navigate('Intro')}>
            <Text
              style={{
                fontSize: RFValue(16, DIMENSIONS.height),
                color: colors.primary,
                textDecorationLine: 'underline',
                marginLeft: 10,
              }}
            >
              Sign in
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  )
}

export default SignUp
