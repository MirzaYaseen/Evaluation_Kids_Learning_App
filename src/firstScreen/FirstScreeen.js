import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ImageBackground,
  Button,
} from 'react-native';
import {screenNames} from '../navigation';
import Music from "./Music"
// import Sound from 'react-native-sound';

// const BackgroundSound = () => {
//   const [isSoundPlaying, setIsSoundPlaying] = useState(true);
//   const [backgroundSound, setBackgroundSound] = useState(null);

//   useEffect(() => {
//     // Load the background sound file
//     const sound = new Sound('background_sound.mp3', Sound.MAIN_BUNDLE, (error) => {
//       if (error) {
//         console.log('Error loading sound:', error);
//       } else {
//         // Set the sound object in state
//         setBackgroundSound(sound);
//         sound.setNumberOfLoops(-1); // Loop indefinitely
//         sound.play();
//       }
//     });

//     return () => {
//       // Stop and release the background sound when the component unmounts
//       if (backgroundSound) {
//         backgroundSound.stop();
//         backgroundSound.release();
//       }
//     };
//   }, []);

//   const toggleSound = () => {
//     if (backgroundSound) {
//       if (isSoundPlaying) {
//         backgroundSound.pause();
//       } else {
//         backgroundSound.play();
//       }
//       setIsSoundPlaying(!isSoundPlaying);
//     }
//   };

//   return (
//     <View>
//       <Button
//         title={isSoundPlaying ? 'Sound Off' : 'Sound On'}
//         onPress={toggleSound}
//       />
//     </View>
//   );
// };

const FirstScreen = ({navigation}) => {
  return (
    <ImageBackground
      source={require('../assets/images/AlphabetImages/backgroundpic1.jpg')}
      style={{height: '100%'}}>
      {/* <BackgroundSound /> */}
      <Music/>
      <View style={styles.container}>
        <View style={styles.buttonContainer}>
          <TouchableOpacity
            onPress={() => navigation.navigate(screenNames.dashBoard)}
            style={[styles.button, styles.button2]}>
            <Text style={styles.buttonText}>Nursery</Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => navigation.navigate(screenNames.Prep)}
            style={[styles.button, styles.button3]}>
            <Text style={styles.buttonText}>Prep</Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => navigation.navigate('GradeOne')}
            style={[styles.button, styles.button4]}>
            <Text style={styles.buttonText}>1st Grade</Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => navigation.navigate(screenNames.home)}
            style={[styles.button, styles.button1]}>
            <Text style={styles.buttonText}>Evaluation</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: '#F9F5E7',
    paddingHorizontal: 30,
    paddingTop: 20,
    marginTop: 30,
  },
  header: {
    alignItems: 'center',
    marginBottom: 20,
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#333',
    textAlign: 'center',
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 40,
    fontWeight: '700',
    color: 'white',
    marginBottom: 20,
    textAlign: 'center',
  },
  buttonContainer: {
    marginBottom: 30,
  },
  button: {
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: 120,
    borderRadius: 10,
    elevation: 4,
  },
  button1: {
    backgroundColor: '#19376D',
    marginBottom: 10,
  },
  button2: {
    backgroundColor: '#6096B4',
    marginBottom: 10,
  },
  button3: {
    backgroundColor: '#FFCA28',
    marginBottom: 10,
  },
  button4: {
    backgroundColor: '#19A7CE',
    marginBottom: 10,
  },
  buttonText: {
    color: 'white',
    fontFamily: 'Roboto',
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    // fontStyle:'Helvetica'
  },
});

export default FirstScreen;
