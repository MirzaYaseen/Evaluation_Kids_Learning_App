
{/*
  const base64Image = student.photo.toString(); 
  <Image style={{width: 100, height: 50}} source={{uri:`data:image/jpeg;charset=utf8;base64,${base64Image}`}}/>
    */}
    
    import React, {ActivityIndicator, useState, useEffect,useContext} from "react";
    import { StyleSheet,ScrollView, Text,Image, View,Button,componentWillMount,TouchableOpacity} from 'react-native';
    import { useFocusEffect } from '@react-navigation/native';
    // import { FontAwesome5,Entypo,Ionicons,MaterialCommunityIcons,MaterialIcons ,AntDesign    } from '@expo/vector-icons';
    import { Dimensions } from 'react-native';
    import { ColorPicker } from 'react-native-color-picker'
    import { colors } from "../../../assetsNew/colors";
    import Slider from '@react-native-community/slider';
    import { Pic1 } from "./Pic1";
    const windowWidth = Dimensions.get('window').width;
    const windowHeight = Dimensions.get('window').height;
    
    export function Coloring({ navigation,route }) {  
        const [fillColors, setFillColors] = useState(Array(22).fill('white'))
        const [currentColor, setCurrentColor] = useState('blue')
      
        const onFillColor = (i) => {
          let newFillColors = fillColors.slice(0)
          newFillColors[i] = currentColor
          setFillColors(newFillColors)
        }
        return (
          <View style={styles.container}>
          <View style={{flex:1,flexDirection:"row" ,justifyContent:"center", alignItems:"center",paddingLeft:25}}>
            <Pic1  fillColors={fillColors} onFill={onFillColor}/>
          </View>
          <View style={{flex:0.5,backgroundColor:colors.b,borderTopRightRadius:30,borderTopLeftRadius:30,elevation:10}}>          
          <View style={{flexDirection:"row" ,justifyContent:"center",marginVertical:10,alignItems:'center'}}>
                <Text style={styles.text}>Selected:</Text>
                <View style={{height:20, width:30,backgroundColor:currentColor,marginLeft:20,borderRadius:5,borderWidth:1,borderColor:colors.lb}}></View>
          </View>
          <View 
          style={{flex:1,paddingBottom:10}}>
           <ColorPicker
                onColorSelected={color =>setCurrentColor(color)}
                style={{flex: 1}}
                sliderComponent={Slider}
            />
            </View>
            </View>

          </View>
        );
      }
      const styles = StyleSheet.create({
        container: {
          backgroundColor:"white",
          flex:1,
        
        },
        topContainer: {
          height:windowHeight/7,
          backgroundColor:colors.lb,
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
          backgroundColor:colors.y,
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
          backgroundColor:colors.b,
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
          color:colors.y,
          fontSize:22,
          fontFamily: 'playtime',
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
            color:colors.p,
            fontFamily: 'playtime',
            fontSize:26,
            marginTop:10,
            letterSpacing:2
        },
        
        
      });