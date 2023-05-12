import React from 'react';
import { Pressable, ImageBackground } from 'react-native';
import { _Image, _Text, _View } from '../../../../components';
import { speaker } from '../../../../assets/images/componentImages';
import Sound from 'react-native-sound';
import { marginLine } from '../../../../utils';
import LottieView from 'lottie-react-native';

export const SetImage = ({
  alphabet,
  word,
  soundName,
  image,
  textColor,
}) => {
  const play = (voice) => {
    let sound = new Sound(voice, Sound.MAIN_BUNDLE, (err) => {
      if (err) {
        console.log('=========== Error ====== ', err);
        return;
      }
      sound.play();
    });
    console.log(sound);
  };

  return (
    <_View
      height={120}
      width={'100%'}
      flexDirection="row"
      align="center"
      margins={{ marginLeft: 10 }}
    >
      <_View
        width={130}
        height={130}
        justify="center"
        align="center"
        style={{
          backgroundColor: '#999999' + 99,
          borderRadius: 10,
        }}
      >
        <LottieView
          autoPlay
          loop
          source={image}
        />
      </_View>
      <_View width={'47%'}>
        <ImageBackground
          source={{ uri: marginLine }}
          style={{
            width: 100,
            height: 80,
            alignSelf: 'center',
            opacity: 0.8,
            marginLeft: 20
          }}
        >
          <_Text
            color={textColor}
            size={60}
            align="center"
            fontweight="600"
            margins={{ marginTop: -9 }}
          >
            {alphabet}
          </_Text>
        </ImageBackground>
        <_Text
          color={textColor}
          size={25}
          align="center"
          fontweight="600"
          margins={{ marginLeft: 25 }}
        >
          for {word}
        </_Text>
      </_View>
      <Pressable
        onPress={() => {
          play(soundName);
        }}
        style={{
          width: 50,
          height: 50,
          alignSelf: 'flex-end',
        }}
      >
        <_Image
          source={speaker}
          height={'100%'}
          width={'100%'}
          resizeMode="contain"
        />
      </Pressable>
    </_View>
  );
};
