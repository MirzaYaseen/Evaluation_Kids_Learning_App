import React, {ActivityIndicator, useState, useEffect,useContext} from "react";
import { StyleSheet,ScrollView, Text,Image, View,Button,componentWillMount,TouchableOpacity} from 'react-native';
import Svg, {Path,G,Rect,Ellipse} from 'react-native-svg';
export function Pic2(props) {  
const[currentColor,setCurrentColor]=useState("white");
    return(
<Svg viewBox="0 0 120.98 186.85">
  <G id="layer1" transform="translate(-308.08 -390.37)">
    <G id="g2537" stroke-linejoin="round" transform="translate(218.37 80.996)" stroke-dashoffset="1.5" stroke="#000" stroke-linecap="round">
      <Path  id="path2467" stroke-width="2" onPress={() => props.onFill(0)} fill={props.fillColors[0]} d="m123.3 345.02c-8.06 2.7-6.3 11.07 0.76 10.72l-0.76-10.72z"/>
      <Path id="path2469" stroke-width="2" onPress={() => props.onFill(1)} fill={props.fillColors[1]} d="m182.21 356.16c7.67-2.46 6.26-10.88-0.39-10.73l0.39 10.73z"/>
      <Path id="path2471" stroke-width="2" onPress={() => props.onFill(2)} fill={props.fillColors[2]} d="m123.72 346.46l-1.59 21.66c-0.44 6.6-1.3 11.74-1.75 14.94 14.59 3.58 32.54 4.39 51.35 0.75 4.94-0.96 7.67-2.3 11.6-4.26l-0.39-10.74-2-28.33-57.22 5.98z"/>
      <Path id="path2495" stroke-width="2" onPress={() => props.onFill(3)} fill={props.fillColors[3]} d="m108.74 437.95l82.8-0.74 18.16 40.98-118.82 0.03 17.86-40.27z"/>
      <Path id="path2473" stroke-width="2" onPress={() => props.onFill(4)} fill={props.fillColors[4]} d="m143.33 379.55c-0.6 4.29-0.84 11.07-1.43 15.36 15.09 32.55 16.47 9.45 20.71 0-0.47-5.64-0.95-11.02-1.42-15.71l-17.86 0.35z"/>
      <Path id="path2475" stroke-width="2" onPress={() => props.onFill(5)} fill={props.fillColors[5]} d="m181.39 351.46c-0.32 15.99-10.88 29.34-26.04 33.21-11.74 2.27-24.66-8.15-30.17-22.38-3.56-12.19-3.06-27.08 7.29-34.59 10.4-8.01 25.8-8.94 36.85-1.68 9.03 5.7 12.31 14.66 12.07 25.44z"/>
      <Path id="path2477" stroke-width="10.68" transform="matrix(.19497 0 0 -.17986 87.599 435.96)" d="m315.71 452.36a1.7857 2.1429 0 1 1 -3.57 0 1.7857 2.1429 0 1 1 3.57 0z"/>
      <Path id="path2479" stroke-width="2" onPress={() => props.onFill(6)} fill={props.fillColors[6]} d="m123.09 346.33c7.02-1.13 18.18-6.4 24.32-9.81 4.49-2.5 13.73-8.39 17.7-11.88 5.99 6.27 8.2 16.3 16.87 20.25-0.77-49.62-60.57-42.73-58.89 1.44z"/>
      <Path id="path2487" stroke-width="1.6" onPress={() => props.onFill(7)} fill={props.fillColors[7]} d="m145.83 370.27c6.33 10.53 12.09 7.33 15.71-1.07-4.69 1.44-10.07 1.51-15.71 1.07z"/>
      <Path id="path2489" stroke-width="10.68" transform="matrix(.19497 0 0 -.17986 96.406 436.22)" d="m315.71 452.36a1.7857 2.1429 0 1 1 -3.57 0 1.7857 2.1429 0 1 1 3.57 0z"/>
      <Path id="path2491" stroke-width="1.5" onPress={() => props.onFill(8)} fill={props.fillColors[8]} d="m151.48 362.98c0.9 1.61 3.94 1.75 5.84-0.28"/>
      <Path id="path3305" stroke-width="2" onPress={() => props.onFill(9)} fill={props.fillColors[9]} d="m155.11 445.9c5.86-2.16 14.09-3.66 24.64 0.72l4.29 27.85c-10.09-3.65-21.1-2.05-29.29 0l0.36-28.57z"/>
      <Path id="path3303" stroke-width="2" onPress={() => props.onFill(10)} fill={props.fillColors[10]} d="m132.25 445.54l-8.57 27.86c8.14-1.07 19.83-3.18 30.71 1.07l0.36-27.85c-8.6-3.32-17.66-3.47-22.5-1.08z"/>
      <Path id="path3353" stroke-width="2" onPress={() => props.onFill(11)} fill={props.fillColors[11]} d="m138.64 467.1c0.78-1.6 0.74-2.09-0.08-3.47l-9.13-9.45 5.83 0.65c1.27-1.05 0.76-2.35-0.06-3.03l-12.02-4.02-1.73-1.79-10.44 5.42 8.05 12.88c3.41 1.03 6.86-0.72 9.37-4.09l6.46 7.27c1.76 1.15 2.59 0.61 3.75-0.37z"/>
      <Path id="path3349" stroke-width="2" onPress={() => props.onFill(12)} fill={props.fillColors[12]} d="m162.93 393.93c-8.69 20.45-12.73 16.51-21.84-0.42-4.68-0.36-14.63 1.31-20.25 2.85-8.37 9.17-20.45 26.85-23.244 39.43-0.985 4.44 1.486 16.65 16.534 24.54l7.67-14.62c-5.4-3.36-6.68-4.64-8.36-8.58l10.9-19.77-1.26 20.16 65.48-0.58c-0.28-6.73-0.92-20.26-9.73-41.45-4.48-1.37-11.41-1.05-15.9-1.56z"/>
      <Path id="path3355" stroke-width="2" d="m171.67 415.25l1.2 21.88"/>
      <Path id="path2510" stroke-width="2" onPress={() => props.onFill(13)} fill={props.fillColors[13]} d="m90.714 478.79v16.43h117.15l1.43-17.86-118.58 1.43z"/>
    </G>
  </G>
  
</Svg>
)}