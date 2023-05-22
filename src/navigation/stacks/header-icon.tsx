import FontIcon from '@expo/vector-icons/FontAwesome5';
import React from 'react';
import { type TextStyle } from 'react-native';

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
