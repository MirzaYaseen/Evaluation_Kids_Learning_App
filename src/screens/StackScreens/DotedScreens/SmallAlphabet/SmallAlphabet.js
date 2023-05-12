import React, {FC} from 'react';
import {Pressable, StyleSheet} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {_View, _Text} from '../../../../components';
import {theme} from '../../../../constants';
import { screenNames } from '../../../../navigation';

export const SmallAlphabet = ({item}) => {
  const AlphabetCard = (item) => {
    return (
      <LinearGradient colors={item.color} style={styles.cardView}>
        <Pressable style={styles.cardPressable} onPress={item.onPress}>
          <_Text style={styles.cardText}>{item.title}</_Text>
        </Pressable>
      </LinearGradient>
    );
  };
  return (
    <_View paddings={{padding: 15}}>
      <_View style={styles.innerContainer}>
        <AlphabetCard
          title="a"
          color={theme.colorArray.c1}
          onPress={() => {
            item.navigation.navigate(screenNames.DotedSmalllAlphabetMainScreen.name, {Alphabet: 'a'});
          }}
        />
        <AlphabetCard
          title="b"
          color={theme.colorArray.c2}
          onPress={() => {
            item.navigation.navigate(screenNames.DotedSmalllAlphabetMainScreen.name, {Alphabet: 'b'});
          }}
        />
        <AlphabetCard
          title="c"
          color={theme.colorArray.c3}
          onPress={() => {
            item.navigation.navigate(screenNames.DotedSmalllAlphabetMainScreen.name, {Alphabet: 'c'});
          }}
        />
        <AlphabetCard
          title="d"
          color={theme.colorArray.c4}
          onPress={() => {
            item.navigation.navigate(screenNames.DotedSmalllAlphabetMainScreen.name, {Alphabet: 'd'});
          }}
        />
      </_View>
      <_View style={styles.innerContainer}>
        <AlphabetCard
          title="e"
          color={theme.colorArray.c5}
          onPress={() => {
            item.navigation.navigate(screenNames.DotedSmalllAlphabetMainScreen.name, {Alphabet: 'e'});
          }}
        />
        <AlphabetCard
          title="f"
          color={theme.colorArray.c6}
          onPress={() => {
            item.navigation.navigate(screenNames.DotedSmalllAlphabetMainScreen.name, {Alphabet: 'f'});
          }}
        />
        <AlphabetCard
          title="g"
          color={theme.colorArray.c1}
          onPress={() => {
            item.navigation.navigate(screenNames.DotedSmalllAlphabetMainScreen.name, {Alphabet: 'g'});
          }}
        />
        <AlphabetCard
          title="h"
          color={theme.colorArray.c2}
          onPress={() => {
            item.navigation.navigate(screenNames.DotedSmalllAlphabetMainScreen.name, {Alphabet: 'h'});
          }}
        />
      </_View>

      <_View style={styles.innerContainer}>
        <AlphabetCard
          title="i"
          color={theme.colorArray.c3}
          onPress={() => {
            item.navigation.navigate(screenNames.DotedSmalllAlphabetMainScreen.name, {Alphabet: 'i'});
          }}
        />
        <AlphabetCard
          title="j"
          color={theme.colorArray.c4}
          onPress={() => {
            item.navigation.navigate(screenNames.DotedSmalllAlphabetMainScreen.name, {Alphabet: 'j'});
          }}
        />
        <AlphabetCard
          title="k"
          color={theme.colorArray.c5}
          onPress={() => {
            item.navigation.navigate(screenNames.DotedSmalllAlphabetMainScreen.name, {Alphabet: 'k'});
          }}
        />
        <AlphabetCard
          title="l"
          color={theme.colorArray.c6}
          onPress={() => {
            item.navigation.navigate(screenNames.DotedSmalllAlphabetMainScreen.name, {Alphabet: 'l'});
          }}
        />
      </_View>

      <_View style={styles.innerContainer}>
        <AlphabetCard
          title="m"
          color={theme.colorArray.c1}
          onPress={() => {
            item.navigation.navigate(screenNames.DotedSmalllAlphabetMainScreen.name, {Alphabet: 'm'});
          }}
        />
        <AlphabetCard
          title="n"
          color={theme.colorArray.c2}
          onPress={() => {
            item.navigation.navigate(screenNames.DotedSmalllAlphabetMainScreen.name, {Alphabet: 'n'});
          }}
        />
        <AlphabetCard
          title="o"
          color={theme.colorArray.c3}
          onPress={() => {
            item.navigation.navigate(screenNames.DotedSmalllAlphabetMainScreen.name, {Alphabet: 'o'});
          }}
        />
        <AlphabetCard
          title="p"
          color={theme.colorArray.c4}
          onPress={() => {
            item.navigation.navigate(screenNames.DotedSmalllAlphabetMainScreen.name, {Alphabet: 'p'});
          }}
        />
      </_View>

      <_View style={styles.innerContainer}>
        <AlphabetCard
          title="q"
          color={theme.colorArray.c5}
          onPress={() => {
            item.navigation.navigate(screenNames.DotedSmalllAlphabetMainScreen.name, {Alphabet: 'q'});
          }}
        />
        <AlphabetCard
          title="r"
          color={theme.colorArray.c6}
          onPress={() => {
            item.navigation.navigate(screenNames.DotedSmalllAlphabetMainScreen.name, {Alphabet: 'r'});
          }}
        />
        <AlphabetCard
          title="s"
          color={theme.colorArray.c1}
          onPress={() => {
            item.navigation.navigate(screenNames.DotedSmalllAlphabetMainScreen.name, {Alphabet: 's'});
          }}
        />
        <AlphabetCard
          title="t"
          color={theme.colorArray.c2}
          onPress={() => {
            item.navigation.navigate(screenNames.DotedSmalllAlphabetMainScreen.name, {Alphabet: 't'});
          }}
        />
      </_View>

      <_View style={styles.innerContainer}>
        <AlphabetCard
          title="u"
          color={theme.colorArray.c3}
          onPress={() => {
            item.navigation.navigate(screenNames.DotedSmalllAlphabetMainScreen.name, {Alphabet: 'u'});
          }}
        />
        <AlphabetCard
          title="v"
          color={theme.colorArray.c4}
          onPress={() => {
            item.navigation.navigate(screenNames.DotedSmalllAlphabetMainScreen.name, {Alphabet: 'v'});
          }}
        />
        <AlphabetCard
          title="w"
          color={theme.colorArray.c5}
          onPress={() => {
            item.navigation.navigate(screenNames.DotedSmalllAlphabetMainScreen.name, {Alphabet: 'w'});
          }}
        />
        <AlphabetCard
          title="x"
          color={theme.colorArray.c6}
          onPress={() => {
            item.navigation.navigate(screenNames.DotedSmalllAlphabetMainScreen.name, {Alphabet: 'x'});
          }}
        />
      </_View>

      <_View style={styles.innerContainer}>
        <AlphabetCard
          title="y"
          color={theme.colorArray.c1}
          onPress={() => {
            item.navigation.navigate(screenNames.DotedSmalllAlphabetMainScreen.name, {Alphabet: 'y'});
          }}
        />
        <AlphabetCard
          title="z"
          color={theme.colorArray.c2}
          onPress={() => {
            item.navigation.navigate(screenNames.DotedSmalllAlphabetMainScreen.name, {Alphabet: 'z'});
          }}
        />
      </_View>
    </_View>
  );
};

const styles = StyleSheet.create({
  cardView: {
    width: 80,
    height: 45,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 5,
  },
  cardPressable: {
    width: 78,
    height: 43,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 5,
    borderWidth: 2,
    borderColor: theme.colors.white,
  },
  cardText: {
    fontSize: 25,
    fontWeight: '600',
    color: theme.colors.white,
  },
  innerContainer: {
    marginTop: 35,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  container: {},
});
