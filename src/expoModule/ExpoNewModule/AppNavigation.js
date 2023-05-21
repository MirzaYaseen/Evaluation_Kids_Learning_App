{/*
  const base64Image = student.photo.toString(); 
  <Image style={{width: 100, height: 50}} source={{uri:`data:${student.photoType};charset=utf8;base64,${Buffer.from(student.photo).toString('ascii')}`}}/>
    */}
    import React, { useState, useEffect,createContext,useContext} from "react";
    import { StyleSheet, Text,Image, View,Button,TouchableOpacity} from 'react-native';
    import HeaderTitle, { createStackNavigator } from '@react-navigation/stack';
    import{StudentContext} from "../ContextApi";
    import { NavigationContainer,DrawerActions,NavigationActions } from '@react-navigation/native';
    import {DashboardScreen} from "./DashboardScreen";
    import {GradeOne} from "./GradeOne";
    import {LoginScreen} from "./LoginScreen";
    import { createDrawerNavigator } from '@react-navigation/drawer';
    import { AsyncStorage } from 'react-native';
    import { CustomDrawer } from "../../../assetsNew/CustomDrawer";
    import { colors } from "../../../assetsNew/colors";
    // import { AntDesign,MaterialIcons,Octicons   } from '@expo/vector-icons';
    import { LearnWords } from "./LearnWords";
    import { Coloring } from "./Coloring";
    import { BasicMaths } from "./BasicMaths";
    import { MathTest } from "./MathTest";
    import { GK } from "./GK";
    import { IslamicS } from "./IslamicS";
    import { Sentences } from "./Sentences";
    const Buffer = require('buffer/').Buffer
    const Stack = createStackNavigator();
    const Drawer = createDrawerNavigator();
    
    
    function AppNavigation({route,navigation}) {
        const signOut=()=>{
          navigation.navigate("Login");
        };
      return (
          <Stack.Navigator  
          screenOptions={{ 
            headerTitleAlign:"center",
            headerLeft:null
           }}
          initialRouteName="Dashboard">
            <Stack.Screen  options={{   
          headerStyle: {
            backgroundColor:colors.lb,elevation:0,
          },
          headerTitleStyle:{
            fontFamily:"playtime",
            fontSize:29,
            color:colors.b,
            letterSpacing:2
          }
          }} name="Dashboard" component={DashboardScreen} initialParams={{data:route.params.data}}/>
           <Stack.Screen  options={{   
            headerStyle: {
              backgroundColor: colors.b,elevation:0
            },
            headerTitleStyle:{
            fontFamily:"playtime",
            color:colors.y,
            fontSize:29,
            letterSpacing:2
          }
            }} name="GradeOne" component={GradeOne} />
            <Stack.Screen  options={{   
            headerStyle: {
              backgroundColor: colors.b,elevation:0
            },
            headerTitleStyle:{
            fontFamily:"playtime",
            color:colors.y,
            fontSize:29,
            letterSpacing:2
          }
            }} name="LearnWords" component={LearnWords} />
             <Stack.Screen  options={{   
            headerStyle: {
              backgroundColor: colors.b,elevation:0
            },
            headerTitleStyle:{
            fontFamily:"playtime",
            color:colors.y,
            fontSize:29,
            letterSpacing:2
          }
            }} name="Coloring" component={Coloring} />
            <Stack.Screen  options={{   
            headerStyle: {
              backgroundColor: colors.b,elevation:0
            },
            headerTitleStyle:{
            fontFamily:"playtime",
            color:colors.y,
            fontSize:29,
            letterSpacing:2
          }
            }} name="Maths" component={BasicMaths} />
            <Stack.Screen  options={{   
            headerStyle: {
              backgroundColor: colors.b,elevation:0
            },
            headerTitleStyle:{
            fontFamily:"playtime",
            color:colors.y,
            fontSize:29,
            letterSpacing:2
          }
            }} name="Test" component={MathTest} />
            <Stack.Screen  options={{   
            headerStyle: {
              backgroundColor: colors.b,elevation:0
            },
            headerTitleStyle:{
            fontFamily:"playtime",
            color:colors.y,
            fontSize:29,
            letterSpacing:2
          }
            }} name="GK" component={GK} />
            <Stack.Screen  options={{   
            headerStyle: {
              backgroundColor: colors.b,elevation:0
            },
            headerTitleStyle:{
            fontFamily:"playtime",
            color:colors.y,
            fontSize:29,
            letterSpacing:2
          }
            }} name="Islamic Studies" component={IslamicS} />
            <Stack.Screen  options={{   
            headerStyle: {
              backgroundColor: colors.b,elevation:0
            },
            headerTitleStyle:{
            fontFamily:"playtime",
            color:colors.y,
            fontSize:29,
            letterSpacing:2
          }
            }} name="Learn Sentences" component={Sentences} />
          </Stack.Navigator>
      );
    }
    export{AppNavigation};
    
    
    