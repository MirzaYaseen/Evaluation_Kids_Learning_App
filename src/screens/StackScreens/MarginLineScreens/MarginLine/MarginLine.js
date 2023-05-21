// import React, {useRef, useState} from 'react';
// import {
//   _View,
//   _Text,
//   Screen,
//   MainHeader,
//   _Image,
//   _ErrorModal,
//   _LoadingModal,
//   _ImageShowModal,
//   _AnimatedModal,
// } from '../../../../components';
// import {BaseUrl, theme} from '../../../../constants';
// import {ChosseImage} from './ChosseImage';
// import {PanResponder, StyleSheet, ToastAndroid, ScrollView} from 'react-native';
// import SignatureScreen from 'react-native-signature-canvas';
// import Sound from 'react-native-sound';
// import axios from 'axios';
// import {marginLine} from '../../../../utils';
// export const MarginLine = (props) => {
//   // console.log('Free Hand props :  ', props);
//   const [isVisible, setIsVisible] = useState(false);
//   const [isError, setIsError] = useState(false);
//   const [errorDiscription, setErrorDiscription] = useState('');
//   const [canvasImage, setCanvasImage] = useState();
//   const [showImage, setShowImage] = useState(false);
//   const [isLoading, setIsLoading] = useState(false);
//   const [isEmpty, setIsEmpty] = useState(false);
//   const [marginStatusDiscription, setMarginStatusDiscription] =
//     useState('Between The Line');
//   const ref = useRef();
//   const parms = props?.route?.params?.Alphabet;
//   const status = props?.route?.params?.status;
//   const LineTop = 81.0;
//   const Line2 = 160.0;
//   const Line3 = 296.0;
//   const LineBottom = 370.0;
//   const imgWidth = '100%';
//   const imgHeight = '100%';

//   console.log('-=-=-=-=  ', status);
//   const styleCanvas = `.m-signature-pad--footer
//               .button {
//                 background-color: ${theme.colors.CardMargin};
//                 color: ${theme.colors.white};
//                 margin-top:100px;
//               }
//               body,html {
//                 width: ${imgWidth}px; height: ${imgHeight}px;
//                 background-color:${theme.colors.white}};
//               }
//               .m-signature-pad--body {
//               }`;

//   const panResponder = useRef(
//     PanResponder.create({
//       onMoveShouldSetPanResponder: () => true,
//       onPanResponderMove: (event, gestureState) => {
//         console.log(`x: ${gestureState.dx}, y: ${gestureState.dy}`);
//       },
//     }),
//   ).current;

//   const getResult = async (param) => {
//     setIsLoading(true);
//     // console.log('params ===============  ', param.toString());
//     let endpoint = status ? 'api/predict_Margin' : 'api/predict_Margin_Small';
//     console.log('end point is --=-=-=-=-   ', endpoint);
//     await axios
//       .post(
//         BaseUrl + endpoint,
//         {base64: param},
//         {
//           headers: {'Content-Type': 'multipart/form-data'},
//         },
//       )
//       .then(res => {
//         console.log('response ==>  ', res?.data);
//         if (res?.data == parms) {
//           setIsError(false);
//           setIsEmpty(false);
//           setErrorDiscription(`Congratulations 🎉🎉🎉🎉`);
//           setMarginStatusDiscription('Between The Line');
//           play('celebration.mp3');
//           setIsVisible(true);
//           return;
//         }
//         setIsError(true);
//         setIsEmpty(false);
//         setErrorDiscription(`Oops! Wrong Answer 😔`);
//         play('wrong.mp3');
//         setIsVisible(true);
//       })
//       .catch(err => {
//         console.log('errorr ==========>  ', err.response?.data);
//       });
//     setIsLoading(false);
//   };

//   const handleEmpty = () => {
//     setIsError(false);
//     setIsEmpty(true);
//     setErrorDiscription(`oops! its Empty 😭 Draw something first !`);
//     play('wrong.mp3');
//     setIsVisible(true);
//   };
//   const handleClear = () => {
//     console.log('clear success!');
//   };

//   const handleOK = (signature) => {
//     setCanvasImage(signature);
//     // console.log('Image ---- ', signature);
//     setShowImage(true);
//     getResult(signature.replace('data:image/png;base64,', ''));
//   };

