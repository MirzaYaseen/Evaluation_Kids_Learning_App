import React from 'react';
import {Pressable, ScrollView} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {_Image, _Text, _View} from '../../../../components';
import {theme} from '../../../../constants';
import {screenNames} from '../../../../navigation';

const SmallAlphabets = ({props}) => {

  const ButtonCard = (pro) => {
    return (
      <Pressable
        onPress={pro.onPress}
        style={{
          width: pro.Alphabet === 'y' || pro.Alphabet === 'z' ? 150 : 100,
          height: pro.Alphabet === 'y' || pro.Alphabet === 'z' ? 50 : 40,
          borderRadius: 30,
          marginTop: 30,
        }}>
        <LinearGradient
          start={{x: 0, y: 0}}
          end={{x: 1, y: 0}}
          colors={pro.Color}
          style={{
            width: pro.Alphabet === 'y' || pro.Alphabet === 'z' ? 150 : 100,
            height: pro.Alphabet === 'y' || pro.Alphabet === 'z' ? 50 : 40,
            borderRadius: 20,
            justifyContent: 'center',
          }}>
          <_View flexDirection="row" align="center">
            <_View
              style={{
                width: pro.Alphabet === 'y' || pro.Alphabet === 'z' ? 40 : 30,
                height: pro.Alphabet === 'y' || pro.Alphabet === 'z' ? 40 : 30,
                borderColor: theme.colors.white,
                borderWidth: 2,
                borderRadius: 20,
                marginLeft: 10,
                justifyContent: 'center',
              }}>
              <_Image
                source={pro.Image}
                style={{
                  width: pro.Alphabet === 'y' || pro.Alphabet === 'z' ? 30 : 20,
                  height:
                    pro.Alphabet === 'y' || pro.Alphabet === 'z' ? 30 : 20,
                  alignSelf: 'center',
                }}
                height={''}
                width={''}
              />
            </_View>
            <_View
              style={{
                // justifyContent: 'center',
                height: 35,
                width: 50,
              }}>
              <_Text
                style={{
                  color: theme.colors.white,
                  textAlign: 'center',
                  fontSize: 25,
                  marginLeft:
                    pro.Alphabet === 'y' || pro.Alphabet === 'z' ? 20 : 0,
                }}>
                {pro.Alphabet}
              </_Text>
            </_View>
          </_View>
        </LinearGradient>
      </Pressable>
    );
  };

  return (
    <ScrollView contentContainerStyle={{paddingBottom: 50, paddingTop: 10}}>
      <_View
        style={{
          flex: 1,
          flexDirection: 'row',
          flexWrap: 'wrap',
          justifyContent: 'space-around',
          paddingBottom: 20,
        }}>
        <ButtonCard
          Alphabet="a"
          Color={theme.colorArray.c1}
          Image={require('../../../../assets/images/AlphabetImages/apple.png')}
          onPress={() => {
            props.navigation.navigate(screenNames.freeHand.name, {
              Alphabet: 'a',
              Status:false
            });
          }}
        />

        <ButtonCard
          Alphabet="b"
          Color={theme.colorArray.c3}
          Image={require('../../../../assets/images/AlphabetImages/ball.png')}
          onPress={() => {
            props.navigation.navigate(screenNames.freeHand.name, {
              Alphabet: 'b',
              Status:false
            });
          }}
        />
        <ButtonCard
          Alphabet="c"
          Color={theme.colorArray.c2}
          Image={require('../../../../assets/images/AlphabetImages/cat.png')}
          onPress={() => {
            props.navigation.navigate(screenNames.freeHand.name, {
              Alphabet: 'c',
              Status:false
            });
          }}
        />
        <ButtonCard
          Alphabet="d"
          Color={theme.colorArray.c4}
          Image={require('../../../../assets/images/AlphabetImages/dolphin.png')}
          onPress={() => {
            props.navigation.navigate(screenNames.freeHand.name, {
              Alphabet: 'd',
              Status:false
            });
          }}
        />
        <ButtonCard
          Alphabet="e"
          Color={theme.colorArray.c5}
          Image={require('../../../../assets/images/AlphabetImages/elephent.png')}
          onPress={() => {
            props.navigation.navigate(screenNames.freeHand.name, {
              Alphabet: 'e',
              Status:false
            });
          }}
        />
        <ButtonCard
          Alphabet="f"
          Color={theme.colorArray.c6}
          Image={require('../../../../assets/images/AlphabetImages/fish.png')}
          onPress={() => {
            props.navigation.navigate(screenNames.freeHand.name, {
              Alphabet: 'f',
              Status:false
            });
          }}
        />

        <ButtonCard
          Alphabet="g"
          Color={theme.colorArray.c1}
          Image={require('../../../../assets/images/AlphabetImages/goat.png')}
          onPress={() => {
            props.navigation.navigate(screenNames.freeHand.name, {
              Alphabet: 'g',
              Status:false
            });
          }}
        />

        <ButtonCard
          Alphabet="h"
          Color={theme.colorArray.c2}
          Image={require('../../../../assets/images/AlphabetImages/house.png')}
          onPress={() => {
            props.navigation.navigate(screenNames.freeHand.name, {
              Alphabet: 'h',
              Status:false
            });
          }}
        />
        <ButtonCard
          Alphabet="i"
          Color={theme.colorArray.c3}
          Image={require('../../../../assets/images/AlphabetImages/iron.png')}
          onPress={() => {
            props.navigation.navigate(screenNames.freeHand.name, {
              Alphabet: 'i',
              Status:false
            });
          }}
        />
        <ButtonCard
          Alphabet="j"
          Color={theme.colorArray.c4}
          Image={require('../../../../assets/images/AlphabetImages/joker.png')}
          onPress={() => {
            props.navigation.navigate(screenNames.freeHand.name, {
              Alphabet: 'j',
              Status:false
            });
          }}
        />
        <ButtonCard
          Alphabet="k"
          Color={theme.colorArray.c5}
          Image={require('../../../../assets/images/AlphabetImages/king.png')}
          onPress={() => {
            props.navigation.navigate(screenNames.freeHand.name, {
              Alphabet: 'k',
              Status:false
            });
          }}
        />
        <ButtonCard
          Alphabet="l"
          Color={theme.colorArray.c6}
          Image={require('../../../../assets/images/AlphabetImages/lemon.png')}
          onPress={() => {
            props.navigation.navigate(screenNames.freeHand.name, {
              Alphabet: 'l',
              Status:false
            });
          }}
        />
        <ButtonCard
          Alphabet="m"
          Color={theme.colorArray.c1}
          Image={require('../../../../assets/images/AlphabetImages/mango.png')}
          onPress={() => {
            props.navigation.navigate(screenNames.freeHand.name, {
              Alphabet: 'm',
              Status:false
            });
          }}
        />
        <ButtonCard
          Alphabet="n"
          Color={theme.colorArray.c2}
          Image={require('../../../../assets/images/AlphabetImages/nest.png')}
          onPress={() => {
            props.navigation.navigate(screenNames.freeHand.name, {
              Alphabet: 'n',
              Status:false
            });
          }}
        />
        <ButtonCard
          Alphabet="o"
          Color={theme.colorArray.c3}
          Image={require('../../../../assets/images/AlphabetImages/orange.png')}
          onPress={() => {
            props.navigation.navigate(screenNames.freeHand.name, {
              Alphabet: 'o',
              Status:false
            });
          }}
        />
        <ButtonCard
          Alphabet="p"
          Color={theme.colorArray.c4}
          Image={require('../../../../assets/images/AlphabetImages/pen.png')}
          onPress={() => {
            props.navigation.navigate(screenNames.freeHand.name, {
              Alphabet: 'p',
              Status:false
            });
          }}
        />
        <ButtonCard
          Alphabet="q"
          Color={theme.colorArray.c5}
          Image={require('../../../../assets/images/AlphabetImages/queen.png')}
          onPress={() => {
            props.navigation.navigate(screenNames.freeHand.name, {
              Alphabet: 'q',
              Status:false
            });
          }}
        />
        <ButtonCard
          Alphabet="r"
          Color={theme.colorArray.c6}
          Image={require('../../../../assets/images/AlphabetImages/rabit.png')}
          onPress={() => {
            props.navigation.navigate(screenNames.freeHand.name, {
              Alphabet: 'r',
              Status:false
            });
          }}
        />
        <ButtonCard
          Alphabet="s"
          Color={theme.colorArray.c1}
          Image={require('../../../../assets/images/AlphabetImages/sun.png')}
          onPress={() => {
            props.navigation.navigate(screenNames.freeHand.name, {
              Alphabet: 's',
              Status:false
            });
          }}
        />
        <ButtonCard
          Alphabet="t"
          Color={theme.colorArray.c2}
          Image={require('../../../../assets/images/AlphabetImages/Tomato.png')}
          onPress={() => {
            props.navigation.navigate(screenNames.freeHand.name, {
              Alphabet: 't',
              Status:false
            });
          }}
        />
        <ButtonCard
          Alphabet="u"
          Color={theme.colorArray.c3}
          Image={require('../../../../assets/images/AlphabetImages/umbrella.png')}
          onPress={() => {
            props.navigation.navigate(screenNames.freeHand.name, {
              Alphabet: 'u',
              Status:false
            });
          }}
        />
        <ButtonCard
          Alphabet="v"
          Color={theme.colorArray.c4}
          Image={require('../../../../assets/images/AlphabetImages/van.png')}
          onPress={() => {
            props.navigation.navigate(screenNames.freeHand.name, {
              Alphabet: 'v',
              Status:false
            });
          }}
        />
        <ButtonCard
          Alphabet="w"
          Color={theme.colorArray.c5}
          Image={require('../../../../assets/images/AlphabetImages/window.png')}
          onPress={() => {
            props.navigation.navigate(screenNames.freeHand.name, {
              Alphabet: 'w',
              Status:false
            });
          }}
        />
        <ButtonCard
          Alphabet="x"
          Color={theme.colorArray.c6}
          Image={require('../../../../assets/images/AlphabetImages/xray.png')}
          onPress={() => {
            props.navigation.navigate(screenNames.freeHand.name, {
              Alphabet: 'x',
              Status:false
            });
          }}
        />
        <ButtonCard
          Alphabet="y"
          Color={theme.colorArray.c1}
          Image={require('../../../../assets/images/AlphabetImages/yellow.png')}
          onPress={() => {
            props.navigation.navigate(screenNames.freeHand.name, {
              Alphabet: 'y',
              Status:false
            });
          }}
        />
        <ButtonCard
          Alphabet="z"
          Color={theme.colorArray.c2}
          Image={require('../../../../assets/images/AlphabetImages/zip.png')}
          onPress={() => {
            props.navigation.navigate(screenNames.freeHand.name, {
              Alphabet: 'z',
              Status:false
            });
          }}
        />
      </_View>
    </ScrollView>
  );
};

export {SmallAlphabets};
