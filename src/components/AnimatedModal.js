import React, {FC} from 'react';
import {_View, _Text, _VectorIcons, _Image} from '../components';
import {Modal, StyleSheet, TouchableOpacity} from 'react-native';
import {theme} from '../constants';
import LottieView from 'lottie-react-native';
import {lottieAnimation} from '../assets/lottieAnimation';


export const _AnimatedModal = ({
  isVisible,
  isError,
  isWarning,
  isEmpty,
  isSuccess,
  description,
  setVisible,
}) => {
  const buttonColor = isError
    ? theme.colors.error
    : isWarning
    ? theme.colors.warning
    : isEmpty
    ? theme.colors.error
    : theme.colors.successBtn;
  return (
    <Modal visible={isVisible} transparent={true} animationType="fade">
      <_View style={styles.container}>
        <_View style={styles.innerContainer}>
          <_View style={styles.topHeaderContainer}>
            <LottieView
              autoPlay
              loop
              source={
                isError
                  ? lottieAnimation.wrong
                  : isWarning
                  ? lottieAnimation.warning
                  : isEmpty
                  ? lottieAnimation.empty
                  : lottieAnimation.correct
              }
            />
          </_View>
          <_Text
            style={[
              styles.textStyle,
              {color: buttonColor, fontSize: 24, fontWeight: '500'},
            ]}>
            {isError
              ? 'Error'
              : isWarning
              ? 'Warning!'
              : isEmpty
              ? 'Empty Screen'
              : 'Success'}
          </_Text>
          <_Text
            style={[
              styles.textStyle,
              {color: theme.colors.Gray, fontSize: 12},
            ]}>
            {description}
          </_Text>
          <TouchableOpacity
            style={[
              styles.btnStyle,
              {backgroundColor: buttonColor, zIndex: 10},
            ]}
            onPress={() => setVisible?.(false)}>
            <_Text align="center" color={theme.colors.white} fontweight="600">
              Close
            </_Text>
          </TouchableOpacity>
        </_View>
      </_View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#000000' + 99,
  },
  innerContainer: {
    backgroundColor: theme.colors.white,
    width: '90%',
    paddingBottom: 40,
    borderRadius: 15,
    elevation: 2,
  },
  topHeaderContainer: {
    height: 250,
    width: '100%',
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
  },
  logoImage: {
    position: 'absolute',
    alignSelf: 'center',
    top: 20,
    borderRadius: 15,
  },
  textStyle: {
    width: '70%',
    textAlign: 'center',
    alignSelf: 'center',
    marginTop: 15,
  },
  btnStyle: {
    width: 120,
    height: 30,
    alignSelf: 'center',
    marginTop: 30,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 5,
  },
});
