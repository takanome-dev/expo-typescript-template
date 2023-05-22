import {
  Input as RNInput,
  type InputProps as RNInputProps,
} from '@rneui/themed';
import React, { useState, useCallback } from 'react';
import { RFValue } from 'react-native-responsive-fontsize';

import colors from '~/src/theme/colors';
import fonts from '~/src/theme/fonts';
import { DIMENSIONS } from '~/src/utils/constants';

import type { TextInput } from 'react-native';

export interface InputProps extends RNInputProps {
  error?: string;
  enableShowPassword?: boolean;
}

export const Input = React.forwardRef(
  (props: InputProps, ref: React.Ref<TextInput>) => {
    const {
      error,
      secureTextEntry = false,
      inputStyle,
      inputContainerStyle,
      containerStyle,
      placeholderTextColor = colors.common.white,
      editable = true,
      enableShowPassword = false,
      rightIcon,
      errorStyle,
      ...rest
    } = props;
    const [ste, setSte] = useState(secureTextEntry);

    const getRightIcon = useCallback(() => {
      if (rightIcon) return rightIcon;
      if (enableShowPassword) {
        if (ste) {
          return {
            name: 'eye',
            type: 'entypo',
            size: 20,
            color: colors.slate[500],
            onPress: () => setSte(!ste),
          };
        }
        return {
          name: 'eye-with-line',
          type: 'entypo',
          size: 20,
          color: colors.slate[500],
          onPress: () => setSte(!ste),
        };
      }
      return {};
    }, [ste, rightIcon]);

    return (
      <RNInput
        {...rest}
        ref={ref}
        returnKeyType="done"
        // leftIconContainerStyle={{ marginRight: 13 }}
        errorStyle={[{ color: colors.red[600], fontSize: 16 }, errorStyle]}
        labelStyle={[
          {
            color: colors.slate[500],
            fontSize: RFValue(14, DIMENSIONS.height),
            marginBottom: 5,
          },
          rest.labelStyle,
        ]}
        errorMessage={error}
        rightIcon={getRightIcon()}
        placeholderTextColor={placeholderTextColor}
        secureTextEntry={ste}
        editable={editable}
        inputContainerStyle={[
          {
            paddingHorizontal: 20,
            borderRadius: 5,
            minHeight: 48,
            borderWidth: 1,
            borderColor: colors.slate[300],
          },
          inputContainerStyle,
        ]}
        inputStyle={[
          {
            paddingHorizontal: 20,
            fontSize: RFValue(14, DIMENSIONS.height),
            fontWeight: '600',
            fontFamily: fonts.monserrat.semibold,
            color: colors.slate[600],
          },
          inputStyle,
        ]}
        containerStyle={[
          {
            paddingStart: 0,
            paddingEnd: 0,
            paddingBottom: 0,
            marginStart: 0,
            marginEnd: 0,
            minHeight: 48,
            maxHeight: !error ? 48 : undefined,
          },
          containerStyle,
        ]}
      />
    );
  }
);
