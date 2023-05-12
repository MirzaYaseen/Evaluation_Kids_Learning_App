import React from 'react';
import { View } from 'react-native';
import { KeyboardOffsets, ScreenPresets } from './screen.presets';

const Screen = ({
  children,
  style,
  preset,
  backgroundColor,
  statusBar,
  unsafe,
  keyboardOffset,
  keyboardShouldPersistTaps,
  StatusbackgroundColor,
  bottomSafe,
}) => {
  return (
    <View
      style={[
        preset,
        {
          backgroundColor,
          paddingTop: unsafe ? 0 : keyboardOffset,
          flex: 1,
        },
        style,
      ]}
    >
      {children}
    </View>
  );
};

export default Screen;
