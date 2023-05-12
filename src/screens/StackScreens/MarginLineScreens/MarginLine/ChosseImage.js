import React from 'react';
import {NoImage} from '../../../../assets/images/AlphabetImages';
import {_Image, _Text, _View} from '../../../../components';
import { lottieAnimation } from "../../../../assets/lottieAnimation";
import {SetImage} from './setImage';
export const ChosseImage = ({Alphabet}) => {
  console.log(Alphabet);
  switch (Alphabet) {
    case 'A':
    case 'a':
      return (
        <SetImage
          alphabet={Alphabet}
          image={lottieAnimation.a}
          soundName="a.mp3"
          word="Apple"
          textColor={'red'}
        />
      );
    case 'B':
    case 'b':
      return (
        <SetImage
          alphabet={Alphabet}
          image={lottieAnimation.b}
          soundName="b.mp3"
          word="Ball"
          textColor={'#c2d216'}
        />
      );
    case 'C':
    case 'c':
      return (
        <SetImage
          alphabet={Alphabet}
          image={lottieAnimation.c}
          soundName="c.mp3"
          word="Cat"
          textColor={'#ffae00'}
        />
      );
    case 'D':
    case 'd':
      return (
        <SetImage
          alphabet={Alphabet}
          image={lottieAnimation.d}
          soundName="d.mp3"
          word="Dolphin"
          textColor={'#00a0d4'}
        />
      );
    case 'E':
    case 'e':
      return (
        <SetImage
          alphabet={Alphabet}
          image={lottieAnimation.e}
          soundName="e.mp3"
          word="Elephent"
          textColor={'#f7b4d8'}
        />
      );
    case 'F':
    case 'f':
      return (
        <SetImage
          alphabet={Alphabet}
          image={lottieAnimation.f}
          soundName="f.mp3"
          word="Fish"
          textColor={'#f75c08'}
        />
      );
    case 'G':
    case 'g':
      return (
        <SetImage
          alphabet={Alphabet}
          image={lottieAnimation.g}
          soundName="g.mp3"
          word="Gun"
          textColor={'#aa560f'}
        />
      );
    case 'H':
    case 'h':
      return (
        <SetImage
          alphabet={Alphabet}
          image={lottieAnimation.h}
          soundName="h.mp3"
          word="House"
          textColor={'#de232f'}
        />
      );
    case 'I':
    case 'i':
      return (
        <SetImage
          alphabet={Alphabet}
          image={lottieAnimation.i}
          soundName="i.mp3"
          word="Iron"
          textColor={'#d9ac68'}
        />
      );
    case 'J':
    case 'j':
      return (
        <SetImage
          alphabet={Alphabet}
          image={lottieAnimation.j}
          soundName="j.mp3"
          word="Joker"
          textColor={'#fb8000'}
        />
      );
    case 'K':
    case 'k':
      return (
        <SetImage
          alphabet={Alphabet}
          image={lottieAnimation.k}
          soundName="k.mp3"
          word="King"
          textColor={'#d41f22'}
        />
      );
    case 'L':
    case 'l':
      return (
        <SetImage
          alphabet={Alphabet}
          image={lottieAnimation.l}
          soundName="l.mp3"
          word="Lemon"
          textColor={'#b08211'}
        />
      );
    case 'M':
    case 'm':
      return (
        <SetImage
          alphabet={Alphabet}
          image={lottieAnimation.m}
          soundName="m.mp3"
          word="Mango"
          textColor={'#fccb00'}
        />
      );
    case 'N':
    case 'n':
      return (
        <SetImage
          alphabet={Alphabet}
          image={lottieAnimation.n}
          soundName="n.mp3"
          word="Nest"
          textColor={'#a37607'}
        />
      );
    case 'O':
    case 'o':
      return (
        <SetImage
          alphabet={Alphabet}
          image={lottieAnimation.o}
          soundName="o.mp3"
          word="Orange"
          textColor={'#eb9f2a'}
        />
      );
    case 'P':
    case 'p':
      return (
        <SetImage
          alphabet={Alphabet}
          image={lottieAnimation.p}
          soundName="p.mp3"
          word="Pen"
          textColor={'#c54852'}
        />
      );
    case 'Q':
    case 'q':
      return (
        <SetImage
          alphabet={Alphabet}
          image={lottieAnimation.q}
          soundName="q.mp3"
          word="Queen"
          textColor={'#f79605'}
        />
      );
    case 'R':
    case 'r':
     return <SetImage
      alphabet={Alphabet}
      image={lottieAnimation.r}
      soundName="r.mp3"
      word="Rabit"
      textColor={'#f56400'}
    />
    
    case 'S':
    case 's':
      return <SetImage
      alphabet={Alphabet}
      image={lottieAnimation.s}
      soundName="s.mp3"
      word="Sun"
      textColor={'#eb6b19'}
    />
    case 'T':
    case 't':
      return <SetImage
      alphabet={Alphabet}
      image={lottieAnimation.t}
      soundName="t.mp3"
      word="Tomato"
      textColor={'#f73131'}
    />
    case 'U':
    case 'u':
      return <SetImage
      alphabet={Alphabet}
      image={lottieAnimation.u}
      soundName="u.mp3"
      word="Umbrella"
      textColor={'#0078bc'}
    />
    case 'V':
    case 'v':
      return <SetImage
      alphabet={Alphabet}
      image={lottieAnimation.v}
      soundName="v.mp3"
      word="Van"
      textColor={'#c0010f'}
    />  
    case 'W':
    case 'w':
      return <SetImage
      alphabet={Alphabet}
      image={lottieAnimation.w}
      soundName="w.mp3"
      word="Window"
      textColor={'#d61177'}
    /> 
    case 'X':
    case 'x':
      return <SetImage
      alphabet={Alphabet}
      image={lottieAnimation.x}
      soundName="x.mp3"
      word="X-Ray"
      textColor={'#004d69'}
    />   

    case 'Y':
    case 'y':
      return <SetImage
      alphabet={Alphabet}
      image={lottieAnimation.y}
      soundName="y.mp3"
      word="Yellow"
      textColor={'#fbda54'}
    />   
    case 'Z':
    case 'z':
      return <SetImage
      alphabet={Alphabet}
      image={lottieAnimation.z}
      soundName="z.mp3"
      word="Zip"
      textColor={'#ec5654'}
    /> 
  }
  return (
    <_View
      height={120}
      width={'100%'}
      flexDirection="row"
      align="center"
      margins={{marginLeft: 10}}>
      <_View
        width={130}
        height={130}
        justify="center"
        align="center"
        style={{
          backgroundColor: '#999999' + 99,
          borderRadius: 10,
        }}>
        <_Image
          height={110}
          width={110}
          source={NoImage}
          resizeMode="stretch"
        />
      </_View>
      <_View width={'60%'}>
        <_Text
          color="black"
          size={30}
          numberOfLines={2}
          fontweight="600"
          align="center"
          margins={{marginLeft: 0}}>
          Something
        </_Text>
        <_Text
          color="black"
          size={20}
          numberOfLines={2}
          fontweight="600"
          align="center">
          Gone Wrong
        </_Text>
      </_View>
    </_View>
  );
};