//   const handleData = (data) => {
//     console.log('data =-=-=-=-=-=-=-=-=- ', data);
//     let x = JSON.parse(data);
//     x[0]?.points.map((item) => {
//       console.log(item);
//       if (
//         status &&
//         parseFloat(item.y.toFixed(2)) < parseFloat(LineTop.toFixed(2))
//       ) {
//         // setMarginStatusDiscription('Above The Line');
//         ToastAndroid.showWithGravity('Above the line',3000,3000)
//         console.log(
//           item.y.toFixed(2),
//           ' is Above The Line ',
//           LineTop.toFixed(2),
//         );
//         return;
//       } else if (
//         status &&
//         parseFloat(item.y.toFixed(2)) > parseFloat(Line3.toFixed(2))
//       ) {
//         // setMarginStatusDiscription('Below The Line');
//         ToastAndroid.showWithGravity('Below the line',3000,3000)
//         setIsError(true);
//         console.log(
//           parseFloat(item.y.toFixed(2)),
//           ' is Below The Line ',
//           Line3.toFixed(2),
//         );
//         return;
//       } else if (
//         !status &&
//         parseFloat(item.y.toFixed(2)) < parseFloat(Line2.toFixed(2))
//       ) {
//         ToastAndroid.showWithGravity('Above the line',3000,3000)
//         // setMarginStatusDiscription('Above The Line');
        
//         console.log(
//           item.y.toFixed(2),
//           ' is Above The Line ',
//           LineTop.toFixed(2),
//         );
//         return
//       } else if (
//         !status &&
//         parseFloat(item.y.toFixed(2)) < parseFloat(Line2.toFixed(2))
//       ) {
//         // setMarginStatusDiscription('Below The Line');
//         ToastAndroid.showWithGravity('Below the line',3000,3000)
//         // setIsError(true);
//         return;
//       }
//     });
//   };

//   // const isInvalidMargin =(points:[],char:any)=>{
//   // let IsValid = true;
//   // points.map((item: any) => {
//   //   console.log(item);
//   //   if(parseFloat(item.y.toFixed(2)) < parseFloat(LineTop.toFixed(2))){
//   //     console.log(item.y.toFixed(2),' is Above The Line ',LineTop.toFixed(2));

//   //   }else if(parseFloat(item.y.toFixed(2)) > parseFloat(Line3.toFixed(2))){
//   //     console.log(parseFloat(item.y.toFixed(2)),' is Below The Line ',Line3.toFixed(2));
//   //   }
//   // });
//   //   switch(char){
//   //   case 'A':

//   // }
//   // }

//   const play = (voice) => {
//     let sound = new Sound(voice, Sound.MAIN_BUNDLE, err => {
//       if (err) {
//         console.log('=========== Error ====== ', err);
//         return;
//       }
//       sound.play();
//     });
//     console.log(sound);
//   };

//   return (
   
//     <Screen
//       backgroundColor={theme.colors.background}
//       StatusbackgroundColor={theme.colors.CardMargin}>
//       <MainHeader
//         OnLeftPress={() => props.navigation.goBack()}
//         height={45}
//         name={'Margin Line'}
//         type={'Ionicons'}
//         size={24}
//         Namecolor={theme.colors.white}
//         color={theme.colors.white}
//         Iconname={'arrow-back'}
//         backgroundColor={theme.colors.CardMargin}
//       />
//       <_View
//         height={150}
//         width="95%"
//         justify="center"
//         style={styles.chosseImageContainer}>
//         <ChosseImage Alphabet={parms} />
//       </_View>
//       <_View style={styles.canvasContainer} {...panResponder.panHandlers}>
//       <SignatureScreen
//         ref={ref}
//         onOK={handleOK}
//         onEmpty={handleEmpty}
//         onClear={handleClear}
//         onGetData={handleData}
//         descriptionText={''}
//         webStyle={styleCanvas}
//         bgSrc={marginLine}
//         penColor="blue"
//         clearText="Erase"
//         confirmText="Result"
//         bgHeight={450}
//         bgWidth={400}
//         dotSize={10}
//         maxWidth={10}
//         minWidth={10}
//       />
//       </_View>
//       <_ErrorModal
//         isError={isError}
//         description={errorDiscription}
//         isVisible={isVisible}
//         setVisible={setIsVisible}
//       />
//       <_AnimatedModal
//         isError={isError}
//         description={errorDiscription}
//         isVisible={isVisible}
//         setVisible={setIsVisible}
//         isEmpty={isEmpty}
//       />
//       {isLoading ? (
//         <_LoadingModal isVisible={true} color={theme.colors.CardFreeHand} />
//       ) : null}

