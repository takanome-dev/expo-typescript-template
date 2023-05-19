import React from 'react';
import { StyleSheet } from 'react-native';
import FontIcon from 'react-native-vector-icons/FontAwesome5';

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
