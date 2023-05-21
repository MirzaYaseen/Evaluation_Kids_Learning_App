import React, {
    ActivityIndicator,
    useState,
    useEffect,
    useContext,
  } from "react";
  import {
    StyleSheet,
    ScrollView,
    TextInput,
    Text,
    Keyboard,
    Image,
    View,
    Button,
    componentWillMount,
    TouchableOpacity,
    ToastAndroid,
    TouchableWithoutFeedback,
  } from "react-native";
  import { Dimensions } from "react-native";
  // import { Feather, AntDesign } from "@expo/vector-icons";
  import Icon from 'react-native-vector-icons/MaterialIcons';
  import { colors } from "../../../assetsNew/colors";
  
  const windowWidth = Dimensions.get("window").width;
  const windowHeight = Dimensions.get("window").height;
  
  export function MathTest({ navigation, route }) {
    console.log(route);
    const [operation, setOperation] = useState(route.params.operation);
    const [firstNumber, setFN] = useState(0);
    const [secondNumber, setSN] = useState(0);
    const [answer, setAnswer] = useState("");
    const [result, setResult] = useState(null);
    const [bg, setBG] = useState("green");
    useEffect(() => {
      generateRandomNumber();
    }, []);
    const generateRandomNumber = () => {
      const N1 = Math.round(0 + Math.random() * 10);
      const N2 = Math.round(1 + Math.random() * 10);
  
      setFN(Math.max(N1, N2));
      setSN(Math.min(N1, N2));
    };
    useEffect(() => {
      if (result !== null) {
        if (result) {
          setBG(colors.green);
          
        } else {
          setBG(colors.red);
          
        }
      } else {
        setBG(colors.y);
      }
    }, [result]);
    const check = () => {
      Keyboard.dismiss();
      switch (operation) {
        case "add":
          if (answer === firstNumber + secondNumber) {
            setResult(true);
            ToastAndroid.showWithGravity(
              'Good Job!',
              ToastAndroid.SHORT,
              ToastAndroid.TOP
            );
          } else {
            setResult(false);
            ToastAndroid.showWithGravity(
              'Incorrect, Try again!',
              ToastAndroid.SHORT,
              ToastAndroid.TOP
            );
          }
          break;
        case "sub":
          if (answer === firstNumber - secondNumber) {
            setResult(true);
            ToastAndroid.showWithGravity(
              'Good Job!',
              ToastAndroid.SHORT,
              ToastAndroid.TOP
            );
          } else {
            setResult(false);
            ToastAndroid.showWithGravity(
              'Incorrect, Try again!',
              ToastAndroid.SHORT,
              ToastAndroid.TOP
            );
          }
          break;
        case "mul":
          if (answer === firstNumber * secondNumber) {
            setResult(true);
            ToastAndroid.showWithGravity(
              'Good Job!',
              ToastAndroid.SHORT,
              ToastAndroid.TOP
            );
          } else {
            setResult(false);
            ToastAndroid.showWithGravity(
              'Incorrect, Try again!',
              ToastAndroid.SHORT,
              ToastAndroid.TOP
            );
          }
          break;
        case "div":
          if (answer === firstNumber / secondNumber) {
            setResult(true);
            ToastAndroid.showWithGravity(
              'Good Job!',
              ToastAndroid.SHORT,
              ToastAndroid.TOP
            );
          } else {
            setResult(false);
            ToastAndroid.showWithGravity(
              'Incorrect, Try again!',
              ToastAndroid.SHORT,
              ToastAndroid.TOP
            );
          }
          break;
      }
    };
    const reset = () => {
      setResult(null);
      generateRandomNumber();
      setAnswer("");
    };
    return (
      <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
        <View style={[styles.container, { backgroundColor: bg }]}>
          <View style={styles.cardContainer}>
            <View
              activeOpacity={0.9}
              onPress={() => {
                navigation.navigate("Test", { operation: "add" });
              }}
            >
              <View style={styles.cards}>
                <Text style={styles.cardNames}>{firstNumber}</Text>
              </View>
            </View>
            <View style={{ justifyContent: "center", alignItems: "center" }}>
              <Text style={[styles.cardNames, { fontSize: 50 }]}>
                {operation === "add"
                  ? "+"
                  : operation === "sub"
                  ? "-"
                  : operation === "mul"
                  ? "x"
                  : "/"}
              </Text>
            </View>
            <View
              activeOpacity={0.9}
              onPress={() => {
                navigation.navigate("Test", { operation: "sub" });
              }}
            >
              <View style={styles.cards}>
                <Text style={styles.cardNames}>{secondNumber}</Text>
              </View>
            </View>
          </View>
          <View
            style={{
              justifyContent: "center",
              alignItems: "center",
              marginTop: 50,
            }}
          >
            <View style={styles.inputFields}>
              <TextInput
                style={styles.TextInput}
                placeholder="Equals to?"
                placeholderTextColor="#293038"
                keyboardType="numeric"
                value={answer}
                onChangeText={(text) => {
                  setAnswer(parseInt(text));
                }}
              />
            </View>
            <TouchableOpacity
              onPress={check}
              keyboardShouldPersistTaps="hidden"
              style={styles.SButton}
            >
              <Text style={styles.ButtonText}>Check</Text>
            </TouchableOpacity>
            {result !== null && (
              <TouchableOpacity onPress={reset}>
                <Icon
                  name="refresh"
                  size={40}
                  color={colors.b}
                  style={{
                    marginTop: 60,
                    backgroundColor: colors.y,
                    borderRadius: 30,
                    padding: 10,
                  }}
                />
              </TouchableOpacity>
            )}
          </View>
        </View>
      </TouchableWithoutFeedback>
    );
  }
  const styles = StyleSheet.create({
    container: {
      backgroundColor: "white",
      flex: 1,
      paddingHorizontal: 10,
    },
    topContainer: {
      height: windowHeight / 7,
      backgroundColor: '#002B5B',
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
      backgroundColor: colors.y,
      shadowRadius: 9.51,
    },
    cardContainer: {
      flexDirection: "row",
      justifyContent: "space-between",
      padding: "1.5%",
      paddingHorizontal: "5%",
      marginTop: "14%",
    },
    cards: {
      borderWidth: 1,
      backgroundColor: colors.b,
      borderColor: colors.p,
      padding: "3%",
      marginTop: "5%",
      width: 100,
      height: 100,
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
    inputFields: {
      borderColor: colors.b,
      borderRadius: 10,
      borderWidth: 1,
      height: 50,
      width: 150,
      paddingLeft: 10,
      flexDirection: "row",
      alignItems: "center",
    },
    TextInput: {
      marginLeft: 10,
      width: 300,
      fontFamily: "playtime",
      color:colors.b,
      placeholderTextColor:colors.b
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
      paddingVertical: 20,
      borderRadius: 6,
      alignSelf: "center",
      justifyContent: "center",
      borderRadius: 50,
    },
  });
  