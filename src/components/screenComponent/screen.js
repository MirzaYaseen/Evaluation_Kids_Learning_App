/* eslint-disable react-native/no-inline-styles */
import * as React from 'react';
import {
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  StatusBar,
} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {_View} from '..';
import {theme} from '../../constants/theme';
import {isNonScrolling, offsets, presets} from './screen.presets';
import {ScreenProps} from './screen.props';
const isIos = Platform.OS === 'ios';
function ScreenWithoutScrolling(props) {
  const insets = useSafeAreaInsets();
  const preset = presets.fixed;
  const style = props.style || {};
  const backgroundStyle = props.backgroundColor
    ? {backgroundColor: props.backgroundColor}
    : {};

  return (
    <KeyboardAvoidingView
      style={[preset.outer, backgroundStyle]}
      behavior={isIos ? 'padding' : undefined}
      keyboardVerticalOffset={offsets[props.keyboardOffset || 'none']}>
      <_View
        style={{
          height: insets.top,
          backgroundColor: props.StatusbackgroundColor
            ? props.StatusbackgroundColor
            : theme.colors.Primary,
        }}>
        <StatusBar
          translucent
          // animated={true}
          barStyle={props.statusBar || 'default'}
          backgroundColor={
            props.StatusbackgroundColor
              ? props.StatusbackgroundColor
              : theme.colors.Primary
          }
        />
      </_View>
      <_View
        style={[
          preset.inner,
          style,
          props.bottomSafe && {marginBottom: insets.bottom},
        ]}>
        {props.children}
      </_View>
    </KeyboardAvoidingView>
  );
}

function ScreenWithScrolling(props) {
  const insets = useSafeAreaInsets();
  const preset = presets.scroll;
  const style = props.style || {};
  const backgroundStyle = props.backgroundColor
    ? {backgroundColor: props.backgroundColor}
    : {};

  return (
    <KeyboardAvoidingView
      style={[preset.outer, backgroundStyle]}
      behavior={isIos ? 'padding' : undefined}
      keyboardVerticalOffset={offsets[props.keyboardOffset || 'none']}>
      <_View
        style={{
          height: insets.top,
          backgroundColor: props.StatusbackgroundColor
            ? props.StatusbackgroundColor
            : theme.colors.Primary,
        }}>
        <StatusBar
          translucent
          backgroundColor={
            props.StatusbackgroundColor
              ? props.StatusbackgroundColor
              : theme.colors.Primary
          }
          barStyle={props.statusBar || 'light-content'}
        />
      </_View>
      <_View
        style={[
          preset.outer,
          backgroundStyle,
          props.bottomSafe && {marginBottom: insets.bottom},
        ]}>
        <ScrollView
          style={[preset.outer, backgroundStyle]}
          contentContainerStyle={[preset.inner, style]}
          keyboardShouldPersistTaps={
            props.keyboardShouldPersistTaps || 'handled'
          }>
          {props.children}
        </ScrollView>
      </_View>
    </KeyboardAvoidingView>
  );
}
//Method to check which screen is used to render either scrollable or simple
export function Screen(props) {
  if (isNonScrolling(props.preset)) {
    return <ScreenWithoutScrolling {...props} />;
  } else {
    return <ScreenWithScrolling {...props} />;
  }
}
