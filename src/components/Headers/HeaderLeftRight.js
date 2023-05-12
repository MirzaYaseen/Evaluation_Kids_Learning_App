import React from 'react';
import { TouchableOpacity, TouchableOpacityProps } from 'react-native';
import { HeaderRight, _VectorIcons } from '..';

const HeaderLeftRight = ({ onPress, size, color, type, Iconname }) => {
  return (
    <TouchableOpacity activeOpacity={1} onPress={onPress}>
      <_VectorIcons type={type} name={Iconname} size={size} color={color} />
    </TouchableOpacity>
  );
};

export { HeaderLeftRight };
