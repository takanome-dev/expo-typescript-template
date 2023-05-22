// import Constants from 'expo-constants';
import { Dimensions } from 'react-native';

export const DIMENSIONS = {
  width: Dimensions.get('window').width,
  height: Dimensions.get('window').height,
} as const;
