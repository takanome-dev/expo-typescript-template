/* eslint-disable @typescript-eslint/no-unsafe-return */
import { type MaterialCommunityIcons as MCIcons } from '@expo/vector-icons'
import { type ThunkAction } from '@reduxjs/toolkit'
import { StatusBar } from 'expo-status-bar'
import React from 'react'
import { FlatList, Image, Text, View } from 'react-native'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'

import { TouchableComponent } from '~/src/components/ui/touchable-component'
import { authenticate } from '~/src/redux/slices/app.slice'
import { type ProfileNavigationScreenProps, type ProfileStackNavigationParams } from '~/src/types'
import { useAppDispatch } from '~/src/redux/root'
import colors from '~/theme/colors'

interface RowProps {
  text: string
  icon: keyof typeof MCIcons.glyphMap
  onPress?: () => void
  path?: keyof ProfileStackNavigationParams
}

function Row({ text, icon, onPress }: RowProps) {
  return (
    <TouchableComponent onPress={onPress}>
      <View
        style={{
          marginBottom: 10,
          backgroundColor: colors.white,
          paddingHorizontal: 10,
          paddingVertical: 15,
          borderRadius: 10,
          display: 'flex',
          alignItems: 'center',
          flexDirection: 'row',
          justifyContent: 'space-between',
          overflow: 'hidden',
        }}
      >
        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
          <MaterialCommunityIcons name={icon} size={30} color={colors.slate[500]} />
          <Text style={{ marginLeft: 10 }}>{text}</Text>
        </View>
        <MaterialCommunityIcons name="arrow-right" size={20} color={colors.slate[500]} />
      </View>
    </TouchableComponent>
  )
}
// function Row({ text, icon, onPress }: RowProps) {
//   return (
//     <TouchableComponent onPress={onPress}>
//       <View style={{ marginBottom: 20 }}>
//         <View
//           style={{
//             display: 'flex',
//             alignItems: 'center',
//             flexDirection: 'row',
//             justifyContent: 'space-between',
//             overflow: 'hidden',
//           }}
//         >
//           <View style={{ flexDirection: 'row', alignItems: 'center' }}>
//             <View
//               style={{
//                 width: 50,
//                 height: 50,
//                 borderRadius: 10,
//                 backgroundColor: colors.slate[200],
//                 marginRight: 10,
//                 justifyContent: 'center',
//                 alignItems: 'center',
//               }}
//             >
//               <MaterialCommunityIcons
//                 name={icon}
//                 size={30}
//                 color={colors.slate[500]}
//               />
//             </View>
//             <Text>{text}</Text>
//           </View>
//           <MaterialCommunityIcons
//             name="arrow-right"
//             size={20}
//             color={colors.slate[500]}
//           />
//         </View>
//         <View
//           style={{
//             height: 1,
//             marginTop: 10,
//             backgroundColor: colors.slate[200],
//             width: '100%',
//           }}
//         />
//       </View>
//     </TouchableComponent>
//   );
// }

const items: RowProps[] = [
  {
    text: 'Personal Information',
    icon: 'account',
    path: 'UserInfos',
  },
  {
    text: 'Change Password',
    icon: 'lock-reset',
    path: 'EditPassword',
  },
  { text: 'Security', icon: 'shield-lock', path: 'Security' },
  {
    text: 'Logout',
    icon: 'logout-variant',
    onPress: () => authenticate({ loggedIn: false }),
  },
]

const Profile = ({ navigation }: ProfileNavigationScreenProps<'UserInfos'>) => {
  const dispatch = useAppDispatch()

  return (
    <>
      <FlatList
        ListHeaderComponent={
          <Image
            resizeMode="cover"
            source={require('../../assets/images/user-profile.jpeg')}
            style={{
              width: 150,
              height: 150,
              borderRadius: 75,
              marginBottom: 30,
              alignSelf: 'center',
            }}
          />
        }
        contentContainerStyle={{
          padding: 20,
          marginTop: 50,
        }}
        style={{
          backgroundColor: colors.slate[100],
          flex: 1,
        }}
        data={items}
        keyExtractor={(_, i) => String(i)}
        renderItem={({ item }) => (
          <Row
            {...item}
            onPress={() =>
              item.path ? navigation.navigate(item.path) : dispatch(item.onPress?.() as any)
            }
          />
        )}
      />
      <StatusBar style="dark" />
    </>
  )
}

export default Profile
