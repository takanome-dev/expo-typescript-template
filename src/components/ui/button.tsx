import { Button as RNButton, type ButtonProps } from '@rneui/base';
import React from 'react';
import { StyleSheet } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';

import { TouchableComponent } from '~/src/components/ui/touchable-component';
import colors from '~/src/theme/colors';
import fonts from '~/src/theme/fonts';
import { DIMENSIONS } from '~/src/utils/constants';

const baseStyles = {
  buttonStyle: {
    backgroundColor: colors.common.white,
    paddingHorizontal: 10,
    borderRadius: 10,
    height: 50,
    borderWidth: 1,
  },
  containerStyle: {
    alignSelf: 'center',
    backgroundColor: colors.common.white,
    borderRadius: 10,
  },
  titleStyle: {
    fontSize: RFValue(14, DIMENSIONS.height),
    fontWeight: '700',
    backgroundColor: 'transparent',
    textTransform: 'uppercase',
    // fontFamily: fonts.monserrat.bold,
    letterSpacing: 1.5,
  },
} as const;

const buttonVariants = {
  primary: {
    buttonStyle: {
      borderWidth: 0,
      backgroundColor: colors.slate[500],
    },
    containerStyle: {
      backgroundColor: colors.slate[500],
    },
    titleStyle: {
      color: colors.common.white,
    },
  },
  // secondary: {
  //   buttonStyle: {
  //     backgroundColor: colors.white,
  //     borderColor: colors.slate[300],
  //   },
  //   containerStyle: {
  //     backgroundColor: colors.gray,
  //   },
  //   titleStyle: {
  //     color: colors.slate[600],
  //   },
  // },
} as const;

interface AppButtonProps extends ButtonProps {
  width?: number | string;
  height?: number | string;
  variant?: typeof buttonVariants extends infer T ? keyof T : never;
}

export const Button: React.FC<AppButtonProps> = (props) => {
  const {
    titleStyle,
    containerStyle,
    buttonStyle,
    variant = 'primary',
    ...rest
  } = props;

  if (!rest.disabled) {
    rest.disabled = rest.loading;
  }

  const btnStyles = StyleSheet.flatten([
    baseStyles.buttonStyle,
    buttonVariants[variant].buttonStyle,
    buttonStyle,
  ]);

  const titleStyles = StyleSheet.flatten([
    baseStyles.titleStyle,
    buttonVariants[variant].titleStyle,
    titleStyle,
  ]);

  const containerStyles = StyleSheet.flatten([
    baseStyles.containerStyle,
    buttonVariants[variant].containerStyle,
    containerStyle,
  ]);

  return (
    <RNButton
      {...rest}
      buttonStyle={btnStyles}
      containerStyle={containerStyles}
      titleStyle={titleStyles}
      TouchableComponent={TouchableComponent}
    />
  );
};
