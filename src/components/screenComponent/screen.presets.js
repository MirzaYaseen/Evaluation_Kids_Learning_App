import { ViewStyle } from 'react-native';
import { theme } from '../../constants/theme';

export const offsets = {
  none: 0,
};

export const presets = {
  fixed: {
    outer: {
      backgroundColor: theme.colors.background,
      flex: 1,
      height: '100%',
    },
    inner: {
      justifyContent: 'flex-start',
      alignItems: 'stretch',
      height: '100%',
      width: '100%',
    },
  },
  scroll: {
    outer: {
      backgroundColor: theme.colors.background,
      flex: 1,
      height: '100%',
    },
    inner: {
      justifyContent: 'flex-start',
      alignItems: 'stretch',
    },
  },
};

export const ScreenPresets = Object.keys(presets);

export function isNonScrolling(preset) {
  return !preset || !presets[preset] || preset === 'fixed';
}
