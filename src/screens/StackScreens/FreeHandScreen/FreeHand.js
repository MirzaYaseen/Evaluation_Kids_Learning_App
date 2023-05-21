import React, {useRef, useState} from 'react';
import {
  _View,
  _Text,
  Screen,
  MainHeader,
  _Image,
  _ErrorModal,
  _LoadingModal,
  _ImageShowModal,
  _AnimatedModal,
} from '../../../components';
import {BaseUrl, theme} from '../../../constants';
import {ChosseImage} from './ChosseImage';
import {StyleSheet} from 'react-native';
import Signature from 'react-native-signature-canvas';
import Sound from 'react-native-sound';
import axios from 'axios';
// import { A1 } from '../../../utils';
const FreeHand = (props) => {
  console.log('Free Hand props :  ', props);
  const [isVisible, setIsVisible] = useState(false);
  const [isError, setIsError] = useState(false);
  const [errorDiscription, setErrorDiscription] = useState('');
  const [canvasImage, setCanvasImage] = useState();
  const [showImage, setShowImage] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isEmpty, setIsEmpty] = useState(false);
  const ref = useRef();
  const parms = {
    Alphabet: props.route.params.Alphabet,
    status: props.route.params.Status,
  };
  const imgWidth = '100%';
  const imgHeight = 400;

  console.log('-=-=-=-=-=-=-=  ',parms?.status)
  const styleCanvas = `.m-signature-pad--footer
              .button {
                background-color: ${theme.colors.CardFreeHand};
                color: ${theme.colors.white};
              }
              body,html {
                width: ${imgWidth}px; height: ${imgHeight}px;
                background-color:white};
              }
              .m-signature-pad--body {color:red}
              `;

  const getResult = async (param) => {
    setIsLoading(true);
    console.log('params ===============  ', param.toString());
    let endpoint = parms.status? 'api/predict':'api/predictSmall';
    await axios
      .post(
        BaseUrl + endpoint,
        {base64: param},
        {
          headers: {'Content-Type': 'multipart/form-data'},
        },
      )
      .then(res => {
        console.log('response ==>  ', res?.data);
        if (res?.data == parms?.Alphabet) {
          setIsError(false);
          setIsEmpty(false);
          setErrorDiscription(`Congratulations 🎉🎉🎉🎉`);
          play('celebration.mp3');
          setIsVisible(true);
          setIsLoading(false);
          return;
        }
        setIsError(true);
        setIsEmpty(false);
        setErrorDiscription(
          `Oops! Wrong Answer 😔 please draw ${parms?.Alphabet} `,
        );
        play('wrong.mp3');
        setIsVisible(true);
        setIsLoading(false);
      })
      .catch(err => {
        setIsLoading(false);
        console.log('errorr ==========>  ', err.response?.data);
      });
    setIsLoading(false);
  };
  const handleSignatureSave = ({points}) => {
    console.log('points are =====  ', points);
  };

  const handleEmpty = () => {
    setIsEmpty(true);
    setIsError(false);
    setErrorDiscription(`oops! its Empty 😭 Draw something first !`);
    play('wrong.mp3');
    setIsVisible(true);
  };

  const handleClear = () => {
    console.log('clear success!');
  };

  const handleOK = (signature) => {
    setCanvasImage(signature);
    console.log('Image ---- ', signature);
    // setShowImage(true);
    getResult(signature.replace('data:image/png;base64,', ''));
  };

  const handleData = (data) => {
    // console.log('dataaa ============= ', data);
  };
  const onDraw = () => {
    console.log('draw heree  ');
  };

  const play = (voice) => {
    let sound = new Sound(voice, Sound.MAIN_BUNDLE, err => {
      if (err) {
        console.log('=========== Error ====== ', err);
        return;
      }
      sound.play();
    });
    console.log(sound);
  };

  return (
    <Screen
      backgroundColor={theme.colors.background}
      StatusbackgroundColor={theme.colors.CardFreeHand}>
      <MainHeader
        OnLeftPress={() => props.navigation.goBack()}
        height={45}
        name={'Free Hand Practice'}
        type={'Ionicons'}
        size={24}
        Namecolor={theme.colors.white}
        color={theme.colors.white}
        Iconname={'arrow-back'}
        backgroundColor={theme.colors.CardFreeHand}
      />
      <_View
        height={150}
        width="95%"
        justify="center"
        style={{
          backgroundColor: theme.colors.smokedWhite,
          alignSelf: 'center',
          marginTop: 10,
          borderRadius: 10,
          shadowColor: '#000',
          shadowOffset: {
            width: 0,
            height: 1,
          },
          shadowOpacity: 0.18,
          shadowRadius: 1.0,
          elevation: 1,
        }}>
        <ChosseImage Alphabet={parms.Alphabet} />
      </_View>
      <_View style={styles.canvasContainer}>
        <Signature
          ref={ref}
          onSave={handleSignatureSave}
          onOK={handleOK}
          onEmpty={handleEmpty}
          onClear={handleClear}
          onGetData={handleData}
          descriptionText={''}
          webStyle={styleCanvas}
          onDraw={onDraw}
          backgroundColor={'white'}
          clearText="Erase"
          confirmText="Result"
          dotSize={10}
          maxWidth={10}
          minWidth={10}
        />
      </_View>
      <_AnimatedModal
        isError={isError}
        description={errorDiscription}
        isVisible={isVisible}
        setVisible={setIsVisible}
        isEmpty={isEmpty}
      />
      {isLoading ? (
        <_LoadingModal isVisible={true} color={theme.colors.CardFreeHand} />
      ) : null}

      <_ImageShowModal
        isVisible={showImage}
        setIsVisible={setShowImage}
        image={{uri: canvasImage}}
        buttonText="Close"
        themeColor={theme.colors.CardFreeHand}
        onButtonPress={setShowImage}
      />
    </Screen>
  );
};

export {FreeHand};
const styles = StyleSheet.create({
  canvasContainer: {
    flex: 1,
    marginTop: 5,
    width: '95%',
    alignSelf: 'center',
    backgroundColor: 'white',
    borderRadius: 10,
    elevation: 1,
    marginBottom: 5,
  },
  bottomTab: {
    height: 65,
    flexDirection: 'row',
    backgroundColor: theme.colors.ActiveBadge,
    alignItems: 'center',
    marginBottom: 35,
    justifyContent: 'space-around',
  },
  btnContainer: {
    width: 40,
    height: 40,
    backgroundColor: theme.colors.background,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
