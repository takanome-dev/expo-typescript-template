import React from 'react';
import { StyleSheet, Text as RNText } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';

import colors from '~/src/theme/colors';
import fonts from '~/src/theme/fonts';
import { DIMENSIONS } from '~/src/utils/constants';

import type { TextProps } from '@rneui/base';

const variants = {
  normal: {
    fontFamily: fonts.monserrat.regular,
  },
  bold: {
    bolder: {
      fontWeight: '700',
      fontFamily: fonts.monserrat.bold,
    },
    semibold: {
      fontWeight: '600',
      fontFamily: fonts.monserrat.semibold,
    },
  },
} as const;

interface Props extends TextProps {
  semibold?: boolean;
  variant?: keyof typeof variants;
}

export const Text = (props: Props) => {
  const { style, semibold = false, variant = 'normal', ...rest } = props;

  const styles = StyleSheet.flatten([
    {
      color: colors.slate[600],
      fontSize: RFValue(14, DIMENSIONS.height),
    },
    variant === 'normal' && variants.normal,
    variant === 'bold' &&
      (semibold ? variants.bold.semibold : variants.bold.bolder),
    style,
  ]);

  return <RNText {...rest} style={styles} />;
};
