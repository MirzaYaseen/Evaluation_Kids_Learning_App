import React, { useEffect, useRef, useState } from 'react';
import { PanResponder, StyleSheet, View } from 'react-native';
import { _Image, _ImageShowModal, _View } from '../../../../../components';
import * as DotImg from '../../../../../assets';
import { theme } from '../../../../../constants';
import SignatureView from 'react-native-signature-canvas';
import { AUri } from './dummy';


export const A = () => {

  const [cruntImage, setCuttentImage] = useState();
  const [canvasImage, setCanvasImage] = useState();
  const [showImage, setShowImage] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isEmpty, setIsEmpty] = useState(false);
  const [index, setIndex] = useState();
  const [isVisible, setIsVisible] = useState(false);
  const [isError, setIsError] = useState(false);
  const [errorDiscription, setErrorDiscription] = useState('');
  const imgWidth = '100%';
  const imgHeight = 375;
  const styleCanvas = `.m-signature-pad--footer
              .button {
                background-color: ${theme.colors.CardMargin};
                color: ${theme.colors.white};
              }
              body,html {
                width: ${imgWidth}px; height: ${imgHeight}px;
                background-color:${theme.colors.white}};
              }
              .m-signature-pad--body {
              }`;
  

  const handleEmpty = () => {
    setIsError(false);
    setIsEmpty(true);
    setErrorDiscription(`oops! its Empty 😭 Draw something first !`);
    setIsVisible(true);
  };

  const handleClear = () => {
    console.log('clear success!');
  };

  const handleOK = (signature) => {
    setCanvasImage(signature);
    setShowImage(true);
  };

  const handleData = (data) => {
    console.log('data =-=-=-=-=-=-=-=-=- ', data);
    let x = JSON.parse(data);
  };

  return (
    <View style={styles.container}>
      <_View
        pointerEvents="box-none"
        style={{
          backgroundColor: theme.colors.CardDot + 30,
          width: '85%',
          height: 450,
          borderRadius: 15,
          alignItems: 'center',
          justifyContent: 'center',
          padding: 10,
        }}>
        <SignatureView
          onOK={handleOK}
          onEmpty={handleEmpty}
          onClear={handleClear}
          onGetData={handleData}
          descriptionText={''}
          webStyle={styleCanvas}
          backgroundColor={theme.colors.white}
          penColor={theme.colors.successBtn}
          clearText="Erase"
          confirmText="Result"
          bgHeight={370}
          bgWidth={310}
          dotSize={25}
          maxWidth={25}
          minWidth={25}
          style={{ borderRadius: 20 }}
        />
        <_View
          width={'100%'}
          height={375}
          style={{ position: 'absolute', top: 10 }}>
          <_Image
            source={DotImg.A_Dot}
            width="100%"
            height={'100%'}
            resizeMode="stretch"
          />
        </_View>
      </_View>

      <_ImageShowModal
        isVisible={showImage}
        setIsVisible={setShowImage}
        image={{ uri: canvasImage }}
        buttonText="Close"
        themeColor={theme.colors.CardMargin}
        onButtonPress={setShowImage}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // position:'absolute',
    justifyContent: 'center',
    marginTop: 200,
    alignItems: 'center',
  },
});
