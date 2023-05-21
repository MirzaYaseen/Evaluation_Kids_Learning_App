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
    ToastAndroid,
    Button,
    componentWillMount,
    TouchableOpacity,
  } from "react-native";
  // import { Ionicons } from "@expo/vector-icons";
  // import Icon from 'react-native-vector-icons/FontAwesome';
  import { Dimensions } from "react-native";
  import Icon from 'react-native-vector-icons/MaterialIcons';
  import { colors } from "../../../assetsNew/colors";
  import { localhost } from "../../../config";
  
  const windowWidth = Dimensions.get("window").width;
  const windowHeight = Dimensions.get("window").height;
  
  export function Sentences({ navigation }) {
    // const [user,setUser]=useState(route.params.user)
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [selectedOption, setSelectedOption] = useState("");
    const [score, setScore] = useState(0);
    const [result, setResults] = useState(false);
    const [bestScore,setBestScore]=useState({})
    const [best,setBest]=useState(null)
    const Questions = [
      {
        question: "Ahmad is _____ boy",
        options: ["a", "an", "the"],
        answer: "a",
      },
      {
        question: "I saw ____ elephant",
        options: ["a", "an", "the"],
        answer: "an",
      },
      {
        question: "They ____ not very happy.",
        options: ["is", "are", "am"],
        answer: "are",
      },
      {
        question: "He ____ late for work today.",
        options: ["is", "am", "are"],
        answer: "is",
      },
      {
        question: "They ____ are not guilty.",
        options: ["is", "are", "us"],
        answer: "are",
      },
      {
        question: "Her gender ____ not masculine.",
        options: ["is", "are", "am"],
        answer: "is",
      },
      {
        question: "They ____ car in their house.",
        options: ["is", "have", "are"],
        answer: "have",
      },
      {
        question: "Ahmad & Amna ____ Siblings.",
        options: ["is", "have", "are"],
        answer: "are",
      },
      {
        question: "Amna ____ the eldest child.",
        options: ["is", "have", "are"],
        answer: "is",
      },
      {
        question: "People ____ very happy.",
        options: ["is", "have", "are"],
        answer: "are",
      },
      {
        question: "I ____ four brother.",
        options: ["is", "have", "are"],
        answer: "have",
      },
      {
        question: "Dog ____ barking on the door.",
        options: ["am", "is", "are"],
        answer: "is",
      },
    ];
  
    const check = () => {
      if (selectedOption === Questions[currentQuestion].answer) {
        setScore((prev) => prev + 1);
      }
      if (currentQuestion + 1 < Questions.length) {
        setCurrentQuestion((prev) => prev + 1);
        setSelectedOption('')
      } else {
        setResults(true);
      }
    };
    const reset = () => {
      setResults(false);
      setCurrentQuestion(0);
      setScore(0);
      setSelectedOption("");
    };
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
          if(result.bestScores){
            setBestScore(result.bestScores)
            setBest(result.bestScores.sentences)
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
    useEffect(()=>{
      if(result){
      if(score>best){
        console.log('here in')
        let obj=bestScore;
        obj.sentences=score;
        setBestScore(obj);
        setBest(score);
      var myHeaders = new Headers();
      myHeaders.append("Content-Type", "application/json");
      
      // var raw = JSON.stringify({
      //   id:user,
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
    },[score,result])
    return (
      <View style={styles.container}>
        {!result ? (
          <View style={styles.questionCard}>
            <Text style={styles.question}>
              {Questions[currentQuestion].question}
            </Text>
            {Questions[currentQuestion].options.map((option, index) => (
              <TouchableOpacity
                key={index}
                onPress={() => {
                  setSelectedOption(option);
                }}
                style={{ flexDirection: "row", marginTop: 10 }}
              >
                {selectedOption === option ? (
                  <Icon name="radio-button-on" size={24} color={colors.b} />
                ) : (
                  <Icon name="radio-button-off" size={24} color={colors.b} />
                )}
                <Text style={styles.answers}>{option}</Text>
              </TouchableOpacity>
            ))}
            <TouchableOpacity
              onPress={check}
              keyboardShouldPersistTaps="hidden"
              style={styles.SButton}
            >
              <Text style={styles.ButtonText}>Check</Text>
            </TouchableOpacity>
          </View>
        ) : (
          <View style={styles.questionCard}>
            <Text style={styles.question}>
              Your Final Score is {score}/{Questions.length}
            </Text>
            <Text style={styles.question}>
              Best: {best}
            </Text>
            <TouchableOpacity
              onPress={reset}
              keyboardShouldPersistTaps="hidden"
              style={styles.SButton}
            >
              <Text style={styles.ButtonText}>Reset</Text>
            </TouchableOpacity>
          </View>
        )}
        {!result && (
          <Image
            style={styles.image}
            source={require("../../../assetsNew/reading.gif")}
          />
        )}
      </View>
    );
  }
  const styles = StyleSheet.create({
    container: {
      backgroundColor:'#F6F1E9',
      flex: 1,
      alignItems: "center",
      padding: 20,
      paddingTop: 36,
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
      width:"100%"
    },
    ButtonText: {
      color: colors.y,
      fontFamily: "playtime",
      alignSelf: "center",
      textTransform: "uppercase",
      fontSize: 18,
    },
    SButton: {
      alignItems: "center",
      backgroundColor: colors.b,
      paddingHorizontal: 30,
      marginTop: 20,
      paddingVertical: 10,
      elevation: 10,
      borderRadius: 6,
      alignSelf: "center",
      justifyContent: "center",
      borderRadius: 50,
    },
    image: {
        marginTop:"10%",
        width: 300,
        height: 400,
        elevation:10,
        shadowColor: "white",
      shadowOffset: { height: 10},
      shadowOpacity: 1,
      },
  });
  