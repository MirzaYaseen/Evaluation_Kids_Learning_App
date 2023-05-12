import React from 'react';
import { Image } from 'react-native';

export const _Image = ({
  height,
  width,
  radius,
  style,
  paddings,
  margins,
  color,
  ...rest
}) => {
  return (
    <Image
      style={[
        { borderRadius: radius || 0 },
        height ? { height } : undefined,
        width ? { width } : undefined,
        { tintColor: color ? color : undefined },
        margins,
        paddings,
        style,
      ]}
      {...rest}
    />
  );
};
