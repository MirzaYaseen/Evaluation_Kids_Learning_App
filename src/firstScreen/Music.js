import React, { useState, useEffect } from 'react';
import { StyleSheet, SafeAreaView, Text, Button, TouchableOpacity } from 'react-native';
import Sound from 'react-native-sound';
import Icon from 'react-native-vector-icons/MaterialIcons';
const App = () => {
  const [sound, setSound] = useState(null);
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    Sound.setCategory('Playback'); // Set the audio category for playback

    return () => {
      // Clean up and release the sound resource
      if (sound) {
        sound.stop();
        sound.release();
      }
    };
  }, []);

  useEffect(() => {
    if (isPlaying) {
      startSound();
    } else {
      stopSound();
    }
  }, [isPlaying]);

  const startSound = () => {
    if (sound) {
      sound.stop(); // Stop the sound if it's already playing
      sound.release();
    }

    const newSound = new Sound('kidsmusic.mp3', Sound.MAIN_BUNDLE, error => {
      if (error) {
        console.log('Error loading sound:', error);
        return;
      }

      newSound.setNumberOfLoops(-1); // Set the number of loops to -1 for continuous playback
      newSound.play(success => {
        if (success) {
          console.log('Sound played successfully');
        } else {
          console.log('Sound did not play');
        }
      });
    });

    setSound(newSound);
  };

  const stopSound = () => {
    if (sound) {
      sound.stop(); // Stop the sound
      sound.release();
      setSound(null);
    }
  };

  const toggleSound = () => {
    setIsPlaying(prevIsPlaying => !prevIsPlaying);
  };

  useEffect(() => {
    setIsPlaying(true);
    return () => setIsPlaying(false);
  }, []);

  return (
    <SafeAreaView style={styles.container}>
     
      {/* <Button onPress={toggleSound} title={isPlaying ? 'Stop Sound' : 'Start Sound'}  >

      <Icon name="hearing" size={36} color="black" />
      </Button> */}
      <TouchableOpacity onPress={toggleSound}>
        <Icon name={isPlaying ? 'volume-up' : 'volume-off'} size={36} color="black" />
      </TouchableOpacity>
      {/* Add your screen content here */}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
   
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf:'flex-end', marginRight:20,
    marginTop:20
  },
  heading: {
    fontSize: 25,
    fontWeight: '700',
    marginBottom: 10,
  },
});

export default App;
