// import React from 'react';
// import { Modal, ActivityIndicator, StyleSheet } from 'react-native';
// import { theme } from '../constants';
// import { Text, View } from '.';

// export const _LoadingModal = ({ isVisible, color = theme.colors.Gray }) => {
//   return (
//     <Modal visible={isVisible} transparent={true}>
//       <View style={styles.container}>
//         <View style={styles.innerContainer}>
//           <ActivityIndicator size={'large'} color={color} />
//           <Text style={styles.loadingText}>Loading...</Text>
//         </View>
//       </View>
//     </Modal>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     backgroundColor: '#000000' + 90,
//   },
//   innerContainer: {
//     width: '60%',
//     height: 100,
//     backgroundColor: theme.colors.background,
//     justifyContent: 'center',
//     alignItems: 'center',
//     borderRadius: 15,
//     shadowColor: '#000',
//     shadowOffset: {
//       width: 0,
//       height: 3,
//     },
//     shadowOpacity: 0.27,
//     shadowRadius: 4.65,
//     elevation: 6,
//   },
//   loadingText: {
//     textAlign: 'center',
//     marginTop: 10,
//   },
// });



import React, {FC} from 'react';
import {Modal, ActivityIndicator, StyleSheet} from 'react-native';
import {theme} from '../constants';
import {_Text, _View} from './';



export const _LoadingModal = ({
  isVisible,
  color = theme.colors.Gray,
}) => {
  return (
    <Modal visible={isVisible} transparent={true}>
      <_View style={styles.container}>
        <_View style={styles.innerContainer}>
          <ActivityIndicator size={'large'} color={color} />
          <_Text style={styles.loadingText}>Loading...</_Text>
        </_View>
      </_View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#000000' + 90,
  },
  innerContainer: {
    width: '60%',
    height: 100,
    backgroundColor: theme.colors.background,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 15,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.27,
    shadowRadius: 4.65,
    elevation: 6,
  },
  loadingText:{
    textAlign:'center',
    marginTop:10,

  }
});

