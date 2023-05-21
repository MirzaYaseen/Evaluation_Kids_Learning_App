
import React, {
    ActivityIndicator,
    useState,
    useEffect,
    useContext,
  } from "react";
  import {
    StyleSheet,
    ScrollView,
    Text,
    Image,
    View,
    Button,
    componentWillMount,
    TouchableOpacity,
  } from "react-native";
  
  
  
  import { Dimensions } from "react-native";
  
import { colors } from "../../../assetsNew/colors";
  
  const windowWidth = Dimensions.get("window").width;
  const windowHeight = Dimensions.get("window").height;
  
  export function BasicMaths({ navigation, route }) {
  
  
    return (
      <View style={styles.container}>
       <View style={styles.bottomContainer}>
        <View style={styles.cardContainer}>
          <TouchableOpacity activeOpacity={0.9} onPress={()=>{navigation.navigate("Test",{operation:'add'})}}>
            <View style={styles.cards}>
            
            <Text style={styles.cardNames}>Addition</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity activeOpacity={0.9} onPress={()=>{navigation.navigate("Test",{operation:'sub'})}}>
            <View style={styles.cards}>
            
            <Text style={styles.cardNames}>Subtraction</Text>
            </View>
  
          </TouchableOpacity>
          <TouchableOpacity activeOpacity={0.9} onPress={()=>{navigation.navigate("Test",{operation:'mul'})}}>
            <View style={styles.cards}>
            
            <Text style={styles.cardNames}>Multiplication</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity activeOpacity={0.9} onPress={()=>{navigation.navigate("Test",{operation:'div'})}}>
            <View style={styles.cards}>
            
            <Text style={styles.cardNames}>Division</Text>
            </View>
          </TouchableOpacity>
        </View>
  
        
      </View>
      </View>
    );
  }
  const styles = StyleSheet.create({
    container: {
      backgroundColor: "white",
      flex: 1,
    },
    topContainer: {
      height: windowHeight / 7,
      backgroundColor: colors.lb,
      borderBottomLeftRadius: 30,
      borderBottomRightRadius: 30,
      borderColor: "#696E74",
      shadowColor: "#000",
      shadowOffset: {
        width: 0,
        height: 7,
      },
      shadowOpacity: 0.43,
      shadowRadius: 9.51,
    },
    bottomContainer: {
      height: "100%",
      backgroundColor: 'white',
      shadowRadius: 9.51,
    },
    cardContainer: {
      flexDirection: "column",
      justifyContent: "space-between",
      padding: "1.5%",
      paddingHorizontal: "5%",
      marginTop: "14%",
    },
    cards: {
      borderWidth: 1,
      backgroundColor: '#002B5B',
      borderColor: colors.p,
      padding: "3%",
      marginTop:"5%",
      width: '100%' ,
      height: 120,
      borderRadius: 20,
      elevation: 6,
      justifyContent: "center",
      alignItems: "center",
      shadowColor: "#000",
      shadowOffset: {
        width: 0,
        height: 7,
      },
      shadowOpacity: 0.43,
      shadowRadius: 9.51,
      elevation: 15,
    },
    text: {
      textAlign: "center",
      color: colors.y,
      fontSize: 22,
      fontFamily: "playtime",
    },
    welcomeM1: {
      textAlign: "center",
      color: "#293038",
      fontSize: 22,
      textShadowColor: colors.b,
      textShadowOffset: { width: 0.5, height: 0.5 },
      textShadowRadius: 1,
      marginTop: 10,
    },
    welcomeM2: {
      textAlign: "center",
      color: "#293038",
      fontSize: 30,
      textShadowColor: colors.b,
      textShadowOffset: { width: 0.5, height: 0.5 },
      textShadowRadius: 1,
    },
    image: {
      width: 100,
      height: 100,
    },
  
    cardNames: {
      textAlign: "center",
      color: colors.p,
      fontFamily: "playtime",
      fontSize: 26,
      marginTop: 10,
      letterSpacing: 2,
    },
  });
  