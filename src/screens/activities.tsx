import FontIcon from '@expo/vector-icons/FontAwesome5';
import React from 'react';
import { ScrollView, View } from 'react-native';

import { Input } from '~/components/ui/input';
import { Text } from '~/components/ui/text';
import { TouchableComponent } from '~/components/ui/touchable-component';
import colors from '~/theme/colors';

const Activities = ({
  navigation,
}: ActivityNavigationScreenProps<'Activities'>) => (
  <ScrollView contentContainerStyle={{ padding: 20 }}>
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
            backgroundColor: colors.common.white,
            borderRadius: 20,
            borderWidth: 0,
          }}
          inputStyle={{
            color: colors.slate[600],
          }}
          leftIcon={
            <FontIcon name="search" size={20} color={colors.slate[500]} />
          }
        />
      </View>
      <TouchableComponent
        onPress={() => navigation.navigate('ActivitiesDetails')}
      >
        <View
          style={{
            backgroundColor: colors.common.white,
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
              color: colors.slate[500],
              textTransform: 'uppercase',
              marginBottom: 10,
            }}
          >
            Activity Card
          </Text>
        </View>
      </TouchableComponent>
    </View>
  </ScrollView>
);

export default Activities;
