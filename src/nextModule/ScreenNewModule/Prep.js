import {
    View,
    Text,
    TouchableOpacity,
    Image,
    StyleSheet,
    ImageBackground,
  } from 'react-native';
  import React from 'react';
  import { screenNames } from '../../navigation';
  const Prep = ({navigation}) => {
    return (
      <View style={styles.container}>
        {/* <ImageBackground
          style={{width: '100%', height: '100%'}}
          source={require('../../assets/newModuleAssests/images/backgrounfimage.jpg')}> */}
          <Text style={{textAlign:'center', fontSize:40, color:'black'}}>First Letter</Text>
          <View style={styles.container1}>
            <TouchableOpacity
              onPress={() => navigation.navigate(screenNames.Words)}
              style={styles.button}>
              <Image
                style={styles.image}
                source={require('../../assets/newModuleAssests/images/word.png')}
              />
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => navigation.navigate(screenNames.Counting)}
              style={styles.button2}>
              <Image
                style={styles.image2}
                source={require('../../assets/newModuleAssests/images/countdown.png')}
              />
            </TouchableOpacity>
          </View>
  
          <View style={styles.container2}>
            <TouchableOpacity
              onPress={() => navigation.navigate(screenNames.Drawing)}
              style={styles.button3}>
              <Image
                style={styles.image3}
                source={require('../../assets/newModuleAssests/images/colorpalette.png')}
              />
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => navigation.navigate(screenNames.PrepGk)}
              style={styles.button3}>
              <Image
                style={styles.image3}
                source={require('../../assets/newModuleAssests/images/book.png')}
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
      marginTop:30
    },
    container1: {
      flexDirection: 'row',
      justifyContent: 'space-evenly',
      marginTop: 100,
      marginLeft: 20,
    },
    container2: {
      flexDirection: 'row',
      justifyContent: 'space-evenly',
      marginTop: 70,
    },
    button: {
      width: '20%',
      height: 40,
      alignItems: 'center',
      justifyContent: 'center',
      alignSelf: 'center',
      margin: 40,
    },
    image: {
      width: 150,
      height: 150,
    },
    button2: {
      width: '20%',
      height: 40,
      alignItems: 'center',
      justifyContent: 'center',
      alignSelf: 'center',
      margin: 70,
    },
    image2: {
      width: 150,
      height: 150,
    },
    button3: {
      width: '20%',
      height: 40,
      alignItems: 'center',
      justifyContent: 'center',
      alignSelf: 'center',
      margin: 50,
      marginBottom: 70,
    },
    image3: {
      width: 150,
      height: 150,
      marginBottom: 40,
    },
  });
  export default Prep;
  