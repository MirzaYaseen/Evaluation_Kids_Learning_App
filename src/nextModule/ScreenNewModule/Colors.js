import React, { useState, useEffect } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ImageBackground,
  ScrollView
} from 'react-native';
import Slider from '@react-native-community/slider';
import Tts from 'react-native-tts';

const ColorsScreen = () => {
  const [speechRate, setSpeechRate] = useState(0.5);
  const [speechPitch, setSpeechPitch] = useState(1);

  useEffect(() => {
    Tts.setDefaultRate(speechRate);
    Tts.setDefaultPitch(speechPitch);
    Tts.addEventListener('tts-start', handleTtsStart);
    Tts.addEventListener('tts-finish', handleTtsFinish);
    Tts.addEventListener('tts-cancel', handleTtsCancel);

    return () => {
      Tts.removeEventListener('tts-start', handleTtsStart);
      Tts.removeEventListener('tts-finish', handleTtsFinish);
      Tts.removeEventListener('tts-cancel', handleTtsCancel);
    };
  }, []);

  const handleTtsStart = () => {
    console.log('TTS started');
  };

  const handleTtsFinish = () => {
    console.log('TTS finished');
  };

  const handleTtsCancel = () => {
    console.log('TTS cancelled');
  };

  const speakColor = (color) => {
    Tts.speak(color);
  };

  const updateSpeechRate = (rate) => {
    setSpeechRate(rate);
    Tts.setDefaultRate(rate);
  };

  const updateSpeechPitch = (pitch) => {
    setSpeechPitch(pitch);
    Tts.setDefaultPitch(pitch);
  };

  return (
    // <ImageBackground
    //   style={styles.background}
    //   source={require('../../assets/newModuleAssests/images/color.png')}>
        <ScrollView>
      <SafeAreaView style={styles.container}>
        <Text style={styles.title}>Colors</Text>

        <View style={styles.buttonContainer}>
          <TouchableOpacity
            style={[styles.button, styles.blackButton]}
            onPress={() => speakColor('Black')}>
            <Text style={styles.buttonText}>Black</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={[styles.button, styles.whiteButton]}
            onPress={() => speakColor('White')}>
            <Text style={styles.buttonText}>White</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.buttonContainer}>
          <TouchableOpacity
            style={[styles.button, styles.redButton]}
            onPress={() => speakColor('Red')}>
            <Text style={styles.buttonText}>Red</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={[styles.button, styles.blueButton]}
            onPress={() => speakColor('Blue')}>
            <Text style={styles.buttonText}>Blue</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.buttonContainer}>
          <TouchableOpacity
            style={[styles.button, styles.greenButton]}
            onPress={() => speakColor('Green')}>
            <Text style={styles.buttonText}>Green</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={[styles.button, styles.yellowButton]}
            onPress={() => speakColor('Yellow')}>
            <Text style={styles.buttonText}>Yellow</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.buttonContainer}>
          <TouchableOpacity
            style={[styles.button, styles.purpleButton]}
            onPress={() => speakColor('Purple')}>
            <Text style={styles.buttonText}>Purple</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={[styles.button, styles.pinkButton]}
            onPress={() => speakColor('Pink')}>
            <Text style={styles.buttonText}>Pink</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.buttonContainer}>
          <TouchableOpacity
            style={[styles.button, styles.orangeButton]}
            onPress={() => speakColor('Orange')}>
            <Text style={styles.buttonText}>Orange</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={[styles.button, styles.brownButton]}
            onPress={() => speakColor('Brown')}>
            <Text style={styles.buttonText}>Brown</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.sliderContainer}>
          <Text style={styles.label}>Speech Rate</Text>
          <Slider
            style={styles.slider}
            minimumValue={0.1}
            maximumValue={1}
            step={0.1}
            value={speechRate}
            onValueChange={updateSpeechRate}
            thumbTintColor="#fff"
            minimumTrackTintColor="#fff"
            maximumTrackTintColor="#888"
          />
          <Text style={styles.sliderValue}>{speechRate.toFixed(1)}</Text>
        </View>

        <View style={styles.sliderContainer}>
          <Text style={styles.label}>Speech Pitch</Text>
          <Slider
            style={styles.slider}
            minimumValue={0.5}
            maximumValue={2}
            step={0.1}
            value={speechPitch}
            onValueChange={updateSpeechPitch}
            thumbTintColor="#fff"
            minimumTrackTintColor="#fff"
            maximumTrackTintColor="#888"
          />
          <Text style={styles.sliderValue}>{speechPitch.toFixed(1)}</Text>
        </View>
      </SafeAreaView>
      </ScrollView>
    // </ImageBackground>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
  },
  container: {
    flex: 1,
    paddingVertical: 20,
    paddingHorizontal: 16,
  },
  title: {
    fontSize: 40,
    fontWeight: 'bold',
    color: '#EB455F',
    marginBottom: 20,
    textAlign: 'center',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  button: {
    flex: 1,
    height: 150,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'white',
    textTransform: 'uppercase',
  },
  blackButton: {
    backgroundColor: '#333',
  },
  whiteButton: {
    backgroundColor: '#eee',
  },
  redButton: {
    backgroundColor: '#e74c3c',
  },
  blueButton: {
    backgroundColor: '#3498db',
  },
  greenButton: {
    backgroundColor: '#2ecc71',
  },
  yellowButton: {
    backgroundColor: '#f1c40f',
  },
  purpleButton: {
    backgroundColor: '#9b59b6',
  },
  pinkButton: {
    backgroundColor: '#ff9ff3',
  },
  orangeButton: {
    backgroundColor: '#ff8c00',
  },
  brownButton: {
    backgroundColor: '#a52a2a',
  },
  sliderContainer: {
    marginBottom: 20,
  },
  label: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'white',
    marginBottom: 8,
    textTransform: 'uppercase',
  },
  slider: {
    width: '100%',
  },
  sliderValue: {
    fontSize: 14,
    color: 'white',
    textAlign: 'center',
  },
});
export default ColorsScreen;

