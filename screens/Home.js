import React from 'react'
import { View, Text } from 'react-native'
import {SafeAreaView} from 'react-native-safe-area-context';
import HeaderTabs from '../components/HeaderTabs';
import SearchBar from '../components/SearchBar';
export default function Home() {
  return (
   
    <SafeAreaView>
      <HeaderTabs/>
      <SearchBar/>
    </SafeAreaView>
    
  );
}
