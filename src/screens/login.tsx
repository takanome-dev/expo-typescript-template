import { Image, ImageBackground, TouchableOpacity, View } from 'react-native'
import { RFValue } from 'react-native-responsive-fontsize'

import { Button } from '~/src/components/ui/button'
import { Input } from '~/src/components/ui/input'
import { Text } from '~/src/components/ui/text'
import { authenticate } from '~/src/redux/slices/app.slice'
import colors from '~/src/theme/colors'
import { DIMENSIONS } from '~/src/utils/constants'
import { useAppDispatch } from '~/src/redux/root'

export default function Login({ navigation }: any) {
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
              <Input placeholder="username/email" placeholderTextColor={colors.white} />
              <Input
                placeholder="password"
                placeholderTextColor={colors.white}
                containerStyle={{ marginTop: 20 }}
              />
              <Button
                title="Se connecter"
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
          backgroundColor: colors.white,
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <Text
          style={{
            fontSize: RFValue(16, DIMENSIONS.height),
            color: colors.primary,
            textDecorationLine: 'underline',
          }}
        >
          Forgot Password?
        </Text>
        <View
          style={{
            flexDirection: 'row',
            marginVertical: 10,
            alignItems: 'center',
          }}
        >
          <Text
            style={{
              color: colors.slate[800],
            }}
          >
            New to Karam?
          </Text>
          {/* eslint-disable */}
          <TouchableOpacity onPress={() => navigation.navigate('Signup')}>
            <Text
              style={{
                fontSize: RFValue(16, DIMENSIONS.height),
                color: colors.primary,
                textDecorationLine: 'underline',
                marginLeft: 10,
              }}
            >
              Sign Up
            </Text>
          </TouchableOpacity>
        </View>
        <Text
          style={{
            color: colors.primary,
            textDecorationLine: 'underline',
          }}
        >
          Conditions generales d&apos;utilisation
        </Text>
      </View>
    </View>
  )
}
