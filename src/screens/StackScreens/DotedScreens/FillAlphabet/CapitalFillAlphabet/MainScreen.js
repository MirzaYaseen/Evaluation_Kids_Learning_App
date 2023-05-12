import React, {FC, useEffect, useRef, useState} from 'react';
import {
  _View,
  _Text,
  Screen,
  MainHeader,
  _Image,
  _AnimatedModal,
  _LoadingModal,
} from '../../../../../components';
import {BaseUrl, theme} from '../../../../../constants';
import {A} from './A';
import LottieView from 'lottie-react-native';
import {lottieAnimation} from '../../../../../assets/lottieAnimation';
import {ImageBackground, StyleSheet, TouchableOpacity} from 'react-native';
import * as DotImg from '../../../../../assets';
import SignatureView from 'react-native-signature-canvas';
import Sound from 'react-native-sound';
import axios from 'axios';

export const MainScreen = (props) => {
  const [cruntImage, setCuttentImage] = useState();
  const [canvasImage, setCanvasImage] = useState();
  const [showImage, setShowImage] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isEmpty, setIsEmpty] = useState(false);
  const [index, setIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const [isError, setIsError] = useState(false);
  const [errorDiscription, setErrorDiscription] = useState('');
  const [isButtonVisible, setIsButtonVisible] = useState(true);
  const [alphabetIndex,setAlphabetIndex]= useState(0)
  const [flag,setFlag] = useState (false)
  const [alphabet,setAlphabet] = useState('')
  const imgWidth = '100%';
  const imgHeight = 375;
  const ref = useRef();
  const styleCanvas = `.m-signature-pad--footer
              .button {
                background-color: ${theme.colors.CardDot};
                color: ${theme.colors.white};
              }
              body,html {
                width: ${imgWidth}px; height: ${imgHeight}px;
                background-color:${theme.colors.white}};
              }
              .m-signature-pad--body {
              }`;

  useEffect(() => {
    setCuttentImage(DotImg.A_Dot);
    setAlphabet('A')
    setIndex(0)
    console.log('index in First UseEffect ==>  ',index);
    
  }, []);

  function getImage(index) {
    switch (index) {
      case 0:
        setAlphabet('A');
        setCuttentImage(DotImg.A_Dot);
        return;
      case 1:
        setAlphabet('B');
        setCuttentImage(DotImg.B_Dot);
        return;
      case 2:
        setAlphabet('C');
        setCuttentImage(DotImg.C_Dot);
        return;
      case 3:
        setAlphabet('D');
        setCuttentImage(DotImg.D_Dot);
        return;
      case 4:
        setAlphabet('E');
        setCuttentImage(DotImg.E_Dot);
        return;
      case 5:
        setAlphabet('F');
        setCuttentImage(DotImg.F_Dot);
        return;
      case 6:
        setAlphabet('G');
        setCuttentImage(DotImg.G_Dot);
        return;
      case 7:
        setAlphabet('H');
        setCuttentImage(DotImg.H_Dot);
        return;
      case 8:
        setAlphabet('I');
        setCuttentImage(DotImg.I_Dot);
        return;
      case 9:
        setAlphabet('J');
        setCuttentImage(DotImg.J_Dot);
        return;
      case 10:
        setAlphabet('K');
        setCuttentImage(DotImg.K_Dot);
        return;
      case 11:
        setAlphabet('L');
        setCuttentImage(DotImg.L_Dot);
        return;
      case 12:
        setAlphabet('M');
        setCuttentImage(DotImg.M_Dot);
        return;
      case 13:
        setAlphabet('N');
        setCuttentImage(DotImg.N_Dot);
        return;
      case 14:
        setAlphabet('O');
        setCuttentImage(DotImg.O_Dot);
        return;
      case 15:
        setAlphabet('P');
        setCuttentImage(DotImg.P_Dot);
        return;
      case 16:
        setAlphabet('Q');
        setCuttentImage(DotImg.Q_Dot);
        return;
      case 17:
        setAlphabet('R');
        setCuttentImage(DotImg.R_Dot);
        return;
      case 18:
        setAlphabet('S');
        setCuttentImage(DotImg.S_Dot);
        return;
      case 19:
        setAlphabet('T');
        setCuttentImage(DotImg.T_Dot);
        return;
      case 20:
        setAlphabet('U');
        setCuttentImage(DotImg.U_Dot);
        return;
      case 21:
        setAlphabet('V');
        setCuttentImage(DotImg.V_Dot);
        return;
      case 22:
        setAlphabet('W');
        setCuttentImage(DotImg.W_Dot);
        return;
      case 23:
        setAlphabet('X');
        setCuttentImage(DotImg.X_Dot);
        return;
      case 24:
        setAlphabet('Y');
        setCuttentImage(DotImg.Y_Dot);
        return;
      case 25:
        setAlphabet('Z');
        setCuttentImage(DotImg.Z_Dot);
        return;
    }
  }

  useEffect(()=>{
    getImage(index)
    console.log('index in Alphabet render UseEffect ==>  ',alphabet);
    console.log('index in Index render UseEffect ==>  ',index);
  },[index])



  const handleEmpty = () => {
    setIsButtonVisible(true);
    setIsError(false);
    setIsEmpty(true);
    setErrorDiscription(`oops! its Empty 😭 Draw something first !`);
    play('wrong.mp3');
    setIsVisible(true);
  };
  const handleClear = () => {
    console.log('clear success!');
    setIsButtonVisible(true);
  };

  const getResult = async (param) => {
    setIsLoading(true);
    // console.log('params ===============  ', param.toString());
    let endpoint = 'api/predict';
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
        if (res?.data == alphabet ) {
          console.log('-=-===- in ',res?.data)
          setIsError(false);
          setIsEmpty(false);
          setErrorDiscription(`Congratulations 🎉🎉🎉🎉`);
          play('celebration.mp3');
          setIsVisible(true);
          setIsLoading(false);
          setIsButtonVisible(false);
          return;
        }
        setIsError(true);
        setIsEmpty(false);
        setIsButtonVisible(true);
        setErrorDiscription(`Oops! Wrong Answer 😔 please draw`);
        play('wrong.mp3');
        setIsVisible(true);
        setIsLoading(false);
      })
      .catch(err => {
        setIsLoading(false);
        setIsButtonVisible(true);
        // console.log('errorr ==========>  ', err.response?.data);
      });
    setIsLoading(false);
  };

  const handleOK = (signature) => {
    setCanvasImage(signature);
    // console.log('Image ---- ', signature);
    // setShowImage(true);
    getResult(signature.replace('data:image/png;base64,', ''));
  };

  const handleData = (data) => {
    // console.log('data =-=-=-=-=-=-=-=-=- ', data);
    let x = JSON.parse(data);
    // x[0]?.points.map((item: any) => {
    //   console.log(item);
    //   if(parseFloat(item.y.toFixed(2)) < parseFloat(LineTop.toFixed(2))){
    //     console.log(item.y.toFixed(2),' is Above The Line ',LineTop.toFixed(2));

    //   }else if(parseFloat(item.y.toFixed(2)) > parseFloat(Line3.toFixed(2))){
    //     console.log(parseFloat(item.y.toFixed(2)),' is Below The Line ',Line3.toFixed(2));
    //   }
    // });
  };

  function onDraw() {
    console.log('draw heree  ');
    // ref.current
  }

