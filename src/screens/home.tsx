import { LinearProgress } from '@rneui/themed';
import { LinearGradient } from 'expo-linear-gradient';
import React, { useState } from 'react';
import { View, ScrollView, Image, ImageBackground } from 'react-native';
import FontIcon from 'react-native-vector-icons/FontAwesome5';

import { Text } from '~/src/components/ui/text';
import { TouchableComponent } from '~/src/components/ui/touchable-component';
import useAudioSounds from '~/src/hooks/useAudioSounds';
import { Filter } from '~/src/pages/filters';
import { type HomeNavigationScreenProps } from '~/src/types';
import { DIMENSIONS } from '~/src/utils/constants';
import colors from '~/theme/colors';

const recommendations = [
  {
    id: 1,
    title: 'Prothese Medicale',
    image: require('../../assets/images/help-1.jpeg'),
  },
  {
    id: 2,
    title: 'Operation Cardiaque',
    image: require('../../assets/images/help-2.jpeg'),
  },
  {
    id: 3,
    title: 'Don Alimentaire',
    image: require('../../assets/images/help-3.jpeg'),
  },
  {
    id: 4,
    title: 'Education',
    image: require('../../assets/images/help-4.jpeg'),
  },
];

function Indicators({ index }: { index: number }) {
  return (
    <View
      style={{
        position: 'absolute',
        left: 0,
        right: 0,
        bottom: 10,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      {[0, 1, 2, 3].map((i) => (
        <View
          key={i}
          style={{
            width: 10,
            height: 10,
            borderRadius: 5,
            backgroundColor: index === i ? colors.primary : colors.slate[200],
            marginHorizontal: 5,
          }}
        />
      ))}
    </View>
  );
}

const Home = ({ navigation }: HomeNavigationScreenProps<'Home'>) => {
  const [index, setIndex] = useState(0);
  const { onPlayPausePressed, onForwardPressed, onBackPressed, status } =
    useAudioSounds(
      // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
      require('../../assets/sounds/relax.mp3'),
    );

  const totalDurationInSeconds = (status?.durationMillis ?? 0) / 1000;
  const currentProgressInSeconds = (status?.positionMillis ?? 0) / 1000;
  const percentage = currentProgressInSeconds / totalDurationInSeconds;

  return (
    <ScrollView
      contentContainerStyle={{
        backgroundColor: colors.slate[100],
      }}
    >
      <View
        style={{
          flex: 1,
          width: DIMENSIONS.width,
          height: 150,
          position: 'relative',
          backgroundColor: colors.primary,
          opacity: 0.8,
        }}
      >
        <ImageBackground
          resizeMode="cover"
          source={require('../../assets/images/home-sound-bg.png')}
          style={{
            flex: 1,
            width: '100%',
            justifyContent: 'center',
            alignItems: 'center',
            marginTop: -150,
          }}
        >
          <View
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              width: '100%',
              height: '100%',
              zIndex: 10,
              justifyContent: 'center',
              alignItems: 'center',
              marginTop: 110,
            }}
          >
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
              <TouchableComponent onPress={onBackPressed}>
                <FontIcon name="backward" size={20} color={colors.white} />
              </TouchableComponent>
              <TouchableComponent
                onPress={onPlayPausePressed}
                style={{ marginHorizontal: 30 }}
              >
                <FontIcon
                  name={status?.isPlaying ? 'pause' : 'play'}
                  size={32}
                  color={colors.white}
                />
              </TouchableComponent>
              <TouchableComponent onPress={onForwardPressed}>
                <FontIcon name="forward" size={20} color={colors.white} />
              </TouchableComponent>
            </View>
            <View
              style={{
                marginBottom: 10,
                marginTop: 20,
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
                width: 300,
              }}
            >
              <Text variant="bold" style={{ color: colors.slate[800] }}>
                {(currentProgressInSeconds / 60).toFixed(2)}
              </Text>
              <LinearProgress
                style={{
                  backgroundColor: colors.white,
                  height: 6,
                  borderRadius: 5,
                  width: 230,
                }}
                value={percentage}
                variant="determinate"
                color={colors.slate[900]}
              />
              <Text variant="bold" style={{ color: colors.slate[800] }}>
                {(totalDurationInSeconds / 60).toFixed(2)}
              </Text>
            </View>
          </View>
        </ImageBackground>
      </View>
      <View style={{ paddingHorizontal: 20, marginTop: 20 }}>
        {/* USER CARD */}
        <TouchableComponent onPress={() => navigation.navigate('Profile')}>
          <View
            style={{
              backgroundColor: colors.white,
              borderRadius: 10,
              flexDirection: 'row',
              padding: 20,
            }}
          >
            <Image
              resizeMode="cover"
              source={require('../../assets/images/user-profile.jpeg')}
              style={{
                width: 60,
                height: 60,
                borderRadius: 30,
                marginRight: 15,
              }}
            />
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                flex: 1,
              }}
            >
              <View>
                <Text
                  variant="bold"
                  style={{ fontSize: 20, color: colors.slate[800] }}
                >
                  John Doe
                </Text>
                <View
                  style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    marginTop: 5,
                  }}
                >
                  <Text style={{ fontSize: 14, color: colors.slate[600] }}>
                    Casablanca
                  </Text>
                  <FontIcon
                    name="map-marker-alt"
                    color={colors.primary}
                    size={16}
                    style={{ marginLeft: 10 }}
                  />
                </View>
              </View>
            </View>
            <Text
              style={{
                color: colors.slate[400],
                alignSelf: 'flex-end',
                fontSize: 12,
              }}
            >
              View details &gt;
            </Text>
            {/* </View> */}
          </View>
        </TouchableComponent>
        {/* RECOMMENDATION */}
        <View
          style={{
            backgroundColor: colors.white,
            borderRadius: 10,
            marginTop: 20,
            padding: 20,
            paddingBottom: 30,
            overflow: 'hidden',
            // alignItems: 'center',
          }}
        >
          <Text
            variant="bold"
            style={{
              fontSize: 20,
              color: colors.primary,
              textTransform: 'uppercase',
              marginBottom: 10,
            }}
          >
            Recommendations
          </Text>
          <Text style={{ color: colors.slate[400], fontSize: 12 }}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
            vero possimus adipisci libero nemo
          </Text>
          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            style={{ marginTop: 20 }}
            onScroll={(e) => {
              setIndex(Math.ceil(e.nativeEvent.contentOffset.x / 150));
            }}
          >
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
              }}
            >
              {recommendations.map((item) => (
                <View
                  style={{
                    width: 150,
                    height: 200,
                    borderRadius: 10,
                    marginRight: 10,
                    overflow: 'hidden',
                  }}
                >
                  <ImageBackground
                    resizeMode="cover"
                    source={item.image}
                    style={{
                      flex: 1,
                      width: '100%',
                    }}
                  >
                    <LinearGradient
                      colors={['transparent', 'rgba(0,0,0,0.8)']}
                      style={{
                        width: '100%',
                        height: '100%',
                        justifyContent: 'flex-end',
                        alignItems: 'center',
                      }}
                    >
                      <Text
                        variant="bold"
                        style={{
                          color: colors.white,
                          fontSize: 20,
                          marginBottom: 30,
                          textAlign: 'center',
                        }}
                      >
                        {item.title}
                      </Text>
                    </LinearGradient>
                  </ImageBackground>
                </View>
              ))}
              {/* <View
                style={{
                  backgroundColor: colors.slate[200],
                  width: 150,
                  height: 200,
                  borderRadius: 10,
                  marginRight: 20,
                  justifyContent: 'center',
                  alignItems: 'center',
                }}
              /> */}
            </View>
          </ScrollView>
          <Indicators index={index} />
        </View>
        {/* Filters */}
        <View
          style={{
            marginTop: 30,
            marginBottom: 10,
            flexDirection: 'row',
            justifyContent: 'space-between',
          }}
        >
          <Filter
            icon="th-large"
            text="All"
            handleFilter={() =>
              navigation.navigate('Filters', { filter: 'all' })
            }
          />
          <Filter
            icon="briefcase-medical"
            text="Medical"
            handleFilter={() =>
              navigation.navigate('Filters', { filter: 'medical' })
            }
          />
          <Filter
            icon="user-graduate"
            text="Education"
            handleFilter={() =>
              navigation.navigate('Filters', { filter: 'education' })
            }
          />
          <Filter
            icon="faucet"
            text="Puits"
            handleFilter={() =>
              navigation.navigate('Filters', { filter: 'puits' })
            }
          />
        </View>
      </View>
    </ScrollView>
  );
};

export default Home;
