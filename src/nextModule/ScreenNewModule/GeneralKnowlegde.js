import React from 'react';
import { View, Text, SafeAreaView, ImageBackground, TouchableOpacity, StyleSheet } from 'react-native';
import { screenNames } from '../../navigation';

const GeneralKnowledge = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
      <ImageBackground
        style={styles.backgroundImage}
        source={require('../../assets/images/AlphabetImages/P4pen.png')}
        resizeMode="cover"
      >
        <Text style={styles.title}>General Knowledge</Text>

        <TouchableOpacity
          onPress={() => navigation.navigate(screenNames.Animal)}
          style={styles.buttonContainer}
        >
          <Text style={styles.buttonText}>Animals</Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => navigation.navigate(screenNames.Birds)}
          style={styles.buttonContainer}
        >
          <Text style={styles.buttonText}>Birds</Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => navigation.navigate(screenNames.PartOfBody)}
          style={styles.buttonContainer}
        >
          <Text style={styles.buttonText}>Parts of the Body</Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => navigation.navigate(screenNames.FiveSenses)}
          style={styles.buttonContainer}
        >
          <Text style={styles.buttonText}>Five Senses</Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => navigation.navigate(screenNames.GkShapes)}
          style={styles.buttonContainer}
        >
          <Text style={styles.buttonText}>Shapes</Text>
        </TouchableOpacity>
      </ImageBackground>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  backgroundImage: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 35,
    textAlign: 'center',
    marginTop: '10%',
    color: '#CE5959',
    
    
    letterSpacing: 2,
    marginBottom: 30,
    textShadowColor: '#000000',
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 2,
  },
  buttonContainer: {
    backgroundColor: '#009FBD',
    borderRadius: 10,
    paddingHorizontal: 20,
    paddingVertical: 14,
    marginBottom: 20,
    width: '80%',
    alignItems: 'center',
  },
  buttonText: {
    fontSize: 24,
    color: '#F6F1F1',
    fontWeight: '600',
    textAlign: 'center',
  },
});

export default GeneralKnowledge;
