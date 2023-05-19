import React from 'react';
import { type TextStyle } from 'react-native';
import FontIcon from 'react-native-vector-icons/FontAwesome5';

const HeaderLeft = ({
  icon,
  color,
  style,
  onPress,
}: {
  icon: string;
  color: string;
  style?: TextStyle;
  onPress?: () => void;
}) => (
  <FontIcon
    name={icon}
    color={color}
    size={20}
    onPress={onPress}
    style={{
      backgroundColor: 'transparent',
      ...style,
    }}
  />
);

export default HeaderLeft;
