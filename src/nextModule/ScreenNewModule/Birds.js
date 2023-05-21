// // Text to Speech Conversion with Natural Voices in React Native
// // https://aboutreact.com/react-native-text-to-speech/

// // import React in our code
// import React, {useState, useEffect} from 'react';

// // import all the components we are going to use
// import {
//   SafeAreaView,
//   StyleSheet,
//   Text,
//   View,
//   FlatList,
//   TouchableOpacity,
//   ScrollView,
//   Image,
//   ImageBackground,
// } from 'react-native';

// // import slider for the tuning of pitch and speed
// import Slider from '@react-native-community/slider';

// // import Tts Text to Speech
// import Tts from 'react-native-tts';

// const Birds = () => {
//   const [voices, setVoices] = useState([]);
//   const [ttsStatus, setTtsStatus] = useState('initiliazing');
//   const [selectedVoice, setSelectedVoice] = useState(null);
//   const [speechRate, setSpeechRate] = useState(0.5);
//   const [speechPitch, setSpeechPitch] = useState(1);
//   const [textEagle, setTextEagle] = useState('Eagle');
//   const [textParrot, setTextParrot] = useState('Parrot');
//   const [textPeacock, setTextPeacock] = useState('Peacock');
//   const [textSparrow, setTextSparrow] = useState('Sparrow');
//   const [textCrow, setTextCrow] = useState('Crow');
//   const [textPigeon, setTextPigeon] = useState('Pigeon');

//   useEffect(() => {
//     Tts.addEventListener('tts-start', _event => setTtsStatus('started'));
//     Tts.addEventListener('tts-finish', _event => setTtsStatus('finished'));
//     Tts.addEventListener('tts-cancel', _event => setTtsStatus('cancelled'));
//     Tts.setDefaultRate(speechRate);
//     Tts.setDefaultPitch(speechPitch);
//     Tts.getInitStatus().then(initTts);
//     return () => {
//       Tts.removeEventListener('tts-start', _event => setTtsStatus('started'));
//       Tts.removeEventListener('tts-finish', _event => setTtsStatus('finished'));
//       Tts.removeEventListener('tts-cancel', _event =>
//         setTtsStatus('cancelled'),
//       );
//     };
//   }, []);

//   const initTts = async () => {
//     const voices = await Tts.voices();
//     const availableVoices = voices
//       .filter(v => !v.networkConnectionRequired && !v.notInstalled)
//       .map(v => {
//         return {id: v.id, name: v.name, language: v.language};
//       });
//     let selectedVoice = null;
//     if (voices && voices.length > 0) {
//       selectedVoice = voices[0].id;
//       try {
//         await Tts.setDefaultLanguage(voices[0].language);
//       } catch (err) {
//         //Samsung S9 has always this error:
//         //"Language is not supported"
//         console.log(`setDefaultLanguage error `, err);
//       }
//       await Tts.setDefaultVoice(voices[0].id);
//       setVoices(availableVoices);
//       setSelectedVoice(selectedVoice);
//       setTtsStatus('initialized');
//     } else {
//       setTtsStatus('initialized');
//     }
//   };

//   const readTextEagle = async () => {
//     Tts.stop();
//     Tts.speak(textEagle);
//   };

//   const readTextParrot = async () => {
//     Tts.stop();
//     Tts.speak(textParrot);
//   };

//   const readTextPeacock = async () => {
//     Tts.stop();
//     Tts.speak(textPeacock);
//   };

//   const readTextSparrow = async () => {
//     Tts.stop();
//     Tts.speak(textSparrow);
//   };

//   const readTextCrow = async () => {
//     Tts.stop();
//     Tts.speak(textCrow);
//   };

//   const readTextPigeon = async () => {
//     Tts.stop();
//     Tts.speak(textPigeon);
//   };

//   const updateSpeechRate = async rate => {
//     await Tts.setDefaultRate(rate);
//     setSpeechRate(rate);
//   };

//   const updateSpeechPitch = async rate => {
//     await Tts.setDefaultPitch(rate);
//     setSpeechPitch(rate);
//   };

//   const onVoicePress = async voice => {
//     try {
//       await Tts.setDefaultLanguage(voice.language);
//     } catch (err) {
//       // Samsung S9 has always this error:
//       // "Language is not supported"
//       console.log(`setDefaultLanguage error `, err);
//     }
//     await Tts.setDefaultVoice(voice.id);
//     setSelectedVoice(voice.id);
//   };

