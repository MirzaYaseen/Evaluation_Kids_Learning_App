import React from 'react';
import { View, Text, TouchableOpacity, Image, StyleSheet, ImageBackground } from 'react-native';
import { screenNames } from '../../navigation';
import Music from "../../firstScreen/Music"
const Dashboard = ({ navigation }) => {
  return (
    <View style={styles.container}>
      {/* <ImageBackground
        style={styles.backgroundImage}
        source={require('../../assets/images/ApplicationImage/freeHand.jpg')}
        resizeMode="cover"
      > */}
      {/* <Music/> */}
        <Text style={styles.title}>First Letter</Text>

        <View style={styles.buttonContainer}>
          <TouchableOpacity
            onPress={() => navigation.navigate(screenNames.Abc)}
            style={styles.button}
          >
            <Image
              style={styles.image}
              source={require('../../assets/newModuleAssests/images/abc.png')}
            />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => navigation.navigate(screenNames.Numbering)}
            style={styles.button}
          >
            <Image
              style={styles.image}
              source={require('../../assets/newModuleAssests/images/numbers.png')}
            />
          </TouchableOpacity>
        </View>

        <View style={styles.buttonContainer}>
          <TouchableOpacity
            onPress={() => navigation.navigate(screenNames.Colors)}
            style={styles.button}
          >
            <Image
              style={styles.image}
              source={require('../../assets/newModuleAssests/images/color.png')}
            />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => navigation.navigate(screenNames.GeneralKnowledge)}
            style={styles.button}
          >
            <Image
              style={styles.image}
              source={require('../../assets/newModuleAssests/images/brain.png')}
            />
          </TouchableOpacity>
        </View>
      {/* </ImageBackground> */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:'#F9F5EB',
    marginTop:30
  },
  backgroundImage: {
    
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 40,
    color: 'black',
    letterSpacing: 10,
    
    textAlign:'center',
    shadowOffset:25,
    
  },
  buttonContainer: {
    flex:1,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    shadowOffset:25
 
  },
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: 20,
  },
  image: {
    width: 150,
    height: 150,
  },
});

export default Dashboard;
