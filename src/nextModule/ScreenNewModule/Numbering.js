// Text to Speech Conversion with Natural Voices in React Native
// https://aboutreact.com/react-native-text-to-speech/

// import React in our code
import React, {useState, useEffect} from 'react';

// import all the components we are going to use
import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  FlatList,
  TouchableOpacity,
  ImageBackground,
  ScrollView,
} from 'react-native';
import Swiper from 'react-native-swiper';
// import slider for the tuning of pitch and speed
import Slider from '@react-native-community/slider';

// import Tts Text to Speech
import Tts from 'react-native-tts';

const Numbering = () => {
  const [voices, setVoices] = useState([]);
  const [ttsStatus, setTtsStatus] = useState('initiliazing');
  const [selectedVoice, setSelectedVoice] = useState(null);
  const [speechRate, setSpeechRate] = useState(0.5);
  const [speechPitch, setSpeechPitch] = useState(1);
  const [textOne, setTextOne] = useState('One');
  const [textTwo, setTextTwo] = useState('Two');
  const [textThree, setTextThree] = useState('Three');
  const [textFour, setTextFour] = useState('Four');
  const [textFive, setTextFive] = useState('Five');
  const [textSix, setTextSix] = useState('Six');
  const [textSeven, setTextSeven] = useState('Seven');
  const [textEight, setTextEight] = useState('Eight');
  const [textNine, setTextNine] = useState('Nine');
  const [textTen, setTextTen] = useState('Ten');
  const [textEleven, setTextEleven] = useState('Eleven');
  const [textTwelve, setTextTwelve] = useState('Twelve');
  const [textThirteen, setTextThirteen] = useState('Thirteen');
  const [textFourteen, setTextFourteen] = useState('Fourteen');
  const [textFifteen, setTextFifteen] = useState('Fifteen');
  const [textSixteen, setTextSixteen] = useState('Sixteen');
  const [textSeventeen, setTextSeventeen] = useState('Seventeen');
  const [textEighteen, setTextEighteen] = useState('Eighteen');
  const [textNineteen, setTextNineteen] = useState('Nineteen');
  const [textTwenty, setTextTwenty] = useState('Twenty');

  useEffect(() => {
    Tts.addEventListener('tts-start', _event => setTtsStatus('started'));
    Tts.addEventListener('tts-finish', _event => setTtsStatus('finished'));
    Tts.addEventListener('tts-cancel', _event => setTtsStatus('cancelled'));
    Tts.setDefaultRate(speechRate);
    Tts.setDefaultPitch(speechPitch);
    Tts.getInitStatus().then(initTts);
    return () => {
      Tts.removeEventListener('tts-start', _event => setTtsStatus('started'));
      Tts.removeEventListener('tts-finish', _event => setTtsStatus('finished'));
      Tts.removeEventListener('tts-cancel', _event =>
        setTtsStatus('cancelled'),
      );
    };
  }, []);

  const initTts = async () => {
    const voices = await Tts.voices();
    const availableVoices = voices
      .filter(v => !v.networkConnectionRequired && !v.notInstalled)
      .map(v => {
        return {id: v.id, name: v.name, language: v.language};
      });
    let selectedVoice = null;
    if (voices && voices.length > 0) {
      selectedVoice = voices[0].id;
      try {
        await Tts.setDefaultLanguage(voices[0].language);
      } catch (err) {
        //Samsung S9 has always this error:
        //"Language is not supported"
        console.log(`setDefaultLanguage error `, err);
      }
      await Tts.setDefaultVoice(voices[0].id);
      setVoices(availableVoices);
      setSelectedVoice(selectedVoice);
      setTtsStatus('initialized');
    } else {
      setTtsStatus('initialized');
    }
  };

  const readTextOne = async () => {
    Tts.stop();
    Tts.speak(textOne);
  };

  const readTextTwo = async () => {
    Tts.stop();
    Tts.speak(textTwo);
  };

  const readTextThree = async () => {
    Tts.stop();
    Tts.speak(textThree);
  };

  const readTextFour = async () => {
    Tts.stop();
    Tts.speak(textFour);
  };

  const readTextFive = async () => {
    Tts.stop();
    Tts.speak(textFive);
  };

  const readTextSix = async () => {
    Tts.stop();
    Tts.speak(textSix);
  };

  const readTextSeven = async () => {
    Tts.stop();
    Tts.speak(textSeven);
  };

  const readTextEight = async () => {
    Tts.stop();
    Tts.speak(textEight);
  };

  const readTextNine = async () => {
    Tts.stop();
    Tts.speak(textNine);
  };

  const readTextTen = async () => {
    Tts.stop();
    Tts.speak(textTen);
  };

  const readTextEleven = async () => {
    Tts.stop();
    Tts.speak(textEleven);
  };

  const readTextTwelve = async () => {
    Tts.stop();
    Tts.speak(textTwelve);
  };

  const readTextThirteen = async () => {
    Tts.stop();
    Tts.speak(textThirteen);
  };

  const readTextFourteen = async () => {
    Tts.stop();
    Tts.speak(textFourteen);
  };

  const readTextFifteen = async () => {
    Tts.stop();
    Tts.speak(textFifteen);
  };

  const readTextSixteen = async () => {
    Tts.stop();
    Tts.speak(textSixteen);
  };

  const readTextSeventeen = async () => {
    Tts.stop();
    Tts.speak(textSeventeen);
  };

  const readTextEighteen = async () => {
    Tts.stop();
    Tts.speak(textEighteen);
  };

  const readTextNineteen = async () => {
    Tts.stop();
    Tts.speak(textNineteen);
  };

  const readTextTwenty = async () => {
    Tts.stop();
    Tts.speak(textTwenty);
  };

  const updateSpeechRate = async rate => {
    await Tts.setDefaultRate(rate);
    setSpeechRate(rate);
  };

  const updateSpeechPitch = async rate => {
    await Tts.setDefaultPitch(rate);
    setSpeechPitch(rate);
  };

  const onVoicePress = async voice => {
    try {
      await Tts.setDefaultLanguage(voice.language);
    } catch (err) {
      // Samsung S9 has always this error:
      // "Language is not supported"
      console.log(`setDefaultLanguage error `, err);
    }
    await Tts.setDefaultVoice(voice.id);
    setSelectedVoice(voice.id);
  };

  const renderVoiceItem = ({item}) => {
    return (
      <TouchableOpacity
        style={{
          backgroundColor: selectedVoice === item.id ? '#DDA0DD' : '#5F9EA0',
        }}
        onPress={() => onVoicePress(item)}>
        <Text style={styles.buttonTextStyle}>
          {`${item.language} - ${item.name || item.id}`}
        </Text>
      </TouchableOpacity>
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <ImageBackground
        style={{width: '100%', height: '100%'}}
        source={require('../../assets/newModuleAssests/images/backgrounfimage.jpg')}>
        <View style={styles.container}>
          {/* <Text style={styles.titleText}>
            Adjust Clearity and Smoothness of Voice
          </Text>
          <View style={styles.sliderContainer}>
            <Text style={styles.sliderLabel}>
              {`Speed: ${speechRate.toFixed(2)}`}
            </Text>
            <Slider
              style={styles.slider}
              minimumValue={0.01}
              maximumValue={0.99}
              value={speechRate}
              onSlidingComplete={updateSpeechRate}
            />
          </View>
          <View style={styles.sliderContainer}>
            <Text style={styles.sliderLabel}>
              {`Pitch: ${speechPitch.toFixed(2)}`}
            </Text>
            <Slider
              style={styles.slider}
              minimumValue={0.5}
              maximumValue={2}
              value={speechPitch}
              onSlidingComplete={updateSpeechPitch}
            />
          </View> */}
          {/* <Text style={styles.sliderLabel}>Select the Voice </Text>
          <FlatList
            style={{width: '100%', marginTop: 5}}
            keyExtractor={item => item.id}
            renderItem={renderVoiceItem}
            extraData={selectedVoice}
            data={voices}
          />
          <Text style={styles.sliderContainer}>
            {`Selected Voice: ${selectedVoice || ''}`}
          </Text> */}
          {/* <TextInput
          style={styles.textInput}
          onChangeText={(text) => setText(text)}
          value={text}
          onSubmitEditing={Keyboard.dismiss}
        /> */}
          <Swiper
            dotStyle={{
              width: 10,
              height: 10,
              borderRadius: 5,
              marginHorizontal: 5,
              backgroundColor: 'rgba(255, 255, 255, 0.5)',
            }}
            activeDotStyle={{
              width: 14,
              height: 14,
              borderRadius: 7,
              marginHorizontal: 5,
              backgroundColor: 'white',
            }}
            prevButtonStyle={{fontSize: 40}}
            nextButtonStyle={{fontSize: 24}}
            showsButtons={true}
            loop={false}>
            <View
              style={{
                justifyContent: 'center',
                alignItems: 'center',

                marginLeft: 10,
                marginRight: 10,
                marginTop: 20,
              }}>
              <TouchableOpacity
                style={styles.buttonStyle}
                onPress={readTextOne}>
                <Text style={styles.buttonTextStyle}>{'1'}</Text>
              </TouchableOpacity>
            </View>
            <View
              style={{
                justifyContent: 'center',
                alignItems: 'center',

                marginLeft: 10,
                marginRight: 10,
                marginTop: 20,
              }}>
              <TouchableOpacity
                style={styles.buttonStyle}
                onPress={readTextTwo}>
                <Text style={styles.buttonTextStyle}>{'2'}</Text>
              </TouchableOpacity>
            </View>
            <View
              style={{
                justifyContent: 'center',
                alignItems: 'center',

                marginLeft: 10,
                marginRight: 10,
                marginTop: 20,
              }}>
              <TouchableOpacity
                style={styles.buttonStyle}
                onPress={readTextThree}>
                <Text style={styles.buttonTextStyle}>{'3'}</Text>
              </TouchableOpacity>
            </View>
            <View
              style={{
                justifyContent: 'center',
                alignItems: 'center',

                marginLeft: 10,
                marginRight: 10,
                marginTop: 20,
              }}>
              <TouchableOpacity
                style={styles.buttonStyle}
                onPress={readTextFour}>
                <Text style={styles.buttonTextStyle}>{'4'}</Text>
              </TouchableOpacity>
            </View>
            <View
              style={{
                justifyContent: 'center',
                alignItems: 'center',

                marginLeft: 10,
                marginRight: 10,
                marginTop: 20,
              }}>
              <TouchableOpacity
                style={styles.buttonStyle}
                onPress={readTextFive}>
                <Text style={styles.buttonTextStyle}>{'5'}</Text>
              </TouchableOpacity>
            </View>
            <View
              style={{
                justifyContent: 'center',
                alignItems: 'center',

                marginLeft: 10,
                marginRight: 10,
                marginTop: 20,
              }}>
              <TouchableOpacity
                style={styles.buttonStyle}
                onPress={readTextSix}>
                <Text style={styles.buttonTextStyle}>{'6'}</Text>
              </TouchableOpacity>
            </View>
            <View
              style={{
                justifyContent: 'center',
                alignItems: 'center',

                marginLeft: 10,
                marginRight: 10,
                marginTop: 20,
              }}>
              <TouchableOpacity
                style={styles.buttonStyle}
                onPress={readTextSeven}>
                <Text style={styles.buttonTextStyle}>{'7'}</Text>
              </TouchableOpacity>
            </View>
            <View
              style={{
                justifyContent: 'center',
                alignItems: 'center',

                marginLeft: 10,
                marginRight: 10,
                marginTop: 20,
              }}>
              <TouchableOpacity
                style={styles.buttonStyle}
                onPress={readTextEight}>
                <Text style={styles.buttonTextStyle}>{'8'}</Text>
              </TouchableOpacity>
            </View>
            <View
              style={{
                justifyContent: 'center',
                alignItems: 'center',

                marginLeft: 10,
                marginRight: 10,
                marginTop: 20,
              }}>
              <TouchableOpacity
                style={styles.buttonStyle}
                onPress={readTextNine}>
                <Text style={styles.buttonTextStyle}>{'9'}</Text>
              </TouchableOpacity>
            </View>
            <View
              style={{
                justifyContent: 'center',
                alignItems: 'center',

                marginLeft: 10,
                marginRight: 10,
                marginTop: 20,
              }}>
              <TouchableOpacity
                style={styles.buttonStyle}
                onPress={readTextTen}>
                <Text style={styles.buttonTextStyle}>{'10'}</Text>
              </TouchableOpacity>
            </View>
            <View
              style={{
                justifyContent: 'center',
                alignItems: 'center',

                marginLeft: 10,
                marginRight: 10,
                marginTop: 20,
              }}>
              <TouchableOpacity
                style={styles.buttonStyle}
                onPress={readTextEleven}>
                <Text style={styles.buttonTextStyle}>{'11'}</Text>
              </TouchableOpacity>
            </View>
            <View
              style={{
                justifyContent: 'center',
                alignItems: 'center',

                marginLeft: 10,
                marginRight: 10,
                marginTop: 20,
              }}>
              <TouchableOpacity
                style={styles.buttonStyle}
                onPress={readTextTwelve}>
                <Text style={styles.buttonTextStyle}>{'12'}</Text>
              </TouchableOpacity>
            </View>
            <View
              style={{
                justifyContent: 'center',
                alignItems: 'center',

                marginLeft: 10,
                marginRight: 10,
                marginTop: 20,
              }}>
              <TouchableOpacity
                style={styles.buttonStyle}
                onPress={readTextThirteen}>
                <Text style={styles.buttonTextStyle}>{'13'}</Text>
              </TouchableOpacity>
            </View>
            <View
              style={{
                justifyContent: 'center',
                alignItems: 'center',

                marginLeft: 10,
                marginRight: 10,
                marginTop: 20,
              }}>
              <TouchableOpacity
                style={styles.buttonStyle}
                onPress={readTextFourteen}>
                <Text style={styles.buttonTextStyle}>{'14'}</Text>
              </TouchableOpacity>
            </View>
            <View
              style={{
                justifyContent: 'center',
                alignItems: 'center',

                marginLeft: 10,
                marginRight: 10,
                marginTop: 20,
              }}>
              <TouchableOpacity
                style={styles.buttonStyle}
                onPress={readTextFifteen}>
                <Text style={styles.buttonTextStyle}>{'15'}</Text>
              </TouchableOpacity>
            </View>
            <View
              style={{
                justifyContent: 'center',
                alignItems: 'center',

                marginLeft: 10,
                marginRight: 10,
                marginTop: 20,
              }}>
              <TouchableOpacity
                style={styles.buttonStyle}
                onPress={readTextSixteen}>
                <Text style={styles.buttonTextStyle}>{'16'}</Text>
              </TouchableOpacity>
            </View>
            <View
              style={{
                justifyContent: 'center',
                alignItems: 'center',

                marginLeft: 10,
                marginRight: 10,
                marginTop: 20,
              }}>
              <TouchableOpacity
                style={styles.buttonStyle}
                onPress={readTextSeventeen}>
                <Text style={styles.buttonTextStyle}>{'17'}</Text>
              </TouchableOpacity>
            </View>
            <View
              style={{
                justifyContent: 'center',
                alignItems: 'center',

                marginLeft: 10,
                marginRight: 10,
                marginTop: 20,
              }}>
              <TouchableOpacity
                style={styles.buttonStyle}
                onPress={readTextEighteen}>
                <Text style={styles.buttonTextStyle}>{'18'}</Text>
              </TouchableOpacity>
            </View>
            <View
              style={{
                justifyContent: 'center',
                alignItems: 'center',

                marginLeft: 10,
                marginRight: 10,
                marginTop: 20,
              }}>
              <TouchableOpacity
                style={styles.buttonStyle}
                onPress={readTextNineteen}>
                <Text style={styles.buttonTextStyle}>{'19'}</Text>
              </TouchableOpacity>
            </View>
            <View
              style={{
                justifyContent: 'center',
                alignItems: 'center',

                marginLeft: 10,
                marginRight: 10,
                marginTop: 20,
              }}>
              <TouchableOpacity
                style={styles.buttonStyle}
                onPress={readTextTwenty}>
                <Text style={styles.buttonTextStyle}>{'20'}</Text>
              </TouchableOpacity>
            </View>
          </Swiper>
        </View>
      </ImageBackground>
    </SafeAreaView>
  );
};

export default Numbering;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  titleText: {
    fontSize: 22,
    textAlign: 'center',
    fontWeight: 'bold',
    color: 'black',
    marginTop: 10,
    marginBottom: 20,
  },
  buttonStyle: {
    alignItems: 'center',
    alignSelf: 'center',
    borderRadius: 20,
    justifyContent: 'center',
    marginTop: 160,

    resizeMod: 'contain',
  },
  buttonTextStyle: {
    color: 'black',
    textAlign: 'center',
    fontSize: 150,
    fontWeight: '900',

    fontFamily: 'fantasy',
  },
  sliderContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    width: 300,
    padding: 5,
  },
  sliderLabel: {
    textAlign: 'center',
    marginRight: 20,
    marginTop: 10,
  },
  slider: {
    flex: 1,
  },
  textInput: {
    borderColor: 'gray',
    borderWidth: 1,
    color: 'black',
    width: '100%',
    textAlign: 'center',
    height: 40,
  },
  buttonWrapper: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  button: {
    fontSize: 24,
    color: 'white',
    fontWeight: 'bold',
  },
});
