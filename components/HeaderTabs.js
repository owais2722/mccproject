import React ,{useState} from 'react'
import { View, Text ,TouchableOpacity} from 'react-native'

export default function HeaderTabs() {
  const [activeTab, setactiveTab] = useState("Delivery")
  return (
    <>
    <View style={{flexDirection:"row",alignSelf:"center"}}>
      <HeaderButton text="Delivery" buttoncolor="black" textcolor="white" activeTab={activeTab} setactiveTab={setactiveTab}></HeaderButton>
      <HeaderButton text="Pickup" buttoncolor="white" textcolor="black" activeTab={activeTab} setactiveTab={setactiveTab}></HeaderButton>
    </View>
    </>
  )
}

const HeaderButton =(props)=>{
    
    return(
    <TouchableOpacity 
    style={{
      // if props.active is equal to props.text then background is black , this simply means that id text and active state is delivery text color is white or else black
      backgroundColor:props.activeTab == props.text?"black":"white" , 
      paddingVertical:6 , 
      paddingHorizontal:16 , 
      borderRadius:30
      }}
      onPress={()=>{props.setactiveTab(props.text)}}
      >
    <Text style={{color:props.activeTab == props.text?"white":"black" , fontSize:15 , fontWeight:'900'}}>
       {props.text}
    </Text>
    </TouchableOpacity>
    );
    
}
