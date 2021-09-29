import React from 'react'
import { View, Text ,ScrollView} from 'react-native'
import {SafeAreaView} from 'react-native-safe-area-context';
import Categories from '../components/Categories';
import HeaderTabs from '../components/HeaderTabs';
import RestaurantItem from '../components/RestaurantItem';
import SearchBar from '../components/SearchBar';
export default function Home() {
  return (
   
    <SafeAreaView style={{backgroundColor:'#eee',flex:1}}>
      <View style={{backgroundColor:'white',padding:25}}>
      <HeaderTabs/>
      <SearchBar/>
      </View>
      <ScrollView>
      <Categories/>
      <RestaurantItem/>
      </ScrollView>
    </SafeAreaView>
    
  );
}
