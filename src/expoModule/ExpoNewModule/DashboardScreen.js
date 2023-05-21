
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
    
    export function DashboardScreen({ navigation,route }) {
        const [user,setUser]=useState(route.params.data)
        
        const Dashboard= (<View>
        <View style={styles.topContainer}>
          <Text style={styles.welcomeM1}>Welcome to <Text style={{color:colors.p,fontWeight:'500',letterSpacing:5}}>First<Text style={{color:colors.b}} >Letters</Text></Text> </Text>
          <Text style={styles.welcomeM1}>{user.name} </Text>
        </View>
        <View style={styles.bottomContainer}>
          <View style={styles.cardContainer}>
            <TouchableOpacity activeOpacity={0.9} onPress={()=>{navigation.navigate("GradeOne",{user:user.id})}}>
              <View style={styles.cards}>
              <Text style={styles.cardNames}>Grade 1</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity activeOpacity={0.9} onPress={()=>{navigation.navigate("GradeOne",{user:user.id})}}>
              <View style={styles.cards}>
              <Text style={styles.cardNames}>Prep</Text>
              </View>
            </TouchableOpacity>
          </View>
          
        </View>
        </View>);
        
        
        return (
          <View style={styles.container}>
           {Dashboard}
          </View>
        );
      }
      const styles = StyleSheet.create({
        container: {
          backgroundColor:colors.y
        },
        topContainer: {
          height:windowHeight/5,
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
          height:windowHeight-(windowHeight/5),
          backgroundColor:colors.y,
          shadowRadius: 9.51,
    
    
        }, 
        cardContainer: {
          flexDirection:"row",
          justifyContent:"space-between",
          padding:"2.5%",
          paddingHorizontal:"11%",
          marginBottom:"14%",
          marginTop:"-13%",
          
          
        },
        cardContainerL: {
          flexDirection:"row",
          justifyContent:"center",
          padding:"3%",
          paddingHorizontal:"11%",
          marginBottom:"28%",
          marginTop:"-13%"
        },
        cards:{
          borderWidth:1,
          backgroundColor:colors.b,
          borderColor:colors.p,
          padding:"3%",
          width:windowWidth/3,
          height:100,
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
          fontSize:30,
          fontFamily:"playtime",
        },
        welcomeM1:{
          textAlign: 'center',
          color:"#293038",
          fontSize:28,
          textShadowColor: colors.w , 
          textShadowOffset: { width: 0.5, height: 0.5 }, 
          textShadowRadius: 1,
          marginTop:10,
          fontFamily:"playtime",
          letterSpacing:1
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
            fontFamily:"playtime",
            fontSize:26,
            marginTop:10
        },
        
        
      });