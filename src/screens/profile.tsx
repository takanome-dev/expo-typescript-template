import { MaterialCommunityIcons as MCIcons } from '@expo/vector-icons';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { FlatList, Text, View } from 'react-native';

import { TouchableComponent } from '~/components/ui/touchable-component';
import { useAppDispatch } from '~/src/redux/root';
import { authenticate } from '~/src/redux/slices/app.slice';
import colors from '~/theme/colors';

interface RowProps {
  text: string;
  icon: keyof typeof MCIcons.glyphMap;
  onPress?: () => void;
}

function Row({ text, icon, onPress }: RowProps) {
  return (
    <TouchableComponent
      onPress={onPress ? () => onPress() : () => console.log('Pressed!')}
    >
      <View
        style={{
          marginBottom: 10,
          backgroundColor: colors.common.white,
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
          <MCIcons name={icon} size={30} color={colors.slate[500]} />
          <Text style={{ marginLeft: 10 }}>{text}</Text>
        </View>
        <MCIcons name="arrow-right" size={20} color={colors.slate[500]} />
      </View>
    </TouchableComponent>
  );
}

const items = (): RowProps[] => {
  const dispatch = useAppDispatch();

  return [
    {
      text: 'Personal Information',
      icon: 'account',
    },
    {
      text: 'Change Password',
      icon: 'lock-reset',
    },
    { text: 'Security', icon: 'shield-lock' },
    {
      text: 'FAQ',
      icon: 'frequently-asked-questions',
    },
    {
      text: 'Terms of Service',
      icon: 'file-document-outline',
    },
    {
      text: 'Logout',
      icon: 'logout-variant',
      onPress: () => dispatch(authenticate({ loggedIn: false })),
    },
  ];
};

const Profile = ({ navigation }: ProfileNavigationScreenProps<'Profile'>) => (
  <>
    <FlatList
      ListHeaderComponent={
        <View
          style={{
            width: 100,
            height: 100,
            borderRadius: 50,
            backgroundColor: colors.slate[200],
            justifyContent: 'center',
            alignItems: 'center',
            alignSelf: 'center',
            marginBottom: 50,
          }}
        >
          <MCIcons name="account-circle" size={50} color={colors.slate[500]} />
        </View>
      }
      contentContainerStyle={{
        padding: 20,
        marginTop: 50,
      }}
      style={{
        backgroundColor: colors.slate[100],
        flex: 1,
      }}
      data={items()}
      keyExtractor={(_, i) => String(i)}
      renderItem={({ item }) => <Row {...item} />}
    />
    <StatusBar style="dark" />
  </>
);

export default Profile;
