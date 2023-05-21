import React, {useState, useEffect} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ScrollView,
  Image,
  ImageBackground,
  
} from 'react-native';
import Slider from '@react-native-community/slider';
import Tts from 'react-native-tts';

const Words = () => {
  // State variables
  const [speechRate, setSpeechRate] = useState(0.5);
  const [speechPitch, setSpeechPitch] = useState(1);
  const [words, setWords] = useState([
    'M, A, P (MAP)',
    'B, U, G (BUG)',
    'C, A, R (CAR)',
    'B E D (BED)',
    'C, U, P (CUP)',
    'S, U, N (SUN)',
    'F, A, N (FAN)',
    'C, A, T (CAT)',
    'D, O, G (DOG)',
    'J, U, G (JUG)',
    'B, A, T (BAT)',
    'M, U, G (MUG)',
    'J, A, R (JAR)',
    'R, O, D (ROD)',
    'P, A, N (PAN)',
    'K, E, Y (KEY)',
    'R, O, D (ROD)',


    // Add other words here
  ]);
  const [displayedWords, setDisplayedWords] = useState([]);

  useEffect(() => {
    Tts.setDefaultRate(speechRate);
    Tts.setDefaultPitch(speechPitch);
    generateDisplayedWords(); // Generate initial set of displayed words

    return () => {
      Tts.stop();
      Tts.removeAllListeners();
    };
  }, []);

  const readWord = async word => {
    Tts.speak(word);
  };

  const updateSpeechRate = rate => {
    Tts.setDefaultRate(rate);
    setSpeechRate(rate);
  };

  const updateSpeechPitch = rate => {
    Tts.setDefaultPitch(rate);
    setSpeechPitch(rate);
  };

  const generateDisplayedWords = () => {
    const randomIndexes = [];
    while (randomIndexes.length < 4) {
      const randomIndex = Math.floor(Math.random() * words.length);
      if (!randomIndexes.includes(randomIndex)) {
        randomIndexes.push(randomIndex);
      }
    }
    const newDisplayedWords = randomIndexes.map(index => words[index]);
    setDisplayedWords(newDisplayedWords);
  };

  return (
    <ImageBackground
      style={{flex: 1}}
      source={require('../../assets/newModuleAssests/images/counting2.jpg')}>
      <ScrollView
        contentContainerStyle={styles.container}
        onPress={generateDisplayedWords}>
        {/* <Text style={styles.titleText}>
          Adjust Clarity and Smoothness of Voice
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
        </View> */}
        {/* <View style={styles.sliderContainer}>
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
        {displayedWords.map(word => (
          <TouchableOpacity
            key={word}
            style={styles.buttonStyle1}
            onPress={() => readWord(word)}>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-around',
                alignItems: 'center',
                alignSelf: 'center',
                marginTop: 20,
                borderWidth: 4,
                width: 350,
                height: 120,
                borderRadius: 20,
                borderColor: 'black',
              }}>
              <Text style={styles.wordText}>{word}</Text>
            </View>
          </TouchableOpacity>
        ))}

        {/* <TouchableOpacity style={styles.buttonStyle1} onPress={readTextHand}>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-around',
              alignItems: 'center',
              alignSelf: 'center',
              marginTop: 20,
              borderWidth: 4,
              borderColor: 'white',
            }}>
            <Image
              style={styles.image1}
              source={require('../../assets/newModuleAssests/images/map.png')}
            />

            <Text
              style={{
                width: 80,
                height: 80,
                borderWidth: 1,
                justifyContent: 'center',
                textAlign: 'center',
                alignItems: 'center',
                fontSize: 50,
                fontWeight: '700',
                marginLeft: 10,
                color: 'white',
                borderColor: 'white',
              }}>
              M
            </Text>
            <Text
              style={{
                width: 80,
                height: 80,
                borderWidth: 1,
                textAlign: 'center',
                alignItems: 'center',
                fontSize: 50,
                fontWeight: '700',
                color: 'white',
                borderColor: 'white',
              }}>
              A
            </Text>
            <Text
              style={{
                width: 80,
                height: 80,
                borderWidth: 1,
                textAlign: 'center',
                alignItems: 'center',
                fontSize: 50,
                fontWeight: '700',
                color: 'white',
                borderColor: 'white',
              }}>
              P
            </Text>
          </View>
        </TouchableOpacity> */}
      </ScrollView>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    alignItems: 'center',
  },
  titleText: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
    color: 'black',
  },
  sliderContainer: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  sliderLabel: {
    fontSize: 16,
    color: 'white',
  },
  slider: {
    flex: 1,
    marginHorizontal: 10,
  },
  wordContainer: {
    backgroundColor: '#5F9EA0',
    padding: 10,
    borderRadius: 5,
    marginBottom: 10,
    alignItems: 'center',
  },
  wordText: {
    fontSize: 30,
    fontWeight: 'bold',
    color: 'black',
  },
  buttonStyle1: {
    width: 400,
    height: 150,
    borderRadius: 20,
    justifyContent: 'center',

    padding: 10,
  },
});

export default Words;
