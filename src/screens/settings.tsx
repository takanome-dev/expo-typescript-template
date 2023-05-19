import { type MaterialCommunityIcons as MCIcons } from '@expo/vector-icons';
import React from 'react';
import { FlatList, Text, View } from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import { TouchableComponent } from '~/src/components/ui/touchable-component';
import {
  type SettingsStackNavigationParams,
  type SettingsNavigationScreenProps,
} from '~/src/types';
import colors from '~/theme/colors';

interface RowProps {
  text: string;
  icon: keyof typeof MCIcons.glyphMap;
  path: keyof SettingsStackNavigationParams;
  onPress?: () => void;
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
          <MaterialCommunityIcons
            name={icon}
            size={30}
            color={colors.slate[500]}
          />
          <Text style={{ marginLeft: 10 }}>{text}</Text>
        </View>
        <MaterialCommunityIcons
          name="arrow-right"
          size={20}
          color={colors.slate[500]}
        />
      </View>
    </TouchableComponent>
  );
}

// function Row({ text, icon }: RowProps) {
//   return (
//     <TouchableComponent onPress={() => console.log('pressed')}>
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
    text: 'Notifications',
    icon: 'bell-outline',
    path: 'Notifications',
  },
  {
    text: 'Support',
    icon: 'face-agent',
    path: 'Support',
  },
  {
    text: 'FAQ',
    icon: 'frequently-asked-questions',
    path: 'FAQ',
  },
  {
    text: 'Terms of Service',
    icon: 'file-document-outline',
    path: 'TermsOfService',
  },
];

const Settings = ({
  navigation,
}: SettingsNavigationScreenProps<'Settings'>) => (
  <FlatList
    contentContainerStyle={{
      padding: 20,
      marginTop: 50,
    }}
    style={{ flex: 1, backgroundColor: colors.slate[100] }}
    data={items}
    keyExtractor={(_, i) => String(i)}
    renderItem={({ item }) => (
      <Row {...item} onPress={() => navigation.navigate(item.path)} />
    )}
  />
);

export default Settings;