//   const renderVoiceItem = ({item}) => {
//     return (
//       <TouchableOpacity
//         style={{
//           backgroundColor: selectedVoice === item.id ? '#DDA0DD' : '#5F9EA0',
//         }}
//         onPress={() => onVoicePress(item)}>
//         <Text style={styles.buttonTextStyle}>
//           {`${item.language} - ${item.name || item.id}`}
//         </Text>
//       </TouchableOpacity>
//     );
//   };

//   return (
//     <ImageBackground
//       style={{width: '100%', height: '100%'}}
//       source={require('../../assets/newModuleAssests/images/bgg.jpg')}>
//       <SafeAreaView style={styles.container}>
//         <View style={styles.container}>
//           {/* <Text style={styles.titleText}>
//             Adjust Clearity and Smoothness of Voice
//           </Text>
//           <View style={styles.sliderContainer}>
//             <Text style={styles.sliderLabel}>
//               {`Speed: ${speechRate.toFixed(2)}`}
//             </Text>
//             <Slider
//               style={styles.slider}
//               minimumValue={0.01}
//               maximumValue={0.99}
//               value={speechRate}
//               onSlidingComplete={updateSpeechRate}
//             />
//           </View>
//           <View style={styles.sliderContainer}>
//             <Text style={styles.sliderLabel}>
//               {`Pitch: ${speechPitch.toFixed(2)}`}
//             </Text>
//             <Slider
//               style={styles.slider}
//               minimumValue={0.5}
//               maximumValue={2}
//               value={speechPitch}
//               onSlidingComplete={updateSpeechPitch}
//             />
//           </View> */}
//           {/* <Text style={styles.sliderLabel}>Select the Voice</Text>
//           <FlatList
//             style={{width: '100%', marginTop: 5}}
//             keyExtractor={item => item.id}
//             renderItem={renderVoiceItem}
//             extraData={selectedVoice}
//             data={voices}
//           />
//           <Text style={styles.sliderContainer}>
//             {`Selected Voice: ${selectedVoice || ''}`}
//           </Text> */}
//           {/* <TextInput
//           style={styles.textInput}
//           onChangeText={(text) => setText(text)}
//           value={text}
//           onSubmitEditing={Keyboard.dismiss}
//         /> */}

//           <View
//             style={{
//               flexDirection: 'row',
//               justifyContent: 'space-evenly',

//               marginTop: 20,
//             }}>
//             <TouchableOpacity
//               style={styles.buttonStyle}
//               onPress={readTextEagle}>
//               <Image
//                 style={styles.image}
//                 source={require('../../assets/newModuleAssests/images/eagle.png')}
//               />
//             </TouchableOpacity>

//             <TouchableOpacity
//               style={styles.buttonStyle}
//               onPress={readTextParrot}>
//               <Image
//                 style={styles.image}
//                 source={require('../../assets/newModuleAssests/images/parrot.png')}
//               />
//             </TouchableOpacity>
//           </View>

//           <View
//             style={{
//               flexDirection: 'row',
//               justifyContent: 'space-evenly',

//               marginTop: 20,
//             }}>
//             <TouchableOpacity
//               style={styles.buttonStyle}
//               onPress={readTextPeacock}>
//               <Image
//                 style={styles.image}
//                 source={require('../../assets/newModuleAssests/images/peacock.png')}
//               />
//             </TouchableOpacity>
//             <TouchableOpacity
//               style={styles.buttonStyle}
//               onPress={readTextSparrow}>
//               <Image
//                 style={styles.image}
//                 source={require('../../assets/newModuleAssests/images/sparrow.png')}
//               />
//             </TouchableOpacity>
//           </View>

//           <View
//             style={{
//               flexDirection: 'row',
//               justifyContent: 'space-evenly',

//               marginTop: 20,
//             }}>
//             <TouchableOpacity style={styles.buttonStyle} onPress={readTextCrow}>
//               <Image
//                 style={styles.image}
//                 source={require('../../assets/newModuleAssests/images/crow.png')}
//               />
//             </TouchableOpacity>

//             <TouchableOpacity
//               style={styles.buttonStyle}
//               onPress={readTextPigeon}>
//               <Image
//                 style={styles.image}
//                 source={require('../../assets/newModuleAssests/images/pigeon.png')}
//               />
//             </TouchableOpacity>
//           </View>
//         </View>
//       </SafeAreaView>
//     </ImageBackground>
//   );
// };

