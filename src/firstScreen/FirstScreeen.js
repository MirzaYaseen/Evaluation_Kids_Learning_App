import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import {screenNames} from '../navigation';

const FirstScreeen = ({navigation}) => {
  return (
    <View>
      <Text style={{textAlign: 'center', fontSize: 22, color: 'blue'}}>
        Main Screen
      </Text>
      <TouchableOpacity
        onPress={() => navigation.navigate(screenNames.home)}
        style={{
          justifyContent: 'center',
          alignItems: 'center',
          marginTop: 50,
          backgroundColor: 'red',
          width: 250,
          height: 40,
          alignSelf: 'center',
          borderRadius: 10,
        }}>
        <Text style={{color: 'white', fontSize: 18}}>Evaluation</Text>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => navigation.navigate(screenNames.home)}
        style={{
          justifyContent: 'center',
          alignItems: 'center',
          marginTop: 50,
          backgroundColor: 'red',
          width: 250,
          height: 40,
          alignSelf: 'center',
          borderRadius: 10,
        }}>
        <Text style={{color: 'white', fontSize: 18}}>Nursary</Text>
      </TouchableOpacity>


      <TouchableOpacity
        onPress={() => navigation.navigate(screenNames.home)}
        style={{
          justifyContent: 'center',
          alignItems: 'center',
          marginTop: 50,
          backgroundColor: 'red',
          width: 250,
          height: 40,
          alignSelf: 'center',
          borderRadius: 10,
        }}>
        <Text style={{color: 'white', fontSize: 18}}>Prep</Text>
      </TouchableOpacity>


      <TouchableOpacity
        onPress={() => navigation.navigate(screenNames.home)}
        style={{
          justifyContent: 'center',
          alignItems: 'center',
          marginTop: 50,
          backgroundColor: 'red',
          width: 250,
          height: 40,
          alignSelf: 'center',
          borderRadius: 10,
        }}>
        <Text style={{color: 'white', fontSize: 18}}>1st Grade</Text>
      </TouchableOpacity>
    </View>
  );
};

export default FirstScreeen;
