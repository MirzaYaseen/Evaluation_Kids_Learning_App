import React, {FC, useState} from 'react';
import {Pressable, StyleSheet} from 'react-native';
import {MainHeader, Screen, _Text, _View} from '../../../../components';
import {theme} from '../../../../constants';
import { CapitalAlphabet } from '../CapitalAlphabet';
import { SmallAlphabet } from '../SmallAlphabet';

export const SelectDotScreen = (props) => {
  const [isTabSelect, setIsTabSelect] = useState(true);

  const TopTab = () => {  
    let colorSelect = theme.colors.CardDot;
    return (
      <_View
        style={{
          height: 50,
          backgroundColor: theme.colors.white,
          elevation: 5,
          width: '80%',
          alignSelf: 'center',
          borderRadius: 40,
          marginTop: 10,
          flexDirection: 'row',
        }}>
        <Pressable
          onPress={() => {
            setIsTabSelect(true);
          }}
          style={{
            width: '50%',
            height: 50,
            backgroundColor: isTabSelect
              ? theme.colors.CardDot
              : theme.colors.white,
            borderTopLeftRadius: 20,
            borderBottomLeftRadius: 20,
            justifyContent: 'center',
          }}>
          <_Text
            style={{
              fontSize: 16,
              textAlign: 'center',
              fontWeight: '500',
              color: isTabSelect ? theme.colors.white : colorSelect,
            }}>
            Capital Alphabets
          </_Text>
        </Pressable>
        <Pressable
          onPress={() => {
            setIsTabSelect(false);
          }}
          style={{
            width: '50%',
            height: 50,
            backgroundColor: isTabSelect ? theme.colors.white : colorSelect,
            borderTopRightRadius: 20,
            borderBottomRightRadius: 20,
            justifyContent: 'center',
          }}>
          <_Text
            style={{
              fontSize: 16,
              textAlign: 'center',
              fontWeight: '500',
              color: isTabSelect ? colorSelect : theme.colors.white,
            }}>
            Small Alphabets
          </_Text>
        </Pressable>
      </_View>
    );
  };
  return (
    <Screen
      backgroundColor={theme.colors.background}
      StatusbackgroundColor={theme.colors.CardDot}>
      <MainHeader
        OnLeftPress={() => props.navigation.goBack()}
        height={45}
        name={'Dotted Pattern'}
        type={'Ionicons'}
        size={24}
        Namecolor={theme.colors.white}
        color={theme.colors.white}
        Iconname={'arrow-back'}
        backgroundColor={theme.colors.CardDot}
      />
      <TopTab />

      {isTabSelect? <CapitalAlphabet  item={props} />:<SmallAlphabet item={props} />}
      
    </Screen>
  );
};

const styles = StyleSheet.create({
 
});
