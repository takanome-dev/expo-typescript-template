import { LinearProgress } from '@rneui/themed';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Image, View, ScrollView } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import FontIcon from 'react-native-vector-icons/FontAwesome5';

import { Button } from '~/src/components/ui/button';
import Chip from '~/src/components/ui/chip';
import { Text } from '~/src/components/ui/text';
import colors from '~/src/theme/colors';
import { type HomeNavigationScreenProps } from '~/src/types';

const ActivityDetails = ({
  navigation,
}: HomeNavigationScreenProps<'ActivityDetails'>) => {
  const insets = useSafeAreaInsets();
  return (
    <>
      <ScrollView
        style={{
          marginTop: insets.top + 50,
          paddingHorizontal: 20,
        }}
      >
        <View
          style={{
            width: '100%',
            height: 300,
            borderRadius: 10,
            overflow: 'hidden',
            // borderWidth: 1,
            // borderColor: 'red',
          }}
        >
          <Image
            resizeMode="cover"
            source={require('../../assets/images/maghreb-secours-1.jpg')}
            style={{ width: '100%', height: '100%' }}
          />
        </View>
        <View style={{ flexDirection: 'row', marginVertical: 20 }}>
          <Image
            source={require('../../assets/images/maghreb-secours-logo.png')}
            style={{ width: 40, height: 40, borderRadius: 20, marginRight: 10 }}
          />
          <View>
            <Text variant="bold" style={{ fontSize: 20, marginBottom: 5 }}>
              Association Maghreb Secours
            </Text>
            <Text variant="bold" style={{ fontSize: 12 }}>
              Kerrouchen
            </Text>
          </View>
        </View>
        <View
          style={{
            backgroundColor: colors.white,
            borderRadius: 10,
            paddingHorizontal: 15,
            paddingVertical: 20,
          }}
        >
          {/* TOP */}
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
            }}
          >
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
              }}
            >
              <FontIcon
                name="map-marker-alt"
                color={colors.slate[600]}
                size={16}
                style={{ marginRight: 10 }}
              />
              <Text style={{ fontSize: 14, color: colors.slate[800] }}>
                Khenifra, Maroc
              </Text>
            </View>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
              }}
            >
              <Chip label="Education" width={100} />
              <Chip label="Kids" width={60} style={{ marginLeft: 5 }} />
            </View>
          </View>
          {/* Middle */}
          <View style={{ marginTop: 20 }}>
            <LinearProgress
              style={{
                marginBottom: 10,
                backgroundColor: colors.slate[200],
                height: 10,
                borderRadius: 5,
              }}
              value={0.5}
              variant="determinate"
              color={colors.primary}
            />
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-between',
              }}
            >
              <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <Text>Target:</Text>
                <Text variant="bold" style={{ marginLeft: 5 }}>
                  1,345.00 dhs
                </Text>
              </View>
              <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <Text>Raised:</Text>
                <Text variant="bold" style={{ marginLeft: 5 }}>
                  22,895 dhs
                </Text>
              </View>
            </View>
          </View>
          {/* Middle */}
          <View style={{ marginTop: 20 }}>
            <Text variant="bold" style={{ fontSize: 18 }}>
              Descriptif de l’action
            </Text>
            <Text style={{ marginTop: 10, color: colors.slate[400] }}>
              avec l’aide des donateurs a consacré un budget pour l’achat de
              paniers alimentaires pour les habitants de Kerrouchen et ce, dans
              le cadre des….
            </Text>
          </View>
        </View>
        <Button
          title="Faire un don"
          containerStyle={{ width: '100%', marginVertical: 30 }}
          onPress={() => navigation.navigate('Donation')}
        />
      </ScrollView>
      <StatusBar style="dark" />
    </>
  );
};

export default ActivityDetails;