// export default Birds;

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     flexDirection: 'column',
//     padding: 5,
//   },
//   titleText: {
//     fontSize: 22,
//     textAlign: 'center',
//     fontWeight: 'bold',
//     color: 'white',
//     marginTop: 10,
//     marginBottom: 20,
//   },
//   buttonStyle: {
//     width: 150,
//     height: 150,
//     borderRadius: 20,
//     justifyContent: 'center',
//     marginTop: 5,
//     padding: 10,
//   },
//   buttonTextStyle: {
//     color: '#fff',
//     textAlign: 'center',
//     fontSize: 25,
//   },
//   sliderContainer: {
//     flexDirection: 'row',
//     justifyContent: 'center',
//     alignItems: 'center',
//     width: 300,
//     padding: 5,
//   },
//   sliderLabel: {
//     textAlign: 'center',
//     marginRight: 20,
//     marginTop: 10,
//   },
//   slider: {
//     flex: 1,
//   },
//   textInput: {
//     borderColor: 'gray',
//     borderWidth: 1,
//     color: 'black',
//     width: '100%',
//     textAlign: 'center',
//     height: 40,
//   },
//   image: {
//     width: 120,
//     height: 120,
//   },
// });

// // Text to Speech Conversion with Natural Voices in React Native
// // https://aboutreact.com/react-native-text-to-speech/

// // import React in our code
// import React, {useState, useEffect} from 'react';

// // import all the components we are going to use
// import {
//   SafeAreaView,
//   StyleSheet,
//   Text,
//   View,
//   FlatList,
//   TouchableOpacity,
//   ScrollView,
//   Image,
//   ImageBackground,
// } from 'react-native';

// // import slider for the tuning of pitch and speed
// import Slider from '@react-native-community/slider';

// // import Tts Text to Speech
// import Tts from 'react-native-tts';

// const Animals = () => {
//   const [voices, setVoices] = useState([]);
//   const [ttsStatus, setTtsStatus] = useState('initiliazing');
//   const [selectedVoice, setSelectedVoice] = useState(null);
//   const [speechRate, setSpeechRate] = useState(0.5);
//   const [speechPitch, setSpeechPitch] = useState(1);
//   const [textLion, setTextLion] = useState('Lion');
//   const [textWolf, setTextWolf] = useState('Wolf');
//   const [textDog, setTextDog] = useState('Dog');
//   const [textCat, setTextCat] = useState('Cat');
//   const [textCrocodile, setTextCrocodile] = useState('Crocodile');
//   const [textBull, setTextBull] = useState('Bull');

//   useEffect(() => {
//     Tts.addEventListener('tts-start', _event => setTtsStatus('started'));
//     Tts.addEventListener('tts-finish', _event => setTtsStatus('finished'));
//     Tts.addEventListener('tts-cancel', _event => setTtsStatus('cancelled'));
//     Tts.setDefaultRate(speechRate);
//     Tts.setDefaultPitch(speechPitch);
//     Tts.getInitStatus().then(initTts);
//     return () => {
//       Tts.removeEventListener('tts-start', _event => setTtsStatus('started'));
//       Tts.removeEventListener('tts-finish', _event => setTtsStatus('finished'));
//       Tts.removeEventListener('tts-cancel', _event =>
//         setTtsStatus('cancelled'),
//       );
//     };
//   }, []);

//   const initTts = async () => {
//     const voices = await Tts.voices();
//     const availableVoices = voices
//       .filter(v => !v.networkConnectionRequired && !v.notInstalled)
//       .map(v => {
//         return {id: v.id, name: v.name, language: v.language};
//       });
//     let selectedVoice = null;
//     if (voices && voices.length > 0) {
//       selectedVoice = voices[0].id;
//       try {
//         await Tts.setDefaultLanguage(voices[0].language);
//       } catch (err) {
//         //Samsung S9 has always this error:
//         //"Language is not supported"
//         console.log(`setDefaultLanguage error `, err);
//       }
//       await Tts.setDefaultVoice(voices[0].id);
//       setVoices(availableVoices);
//       setSelectedVoice(selectedVoice);
//       setTtsStatus('initialized');
//     } else {
//       setTtsStatus('initialized');
//     }
//   };

//   const readTextLion = async () => {
//     Tts.stop();
//     Tts.speak(textLion);
//   };

//   const readTextWolf = async () => {
//     Tts.stop();
//     Tts.speak(textWolf);
//   };

//   const readTextDog = async () => {
//     Tts.stop();
//     Tts.speak(textDog);
//   };

//   const readTextCat = async () => {
//     Tts.stop();
//     Tts.speak(textCat);
//   };

//   const readTextCrocodile = async () => {
//     Tts.stop();
//     Tts.speak(textCrocodile);
//   };

//   const readTextBull = async () => {
//     Tts.stop();
//     Tts.speak(textBull);
//   };

//   const updateSpeechRate = async rate => {
//     await Tts.setDefaultRate(rate);
//     setSpeechRate(rate);
//   };

