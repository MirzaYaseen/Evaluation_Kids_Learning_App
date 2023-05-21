
{/*
  const base64Image = student.photo.toString(); 
  <Image style={{width: 100, height: 50}} source={{uri:`data:image/jpeg;charset=utf8;base64,${base64Image}`}}/>
    */}
    
    import React, {ActivityIndicator, useState, useEffect,useContext} from "react";
    import { TextInput,StyleSheet,ScrollView, Text,Image,ToastAndroid, View,Button,componentWillMount,TouchableOpacity,FlatList} from 'react-native';
    import { useFocusEffect } from '@react-navigation/native';
    // import { Feather,AntDesign  } from '@expo/vector-icons';
    import Icon from 'react-native-vector-icons/MaterialIcons';
    import { Dimensions } from 'react-native';
    import { colors } from "../../../assetsNew/colors";
    // import * as Speech from 'expo-speech';
    // import Voice from 'react-native-voice';
    import { localhost } from "../../../config";
    import Tts from "react-native-tts";
    const windowWidth = Dimensions.get('window').width;
    const windowHeight = Dimensions.get('window').height;
    
    export function LearnWords({ navigation, }) {
      // const [user,setUser]=useState(route.params.user)
      const [step,setStep]=useState(0);
      const [score,setScore]=useState(0);
      const [Test,setTest]=useState(false);
      const [TestWord,setTestWord]=useState(1);
      const [testArray,setTestArray]=useState(null);
      const [bestScore,setBestScore]=useState({})
      const [best,setBest]=useState(null)
      const [guessedWord,setGuessedWord]=useState("");
      const [end,setEnd]=useState(false);
      const words=["apple","mango","peach","guava","Banana", "Orange",]
        useEffect(()=>{
          // console.log(user)
          if(step<1){
          setTimeout(()=>{
            setStep(prev=>prev+1)
          },5000);
          }
        },[step]);
        useEffect(()=>{
          if(Test){
            setTestArray(shuffle(words))
          }
        },[Test]);
        useEffect(()=>{
          if(testArray!==null){
            Tts.speak(testArray[0])
          }
        },[testArray]);
        useEffect(()=>{
          if(end){
           Tts.speak("Good Job, You did great!")
           
          }
        },[end]);
        useEffect(()=>{
          var myHeaders = new Headers();
          myHeaders.append("Content-Type", "application/json");
          
          // var raw = JSON.stringify({
          //   id:user
          // });
          
          var requestOptions = {
            method: 'POST',
            headers: myHeaders,
            // body: raw,
            redirect: 'follow'
          };
          
          fetch(`http://${localhost}:4000/api/v1/getBestScores`, requestOptions)
            .then(response => response.json())
            .then(result => {
              console.log(result)
              if(result.bestScores){
                setBestScore(result.bestScores)
                setBest(result.bestScores.words)
                ToastAndroid.showWithGravity(
                  "success",
                   ToastAndroid.SHORT,
                   ToastAndroid.TOP
                 );
              }else{
                ToastAndroid.showWithGravity(
                "failed",
                  ToastAndroid.SHORT,
                  ToastAndroid.TOP
                );
              }
            })
            .catch(error => console.log('error', error));
        
        },[])
        const showToastError = () => {
          Tts.speak("Wrong Spelling!")
          ToastAndroid.showWithGravity(
            'Wrong Spelling',
            ToastAndroid.SHORT,
            ToastAndroid.TOP
          );
        };
        const showToastSuccess = () => {
          ToastAndroid.showWithGravity(
            'Good Job!',
            ToastAndroid.SHORT,
            ToastAndroid.TOP
          );
        };
        function shuffle(array) {
          let currentIndex = array.length,  randomIndex;
        
          // While there remain elements to shuffle.
          while (currentIndex != 0) {
        
            // Pick a remaining element.
            randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex--;
        
            // And swap it with the current element.
            [array[currentIndex], array[randomIndex]] = [
              array[randomIndex], array[currentIndex]];
          }
        
          return array;
        }
      // const speak = (word) => {
      //   Voice.speak(word);
      // };
      const check=()=>{
        console.log(guessedWord);
        console.log(testArray[TestWord])
       if(guessedWord.toLowerCase()===testArray[TestWord-1].toLowerCase()){
         setScore(prev=>prev+1)
       }
       if(TestWord<testArray.length){
        setTestWord(prev=>prev+1);
        Tts.speak(testArray[TestWord]);
        setGuessedWord("")
       }else{
        setEnd(true);
        setTestArray(null);
        setGuessedWord("");
    
       }
      }
      useEffect(()=>{
        if(end){
        if(score>best){
          console.log('here')
          let obj=bestScore;
          obj.words=score;
          setBestScore(obj);
          setBest(score);
        var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");
        
        // var raw = JSON.stringify({
        //   // id:user,
        //   bestScores:obj
        // });
        
        var requestOptions = {
          method: 'POST',
          headers: myHeaders,
          // body: raw,
          redirect: 'follow'
        };
        
        fetch(`http://${localhost}:4000/api/v1/setBestScores`, requestOptions)
          .then(response => response.json())
          .then(result => {
            if(result.message){
            console.log(result.message)
            }else{
              ToastAndroid.showWithGravity(
              "failed",
                ToastAndroid.SHORT,
                ToastAndroid.TOP
              );
            }
          })
          .catch(error => console.log('error', error));
        }
        }
      },[score,end])
      const step1=(
        <View>
          <Text style={[styles.text1,{marginTop:"50%"}]}>
          Here are 6 words to practice.
          Please read it carefully.
          </Text>
        </View>
      )
      const step2=(
        <View>
        <Text style={styles.text1}>
          Please read it carefully.
          </Text>
         {<FlatList style={{}}
              keyExtractor={(item, index) => 'key'+index}
              data={words}
              renderItem={({ item }) => (
                <View style={styles.list}>
                <Text style={styles.text}>{item}</Text>
                <TouchableOpacity onPress={()=>Tts.speak(item)} style={styles.SButton}>
                <Icon name="hearing" size={36} color="black" />
                </TouchableOpacity>
                </View>
            )}
          />}
          <TouchableOpacity onPress={()=>{setTest(true)}} style={[styles.SButton,{marginTop:40,backgroundColor:colors.p,width:150,height:50,justifyContent:'center',}]}>
                  <Text style={[styles.ButtonText,{color:colors.b}]} >Take Test</Text>
                </TouchableOpacity>
        </View>
      )
      const test=(
        <View>
          <Text style={[styles.text1]}>
            In this test you will type words learnt in previous section. By listening to them.
          </Text>
          <View style={{justifyContent:"center",alignItems:"center"}}>
            <Text style={[styles.TestWords]}>
              Word {TestWord}
            </Text>
            
            <TouchableOpacity onPress={()=>Tts.speak(testArray[TestWord-1])} style={styles.SButton}>
              <Icon name="mic" size={36} color="black" />
            </TouchableOpacity>
            <View style={styles.inputFields}>       
              <TextInput
                style={styles.TextInput}
                placeholder="Entre Word here"
                placeholderTextColor="#293038"
                value={guessedWord} 
                onChangeText={(text)=>{setGuessedWord(text)}}
              />
              </View>
              <TouchableOpacity onPress={check} style={styles.SButton}>
              
                <Text style={styles.ButtonText} >Check</Text>
              </TouchableOpacity>
            </View>
        </View>
      )
      const testEnded=(
        <View style={{justifyContent:'center',alignItems:"center"}}>
        <View style={styles.questionCard}>
              <Text style={styles.question}>
                Score: {score}
              </Text>
              <Text style={styles.question}>
                Best: {best}
              </Text>
              
              <TouchableOpacity
                onPress={()=> navigation.navigate("GradeOne")}
                keyboardShouldPersistTaps="hidden"
                style={[styles.SButton,{marginTop:20}]}
              >
                <Text style={styles.ButtonText}>Return</Text>
              </TouchableOpacity>
            </View>
        </View>
      )
        return (
          <View style={styles.container}>
          {step===0?step1:!Test?step2:!end?test:testEnded}
     
          </View>
        );
      }
      const styles = StyleSheet.create({
        container: {
          backgroundColor:'white',
          flex:1,
          paddingTop:20
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
        list:{
          flexDirection:"row",
          flex:1,
          justifyContent:'space-around',
          alignItems:"center",
          marginTop:20,
        },
        TestWords:{
          marginTop:30,
          textAlign: 'center',
          color:colors.b,
          fontSize:36,
          fontFamily:"playtime",
        },
        inputFields:{
          borderColor:colors.b,
          borderRadius:10,
          borderWidth:1,
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
        SButton:{
          alignItems: "center",
          backgroundColor:colors.b,
          paddingHorizontal:10,
          paddingVertical:10,
          borderRadius:6,
          alignSelf:"center",
          justifyContent:"center",
          borderRadius:50
        
        },
        ButtonText:{
          color: colors.y,
          fontFamily:"playtime",
          alignSelf: "center",
          textTransform: "uppercase",
          fontSize:18
        },
        text1:{
          textAlign: 'center',
          color:colors.b,
          fontSize:26,
          fontFamily:"playtime",
        },
        text:{
          textAlign: 'center',
          color:colors.b,
          fontSize:26,
          fontFamily:"playtime",
          textTransform: "uppercase"
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
        question: {
          textAlign: "center",
          color: colors.b,
          fontSize: 26,
          fontFamily: "playtime",
        },
        answers: {
          textAlign: "center",
          color: colors.b,
          fontSize: 20,
          fontFamily: "playtime",
          marginLeft: 15,
        },
        questionCard: {
          borderRadius: 15,
          elevation: 10,
          paddingHorizontal: 10,
          paddingVertical: 20,
          backgroundColor: colors.lb,
          borderColor: colors.b,
          borderWidth: 1,
          width:'80%'
        },
        ButtonText: {
          color: colors.y,
          fontFamily: "playtime",
          alignSelf: "center",
          textTransform: "uppercase",
          fontSize: 18,
        },
    
        
      });