import React, {FC} from 'react';
import {_Image, _Text, _VectorIcons, _View} from '.';
import {Modal, Pressable, StyleSheet, TouchableOpacity} from 'react-native';
import {theme} from '../constants';
import {fonts} from '../utils';


export const _ImageShowModal= ({
  isVisible,
  setIsVisible,
  image,
  themeColor = theme.colors.Primary,
  buttonText = 'Colse',
  onButtonPress,
}) => {
  return (
    <Modal visible={isVisible} transparent={true} animationType={'fade'}>
      <_View style={styles.container}>
        <_View style={styles.innerContainer}>
          <_View style={[styles.header, {backgroundColor: themeColor}]}>
            <_Text style={styles.headerText}>Image Viewer</_Text>
            <Pressable
              style={styles.closeBtn}
              onPress={() => setIsVisible?.(false)}>
              <_VectorIcons
                name="close"
                type="AntDesign"
                size={20}
                color={theme.colors.white}
              />
            </Pressable>
          </_View>

          <_View style={styles.imageContainer}>
            <_Image height={'100%'} width={'100%'} source={image} />
          </_View>
          <TouchableOpacity
            style={[styles.buttonStyle, {backgroundColor: themeColor}]}
            onPress={() => {
              onButtonPress?.(false);
            }}>
            <_Text style={styles.buttonText}>{buttonText}</_Text>
          </TouchableOpacity>
        </_View>
      </_View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#000000' + 90,
  },
  innerContainer: {
    backgroundColor: theme.colors.background,
    width: '90%',
    borderRadius: 15,
    paddingBottom: 20,
  },
  header: {
    justifyContent: 'center',
    height: 40,
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
  },
  headerText: {
    textAlign: 'center',
    fontSize: 20,
    fontFamily: fonts.Lato_Bold,
    color: theme.colors.white,
  },
  closeBtn: {
    width: 40,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 4,
    position: 'absolute',
    right: 15,
  },
  imageContainer: {
    width: '95%',
    height: 500,
    backgroundColor: theme.colors.white,
    marginTop: 10,
    borderRadius: 15,
    alignSelf: 'center',
  },
  buttonStyle: {
    width: '50%',
    height: 45,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    marginTop: 10,
    borderRadius: 8,
  },
  buttonText: {
    textAlign: 'center',
    color: theme.colors.white,
    fontSize:16
  },
});
