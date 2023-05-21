import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View,Button,FlatList ,ActivityIndicator,Form,TextInput,TouchableOpacity,Image,ToastAndroid} from 'react-native';
// import { MaterialIcons,MaterialCommunityIcons } from '@expo/vector-icons';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { localhost } from "../../../config";
import { colors } from "../../../assetsNew/colors";
import { screenNames } from "../../navigation";

export function LoginScreen({ navigation }) {
const [email,setEmail]=useState("");
const [password,setPassword]=useState("");
const [data,setData]=useState({});
const[error,setError]=useState(null);
const[loading,setLoading]=useState(false);

const reset=()=>{
  setEmail("");
  setPassword("");
  setError("")
}
  const handleSubmit=()=>{
    setLoading(true)
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    
    var raw = JSON.stringify({
      "email": email,
      "password":password
    });
    
    var requestOptions = {
      method: 'POST',
      headers: myHeaders,
      body: raw,
      redirect: 'follow'
    };
    
    fetch(`http://${localhost}:4000/api/v1/login`, requestOptions)
      .then(response => response.json())
      .then(result => {
        if(result.token){
          setLoading(false);
          reset();
          navigation.navigate(screenNames.firstScreen,{data:result.user});
       
        }else{
          setLoading(false)
          ToastAndroid.showWithGravity(
           result.message,
            ToastAndroid.SHORT,
            ToastAndroid.TOP
          );
        }
      })
      .catch(error => console.log('error', error));
  
  };
    return (
      <View style={styles.container}>
        <Image style={styles.image} source={require('../../../assetsNew/LOGO.jpg')}/>
        <Text style={styles.Heading}>Login</Text>
        <View style={styles.form}>
        <View style={styles.inputFields}>
          <Icon name="email" size={24} color={colors.b} />
          <TextInput
          style={styles.TextInput}
          placeholder="Email"
          placeholderTextColor="#293038" 
          value={email}
          onChangeText={(text)=>{setEmail(text)
            setError(null)}}
        />
        </View>
        <View style={styles.inputFields}>
        <Icon name="lock" size={24}  color={colors.b} />         
         <TextInput
          style={styles.TextInput}
          secureTextEntry
          placeholder="Password"
          placeholderTextColor="#293038" 
          value={password}
          onChangeText={(text)=>{setPassword(text)
          setError(null)}}
        />
        </View>
        {/* <Text style={styles.fPass} onPress={() => { navigation.navigate("forgetPassword")}}>Forgot your Password? </Text> */}
        {error==null?null:<Text style={styles.error} >{error}</Text>}
      <TouchableOpacity  onPress={!loading?()=>handleSubmit():()=>{}} type="submit" style={styles.SButton}>
      {loading?<View><ActivityIndicator  size="small" color="#FfC329"/></View>:<Text style={styles.ButtonText}>Sign In</Text>}
      </TouchableOpacity>
      <Text style={styles.link} onPress={() => { navigation.navigate("Signup")}}>Don't have an account ? <Text style={{textDecorationLine:"underline"}} onclick={()=>{
        navigation.navigate("Signup")
      }}>Sign up</Text> </Text>
      </View>
      </View>
    );
  }
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#F7F1E5',
      alignItems: "center",
      paddingTop:"10%"
    },  
    Heading:{
      marginTop:20,
      marginBottom:20
,      textAlign: 'center',
      fontFamily:"playtime",
      color:colors.b,
      fontSize:27,  

  
    },
    form:{
     
      justifyContent:"center",
     
      paddingBottom:20,
    borderRadius:10,
    
    opacity:0.9
    },
    inputFields:{
      borderBottomColor:colors.b,
      borderRadius:10,
      borderBottomWidth:1,
      height: 40,
      width:300,
      margin: 12,
      paddingLeft:10,
       flexDirection: 'row',
      alignItems: 'center',
    },
    TextInput:{
      marginLeft:10,
      width:300,
      fontFamily:"playtime",
    },
    SButton:{
      alignItems: "center",
      marginTop:30,
      backgroundColor:colors.b,
      width:100,
      height:30,
      borderRadius:6,
      paddingTop:"1.5%",
      alignSelf:"center"
    
    },
    ButtonText:{
      color: colors.y,
      fontFamily:"playtime",
      alignSelf: "center",
      textTransform: "uppercase"
    },
    image: {
      marginTop:"5%",
      width: 200,
      height: 200,
      marginBottom:'5%',
      shadowColor: "yellow",
    shadowOffset: { height: 2},
    shadowOpacity: 0.3,
    },
    fPass:{
      color:colors.b,
      textAlign:'right',
      fontSize:13,
      fontFamily:"playtime",
      marginRight:13    
    },
    error:{
      color:"red",
      textAlign:'left',
      fontSize:12,
      fontFamily:"playtime",
      marginLeft:20    
    },
    link:{
      color:"gray",
      textAlign:'center',
      fontSize:15,
      fontFamily:"playtime",
      marginRight:13    ,
      marginTop:15
    },
    
  });