import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {
  FreeHand,
  Home,
  SelectAlphabets,
  SelectMarginAlphabet,
  SelectDotScreen,
  MarginLine,
  MainSmallScreen,
} from '../../screens';

import Dashboard from '../../nextModule/ScreenNewModule/Dashboard';
import Abc from '../../nextModule/ScreenNewModule/ABC';
import Actions from '../../nextModule/ScreenNewModule/Actions';
import Animals from '../../nextModule/ScreenNewModule/Animal';
import Birds from '../../nextModule/ScreenNewModule/Birds';
import Colorss from '../../nextModule/ScreenNewModule/Colors';
import Counting from '../../nextModule/ScreenNewModule/Counting';
import Drawing from '../../nextModule/ScreenNewModule/Drawing';
import FiveSenses from '../../nextModule/ScreenNewModule/FiveSenses';
import GeneralKnowlegde from '../../nextModule/ScreenNewModule/GeneralKnowlegde';
import GKShapes from '../../nextModule/ScreenNewModule/GkShapes';
import Months from '../../nextModule/ScreenNewModule/MonthsName';
import Numbering from '../../nextModule/ScreenNewModule/Numbering';
import PartOfBody from '../../nextModule/ScreenNewModule/PartsOfBody';
import Prep from '../../nextModule/ScreenNewModule/Prep';
import PrepGK from '../../nextModule/ScreenNewModule/PrepGK';
import Professions from '../../nextModule/ScreenNewModule/Professions';
import WeekDays from '../../nextModule/ScreenNewModule/WeekDays';
import Words from '../../nextModule/ScreenNewModule/Words';



import { SplashScreen } from '../../expoModule/ExpoNewModule/SplashScreen';
import { LoginScreen } from '../../expoModule/ExpoNewModule/LoginScreen';
import { AppNavigation } from '../../expoModule/ExpoNewModule/AppNavigation';
import { GradeOne } from '../../expoModule/ExpoNewModule/GradeOne';
import { SignupSceen } from '../../expoModule/ExpoNewModule/Signup';
import { LearnWords } from '../../expoModule/ExpoNewModule/LearnWords';
import LearnSentence, { Sentences } from '../../expoModule/ExpoNewModule/Sentences'
import { BasicMaths } from '../../expoModule/ExpoNewModule/BasicMaths';
import { Coloring } from '../../expoModule/ExpoNewModule/Coloring';
import { GK } from '../../expoModule/ExpoNewModule/GK';
import { IslamicS } from '../../expoModule/ExpoNewModule/IslamicS';
import { MathTest } from '../../expoModule/ExpoNewModule/MathTest';



import {MainScreen} from '../../screens';
import FirstScreeen from '../../firstScreen/FirstScreeen';
import {screenNames} from '../screenNames';


let commanHeaderStyle = {
  headerStyle: {
    backgroundColor: '#f4511e',
  },
  headerTintColor: '#fff',
  headerTitleStyle: {},
  headerShown: false,
};
const Stack = createNativeStackNavigator();



const MainNav = () => {
  
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={commanHeaderStyle} >
      {/* <Stack.Screen
          options={{gestureEnabled: false}}
          name={screenNames.firstScreen.name}
          component={FirstScreeen}
        /> */}
      <Stack.Screen 
        options={{headerShown: false}}
        name="Splash" 
        component={SplashScreen} />
        <Stack.Screen
          options={{gestureEnabled: false}}
          name={screenNames.firstScreen.name}
          component={FirstScreeen}
        />
        <Stack.Screen
          options={{gestureEnabled: false}}
          name={screenNames.home.name}
          component={Home}
        />

        <Stack.Screen
          options={{gestureEnabled: false}}
          name={screenNames.dashBoard.name}
          component={Dashboard}
        />

        <Stack.Screen
          options={{gestureEnabled: false}}
          name={screenNames.selectAlphabets.name}
          component={SelectAlphabets}
        />

        <Stack.Screen
          options={{gestureEnabled: false}}
          name={screenNames.freeHand.name}
          component={FreeHand}
        />

        <Stack.Screen
          name={screenNames.MarginLineSelectAlphabets.name}
          component={SelectMarginAlphabet}
        />

        <Stack.Screen
          name={screenNames.SelectDotedAlphabet.name}
          component={SelectDotScreen}
        />
        <Stack.Screen
          name={screenNames.marginLine.name}
          component={MarginLine}
        />

        <Stack.Screen
          name={screenNames.DotedAlphabetMainScreen.name}
          component={MainScreen}
        />
        <Stack.Screen
          name={screenNames.DotedSmalllAlphabetMainScreen.name}
          component={MainSmallScreen}
        />

        <Stack.Screen name={screenNames.Abc.name} component={Abc} />

        <Stack.Screen name={screenNames.Actions.name} component={Actions} />

        <Stack.Screen name={screenNames.Animal.name} component={Animals} />

        <Stack.Screen name={screenNames.Birds.name} component={Birds} />

        <Stack.Screen name={screenNames.Colors.name} component={Colorss} />

        <Stack.Screen name={screenNames.Counting.name} component={Counting} />

        <Stack.Screen name={screenNames.Drawing.name} component={Drawing} />

        <Stack.Screen
          name={screenNames.FiveSenses.name}
          component={FiveSenses}
        />

        <Stack.Screen
          name={screenNames.GeneralKnowledge.name}
          component={GeneralKnowlegde}
        />

        <Stack.Screen name={screenNames.GkShapes.name} component={GKShapes} />

        <Stack.Screen name={screenNames.Months.name} component={Months} />

        <Stack.Screen name={screenNames.Numbering.name} component={Numbering} />

        <Stack.Screen
          name={screenNames.PartOfBody.name}
          component={PartOfBody}
        />

        <Stack.Screen name={screenNames.Prep.name} component={Prep} />

        <Stack.Screen name={screenNames.PrepGk.name} component={PrepGK} />

        <Stack.Screen
          name={screenNames.Professions.name}
          component={Professions}
        />

        <Stack.Screen name={screenNames.WeekDays.name} component={WeekDays} />

        <Stack.Screen name={screenNames.Words.name} component={Words} />
        <Stack.Screen name={screenNames.AppNav.name} component={AppNavigation} />

        <Stack.Screen name={screenNames.Login.name} component={LoginScreen} />

        <Stack.Screen 
        options={{headerShown: false}}
        name="GradeOne" 
        component={GradeOne} />
        
      
        {/* <Stack.Screen 
        name="Login" 
        options={{headerShown: false}}
        component={LoginScreen} /> */}
         <Stack.Screen 
        name="Signup" 
        options={{headerShown: false}}
        component={SignupSceen} />
        

        <Stack.Screen 
        options={{headerShown: false}}
        name="LearnWords" 
        component={LearnWords} />

        <Stack.Screen 
        options={{headerShown: false}}
        name="LearnSentences" 
        component={Sentences} />

       <Stack.Screen 
        options={{headerShown: false}}
        name="Maths" 
        component={BasicMaths} />

       <Stack.Screen 
        options={{headerShown: false}}
        name="Coloring" 
        component={Coloring} />


       <Stack.Screen 
        options={{headerShown: false}}
        name="GK" 
        component={GK} />

       <Stack.Screen 
        options={{headerShown: false}}
        name="IslamicStudies" 
        component={IslamicS} />

<Stack.Screen 
        options={{headerShown: false}}
        name="Test" 
        component={MathTest} />


      </Stack.Navigator>
    </NavigationContainer>
  );
};
export {MainNav};
