import React, {useEffect, useState} from 'react';
import {
  Pressable,
  ScrollView,
  StatusBar,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import {
  _View,
  _Text,
  _Image,
  _VectorIcons,
} from '../../../components';
import {theme} from '../../../constants';
import {freeHaneLogo, DottedLogo, marginLogo} from '../../../assets/images';
import {screenNames} from '../../../navigation';

const Home = (props) => {
  const Card = (prop) => {
    let bgColor = prop.bgColor;
    let img = prop.img;
    return (
      <Pressable
        onPress={prop.onPress}
        style={{
          backgroundColor: bgColor,
          width: '80%',
          alignSelf: 'center',
          borderRadius: 25,
          marginBottom: 50,
          marginLeft: 20,
          elevation: 3,
        }}>
        <_View style={{flexDirection: 'row'}}>
          <_View
            height={200}
            width={'45%'}
            style={{
              borderRadius: 30,
            }}>
            <_View
              style={{
                top: -30,
                left: -30,
                borderRadius: 30,
                elevation: 1,
                backgroundColor: theme.colors.white,
              }}>
              <_Image
                source={img}
                style={{
                  width: '100%',
                  height: '100%',
                  borderRadius: 30,
                }}
                resizeMode="center"
                height={''}
                width={''}
              />
            </_View>
          </_View>
          <_View>
            <_View margins={{marginTop: 20, marginLeft: -20}}>
              <_Text numberOfLines={1} style={styles.headingTextStyle}>
                {prop.heading}
              </_Text>
            </_View>

            <_View style={{marginLeft: -10}}>
              <_Text style={styles.headingSecondryTextStyle}>
                {'(A-Z & a-z)'}
              </_Text>
            </_View>

            <_View style={{marginLeft: -10, marginTop: 20, width: '75%'}}>
              <_Text
                style={[
                  styles.headingSecondryTextStyle,
                  {
                    textAlign: 'justify',
                  },
                ]}>
                {prop.discription}
              </_Text>
            </_View>
            <TouchableOpacity
              onPress={prop.onPress}
              style={{
                marginLeft: -10,
                marginTop: 20,
                alignItems: 'flex-end',
                width: '75%',
              }}>
              <_VectorIcons
                type={'Ionicons'}
                name="arrow-forward"
                size={30}
                color={theme.colors.white}
              />
            </TouchableOpacity>
          </_View>
        </_View>
      </Pressable>
    );
  };

  return (
    <ScrollView
      contentContainerStyle={{
        backgroundColor: theme.colors.smokedWhite,
        justifyContent: 'center',
        alignItems: 'center',
        paddingVertical: 40,
      }}>
      <StatusBar
        animated={true}
        backgroundColor={theme.colors.smokedWhite}
        barStyle={'dark-content'}
      />
      <Card
        onPress={() => {
          props.navigation.navigate(screenNames.SelectDotedAlphabet.name);
        }}
        bgColor={theme.colors.CardDot}
        img={DottedLogo}
        heading={'Dotted Patteren'}
        discription="Writting practice for dotted patterens of capital A to Z and small a to z "
      />

      <Card
        onPress={() => {
          props.navigation.navigate(screenNames.MarginLineSelectAlphabets.name);
        }}
        bgColor={theme.colors.CardMargin}
        img={marginLogo}
        heading={'Margin Line'}
        discription="Writting practice for margin line of capital A to Z and small a to z "
      />

      <Card
        onPress={() => {
          props.navigation.navigate(screenNames.selectAlphabets.name);
        }}
        bgColor={theme.colors.CardFreeHand}
        img={freeHaneLogo}
        heading={'Free Hand Practice'}
        discription="Writting practice for free hand of capital A to Z and small a to z "
      />
    </ScrollView>
  );
};


export {Home};

const styles = StyleSheet.create({
  main: {
    flex: 1,
    backgroundColor: theme.colors.white,
    paddingBottom: 50,
  },
  headingTextStyle: {
    color: theme.colors.white,
    fontSize: 20,
    textAlign: 'left',
    fontWeight: '600',
  },
  headingSecondryTextStyle: {
    color: theme.colors.white,
    fontSize: 12,
    textAlign: 'left',
  },
});
