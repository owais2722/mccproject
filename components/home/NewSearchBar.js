import React , { useState } from 'react'
import { View, Text ,Keyboard,TextInput,
    Button, } from 'react-native'

export default function NewSearchBar({ cityHandler }) {
    const [name, setName] = useState('');
    const txtHandler = (enteredName) => {
        setName(enteredName);
      };
      const btnHandler = () => {

        // passing the value
        cityHandler(name);

        // do whatever you like with the name typed into the text field
        console.log(name);
        
        
        // dismiss the Keybaord
        Keyboard.dismiss();
      };
    return (
        <View styles={{
             backgroundColor: "#eee",
              borderRadius: 50,
              flexDirection: "row",
              alignItems: "center",
              marginRight: 10,
          }}>
            <TextInput styles={{backgroundColor: "#eee",
              borderRadius: 20,
              fontWeight: "700",
              marginTop: 7,}}
         placeholder="enter city name"
         value={name}
        onChangeText={txtHandler}
        
      />
      <Button title="Finish" onPress={btnHandler} />
        </View>
    )
}
