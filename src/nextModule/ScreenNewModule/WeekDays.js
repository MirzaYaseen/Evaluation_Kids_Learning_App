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
  ScrollView,
  Image,
  ImageBackground,
} from 'react-native';

// import slider for the tuning of pitch and speed
import Slider from '@react-native-community/slider';

// import Tts Text to Speech
import Tts from 'react-native-tts';

const WeekDays = () => {
  const [voices, setVoices] = useState([]);
  const [ttsStatus, setTtsStatus] = useState('initiliazing');
  const [selectedVoice, setSelectedVoice] = useState(null);
  const [speechRate, setSpeechRate] = useState(0.5);
  const [speechPitch, setSpeechPitch] = useState(1);
  const [textHand, setTextHand] = useState('Monday');
  const [textFoot, setTextFoot] = useState('Saturday');
  const [textNose, setTextNose] = useState('Tuesday');
  const [textEye, setTextEye] = useState('Thursday');
  const [textLeg, setTextLeg] = useState('Wednesday');
  const [textFace, setTextFace] = useState('Friday');
  const [textSunday, setTextSunday] = useState('Sunday');
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

  const readTextHand = async () => {
    Tts.stop();
    Tts.speak(textHand);
  };

  const readTextFoot = async () => {
    Tts.stop();
    Tts.speak(textFoot);
  };

  const readTextNose = async () => {
    Tts.stop();
    Tts.speak(textNose);
  };

  const readTextEye = async () => {
    Tts.stop();
    Tts.speak(textEye);
  };

  const readTextLeg = async () => {
    Tts.stop();
    Tts.speak(textLeg);
  };

  const readTextFace = async () => {
    Tts.stop();
    Tts.speak(textFace);
  };

  const readTextSunday = async () => {
    Tts.stop();
    Tts.speak(textSunday);
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
    <ImageBackground
      style={{width: '100%', height: '100%'}}
      source={require('../../assets/newModuleAssests/images/back.jpg')}>
      <SafeAreaView style={styles.container}>
      <ScrollView>
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
          {/* <Text style={styles.sliderLabel}>Select the Voice</Text>
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

          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-evenly',
              borderWidth:2,
              marginTop: 60,
              width: '75%',
                height: 80,
              borderRadius:25,
              alignSelf:'center',
              justifyContent:'center',
              alignItems:'center',
              backgroundColor:'#E06469',
              borderColor:'#E06469'
            }}>
                <Image
                style={styles.image}
                source={require('../../assets/newModuleAssests/images/catt.png')}
              />
            <TouchableOpacity style={styles.buttonStyle} onPress={readTextHand}>
             <Text style={{textAlign:'center', justifyContent:'center', alignItems:'center', fontSize:22, color:'white', fontWeight:'700'}}>Monday</Text>
            </TouchableOpacity>

        
          </View>

          <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-evenly',
            borderWidth:2,
            marginTop: 20,
            width: '75%',
            height: 80,
            borderRadius:25,
            alignSelf:'center',
            justifyContent:'center',
            alignItems:'center',
            backgroundColor:'#19A7CE',
            borderColor:'#19A7CE'
          }}>
            <TouchableOpacity style={styles.buttonStyle} onPress={readTextNose}>
            <Text style={{textAlign:'center', justifyContent:'center', alignItems:'center', fontSize:22, color:'white',fontWeight:'700'}}>Tuesday</Text>
            </TouchableOpacity>
            <Image
                style={styles.image}
                source={require('../../assets/newModuleAssests/images/catt.png')}
              />
          </View>

          <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-evenly',
            borderWidth:2,
            width: '75%',
            height: 80,
            marginTop: 20,
            borderRadius:25,
            alignSelf:'center',
            justifyContent:'center',
            alignItems:'center',
            backgroundColor:'#FFD95A',
            borderColor:'#FFD95A'
          }}>
              <Image
                style={styles.image}
                source={require('../../assets/newModuleAssests/images/catt.png')}
              />
            <TouchableOpacity style={styles.buttonStyle} onPress={readTextLeg}>
            <Text style={{textAlign:'center', justifyContent:'center', alignItems:'center',fontSize:22, color:'white',fontWeight:'700'}}>Wednesday</Text>
            </TouchableOpacity>

           
          </View>
          <View
           style={{
            flexDirection: 'row',
            justifyContent: 'space-evenly',
            borderWidth:2,
            width: '75%',
            height: 80,
            marginTop: 20,
            borderRadius:25,
            alignSelf:'center',
            justifyContent:'center',
            alignItems:'center',
            backgroundColor:'#A0D8B3',
            borderColor:'#A0D8B3'
          }}>
            <TouchableOpacity style={styles.buttonStyle} onPress={readTextEye}>
            <Text style={{textAlign:'center', justifyContent:'center', alignItems:'center',fontSize:22, color:'white',fontWeight:'700'}}>Thursday</Text>
            </TouchableOpacity>
            <Image
                style={styles.image}
                source={require('../../assets/newModuleAssests/images/catt.png')}
              />
           
          </View>
          <View
           style={{
            flexDirection: 'row',
            justifyContent: 'space-evenly',
            borderWidth:2,
            marginTop: 20,
            width: '75%',
            height: 80,
            borderRadius:25,
            alignSelf:'center',
            justifyContent:'center',
            alignItems:'center',
            backgroundColor:'#394867',
            borderColor:'#394867'
          }}>
              <Image
                style={styles.image}
                source={require('../../assets/newModuleAssests/images/catt.png')}
              />
            <TouchableOpacity style={styles.buttonStyle} onPress={readTextFace}>
            <Text style={{textAlign:'center', justifyContent:'center', alignItems:'center', fontSize:22, color:'white',fontWeight:'700'}}>Friday</Text>
            </TouchableOpacity>
          
           
          </View>
          <View
            style={{
                flexDirection: 'row',
                justifyContent: 'space-evenly',
                borderWidth:2,
                marginTop: 20,
                width: '75%',
                height: 80,
                borderRadius:25,
                alignSelf:'center',
                justifyContent:'center',
                alignItems:'center',
                backgroundColor:'#BFCCB5',
                borderColor:'#BFCCB5'
              }}>
                  
            <TouchableOpacity style={styles.buttonStyle} onPress={readTextFoot}>
            <Text style={{textAlign:'center', justifyContent:'center', alignItems:'center',fontSize:22, color:'white',fontWeight:'700'}}>Saturday</Text>
            </TouchableOpacity>

            <Image
                style={styles.image}
                source={require('../../assets/newModuleAssests/images/catt.png')}
              />
          </View>
          <View
           style={{
            flexDirection: 'row',
            justifyContent: 'space-evenly',
            borderWidth:2,
            marginTop: 20,
            width: '75%',
            height: 80,
            borderRadius:25,
            alignSelf:'center',
            justifyContent:'center',
            alignItems:'center',
            backgroundColor:'#ED2B2A',
            borderColor:'#ED2B2A'
          }}>
              <Image
                style={styles.image}
                source={require('../../assets/newModuleAssests/images/catt.png')}
              />
           
            <TouchableOpacity style={styles.buttonStyle} onPress={readTextSunday}>
            <Text style={{textAlign:'center', justifyContent:'center', alignItems:'center',fontSize:22, color:'white',fontWeight:'700'}}>Sunday</Text>
            </TouchableOpacity>
            
          </View>
        </View>
        </ScrollView>
      </SafeAreaView>
    </ImageBackground>
  );
};

export default WeekDays;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    padding: 5,
  },
  titleText: {
    fontSize: 22,
    textAlign: 'center',
    fontWeight: 'bold',
    color: 'white',
    marginTop: 10,
    marginBottom: 20,
  },
  buttonStyle: {
    width: 150,
    height: 50,
    borderRadius: 20,
    justifyContent: 'center',
    
    
  
   
  },
  buttonTextStyle: {
    color: '#fff',
    textAlign: 'center',
    fontSize: 25,
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
  image: {
    width: 50,
    height: 50,
  },
});
