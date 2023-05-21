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
  import Icon from 'react-native-vector-icons/MaterialIcons';
  import { Dimensions } from "react-native";
  import { localhost } from "../../../config";
  import { colors } from "../../../assetsNew/colors";
  
  const windowWidth = Dimensions.get("window").width;
  const windowHeight = Dimensions.get("window").height;
  
  export function GK({ navigation }) {
    // const [user,setUser]=useState(route.params.user)
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [selectedOption, setSelectedOption] = useState("");
    const [score, setScore] = useState(0);
    const [result, setResults] = useState(false);
    const [bestScore,setBestScore]=useState({})
    const [best,setBest]=useState(null)
    const Questions = [
      {
        question: "How many months are there in a year?",
        options: ["1", "5", "12", "10"],
        answer: "12",
      },
      {
        question: "How many days are there in a week?",
        options: ["3", "5", "7", "10"],
        answer: "7",
      },
      {
        question: "Which month comes after October?",
        options: ["November", "December", "January", "March"],
        answer: "November",
      },
      {
        question: "How many colours are there in a rainbow?",
        options: ["4", "5", "7", "6"],
        answer: "7",
      },
      {
        question: "How many billion people in the world?",
        options: ["1.7 Billion", "5 Billion", "7.6 Billion", "6 Billion"],
        answer: "1.7 Billion",
      },
      {
        question: "How many species living in the sea?",
        options: ["2 Million", "5 Billion", "7.6 Million", "6.1 Billion"],
        answer: "2 Million",
      },
      {
        question: "Whast is Population of Pakistan?",
        options: ["2.2 Million", "5.7 Million", "7.6 Million", "4.1 Million"],
        answer: "2.2 Million",
      },
      {
        question: "What is Birth date of Pakistan?",
        options: ["1967", "1876", "1947", "1958"],
        answer: "1947",
      },
      {
        question: "Where is the Birth Place of Allama Iqbal?",
        options: ["Sialkot", "Karachi", "Lahore", "Peshawar"],
        answer: "Sialkot",
      },
      {
        question: "Where is tomb of Quaid-e-Azam Muhammad Ali Jinnah?",
        options: ["Sialkot", "Karachi", "Lahore", "Peshawar"],
        answer: "Karachi",
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
            setBest(result.bestScores.gk)
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
        console.log(score, best)
      if(score>best){
        console.log('here in')
        let obj=bestScore;
        obj.gk=score;
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
        {/* {!result && (
          <Image
            style={styles.image}
            source={require("../../../assets/Newthinking.gif")}
          />
        )} */}
      </View>
    );
  }
  
  const styles = StyleSheet.create({
    container: {
      backgroundColor: '#F6F1E9',
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
  