//       <_ImageShowModal
//         isVisible={showImage}
//         setIsVisible={setShowImage}
//         image={{uri: canvasImage}}
//         buttonText="Close"
//         themeColor={theme.colors.CardMargin}
//         onButtonPress={setShowImage}
//       />
//     </Screen>
    
//   );
// };

// const styles = StyleSheet.create({
//   canvasContainer: {
//     flex: 1,
//     marginTop: 5,
//     width: '95%',
//     alignSelf: 'center',
//     backgroundColor: 'white',
//     borderRadius: 10,
//     elevation: 1,
//     marginBottom: 5,
//   },
//   bottomTab: {
//     height: 65,
//     flexDirection: 'row',
//     backgroundColor: theme.colors.ActiveBadge,
//     alignItems: 'center',
//     marginBottom: 35,
//     justifyContent: 'space-around',
//   },
//   btnContainer: {
//     width: 40,
//     height: 40,
//     backgroundColor: theme.colors.background,
//     borderRadius: 20,
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   chosseImageContainer: {
//     backgroundColor: theme.colors.smokedWhite,
//     alignSelf: 'center',
//     marginTop: 10,
//     borderRadius: 10,
//     shadowColor: '#000',
//     shadowOffset: {
//       width: 0,
//       height: 1,
//     },
//     shadowOpacity: 0.18,
//     shadowRadius: 1.0,
//     elevation: 1,
//   },
// });


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
} from '../../../../components';
import {BaseUrl, theme} from '../../../../constants';
import {ChosseImage} from './ChosseImage';
import {PanResponder, StyleSheet, ToastAndroid} from 'react-native';
import SignatureScreen from 'react-native-signature-canvas';
import Sound from 'react-native-sound';
import axios from 'axios';
import {marginLine} from '../../../../utils';
export const MarginLine = (props) => {
  // console.log('Free Hand props :  ', props);
  const [isVisible, setIsVisible] = useState(false);
  const [isError, setIsError] = useState(false);
  const [errorDiscription, setErrorDiscription] = useState('');
  const [canvasImage, setCanvasImage] = useState();
  const [showImage, setShowImage] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isEmpty, setIsEmpty] = useState(false);
  const [marginStatusDiscription, setMarginStatusDiscription] =
    useState('Between The Line');
  const ref = useRef();
  const parms = props?.route?.params?.Alphabet;
  const status = props?.route?.params?.status;
  const LineTop = 81.0;
  const Line2 = 160.0;
  const Line3 = 296.0;
  const LineBottom = 370.0;
  const imgWidth = '100%';
  const imgHeight = 320;

  console.log('-=-=-=-=  ', status);
  const styleCanvas = `.m-signature-pad--footer
              .button {
                background-color: ${theme.colors.CardMargin};
                color: ${theme.colors.white};
                margin-top:100px;
              }
              body,html {
                width: ${imgWidth}px; height: ${imgHeight}px;
                background-color:${theme.colors.white}};
              }
              .m-signature-pad--body {
              }`;

  const panResponder = useRef(
    PanResponder.create({
      onMoveShouldSetPanResponder: () => true,
      onPanResponderMove: (event, gestureState) => {
        console.log(`x: ${gestureState.dx}, y: ${gestureState.dy}`);
      },
    }),
  ).current;

  const getResult = async (param) => {
    setIsLoading(true);
    // console.log('params ===============  ', param.toString());
    let endpoint = status ? 'api/predict_Margin' : 'api/predict_Margin_Small';
    console.log('end point is --=-=-=-=-   ', endpoint);
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
        if (res?.data == parms) {
          setIsError(false);
          setIsEmpty(false);
          setErrorDiscription(`Congratulations 🎉🎉🎉🎉`);
          setMarginStatusDiscription('Between The Line');
          play('celebration.mp3');
          setIsVisible(true);
          return;
        }
        setIsError(true);
        setIsEmpty(false);
        setErrorDiscription(`Oops! Wrong Answer 😔`);
        play('wrong.mp3');
        setIsVisible(true);
      })
      .catch(err => {
        console.log('errorr ==========>  ', err.response?.data);
      });
    setIsLoading(false);
  };

  const handleEmpty = () => {
    setIsError(false);
    setIsEmpty(true);
    setErrorDiscription(`oops! its Empty 😭 Draw something first !`);
    play('wrong.mp3');
    setIsVisible(true);
  };
  const handleClear = () => {
    console.log('clear success!');
  };

  const handleOK = (signature) => {
    setCanvasImage(signature);
    // console.log('Image ---- ', signature);
    setShowImage(true);
    getResult(signature.replace('data:image/png;base64,', ''));
  };

  const handleData = (data) => {
    console.log('data =-=-=-=-=-=-=-=-=- ', data);
    let x = JSON.parse(data);
    x[0]?.points.map((item) => {
      console.log(item);
      if (
        status &&
        parseFloat(item.y.toFixed(2)) < parseFloat(LineTop.toFixed(2))
      ) {
        // setMarginStatusDiscription('Above The Line');
        ToastAndroid.showWithGravity('Above the line',3000,3000)
        console.log(
          item.y.toFixed(2),
          ' is Above The Line ',
          LineTop.toFixed(2),
        );
        return;
      } else if (
        status &&
        parseFloat(item.y.toFixed(2)) > parseFloat(Line3.toFixed(2))
      ) {
        // setMarginStatusDiscription('Below The Line');
        ToastAndroid.showWithGravity('Below the line',3000,3000)
        setIsError(true);
        console.log(
          parseFloat(item.y.toFixed(2)),
          ' is Below The Line ',
          Line3.toFixed(2),
        );
        return;
      } else if (
        !status &&
        parseFloat(item.y.toFixed(2)) < parseFloat(Line2.toFixed(2))
      ) {
        ToastAndroid.showWithGravity('Above the line',3000,3000)
        // setMarginStatusDiscription('Above The Line');
        
        console.log(
          item.y.toFixed(2),
          ' is Above The Line ',
          LineTop.toFixed(2),
        );
        return
      } else if (
        !status &&
        parseFloat(item.y.toFixed(2)) < parseFloat(Line2.toFixed(2))
      ) {
        // setMarginStatusDiscription('Below The Line');
        ToastAndroid.showWithGravity('Below the line',3000,3000)
        // setIsError(true);
        return;
      }
    });
  };

  // const isInvalidMargin =(points:[],char:any)=>{
  // let IsValid = true;
  // points.map((item: any) => {
  //   console.log(item);
  //   if(parseFloat(item.y.toFixed(2)) < parseFloat(LineTop.toFixed(2))){
  //     console.log(item.y.toFixed(2),' is Above The Line ',LineTop.toFixed(2));

  //   }else if(parseFloat(item.y.toFixed(2)) > parseFloat(Line3.toFixed(2))){
  //     console.log(parseFloat(item.y.toFixed(2)),' is Below The Line ',Line3.toFixed(2));
  //   }
  // });
  //   switch(char){
  //   case 'A':

  // }
  // }

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
      StatusbackgroundColor={theme.colors.CardMargin}>
      <MainHeader
        OnLeftPress={() => props.navigation.goBack()}
        height={45}
        name={'Margin Line'}
        type={'Ionicons'}
        size={24}
        Namecolor={theme.colors.white}
        color={theme.colors.white}
        Iconname={'arrow-back'}
        backgroundColor={theme.colors.CardMargin}
      />
      <_View
        height={150}
        width="95%"
        justify="center"
        style={styles.chosseImageContainer}>
        <ChosseImage Alphabet={parms} />
      </_View>
      {/* <View style={styles.canvasContainer} {...panResponder.panHandlers}> */}
      <SignatureScreen
        ref={ref}
        onOK={handleOK}
        onEmpty={handleEmpty}
        onClear={handleClear}
        onGetData={handleData}
        descriptionText={''}
        webStyle={styleCanvas}
        bgSrc={marginLine}
        penColor="blue"
        clearText="Erase"
        confirmText="Result"
        bgHeight={450}
        bgWidth={400}
        dotSize={10}
        maxWidth={10}
        minWidth={10}
      />
      {/* </View> */}
      <_ErrorModal
        isError={isError}
        description={errorDiscription}
        isVisible={isVisible}
        setVisible={setIsVisible}
      />
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

      {/* <_ImageShowModal
        isVisible={showImage}
        setIsVisible={setShowImage}
        image={{uri: canvasImage}}
        buttonText="Close"
        themeColor={theme.colors.CardMargin}
        onButtonPress={setShowImage}
      /> */}
    </Screen>
  );
};

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
  chosseImageContainer: {
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
  },
});
