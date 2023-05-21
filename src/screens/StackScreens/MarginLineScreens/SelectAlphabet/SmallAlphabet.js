import React, {FC} from 'react';
import {Pressable, StyleSheet, ScrollView} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {_Text, _View} from '../../../../components';
import {theme} from '../../../../constants';
import {screenNames} from '../../../../navigation';


export const SmallAlphabet = ({props}) => {
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
          title="a"
          onPress={() => {
            props.navigation.navigate(screenNames.marginLine.name, {
              Alphabet: 'a',
              status:false
            });
          }}
          color={theme.colorArray.c1}
        />
        <AlphabetCard
          title="b"
          color={theme.colorArray.c2}
          onPress={() => {
            props.navigation.navigate(screenNames.marginLine.name, {
              Alphabet: 'b',
              status:false
            });
          }}
        />
        <AlphabetCard
          title="c"
          onPress={() => {
            props.navigation.navigate(screenNames.marginLine.name, {
              Alphabet: 'c',
              status:false
            });
          }}
          color={theme.colorArray.c3}
        />
        <AlphabetCard
          title="d"
          onPress={() => {
            props.navigation.navigate(screenNames.marginLine.name, {
              Alphabet: 'd',
              status:false
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
          title="e"
          onPress={() => {
            props.navigation.navigate(screenNames.marginLine.name, {
              Alphabet: 'e',
              status:false
            });
          }}
          color={theme.colorArray.c5}
        />
        <AlphabetCard
          title="f"
          onPress={() => {
            props.navigation.navigate(screenNames.marginLine.name, {
              Alphabet: 'f',
              status:false
            });
          }}
          color={theme.colorArray.c6}
        />
        <AlphabetCard
          title="g"
          onPress={() => {
            props.navigation.navigate(screenNames.marginLine.name, {
              Alphabet: 'g',
              status:false
            });
          }}
          color={theme.colorArray.c1}
        />
        <AlphabetCard
          title="h"
          onPress={() => {
            props.navigation.navigate(screenNames.marginLine.name, {
              Alphabet: 'h',
              status:false
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
          title="i"
          onPress={() => {
            props.navigation.navigate(screenNames.marginLine.name, {
              Alphabet: 'i',
              status:false
            });
          }}
          color={theme.colorArray.c3}
        />
        <AlphabetCard
          title="j"
          onPress={() => {
            props.navigation.navigate(screenNames.marginLine.name, {
              Alphabet: 'j',
              status:false
            });
          }}
          color={theme.colorArray.c4}
        />
        <AlphabetCard
          title="k"
          onPress={() => {
            props.navigation.navigate(screenNames.marginLine.name, {
              Alphabet: 'k',
              status:false
            });
          }}
          color={theme.colorArray.c5}
        />
        <AlphabetCard
          title="l"
          onPress={() => {
            props.navigation.navigate(screenNames.marginLine.name, {
              Alphabet: 'l',
              status:false
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
          title="m"
          onPress={() => {
            props.navigation.navigate(screenNames.marginLine.name, {
              Alphabet: 'm',
              status:false
            });
          }}
          color={theme.colorArray.c1}
        />
        <AlphabetCard
          title="n"
          onPress={() => {
            props.navigation.navigate(screenNames.marginLine.name, {
              Alphabet: 'n',
              status:false
            });
          }}
          color={theme.colorArray.c2}
        />
        <AlphabetCard
          title="o"
          onPress={() => {
            props.navigation.navigate(screenNames.marginLine.name, {
              Alphabet: 'o',
              status:false
            });
          }}
          color={theme.colorArray.c3}
        />
        <AlphabetCard
          title="p"
          onPress={() => {
            props.navigation.navigate(screenNames.marginLine.name, {
              Alphabet: 'p',
              status:false
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
          title="q"
          onPress={() => {
            props.navigation.navigate(screenNames.marginLine.name, {
              Alphabet: 'q',
              status:false
            });
          }}
          color={theme.colorArray.c5}
        />
        <AlphabetCard
          title="r"
          onPress={() => {
            props.navigation.navigate(screenNames.marginLine.name, {
              Alphabet: 'r',
              status:false
            });
          }}
          color={theme.colorArray.c6}
        />
        <AlphabetCard
          title="s"
          onPress={() => {
            props.navigation.navigate(screenNames.marginLine.name, {
              Alphabet: 's',
              status:false
            });
          }}
          color={theme.colorArray.c1}
        />
        <AlphabetCard
          title="t"
          onPress={() => {
            props.navigation.navigate(screenNames.marginLine.name, {
              Alphabet: 't',
              status:false
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
          title="u"
          onPress={() => {
            props.navigation.navigate(screenNames.marginLine.name, {
              Alphabet: 'u',
              status:false
            });
          }}
          color={theme.colorArray.c3}
        />
        <AlphabetCard
          title="v"
          onPress={() => {
            props.navigation.navigate(screenNames.marginLine.name, {
              Alphabet: 'v',
              status:false
            });
          }}
          color={theme.colorArray.c4}
        />
        <AlphabetCard
          title="w"
          onPress={() => {
            props.navigation.navigate(screenNames.marginLine.name, {
              Alphabet: 'w',
              status:false
            });
          }}
          color={theme.colorArray.c5}
        />
        <AlphabetCard
          title="x"
          onPress={() => {
            props.navigation.navigate(screenNames.marginLine.name, {
              Alphabet: 'x',
              status:false
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
          title="y"
          onPress={() => {
            props.navigation.navigate(screenNames.marginLine.name, {
              Alphabet: 'y',
              status:false
            });
          }}
          color={theme.colorArray.c1}
        />
        <AlphabetCard
          title="z"
          onPress={() => {
            props.navigation.navigate(screenNames.marginLine.name, {
              Alphabet: 'z',
              status:false
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
    marginBottom:30,
    marginTop: 25,
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
