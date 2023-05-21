import React, {FC} from 'react';
import {Pressable, StyleSheet, ScrollView} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {_Text, _View} from '../../../../components';
import {theme} from '../../../../constants';
import {screenNames} from '../../../../navigation';

export const CapitalAlphabet= ({props}) => {
  const AlphabetCard = (item) => {
    return (
      <LinearGradient colors={item?.color} style={styles.alphabetCardContainer}>
        <Pressable style={styles.innerCircle} onPress={item.onPress}>
          <_Text style={styles.alphabetText}>{item?.title}</_Text>
        </Pressable>
      </LinearGradient>
    );
  };

  return (
    <ScrollView>

    
    <_View>
      <_View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          paddingHorizontal: 20,
        }}>
        <AlphabetCard
          title="A"
          onPress={() => {
            props.navigation.navigate(screenNames.marginLine.name, {
              Alphabet: 'A',
              status:true
            });
          }}
          color={theme.colorArray.c1}
        />
        <AlphabetCard
          title="B"
          color={theme.colorArray.c2}
          onPress={() => {
            props.navigation.navigate(screenNames.marginLine.name, {
              Alphabet: 'B',
              status:true

            });
          }}
        />
        <AlphabetCard
          title="C"
          onPress={() => {
            props.navigation.navigate(screenNames.marginLine.name, {
              Alphabet: 'C',
              status:true

            });
          }}
          color={theme.colorArray.c3}
        />
        <AlphabetCard
          title="D"
          onPress={() => {
            props.navigation.navigate(screenNames.marginLine.name, {
              Alphabet: 'D',
              status:true

            });
          }}
          color={theme.colorArray.c4}
        />
      </_View>
      <_View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          paddingHorizontal: 20,
        }}>
        <AlphabetCard
          title="E"
          onPress={() => {
            props.navigation.navigate(screenNames.marginLine.name, {
              Alphabet: 'E',
              status:true

            });
          }}
          color={theme.colorArray.c5}
        />
        <AlphabetCard
          title="F"
          onPress={() => {
            props.navigation.navigate(screenNames.marginLine.name, {
              Alphabet: 'F',
              status:true
            });
          }}
          color={theme.colorArray.c6}
        />
        <AlphabetCard
          title="G"
          onPress={() => {
            props.navigation.navigate(screenNames.marginLine.name, {
              Alphabet: 'G',
              status:true
            });
          }}
          color={theme.colorArray.c1}
        />
        <AlphabetCard
          title="H"
          onPress={() => {
            props.navigation.navigate(screenNames.marginLine.name, {
              Alphabet: 'H',
              status:true
            });
          }}
          color={theme.colorArray.c2}
        />
      </_View>
      <_View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          paddingHorizontal: 20,
        }}>
        <AlphabetCard
          title="I"
          onPress={() => {
            props.navigation.navigate(screenNames.marginLine.name, {
              Alphabet: 'I',
              status:true
            });
          }}
          color={theme.colorArray.c3}
        />
        <AlphabetCard
          title="J"
          onPress={() => {
            props.navigation.navigate(screenNames.marginLine.name, {
              Alphabet: 'J',
              status:true
            });
          }}
          color={theme.colorArray.c4}
        />
        <AlphabetCard
          title="K"
          onPress={() => {
            props.navigation.navigate(screenNames.marginLine.name, {
              Alphabet: 'K',
              status:true
            });
          }}
          color={theme.colorArray.c5}
        />
        <AlphabetCard
          title="L"
          onPress={() => {
            props.navigation.navigate(screenNames.marginLine.name, {
              Alphabet: 'L',
              status:true
            });
          }}
          color={theme.colorArray.c6}
        />
      </_View>
      <_View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          paddingHorizontal: 20,
        }}>
        <AlphabetCard
          title="M"
          onPress={() => {
            props.navigation.navigate(screenNames.marginLine.name, {
              Alphabet: 'M',
              status:true
            });
          }}
          color={theme.colorArray.c1}
        />
        <AlphabetCard
          title="N"
          onPress={() => {
            props.navigation.navigate(screenNames.marginLine.name, {
              Alphabet: 'N',
              status:true
            });
          }}
          color={theme.colorArray.c2}
        />
        <AlphabetCard
          title="O"
          onPress={() => {
            props.navigation.navigate(screenNames.marginLine.name, {
              Alphabet: 'O',
              status:true
            });
          }}
          color={theme.colorArray.c3}
        />
        <AlphabetCard
          title="P"
          onPress={() => {
            props.navigation.navigate(screenNames.marginLine.name, {
              Alphabet: 'P',
              status:true
            });
          }}
          color={theme.colorArray.c4}
        />
      </_View>

      <_View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          paddingHorizontal: 20,
        }}>
        <AlphabetCard
          title="Q"
          onPress={() => {
            props.navigation.navigate(screenNames.marginLine.name, {
              Alphabet: 'Q',
              status:true
            });
          }}
          color={theme.colorArray.c5}
        />
        <AlphabetCard
          title="R"
          onPress={() => {
            props.navigation.navigate(screenNames.marginLine.name, {
              Alphabet: 'R',
              status:true
            });
          }}
          color={theme.colorArray.c6}
        />
        <AlphabetCard
          title="S"
          onPress={() => {
            props.navigation.navigate(screenNames.marginLine.name, {
              Alphabet: 'S',
              status:true
            });
          }}
          color={theme.colorArray.c1}
        />
        <AlphabetCard
          title="T"
          onPress={() => {
            props.navigation.navigate(screenNames.marginLine.name, {
              Alphabet: 'T',
              status:true
            });
          }}
          color={theme.colorArray.c2}
        />
      </_View>
      <_View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          paddingHorizontal: 20,
        }}>
        <AlphabetCard
          title="U"
          onPress={() => {
            props.navigation.navigate(screenNames.marginLine.name, {
              Alphabet: 'U',
              status:true
            });
          }}
          color={theme.colorArray.c3}
        />
        <AlphabetCard
          title="V"
          onPress={() => {
            props.navigation.navigate(screenNames.marginLine.name, {
              Alphabet: 'V',
              status:true
            });
          }}
          color={theme.colorArray.c4}
        />
        <AlphabetCard
          title="W"
          onPress={() => {
            props.navigation.navigate(screenNames.marginLine.name, {
              Alphabet: 'W',
              status:true
            });
          }}
          color={theme.colorArray.c5}
        />
        <AlphabetCard
          title="X"
          onPress={() => {
            props.navigation.navigate(screenNames.marginLine.name, {
              Alphabet: 'X',
              status:true
            });
          }}
          color={theme.colorArray.c6}
        />
      </_View>

      <_View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-around',
          paddingHorizontal: 100,
        }}>
        <AlphabetCard
          title="Y"
          onPress={() => {
            props.navigation.navigate(screenNames.marginLine.name, {
              Alphabet: 'Y',
              status:true
            });
          }}
          color={theme.colorArray.c1}
        />
        <AlphabetCard
          title="Z"
          onPress={() => {
            props.navigation.navigate(screenNames.marginLine.name, {
              Alphabet: 'Z',
              status:true
            });
          }}
          color={theme.colorArray.c2}
        />
      </_View>
    </_View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  alphabetCardContainer: {
    width: 60,
    height: 60,
    borderRadius: 30,
    marginTop: 25,
    marginBottom:40,
    justifyContent: 'center',
    alignItems: 'center',
  },
  innerCircle: {
    borderWidth: 2,
    borderColor: theme.colors.white,
    width: 50,
    height: 50,
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
  },
  alphabetText: {
    color: theme.colors.white,
    fontSize: 25,
    fontWeight: '600',
  },
});
