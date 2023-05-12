import React from 'react';
import { Text } from 'react-native';

export const _Text = ({
  size,
  font,
  textTransform,
  color,
  style,
  children,
  align,
  margins,
  fontweight,
  numberOfLines,
  ...rest
}) => (
  <Text
    style={[
      { fontSize: size },
      { fontFamily: font, color: color ? color : '#232323' },
      { textTransform: textTransform },
      { textAlign: align },
      { fontWeight: fontweight },
      margins,
      style,
    ]}
    allowFontScaling={false}
    numberOfLines={numberOfLines}
    {...rest}
  >
    {children}
  </Text>
);
