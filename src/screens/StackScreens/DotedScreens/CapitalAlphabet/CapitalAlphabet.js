import React, {FC} from 'react';
import {Pressable, StyleSheet} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {_View, _Text} from '../../../../components';
import {theme} from '../../../../constants';
import {screenNames} from '../../../../navigation';

export const CapitalAlphabet = (props) => {
  console.log('-=-==-     -=-=-  Itemss ==  ',props.item.navigation.navigate)
  const AlphabetCard = (nav) => {
    return (
      <LinearGradient colors={nav.color} style={styles.cardView}>
        <Pressable style={styles.cardPressable} onPress={nav.onPress}>
          <_Text style={styles.cardText}>{nav.title}</_Text>
        </Pressable>
      </LinearGradient>
    );
  };
  return (
    <_View paddings={{padding: 15}}>
      <_View style={styles.innerContainer}>
        <AlphabetCard
          title="A"
          color={theme.colorArray.c1}
          onPress={() => {
            props.item.navigation.navigate(screenNames.DotedAlphabetMainScreen.name, {
              Alphabet: 'A'
            });
          }}
        />
        <AlphabetCard
          title="B"
          color={theme.colorArray.c2}
          onPress={() => {
            props.item.navigation.navigate(screenNames.DotedAlphabetMainScreen.name, {
              Alphabet: 'B',
            });
          }}
        />
        <AlphabetCard
          title="C"
          color={theme.colorArray.c3}
          onPress={() => {
            props.item.navigation.navigate(screenNames.DotedAlphabetMainScreen.name, {
              Alphabet: 'C',
            });
          }}
        />
        <AlphabetCard
          title="D"
          color={theme.colorArray.c4}
          onPress={() => {
            props.item.navigation.navigate(screenNames.DotedAlphabetMainScreen.name, {
              Alphabet: 'D',
            });
          }}
        />
      </_View>
      <_View style={styles.innerContainer}>
        <AlphabetCard
          title="E"
          color={theme.colorArray.c5}
          onPress={() => {
            props.item.navigation.navigate(screenNames.DotedAlphabetMainScreen.name, {
              Alphabet: 'E',
            });
          }}
        />
        <AlphabetCard
          title="F"
          color={theme.colorArray.c6}
          onPress={() => {
            props.item.navigation.navigate(screenNames.DotedAlphabetMainScreen.name, {
              Alphabet: 'F',
            });
          }}
        />
        <AlphabetCard
          title="G"
          color={theme.colorArray.c1}
          onPress={() => {
            props.item.navigation.navigate(screenNames.DotedAlphabetMainScreen.name, {
              Alphabet: 'G',
            });
          }}
        />
        <AlphabetCard
          title="H"
          color={theme.colorArray.c2}
          onPress={() => {
            props.item.navigation.navigate(screenNames.DotedAlphabetMainScreen.name, {
              Alphabet: 'H',
            });
          }}
        />
      </_View>

      <_View style={styles.innerContainer}>
        <AlphabetCard
          title="I"
          color={theme.colorArray.c3}
          onPress={() => {
            props.item.navigation.navigate(screenNames.DotedAlphabetMainScreen.name)
          }}
        />
        <AlphabetCard
          title="J"
          color={theme.colorArray.c4}
          onPress={() => {
            props.item.navigation.navigate(screenNames.DotedAlphabetMainScreen.name, {
              Alphabet: 'J',
            });
          }}
        />
        <AlphabetCard
          title="K"
          color={theme.colorArray.c5}
          onPress={() => {
            props.item.navigation.navigate(screenNames.DotedAlphabetMainScreen.name, {
              Alphabet: 'K',
            });
          }}
        />
        <AlphabetCard
          title="L"
          color={theme.colorArray.c6}
          onPress={() => {
            props.item.navigation.navigate(screenNames.DotedAlphabetMainScreen.name, {
              Alphabet: 'L',
            });
          }}
        />
      </_View>

      <_View style={styles.innerContainer}>
        <AlphabetCard
          title="M"
          color={theme.colorArray.c1}
          onPress={() => {
            props.item.navigation.navigate(screenNames.DotedAlphabetMainScreen.name, {
              Alphabet: 'M',
            });
          }}
        />
        <AlphabetCard
          title="N"
          color={theme.colorArray.c2}
          onPress={() => {
            props.item.navigation.navigate(screenNames.DotedAlphabetMainScreen.name, {
              Alphabet: 'N',
            });
          }}
        />
        <AlphabetCard
          title="O"
          color={theme.colorArray.c3}
          onPress={() => {
            props.item.navigation.navigate(screenNames.DotedAlphabetMainScreen.name, {
              Alphabet: 'O',
            });
          }}
        />
        <AlphabetCard
          title="P"
          color={theme.colorArray.c4}
          onPress={() => {
            props.item.navigation.navigate(screenNames.DotedAlphabetMainScreen.name, {
              Alphabet: 'P',
            });
          }}
        />
      </_View>

      <_View style={styles.innerContainer}>
        <AlphabetCard
          title="Q"
          color={theme.colorArray.c5}
          onPress={() => {
            props.item.navigation.navigate(screenNames.DotedAlphabetMainScreen.name, {
              Alphabet: 'Q',
            });
          }}
        />
        <AlphabetCard
          title="R"
          color={theme.colorArray.c6}
          onPress={() => {
            props.item.navigation.navigate(screenNames.DotedAlphabetMainScreen.name, {
              Alphabet: 'R',
            });
          }}
        />
        <AlphabetCard
          title="S"
          color={theme.colorArray.c1}
          onPress={() => {
            props.item.navigation.navigate(screenNames.DotedAlphabetMainScreen.name, {
              Alphabet: 'S',
            });
          }}
        />
        <AlphabetCard
          title="T"
          color={theme.colorArray.c2}
          onPress={() => {
            props.item.navigation.navigate(screenNames.DotedAlphabetMainScreen.name, {
              Alphabet: 'T',
            });
          }}
        />
      </_View>

      <_View style={styles.innerContainer}>
        <AlphabetCard
          title="U"
          color={theme.colorArray.c3}
          onPress={() => {
            props.item.navigation.navigate(screenNames.DotedAlphabetMainScreen.name, {
              Alphabet: 'U',
            });
          }}
        />
        <AlphabetCard
          title="V"
          color={theme.colorArray.c4}
          onPress={() => {
            props.item.navigation.navigate(screenNames.DotedAlphabetMainScreen.name, {
              Alphabet: 'V',
            });
          }}
        />
        <AlphabetCard
          title="W"
          color={theme.colorArray.c5}
          onPress={() => {
            props.item.navigation.navigate(screenNames.DotedAlphabetMainScreen.name, {
              Alphabet: 'W',
            });
          }}
        />
        <AlphabetCard
          title="X"
          color={theme.colorArray.c6}
          onPress={() => {
            props.item.navigation.navigate(screenNames.DotedAlphabetMainScreen.name, {
              Alphabet: 'X',
            });
          }}
        />
      </_View>

      <_View style={styles.innerContainer}>
        <AlphabetCard
          title="Y"
          color={theme.colorArray.c1}
          onPress={() => {
            props.item.navigation.navigate(screenNames.DotedAlphabetMainScreen.name, {
              Alphabet: 'Y',
            });
          }}
        />
        <AlphabetCard
          title="Z"
          color={theme.colorArray.c2}
          onPress={() => {
            props.item.navigation.navigate(screenNames.DotedAlphabetMainScreen.name, {
              Alphabet: 'Z',
            });
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
