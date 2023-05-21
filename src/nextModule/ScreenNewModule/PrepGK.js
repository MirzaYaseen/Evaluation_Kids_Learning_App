import {View, Text, SafeAreaView, ImageBackground,ScrollView, TouchableOpacity} from 'react-native';
import React from 'react';
import { screenNames } from '../../navigation';

const PrepGeneralKnowlegde = ({navigation}) => {
  return (
    <SafeAreaView style={{justifyContent:'center', alignItems:'center', marginTop:20}}>
      <View >
        <ImageBackground
          style={{width: '100%', height: '100%',}}
          source={require('../../assets/images/AlphabetImages/P4pen.png')}>
          <Text
            style={{
              justifyContent: 'center',
              alignItems: 'center',
              fontSize: 30,
              textAlign: 'center',
              marginTop: '10%',
              color: 'black',
            }}>
            General Knowledge
          </Text>
          <TouchableOpacity
            onPress={() => navigation.navigate(screenNames.Months)}
            style={{
              justifyContent: 'center',
              alignItems: 'center',
              marginTop: '15%',
              borderWidth: 3,
              marginLeft: 20,
              marginRight: 20,
              padding: 20,
              borderColor:'#FF6D60'
            }}>
            <Text style={{fontSize: 27, color: '#19A7CE', fontWeight:'700'}}>Month of the Year</Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => navigation.navigate(screenNames.WeekDays)}
            style={{
              borderWidth: 3,
              justifyContent: 'center',
              alignItems: 'center',
              marginLeft: 20,
              marginRight: 20,
              marginTop: 20,
              padding: 20,
              borderColor:'#FF6D60'
            }}>
            <Text style={{fontSize: 27, color: '#19A7CE', fontWeight:'700'}}>Days of the week</Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => navigation.navigate(screenNames.Professions)}
            style={{
              borderWidth: 3,
              justifyContent: 'center',
              alignItems: 'center',
              marginLeft: 20,
              marginRight: 20,
              marginTop: 20,
              padding: 20,
              borderColor:'#FF6D60'
            }}>
            <Text style={{fontSize: 27, color: '#19A7CE', fontWeight:'700'}}>Professions</Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => navigation.navigate(screenNames.Actions)}
            style={{
              borderWidth: 3,
              justifyContent: 'center',
              alignItems: 'center',
              marginLeft: 20,
              marginRight: 20,
              marginTop: 20,
              padding: 20,
              borderColor:'#FF6D60'
            }}>
            <Text style={{fontSize: 27, color: '#19A7CE', fontWeight:'700'}}>Actions</Text>
          </TouchableOpacity>

        
        </ImageBackground>
      </View>
    </SafeAreaView>
  );
};

export default PrepGeneralKnowlegde;
