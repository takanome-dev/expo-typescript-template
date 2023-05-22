import colors from './colors';
import fonts from './fonts';

const fontSizes = {
  '2xs': 10,
  xs: 12,
  sm: 14,
  md: 16,
  lg: 18,
  xl: 20,
  '2xl': 24,
  '3xl': 28,
  '4xl': 32,
  '5xl': 40,
} as const;

const scale = fontSizes.md;

export const space = {
  px: '1',
  0: 0,
  0.5: 0.125 * scale,
  1: 0.25 * scale,
  2: 0.5 * scale,
  3: 0.75 * scale,
  4: scale,
  5: 1.25 * scale,
  6: 1.5 * scale,
  7: 1.75 * scale,
  8: 2 * scale,
  9: 2.25 * scale,
  10: 2.5 * scale,
  12: 3 * scale,
  16: 4 * scale,
  20: 5 * scale,
  24: 6 * scale,
  32: 8 * scale,
  40: 10 * scale,
  48: 12 * scale,
  56: 14 * scale,
  64: 16 * scale,
  72: 18 * scale,
  80: 20 * scale,
  96: 24 * scale,
} as const;

const theme = {
  colors,
  fonts,
  space,
  shadows: {
    inputShadow: {
      shadowOffset: { width: 0, height: 2 },
      shadowColor: colors.slate[500],
      shadowOpacity: 0.16,
      elevation: 3,
    },
  },
};

export default theme;