const play = (voice)=>{
  let sound = new Sound(voice,Sound.MAIN_BUNDLE,err=>{
    if(err){
      console.log('========= Error ============')
      return
    }
    sound.play()
  })
}
  // const play = (voice: string) => {
  //   let sound = new Sound(voice, Sound.MAIN_BUNDLE, err => {
  //     if (err) {
  //       console.log('=========== Error ====== ', err);
  //       return;
  //     }
  //     sound.play();
  //   });
  //   console.log(sound);
  // };

  // console.log(props);
  // console.log('navigation Props === > ', props?.route?.param?.Alphabet);
  return (
    <Screen
      backgroundColor={theme.colors.background}
      StatusbackgroundColor={theme.colors.CardDot}>
      <MainHeader
        name="Dotted Alphabet"
        // Iconname="arrow-back"
        size={25}
        Namecolor={theme.colors.white}
        color={theme.colors.white}
        backgroundColor={theme.colors.CardDot}
        height={40}
        OnLeftPress={() => props.navigation.goBack()}
      />
      <ImageBackground
        style={{
          width: '100%',
          flex: 1,
        }}
        source={require('../../../../../assets/images/ApplicationImage/DotedBg.jpg')}
        imageStyle={{height: '100%', width: '100%', resizeMode: 'stretch'}}>
        <_View
          style={{
            position: 'absolute',
            width: '100%',
            height: 300,
            justifyContent: 'center',
            top: -100,
          }}>
          <LottieView autoPlay loop source={lottieAnimation.airplan} />
        </_View>
        <_View
          style={{
            position: 'absolute',
            width: 140,
            height: 250,
            marginTop: 35,
            left: 30,
          }}>
          <LottieView autoPlay loop source={lottieAnimation.baloons} />
        </_View>
        <_View
          style={{
            position: 'absolute',
            width: 140,
            height: 250,
            marginTop: 35,
            right: 30,
          }}>
          <LottieView autoPlay loop source={lottieAnimation.A_Animation2} />
        </_View>
        <_View
          style={{
            backgroundColor: theme.colors.CardDot + 30,
            width: '85%',
            height: 450,
            borderRadius: 15,
            alignItems: 'center',
            justifyContent: 'center',
            padding: 10,
            bottom: 140,
            position: 'absolute',
            alignSelf: 'center',
          }}>
          {/* <TouchableOpacity
            style={{
              position: 'absolute',
              backgroundColor: 'red',
              height: 100,
              zIndex: 1,
              width: 100,
            }}
            onPress={() => play('wrong.mp3')}></TouchableOpacity> */}
          <SignatureView
            ref={ref}
            onOK={handleOK}
            onEmpty={handleEmpty}
            onClear={handleClear}
            onGetData={handleData}
            descriptionText={''}
            webStyle={styleCanvas}
            // onBegin={}
            // onDraw={onDraw}
            // onEnd={}
            // bgSrc={marginLine}
            backgroundColor={theme.colors.white}
            penColor={theme.colors.black}
            clearText="Erase"
            confirmText="Result"
            bgHeight={370}
            bgWidth={310}
            dotSize={25}
            maxWidth={25}
            minWidth={25}
            style={{borderRadius: 20}}
          />
          {/* <TouchableOpacity
              style={{
                position: 'absolute',
                backgroundColor: 'red',
                height: 100,
                zIndex: 10,
                width: 100,
              }}
              onPress={() => play('wrong.mp3')}></TouchableOpacity> */}
          <_View
            width={310}
            height={384}
            style={{
              position: 'absolute', 
              top: 10,
              // paddingTop:20,
              // backgroundColor:'red'
              }}>
            <_Image
              source={cruntImage}
              resizeMode="stretch"
              height={'100%'}
              width={'100%'}
            />
          </_View>
        </_View>
        <_View style={Styles.btnContainer} >
       {
        index>0?(
        <TouchableOpacity
          onPress={()=>{
            ref?.current.clearSignature()
            setFlag(false)
            setIndex(index-1)
          }}
          style={[
            Styles.btnNext,
            {
              backgroundColor:theme.colors.CardDot,
            },
          ]}
          >
          <_Text style={Styles.btnNextText}>Back</_Text>
        </TouchableOpacity>
        ):null
      }
      {
        index != 25?(
          <TouchableOpacity
          onPress={()=>{
            ref?.current.clearSignature()
            setFlag(true)
            setIndex(index+1)
          }}
          style={[
            Styles.btnNext,
            {
              backgroundColor: isButtonVisible
                ? theme.colors.Gray
                : theme.colors.CardDot,
            },
          ]}
          disabled={isButtonVisible}>
          <_Text style={Styles.btnNextText}>Next</_Text>
        </TouchableOpacity>
        ):null
      }

        </_View>

      </ImageBackground>

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
    </Screen>
  );
};

const Styles = StyleSheet.create({
  btnContainer:{
position:'absolute',
width:'100%',
alignItems:'center',
flexDirection:'row',
bottom:50,
justifyContent:'space-around'

  },
  btnNext: {
    width: 180,
    height: 50,
    alignSelf: 'center',
    borderRadius: 20,
    justifyContent: 'center',
  },
  btnNextText: {
    textAlign: 'center',
    fontSize: 20,
    color: theme.colors.white,
    fontWeight: '700',
  },
});
