import * as React from "react";
import { View, Text } from "react-native";
import Home from "../fooddel/screens/Home";
import {SafeAreaProvider} from 'react-native-safe-area-context';
export default function App() {
  return(
  <SafeAreaProvider>
  <Home/>
  </SafeAreaProvider>); 

   ;
}