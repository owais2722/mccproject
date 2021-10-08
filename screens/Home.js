import React ,{useState ,useEffect}from 'react'
import { View, Text ,ScrollView} from 'react-native'
import {SafeAreaView} from 'react-native-safe-area-context';
import Categories from '../components/Categories';
import HeaderTabs from '../components/HeaderTabs';
import RestaurantItems ,{localRestaurants} from '../components/RestaurantItems';
import { Divider } from "react-native-elements";
import NewSearchBar from '../components/NewSearchBar';
import BottomTabs from '../components/BottomTabs';
const YELP_API_KEY = "z7ntXGQN2VWvlfeg15WnfafVJUfbRBg4EHlDj0nJiGKe40bdpf-vXRpDjNctbAej6SppdE-zadxzyM7cbIvs8CPW_Z77UWN6HM82ubKvPwrt--4j_9un0-9FcGxVYXYx"
export default function Home() {
  const [restaurantData, setRestaurantData] = useState(localRestaurants);
  const [city, setCity] = useState("SanDiego");
  const [activeTab, setActiveTab] = useState("Delivery");
  const getRestaurantsFromYelp = () => {
  const yelpUrl = `https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?term=restaurants&location=${city}`;
    fetch(`${yelpUrl}`,{
      headers:{
        Authorization:`Bearer ${YELP_API_KEY}`,
        Origin:'http://localhost:19006',
        withCredentials:true,
      }
    })
    .then(res=>res.json())
    .then((data) => {
      // console.log(data);
      setRestaurantData(data.businesses.filter((businesses)=>
      businesses.transactions.includes(activeTab.toLowerCase())))
      })
  };

  useEffect(()=>{
    getRestaurantsFromYelp();
  },[city,activeTab])
  
  return (
    <SafeAreaView style={{backgroundColor:'#eee',flex:1}}>
      <View style={{backgroundColor:'white',padding:25}}>
      <HeaderTabs activeTab={activeTab} setActiveTab={setActiveTab} />
      {/* <SearchBar/> */}
      <NewSearchBar cityHandler={setCity}/>
      </View>
      <ScrollView >
      <Categories/>
     <RestaurantItems restaurantData={restaurantData}/>
      </ScrollView>
      <Divider width={1} />
      <BottomTabs />
    </SafeAreaView>
    
  );
}
