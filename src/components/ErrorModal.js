import React, { FC } from 'react';
import { _View, _Text, _VectorIcons, _Image,  } from '../components';
import { Modal, StyleSheet, Image, Button,TouchableOpacity } from 'react-native';
import {errorLogo,successLogo,warningLogo,errorModalCurve} from '../assets/images'
import { theme } from '../constants';


export const _ErrorModal= ({
  isVisible,
  isError,
  isSuccess,
  isWarning,
  description,
  setVisible,
}) => {
  const buttonColor = isError
  
    ? theme.colors.error
    : isWarning
    ? theme.colors.warning
    : theme.colors.successBtn;
  return (
    <Modal visible={isVisible} transparent={true} animationType='fade'>
      <_View style={styles.container}>
        <_View style={styles.innerContainer}>
          <_View style={styles.topHeaderContainer}>
            <Image
              source={errorModalCurve}
              style={{
                width: '100%',
                height: '100%',
                resizeMode: 'stretch',
                borderRadius: 15,
              }}
            />
            <_Image
              source={isWarning? warningLogo:isError?errorLogo:successLogo}
              width={90}
              height={90}
              style={styles.logoImage}
            />
          </_View>
          <_Text
            style={[styles.textStyle, { color: buttonColor,fontSize:24,fontWeight:'500'}]}
          >
            { isError ? 'Error' : isWarning ? 'Warning!' : 'Success'}
          </_Text>
          <_Text style={[styles.textStyle, { color: theme.colors.Gray,fontSize:12 }]}>
            {description}
          </_Text>
          <TouchableOpacity style={[
            styles.btnStyle, { backgroundColor: buttonColor }
            ]}
            onPress={() => setVisible(false)}
            >
            <_Text align='center' color={theme.colors.white} fontweight='600' >Close</_Text>
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
    backgroundColor: theme.colors.smokedWhite,
    width: '80%',
    paddingBottom: 40,
    borderRadius: 15,
    elevation:2
  },
  topHeaderContainer: {
    height: 150,
    width: '100%',
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
  },
  logoImage: {
    position: 'absolute',
    alignSelf: 'center',
    top: 20,
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
    alignItems:'center',
    justifyContent:'center',
    borderRadius:5
  },
});
