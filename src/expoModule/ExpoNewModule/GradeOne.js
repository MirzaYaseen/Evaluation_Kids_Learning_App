
{/*
  const base64Image = student.photo.toString(); 
  <Image style={{width: 100, height: 50}} source={{uri:`data:image/jpeg;charset=utf8;base64,${base64Image}`}}/>
    */}
    
    import React, {ActivityIndicator, useState, useEffect,useContext} from "react";
    import { StyleSheet,ScrollView, Text,Image, View,Button,componentWillMount,TouchableOpacity} from 'react-native';
    import { useFocusEffect } from '@react-navigation/native';
    // import { FontAwesome5,Entypo,Ionicons,MaterialCommunityIcons,MaterialIcons ,AntDesign    } from '@expo/vector-icons';
    import { Dimensions } from 'react-native';
    import { colors } from "../../../assetsNew/colors";
    const windowWidth = Dimensions.get('window').width;
    const windowHeight = Dimensions.get('window').height;
    
    export function GradeOne({ navigation,route }) {  
        // const [user,setUser]=useState(route.params.user)
        return (
          <View style={styles.container}>
          <View style={styles.bottomContainer}>
          <View style={styles.cardContainer}>
            <TouchableOpacity activeOpacity={0.9} onPress={()=>{navigation.navigate("LearnWords")}}>
              <View style={styles.cards}>
              
              <Text style={styles.cardNames}>Learn Words</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity activeOpacity={0.9} onPress={()=>{navigation.navigate("LearnSentences")}}>
              <View style={styles.cards}>
              
              <Text style={styles.cardNames}>Learn Sentences</Text>
              </View>
            </TouchableOpacity>
          </View>
          <View style={styles.cardContainer}>
            <TouchableOpacity activeOpacity={0.9} onPress={()=>{navigation.navigate("Maths")}}>
              <View style={styles.cards}>
              
              <Text style={styles.cardNames}>Basic Maths</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity activeOpacity={0.9} onPress={()=>{navigation.navigate("Coloring")}}>
              <View style={styles.cards}>
              
              <Text style={styles.cardNames}>Coloring</Text>
              </View>
            </TouchableOpacity>
          </View>
          <View style={styles.cardContainer}>
            <TouchableOpacity activeOpacity={0.9} onPress={()=>{navigation.navigate("GK")}}>
              <View style={styles.cards}>
              
              <Text style={styles.cardNames}>General Knowledge</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity activeOpacity={0.9} onPress={()=>{navigation.navigate("IslamicStudies")}}>
              <View style={styles.cards}>
              
              <Text style={styles.cardNames}>Islamic Studies</Text>
              </View>
            </TouchableOpacity>
          </View>
          
        </View>
          </View>
        );
      }
      const styles = StyleSheet.create({
        container: {
          // backgroundColor:'black'
        },
        topContainer: {
          height:windowHeight/7,
          // backgroundColor:colors.lb,
          borderBottomLeftRadius:30,
          borderBottomRightRadius:30,
          borderColor:"#696E74",
          shadowColor: "#000",
          shadowOffset: {
            width: 0,
            height: 7,
          },
          shadowOpacity: 0.43,
          shadowRadius: 9.51,
        },
        bottomContainer: {
          height:"100%",
          // backgroundColor:colors.y,
          shadowRadius: 9.51,
    
    
        }, 
        cardContainer: {
          flexDirection:"row",
          justifyContent:"space-between",
          padding:"1.5%",
          paddingHorizontal:"5%",
          marginTop:"14%",
          
          
        },
        cards:{
          borderWidth:1,
          backgroundColor:'#002B5B',
          borderColor:colors.p,
          padding:"3%",
          width:windowWidth/2.5,
          height:140,
          borderRadius:20,
          elevation:6,
          justifyContent:"center",
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
        text:{
          textAlign: 'center',
          color:colors.b,
          fontSize:30
        },
        welcomeM1:{
          textAlign: 'center',
          color:"#293038",
          fontSize:22,
          textShadowColor: colors.b, 
          textShadowOffset: { width: 0.5, height: 0.5 }, 
          textShadowRadius: 1,
          marginTop:10
        },
        welcomeM2:{
          textAlign: 'center',
          color:"#293038",
          fontSize:30,
          textShadowColor: colors.b, 
          textShadowOffset: { width: 0.5, height: 0.5 }, 
          textShadowRadius: 1,
        },
        image: {
          width: 100,
          height: 100,
    
        },
        
        cardNames:{
            textAlign: 'center',
            color:'white',
            fontFamily: 'playtime',
            fontSize:26,
            marginTop:10,
            letterSpacing:2
        },
        
        
      });