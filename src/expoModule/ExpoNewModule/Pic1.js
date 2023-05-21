import React, {ActivityIndicator, useState, useEffect,useContext} from "react";
import { StyleSheet,ScrollView, Text,Image, View,Button,componentWillMount,TouchableOpacity} from 'react-native';
import Svg, {Path,G,Rect,Ellipse} from 'react-native-svg';
export function Pic1(props) {  
const[currentColor,setCurrentColor]=useState("white");
    return(
<Svg>
  <G
     id="layer1"
     transform="translate(-370.78512,-110.51811)">
    <Path
        onPress={() => props.onFill(0)} fill={props.fillColors[0]}
        stroke="black"
       id="Path5406"
       d="m 522.88061,147.95113 c -21.71051,14.3862 -39.68575,34.35868 -51.71347,57.4594 -21.63322,41.54926 -22.94299,93.1018 -3.44756,135.696 -15.32646,12.58322 -28.90408,27.29352 -40.22159,43.577 -5.32182,7.65696 -10.16857,15.70488 -13.58589,24.38086 -3.41733,8.67598 -5.3761,18.02597 -4.80112,27.33296 0.53373,8.63934 3.27345,17.13343 7.88828,24.45643 4.61483,7.32301 11.09522,13.45979 18.65855,17.6692 -4.05579,-16.22221 -2.44866,-33.80281 4.48125,-49.02076 4.59049,-10.08064 11.81624,-19.40776 21.83458,-24.13269 5.89528,-2.78038 12.58645,-3.84766 19.05416,-3.03924 6.46771,0.80842 12.69032,3.48983 17.71986,7.63574 l 36.77402,-5e-4 c 5.34806,-5.51855 12.66037,-9.09336 20.30012,-9.92424 7.63974,-0.83089 15.54958,1.0884 21.95894,5.32824 8.77352,5.80375 14.32314,15.46358 17.71457,25.42131 5.13586,15.07963 5.95708,31.60212 2.34183,47.11671 13.82522,-8.36753 23.71125,-22.96569 26.34966,-38.90906 1.55477,-9.39514 0.68764,-19.10334 -1.82431,-28.28899 -2.51195,-9.18564 -6.63715,-17.87379 -11.55934,-26.02597 -10.36137,-17.16063 -24.36198,-32.11204 -40.80583,-43.577 18.73901,-42.2677 18.30906,-92.60536 -1.14919,-134.54681 -10.5423,-22.7235 -26.4105,-42.95545 -45.96752,-58.60859 z"
    />
    <Path
    stroke="black"
    onPress={() =>props.onFill(1)} fill={props.fillColors[1]}
       d="m 481.34056,187.20291 c -4.46673,5.83017 -8.566,11.91882 -12.22946,18.24308 -28.25315,48.77365 -20.4434,129.77449 -3.59773,160.82575 16.84567,31.05126 32.36538,43.65142 32.36538,43.65142 l 38.35685,0 c 0,0 19.0015,-13.54761 35.96108,-44.80137 16.95957,-31.25377 24.06628,-109.49821 -1.19992,-158.5278 -3.43718,-6.66991 -7.3166,-13.12656 -11.58367,-19.34032 -10.38661,8.04548 -24.40658,12.56114 -39.01894,12.5675 -14.6336,-0.0127 -28.66899,-4.54757 -39.05359,-12.61826 z"
       id="Path4199"
  />
    <Path
    stroke="black"
    onPress={() =>props.onFill(2)} fill={props.fillColors[2]}
       d="m 496.90576,411.81909 c -7.62978,12.17612 -12.14506,26.28638 -13.00158,40.62994 -1.68542,28.22445 11.55757,56.91758 34.12915,73.94649 20.31692,-19.15965 31.37496,-47.72624 29.25355,-75.57169 -1.01678,-13.34624 -4.92446,-26.46487 -11.37638,-38.19214 l -39.00474,-0.8126 z"
       id="Path4272"
       />
    <Path
    onPress={() =>props.onFill(3)} fill={props.fillColors[3]}
        stroke="black"
       id="Path4276"
       d="m 496.90576,411.81909 c -1.35408,7.52633 -1.07494,15.34221 0.8126,22.75277 3.04546,11.9566 10.35815,22.77939 20.31497,30.06616 8.26141,-7.24183 14.28785,-16.99894 17.06457,-27.62837 2.07197,-7.93163 2.35178,-16.32596 0.8126,-24.37796 l -39.00474,-0.8126 z"
        />
    <Rect
    onPress={() =>props.onFill(4)} fill={props.fillColors[4]}
    stroke="black"
       id="rect4266"
       width="52.006321"
       height="16.251974"
       x="490.84277"
       y="402.94351"
       ry="8.1259871" />
    <Ellipse
        onPress={() =>props.onFill(5)} fill={props.fillColors[5]}
        stroke="black"
       id="Path6042"
       cx="518.45581"
       cy="259.00635"
       rx="22.12398"
       ry="22.98587" />
  </G>
</Svg>
)}