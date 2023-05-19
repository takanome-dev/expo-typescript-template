import { Platform, TouchableOpacity as TouchableOpacityRN } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

export const TouchableComponent =
  Platform.OS === 'ios' ? TouchableOpacity : TouchableOpacityRN;
