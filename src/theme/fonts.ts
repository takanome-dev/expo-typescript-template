import * as Font from 'expo-font';

// fonts preloading
export const fontAssets = [
  {
    monserrat_regular: require('../../assets/fonts/montserrat/Montserrat-Regular.ttf'),
  },
  {
    monserrat_black: require('../../assets/fonts/montserrat/Montserrat-Black.ttf'),
  },
  {
    monserrat_black_italic: require('../../assets/fonts/montserrat/Montserrat-BlackItalic.ttf'),
  },
  {
    monserrat_bold: require('../../assets/fonts/montserrat/Montserrat-Bold.ttf'),
  },
  {
    monserrat_bold_italic: require('../../assets/fonts/montserrat/Montserrat-BoldItalic.ttf'),
  },
  {
    monserrat_extra_bold: require('../../assets/fonts/montserrat/Montserrat-ExtraBold.ttf'),
  },
  {
    monserrat_extra_bold_italic: require('../../assets/fonts/montserrat/Montserrat-ExtraBoldItalic.ttf'),
  },
  {
    monserrat_extra_light: require('../../assets/fonts/montserrat/Montserrat-ExtraLight.ttf'),
  },
  {
    monserrat_extra_light_italic: require('../../assets/fonts/montserrat/Montserrat-ExtraLightItalic.ttf'),
  },
  {
    monserrat_italic: require('../../assets/fonts/montserrat/Montserrat-Italic.ttf'),
  },
  {
    monserrat_light: require('../../assets/fonts/montserrat/Montserrat-Light.ttf'),
  },
  {
    monserrat_light_italic: require('../../assets/fonts/montserrat/Montserrat-LightItalic.ttf'),
  },
  {
    monserrat_medium: require('../../assets/fonts/montserrat/Montserrat-Medium.ttf'),
  },
  {
    monserrat_medium_italic: require('../../assets/fonts/montserrat/Montserrat-MediumItalic.ttf'),
  },
  {
    monserrat_semibold: require('../../assets/fonts/montserrat/Montserrat-SemiBold.ttf'),
  },
  {
    monserrat_semibold_italic: require('../../assets/fonts/montserrat/Montserrat-SemiBoldItalic.ttf'),
  },
  {
    monserrat_thin: require('../../assets/fonts/montserrat/Montserrat-Thin.ttf'),
  },
  {
    monserrat_thin_italic: require('../../assets/fonts/montserrat/Montserrat-ThinItalic.ttf'),
  },
  // @ts-ignore
].map((x) => Font.loadAsync(x));

const fonts = {
  monserrat: {
    regular: 'monserrat_regular',
    black: ' monserrat_black',
    blackItalic: 'monserrat_black_italic',
    bold: 'monserrat_bold',
    boldItalic: 'monserrat_bold_italic',
    extraBold: 'monserrat_extra_bold',
    extraBoldItalic: 'monserrat_extra_bold_italic',
    extraLight: 'monserrat_extra_light',
    extraLightItalic: 'monserrat_extra_light_italic',
    italic: 'monserrat_ italic',
    light: 'monserrat_light',
    lightItalic: 'monserrat_light_italic',
    medium: 'monserrat_medium',
    mediumItalic: 'monserrat_medium_italic',
    semibold: 'monserrat_semibold',
    semiboldItalic: 'monserrat_semibold_italic',
    thin: 'monserrat _thin',
    thinItalic: 'monserrat_thin_italic',
  },
} as const;

export default fonts;
