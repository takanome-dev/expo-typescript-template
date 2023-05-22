import FontIcon from '@expo/vector-icons/FontAwesome5';
import React from 'react';
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  button: {
    paddingLeft: 15,
  },
});

const HeaderLeft = ({ name }: { name: string }) => (
  <FontIcon
    name={name}
    color="white"
    // backgroundColor="transparent"
    onPress={() => {
      console.log('Open Drawer');
    }}
    style={styles.button}
  />
);

export default HeaderLeft;
