import React, { useState, useEffect ,componentWillMount} from "react";
import { StyleSheet, Text,Image, View,Button,FlatList ,ActivityIndicator} from 'react-native';
import { colors } from "../../../assetsNew/colors";
export function SplashScreen({ navigation }) {

  useEffect(()=>{
    const interval=setInterval(()=>{
      clearInterval(interval);
      navigation.navigate("Signup");
    },3000);
    
  },[]);
  
 

    return (
      <View style={styles.container}>
        <View>
              <Image style={styles.image} source={require('../../../assetsNew/LOGO.jpg')}/>
              <Text style={{textAlign:'center', fontSize:45, letterSpacing:2, alignItems:'center', justifyContent:'center', color:'#00235B'}}>
                First Letter
              </Text>
        </View>
      </View>
    );
  }
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor:'#F7F1E5',
      alignItems: "center",
      justifyContent: "center",
    }, 
    text:{
      textAlign: 'center',
      color:"white",
      fontSize:30
    },
   
    image:{
      height:120,
      marginBottom:40,
      width:120, justifyContent:'center', alignItems:'center', alignSelf:'center', borderRadius:5
    }
  });