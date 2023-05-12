import React, {useState} from 'react';
import {Pressable, StatusBar} from 'react-native';
import {_View, _Text, Screen, MainHeader} from '../../../components';
import {theme} from '../../../constants';
import {CapitalAlphabets, SmallAlphabets} from '../..';

const SelectAlphabets = (props) => {
  console.log('-------- ====== -------- SelectAlphabet ',props)
  const [isTabSelect, setIsTabSelect] = useState(true);
  const TopTab = () => {
    let colorSelect = theme.colors.CardFreeHand;
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
    <Screen
      backgroundColor={theme.colors.background}
      StatusbackgroundColor={theme.colors.CardFreeHand}>
      <MainHeader
        OnLeftPress={() => props.navigation.goBack()}
        height={45}
        name={'Free Hand'}
        type={'Ionicons'}
        size={24}
        Namecolor={theme.colors.white}
        color={theme.colors.white}
        Iconname={'arrow-back'}
        backgroundColor={theme.colors.CardFreeHand}
      />
      <TopTab />
      {isTabSelect ? (
        <CapitalAlphabets props={props} />
      ) : (
        <SmallAlphabets props={props} />
      )}
    </Screen>
  );
};

export {SelectAlphabets};
