import React, {FC, useState} from 'react';
import {FlatList, Pressable, StyleSheet, ScrollView} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {_Text, _View, Screen, MainHeader} from '../../../../components';
import {theme} from '../../../../constants';
import {screenNames} from '../../../../navigation';
import { CapitalAlphabet } from './CapitalAlphabet';
import { SmallAlphabet } from './SmallAlphabet';

export const SelectMarginAlphabet = (props) => {
  const capitalAlphabets = ['A', 'B', 'C'];

  const [isTabSelect, setIsTabSelect] = useState(true);
  const TopTab = () => {
    let colorSelect = theme.colors.CardMargin;
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
            backgroundColor: isTabSelect ? colorSelect : theme.colors.white,
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
    <ScrollView>
    <Screen
      StatusbackgroundColor={theme.colors.CardMargin}
      bottomSafe
      backgroundColor={theme.colors.background}>
      <MainHeader
        name={screenNames.MarginLineSelectAlphabets.name}
        Namecolor={theme.colors.white}
        backgroundColor={theme.colors.CardMargin}
        Iconname="arrow-back"
        OnLeftPress={props?.navigation?.goBack}
        height={50}
        size={20}
      />
      <TopTab />

      {
        isTabSelect? <CapitalAlphabet props={props} /> : <SmallAlphabet props={props} /> 
      }
    </Screen>
    </ScrollView>
  );
};
