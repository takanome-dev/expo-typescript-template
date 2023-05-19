import React from 'react';
import { Image, ScrollView, View } from 'react-native';
import FontIcon from 'react-native-vector-icons/FontAwesome5';

import CardNews from '~/src/components/card-news';
import { Input } from '~/src/components/ui/input';
import { Text } from '~/src/components/ui/text';
import { TouchableComponent } from '~/src/components/ui/touchable-component';
import colors from '~/src/theme/colors';
import { type NewsNavigationScreenProps } from '~/src/types';

const data = [
  {
    id: 1,
    title: "PSG: L'AVOCATE D'HAKIMI, MIS EN EXAMEN POUR VIOL, DÉNONCE ...",
    description:
      'avec l’aide des donateurs a consacré un budget pour l’achat de paniers alimentaires pour les habitants…',
    image: require('../../assets/images/news-3.jpeg'),
  },
  {
    id: 2,
    title: 'Monarchie Constitutionnelle',
    description:
      'Cette monarchie constitutionnelle est dirigée depuis 1999 par le roi Mohammed VI. Il a succédé à son père Hassan II le 30 juillet 1999. Dans un Maghreb instable politiquement et socialement…',
    image: require('../../assets/images/news-1.jpeg'),
  },
  {
    id: 3,
    title: "MAROC : FIN DE L'ÉTAT D'URGENCE SANITAIRE LIÉ AU COVID-19",
    description:
      "En 2020, le gouvernement marocain mettait en place l'état d'urgence sanitaire, pour lutter contre la propagation du Covid-19…",
    image: require('../../assets/images/news-2.jpeg'),
  },
];

const News = ({ navigation }: NewsNavigationScreenProps<'News'>) => (
  <ScrollView
    contentContainerStyle={{ padding: 20, backgroundColor: colors.slate[100] }}
  >
    <View
      style={{
        marginVertical: 20,
      }}
    >
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'center',
          overflow: 'hidden',
        }}
      >
        <Input
          placeholder="Search your activity"
          placeholderTextColor={colors.slate[400]}
          containerStyle={{ width: 300 }}
          inputContainerStyle={{
            backgroundColor: colors.white,
            borderRadius: 20,
            borderWidth: 0,
          }}
          inputStyle={{
            color: colors.slate[600],
          }}
          leftIcon={<FontIcon name="search" size={20} color={colors.primary} />}
        />
      </View>
      <TouchableComponent
        onPress={() => navigation.navigate('NewsDetails', { news: data[1]! })}
      >
        <View
          style={{
            backgroundColor: colors.white,
            borderRadius: 10,
            marginTop: 20,
            padding: 20,
            overflow: 'hidden',
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
            L&apos;actualité au Maroc
          </Text>
          <Image
            source={data[1]?.image}
            resizeMode="contain"
            style={{
              width: '100%',
              height: 200,
              marginBottom: 10,
            }}
          />
          <Text
            style={{
              color: colors.slate[400],
            }}
            numberOfLines={4}
          >
            {data[1]?.description}
          </Text>
          <Text
            style={{
              color: colors.slate[400],
              marginTop: 10,
              fontSize: 12,
            }}
          >
            See detail &gt;
          </Text>
        </View>
      </TouchableComponent>
      <View style={{ marginVertical: 20 }}>
        {data.map((item) => (
          <CardNews
            key={item.id}
            image={item.image}
            title={item.title}
            description={item.description}
            onPress={() => navigation.navigate('NewsDetails', { news: item })}
          />
        ))}
      </View>
    </View>
  </ScrollView>
);
export default News;