//   const updateSpeechPitch = async rate => {
//     await Tts.setDefaultPitch(rate);
//     setSpeechPitch(rate);
//   };

//   const onVoicePress = async voice => {
//     try {
//       await Tts.setDefaultLanguage(voice.language);
//     } catch (err) {
//       // Samsung S9 has always this error:
//       // "Language is not supported"
//       console.log(`setDefaultLanguage error `, err);
//     }
//     await Tts.setDefaultVoice(voice.id);
//     setSelectedVoice(voice.id);
//   };

//   const renderVoiceItem = ({item}) => {
//     return (
//       <TouchableOpacity
//         style={{
//           backgroundColor: selectedVoice === item.id ? '#DDA0DD' : '#5F9EA0',
//         }}
//         onPress={() => onVoicePress(item)}>
//         <Text style={styles.buttonTextStyle}>
//           {`${item.language} - ${item.name || item.id}`}
//         </Text>
//       </TouchableOpacity>
//     );
//   };

//   return (
//     <SafeAreaView style={styles.container}>
//       <ImageBackground
//         style={{width: '100%', height: '100%'}}
//         source={require('../../assets/newModuleAssests/images/bgg.jpg')}>
//         <View style={styles.container}>
//           {/* <Text style={styles.titleText}>
//             Adjust Clearity and Smoothness of Voice
//           </Text>
//           <View style={styles.sliderContainer}>
//             <Text style={styles.sliderLabel}>
//               {`Speed: ${speechRate.toFixed(2)}`}
//             </Text>
//             <Slider
//               style={styles.slider}
//               minimumValue={0.01}
//               maximumValue={0.99}
//               value={speechRate}
//               onSlidingComplete={updateSpeechRate}
//             />
//           </View>
//           <View style={styles.sliderContainer}>
//             <Text style={styles.sliderLabel}>
//               {`Pitch: ${speechPitch.toFixed(2)}`}
//             </Text>
//             <Slider
//               style={styles.slider}
//               minimumValue={0.5}
//               maximumValue={2}
//               value={speechPitch}
//               onSlidingComplete={updateSpeechPitch}
//             />
//           </View> */}
//           {/* <Text style={styles.sliderLabel}>Select the Voice</Text>
//           <FlatList
//             style={{width: '100%', marginTop: 5}}
//             keyExtractor={item => item.id}
//             renderItem={renderVoiceItem}
//             extraData={selectedVoice}
//             data={voices}
//           />
//           <Text style={styles.sliderContainer}>
//             {`Selected Voice: ${selectedVoice || ''}`}
//           </Text> */}
//           {/* <TextInput
//           style={styles.textInput}
//           onChangeText={(text) => setText(text)}
//           value={text}
//           onSubmitEditing={Keyboard.dismiss}
//         /> */}

//           <View
//             style={{
//               flexDirection: 'row',
//               justifyContent: 'space-evenly',

//               marginTop: 20,
//             }}>
//             <TouchableOpacity style={styles.buttonStyle} onPress={readTextLion}>
//               <Image
//                 style={styles.image}
//                 source={require('../../assets/newModuleAssests/images/lion.png')}
//               />
//             </TouchableOpacity>

//             <TouchableOpacity style={styles.buttonStyle} onPress={readTextWolf}>
//               <Image
//                 style={styles.image}
//                 source={require('../../assets/newModuleAssests/images/wolf.png')}
//               />
//             </TouchableOpacity>
//           </View>

//           <View
//             style={{
//               flexDirection: 'row',
//               justifyContent: 'space-evenly',

//               marginTop: 20,
//             }}>
//             <TouchableOpacity style={styles.buttonStyle} onPress={readTextDog}>
//               <Image
//                 style={styles.image}
//                 source={require('../../assets/newModuleAssests/images/dog.png')}
//               />
//             </TouchableOpacity>
//             <TouchableOpacity style={styles.buttonStyle} onPress={readTextCat}>
//               <Image
//                 style={styles.image}
//                 source={require('../../assets/newModuleAssests/images/cat.png')}
//               />
//             </TouchableOpacity>
//           </View>

//           <View
//             style={{
//               flexDirection: 'row',
//               justifyContent: 'space-evenly',

//               marginTop: 20,
//             }}>
//             <TouchableOpacity
//               style={styles.buttonStyle}
//               onPress={readTextCrocodile}>
//               <Image
//                 style={styles.image}
//                 source={require('../../assets/newModuleAssests/images/crocodile.png')}
//               />
//             </TouchableOpacity>

