import {AlignmentProps, SizeProps, SpacingProps} from './Interfaces';
import React from 'react';
import {View, ViewProps} from 'react-native';


export const _View = ({
  children,
  margins,
  paddings,
  align,
  justify,
  flex,
  maxHeight,
  maxWidth,
  height,
  width,
  minHeight,
  minWidth,
  style,
  ...rest
}) => (
  <View
    style={[
      margins,
      paddings,
      align && {alignItems: align},
      justify && {justifyContent: justify},
      flex ? {flex} : undefined,
      maxHeight ? {maxHeight} : undefined,
      maxWidth ? {maxWidth} : undefined,
      minHeight ? {minHeight} : undefined,
      minWidth ? {minWidth} : undefined,
      height ? {height} : undefined,
      width ? {width} : undefined,
      style,
    ]}
    {...rest}>
    {children}
  </View>
);
