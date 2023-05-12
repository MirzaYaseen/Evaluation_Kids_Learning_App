import React from 'react';
import {Pressable, ScrollView} from 'react-native';
import {_Image, _Text, _View} from '../../../../components';
import LinearGradient from 'react-native-linear-gradient';
import {theme} from '../../../../constants';
import {screenNames} from '../../../../navigation';

const CapitalAlphabets = ({props}) => {
  const ButtonCard = (pro) => {
    return (
      <Pressable
        onPress={pro.onPress}
        style={{
          width: pro.Alphabet === 'Y' || pro.Alphabet === 'Z' ? 150 : 100,
          height: pro.Alphabet === 'Y' || pro.Alphabet === 'Z' ? 50 : 40,
          borderRadius: 30,
          marginTop: 30,
        }}>
        <LinearGradient
          start={{x: 0, y: 0}}
          end={{x: 1, y: 0}}
          colors={pro.Color}
          style={{
            width: pro.Alphabet === 'Y' || pro.Alphabet === 'Z' ? 150 : 100,
            height: pro.Alphabet === 'Y' || pro.Alphabet === 'Z' ? 50 : 40,
            borderRadius: 20,
            justifyContent: 'center',
          }}>
          <_View flexDirection="row" align="center">
            <_View
              style={{
                width: pro.Alphabet === 'Y' || pro.Alphabet === 'Z' ? 40 : 30,
                height: pro.Alphabet === 'Y' || pro.Alphabet === 'Z' ? 40 : 30,
                borderColor: theme.colors.white,
                borderWidth: 2,
                borderRadius: 20,
                marginLeft: 10,
                justifyContent: 'center',
              }}>
              <_Image
                source={pro.Image}
                style={{
                  width: pro.Alphabet === 'Y' || pro.Alphabet === 'Z' ? 30 : 20,
                  height:
                    pro.Alphabet === 'Y' || pro.Alphabet === 'Z' ? 30 : 20,
                  alignSelf: 'center',
                }}
                height={''}
                width={''}
              />
            </_View>
            <_View
              style={{
                height: 30,
                width: 50,
              }}>
              <_Text
                style={{
                  color: theme.colors.white,
                  textAlign: 'center',
                  fontSize: 25,
                  marginLeft:
                    pro.Alphabet === 'Y' || pro.Alphabet === 'Z' ? 20 : 0,
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
          //   flex: 1,
          flexDirection: 'row',
          flexWrap: 'wrap',
          justifyContent: 'space-around',
          paddingBottom: 20,
        }}>
        <ButtonCard
          Alphabet="A"
          Color={theme.colorArray.c1}
          Image={require('../../../../assets/images/AlphabetImages/apple.png')}
          onPress={() => {
            props.navigation.navigate(screenNames.freeHand.name, {
              Alphabet: 'A',
              Status:true
            });
          }}
        />

        <ButtonCard
          Alphabet="B"
          Color={theme.colorArray.c3}
          Image={require('../../../../assets/images/AlphabetImages/ball.png')}
          onPress={() => {
            props.navigation.navigate(screenNames.freeHand.name, {
              Alphabet: 'B',
              Status:true
            });
          }}
        />
        <ButtonCard
          Alphabet="C"
          Color={theme.colorArray.c2}
          Image={require('../../../../assets/images/AlphabetImages/cat.png')}
          onPress={() => {
            props.navigation.navigate(screenNames.freeHand.name, {
              Alphabet: 'C',
              Status:true
            });
          }}
        />
        <ButtonCard
          Alphabet="D"
          Color={theme.colorArray.c4}
          Image={require('../../../../assets/images/AlphabetImages/dolphin.png')}
          onPress={() => {
            props.navigation.navigate(screenNames.freeHand.name, {
              Alphabet: 'D',
              Status:true
            });
          }}
        />
        <ButtonCard
          Alphabet="E"
          Color={theme.colorArray.c5}
          Image={require('../../../../assets/images/AlphabetImages/elephent.png')}
          onPress={() => {
            props.navigation.navigate(screenNames.freeHand.name, {
              Alphabet: 'E',
              Status:true
            });
          }}
        />
        <ButtonCard
          Alphabet="F"
          Color={theme.colorArray.c6}
          Image={require('../../../../assets/images/AlphabetImages/fish.png')}
          onPress={() => {
            props.navigation.navigate(screenNames.freeHand.name, {
              Alphabet: 'F',
              Status:true
            });
          }}
        />

        <ButtonCard
          Alphabet="G"
          Color={theme.colorArray.c1}
          Image={require('../../../../assets/images/AlphabetImages/goat.png')}
          onPress={() => {
            props.navigation.navigate(screenNames.freeHand.name, {
              Alphabet: 'G',
              Status:true

            });
          }}
        />

        <ButtonCard
          Alphabet="H"
          Color={theme.colorArray.c2}
          Image={require('../../../../assets/images/AlphabetImages/house.png')}
          onPress={() => {
            props.navigation.navigate(screenNames.freeHand.name, {
              Alphabet: 'H',
              Status:true

            });
          }}
        />
        <ButtonCard
          Alphabet="I"
          Color={theme.colorArray.c3}
          Image={require('../../../../assets/images/AlphabetImages/iron.png')}
          onPress={() => {
            props.navigation.navigate(screenNames.freeHand.name, {
              Alphabet: 'I',
              Status:true

            });
          }}
        />
        <ButtonCard
          Alphabet="J"
          Color={theme.colorArray.c4}
          Image={require('../../../../assets/images/AlphabetImages/joker.png')}
          onPress={() => {
            props.navigation.navigate(screenNames.freeHand.name, {
              Alphabet: 'J',
              Status:true

            });
          }}
        />
        <ButtonCard
          Alphabet="K"
          Color={theme.colorArray.c5}
          Image={require('../../../../assets/images/AlphabetImages/king.png')}
          onPress={() => {
            props.navigation.navigate(screenNames.freeHand.name, {
              Alphabet: 'K',
              Status:true

            });
          }}
        />
        <ButtonCard
          Alphabet="L"
          Color={theme.colorArray.c6}
          Image={require('../../../../assets/images/AlphabetImages/lemon.png')}
          onPress={() => {
            props.navigation.navigate(screenNames.freeHand.name, {
              Alphabet: 'L',
              Status:true

            });
          }}
        />
        <ButtonCard
          Alphabet="M"
          Color={theme.colorArray.c1}
          Image={require('../../../../assets/images/AlphabetImages/mango.png')}
          onPress={() => {
            props.navigation.navigate(screenNames.freeHand.name, {
              Alphabet: 'M',
              Status:true
            });
          }}
        />
        <ButtonCard
          Alphabet="N"
          Color={theme.colorArray.c2}
          Image={require('../../../../assets/images/AlphabetImages/nest.png')}
          onPress={() => {
            props.navigation.navigate(screenNames.freeHand.name, {
              Alphabet: 'N',
              Status:true
            });
          }}
        />
        <ButtonCard
          Alphabet="O"
          Color={theme.colorArray.c3}
          Image={require('../../../../assets/images/AlphabetImages/orange.png')}
          onPress={() => {
            props.navigation.navigate(screenNames.freeHand.name, {
              Alphabet: 'O',
              Status:true
            });
          }}
        />
        <ButtonCard
          Alphabet="P"
          Color={theme.colorArray.c4}
          Image={require('../../../../assets/images/AlphabetImages/pen.png')}
          onPress={() => {
            props.navigation.navigate(screenNames.freeHand.name, {
              Alphabet: 'P',
              Status:true
            });
          }}
        />
        <ButtonCard
          Alphabet="Q"
          Color={theme.colorArray.c5}
          Image={require('../../../../assets/images/AlphabetImages/queen.png')}
          onPress={() => {
            props.navigation.navigate(screenNames.freeHand.name, {
              Alphabet: 'Q',
              Status:true
            });
          }}
        />
        <ButtonCard
          Alphabet="R"
          Color={theme.colorArray.c6}
          Image={require('../../../../assets/images/AlphabetImages/rabit.png')}
          onPress={() => {
            props.navigation.navigate(screenNames.freeHand.name, {
              Alphabet: 'R',
              Status:true

            });
          }}
        />
        <ButtonCard
          Alphabet="S"
          Color={theme.colorArray.c1}
          Image={require('../../../../assets/images/AlphabetImages/sun.png')}
          onPress={() => {
            props.navigation.navigate(screenNames.freeHand.name, {
              Alphabet: 'S',
              Status:true
            });
          }}
        />
        <ButtonCard
          Alphabet="T"
          Color={theme.colorArray.c2}
          Image={require('../../../../assets/images/AlphabetImages/Tomato.png')}
          onPress={() => {
            props.navigation.navigate(screenNames.freeHand.name, {
              Alphabet: 'T',
              Status:true
            });
          }}
        />
        <ButtonCard
          Alphabet="U"
          Color={theme.colorArray.c3}
          Image={require('../../../../assets/images/AlphabetImages/umbrella.png')}
          onPress={() => {
            props.navigation.navigate(screenNames.freeHand.name, {
              Alphabet: 'U',
              Status:true
            });
          }}
        />
        <ButtonCard
          Alphabet="V"
          Color={theme.colorArray.c4}
          Image={require('../../../../assets/images/AlphabetImages/van.png')}
          onPress={() => {
            props.navigation.navigate(screenNames.freeHand.name, {
              Alphabet: 'V',
              Status:true
            });
          }}
        />
        <ButtonCard
          Alphabet="W"
          Color={theme.colorArray.c5}
          Image={require('../../../../assets/images/AlphabetImages/window.png')}
          onPress={() => {
            props.navigation.navigate(screenNames.freeHand.name, {
              Alphabet: 'W',
              Status:true
            });
          }}
        />
        <ButtonCard
          Alphabet="X"
          Color={theme.colorArray.c6}
          Image={require('../../../../assets/images/AlphabetImages/xray.png')}
          onPress={() => {
            props.navigation.navigate(screenNames.freeHand.name, {
              Alphabet: 'X',
              Status:true
            });
          }}
        />
        <ButtonCard
          Alphabet="Y"
          Color={theme.colorArray.c1}
          Image={require('../../../../assets/images/AlphabetImages/yellow.png')}
          onPress={() => {
            props.navigation.navigate(screenNames.freeHand.name, {
              Alphabet: 'Y',
              Status:true
            });
          }}
        />
        <ButtonCard
          Alphabet="Z"
          Color={theme.colorArray.c2}
          Image={require('../../../../assets/images/AlphabetImages/zip.png')}
          onPress={() => {
            props.navigation.navigate(screenNames.freeHand.name, {
              Alphabet: 'Z',
              Status:true
            });
          }}
        />
      </_View>
    </ScrollView>
  );
};

export {CapitalAlphabets};
