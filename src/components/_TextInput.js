import React from 'react';
import { StyleSheet, TextInput, TextStyle } from 'react-native';

export const _TextInput = React.forwardRef(function _TextInput({ style, ...rest }, ref) {
  return (
    <TextInput
      ref={ref}
      {...rest}
      style={[rest.multiline ? styles.multiline : styles.standard, style]}
    />
  );
});

const core = {
  fontSize: 16,
  flex: 1,
  textAlignVertical: 'center',
};

const styles = StyleSheet.create({
  standard: {
    ...core,
  },
  multiline: {
    ...core,
    minHeight: 40,
    maxHeight: 150,
    height: 'auto',
    paddingVertical: 16,
    textAlignVertical: 'top',
  },
});
