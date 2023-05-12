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
  MainSmallScreen
} from '../../screens';
import { MainScreen } from '../../screens';
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

const MainNav = () => {
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={commanHeaderStyle}>

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
      </Stack.Navigator>
    </NavigationContainer>
  );
};
export {MainNav};