//             <TouchableOpacity style={styles.buttonStyle} onPress={readTextBull}>
//               <Image
//                 style={styles.image}
//                 source={require('../../assets/newModuleAssests/images/bull.png')}
//               />
//             </TouchableOpacity>
//           </View>
//         </View>
//       </ImageBackground>
//     </SafeAreaView>
//   );
// };

// export default Animals;

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     flexDirection: 'column',
//   },
//   titleText: {
//     fontSize: 22,
//     textAlign: 'center',
//     fontWeight: 'bold',
//     color: 'white',
//     marginTop: 10,
//     marginBottom: 20,
//   },
//   buttonStyle: {
//     width: 150,
//     height: 150,
//     borderRadius: 20,
//     justifyContent: 'center',
//     marginTop: 15,
//     padding: 10,
//   },
//   buttonTextStyle: {
//     color: '#fff',
//     textAlign: 'center',
//     fontSize: 25,
//   },
//   sliderContainer: {
//     flexDirection: 'row',
//     justifyContent: 'center',
//     alignItems: 'center',
//     width: 300,
//     padding: 5,
//   },
//   sliderLabel: {
//     textAlign: 'center',
//     marginRight: 20,
//     marginTop: 10,
//   },
//   slider: {
//     flex: 1,
//   },
//   textInput: {
//     borderColor: 'gray',
//     borderWidth: 1,
//     color: 'black',
//     width: '100%',
//     textAlign: 'center',
//     height: 40,
//   },
//   image: {
//     width: 120,
//     height: 120,
//   },
// });

import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  Image,
  Button,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import Tts from 'react-native-tts';

const AnimalList = [
  {
    name: 'Parrot',
    image: require('../../assets/newModuleAssests/images/parrotImg.png'),
  },
  {
    name: 'Peacock',
    image: require('../../assets/newModuleAssests/images/peacockImg.png'),
  },
  {
    name: 'Pigeon',
    image: require('../../assets/newModuleAssests/images/pigeonImg.png'),
  },
  {
    name: 'Owl',
    image: require('../../assets/newModuleAssests/images/owlImg.png'),
  },
  {
    name: 'Sparrow',
    image: require('../../assets/newModuleAssests/images/sparrowImg.png'),
  },
  {
    name: 'Wood Cutter',
    image: require('../../assets/newModuleAssests/images/woodCutterImg.png'),
  },
  {
    name: 'Penguin',
    image: require('../../assets/newModuleAssests/images/penguinImg.png'),
  },
  {
    name: 'Duck',
    image: require('../../assets/newModuleAssests/images/duckImg2.png'),
  },

  {
    name: 'Ostrich',
    image: require('../../assets/newModuleAssests/images/ostrichImg.png'),
  },
  {
    name: 'Pelican',
    image: require('../../assets/newModuleAssests/images/pelicanImg.png'),
  },
  {
    name: 'Crow',
    image: require('../../assets/newModuleAssests/images/crowImg.png'),
  },
  {
    name: 'Chicken',
    image: require('../../assets/newModuleAssests/images/chickenImg.png'),
  },
  {
    name: 'Lark',
    image: require('../../assets/newModuleAssests/images/larkImg.png'),
  },
  {
    name: 'Falcon',
    image: require('../../assets/newModuleAssests/images/falconImg.png'),
  },
];

const BirdsScreen = () => {
  const [animals, setAnimals] = useState([]);

  useEffect(() => {
    generateRandomAnimals();
    return () => {
      Tts.stop();
    };
  }, []);

  const generateRandomAnimals = () => {
    const randomAnimals = [];
    const shuffledAnimals = AnimalList.sort(() => 0.5 - Math.random());

    for (let i = 0; i < 6; i++) {
      randomAnimals.push(shuffledAnimals[i]);
    }

    setAnimals(randomAnimals);
  };

  const speakAnimalName = animalName => {
    Tts.speak(animalName);
  };

  return (
    <ScrollView>
      <View>
        {animals.map((animal, index) => (
          <View key={index} style={{marginTop: 10}}>
            <Image
              source={animal.image}
              style={{
                width: 200,
                height: 200,
                justifyContent: 'center',
                alignItems: 'center',
                alignSelf: 'center',
              }}
            />
            <Text
              style={{
                fontSize: 22,
                marginBottom: 10,
                paddingLeft: 10,
                color: '#191825',
              }}>
              {animal.name}
            </Text>
            <TouchableOpacity
              onPress={() => speakAnimalName(animal.name)}
              style={{
                padding: 10,
                backgroundColor: '#191825',
                borderRadius: 5,
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <Text style={{fontSize: 22, color: 'white'}}>Speak</Text>
            </TouchableOpacity>
          </View>
        ))}
      </View>
    </ScrollView>
  );
};

export default BirdsScreen;
