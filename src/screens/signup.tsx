import { ScrollView, TouchableOpacity, View } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';

import ExpoIcon from '~/assets/icons/client.svg';
import { Button } from '~/src/components/ui/button';
import { Input } from '~/src/components/ui/input';
import { Text } from '~/src/components/ui/text';
import { useAppDispatch } from '~/src/redux/root';
import { authenticate } from '~/src/redux/slices/app.slice';
import colors from '~/src/theme/colors';
import { DIMENSIONS } from '~/src/utils/constants';

export default function Login({ navigation }: any) {
  const dispatch = useAppDispatch();

  return (
    <ScrollView
      contentContainerStyle={{
        flex: 1,
        paddingHorizontal: 20,
        paddingVertical: 20,
      }}
    >
      <View style={{ marginTop: 40 }}>
        <View style={{ justifyContent: 'center', alignItems: 'center' }}>
          <ExpoIcon width={100} height={100} />
        </View>
        <View
          style={{
            marginTop: 60,
          }}
        >
          <Input
            placeholder="username"
            placeholderTextColor={colors.slate[400]}
          />
          <Input
            placeholder="email"
            placeholderTextColor={colors.slate[400]}
            containerStyle={{ marginTop: 20 }}
          />
          <Input
            placeholder="password"
            placeholderTextColor={colors.slate[400]}
            containerStyle={{ marginTop: 20 }}
          />
          <Button
            title="Signup"
            buttonStyle={{
              backgroundColor: colors.slate[400],
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
      <View
        style={{
          paddingVertical: 40,
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
          width: '100%',
        }}
      >
        <Text
          style={{
            fontSize: RFValue(16, DIMENSIONS.height),
          }}
        >
          Already have an account?
        </Text>
        {/* eslint-disable */}
        <TouchableOpacity onPress={() => navigation.navigate('Login')}>
          <Text
            style={{
              fontSize: RFValue(16, DIMENSIONS.height),
              textDecorationLine: 'underline',
            }}
          >
            Sign in
          </Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}
