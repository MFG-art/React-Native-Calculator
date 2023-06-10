import { StatusBar } from 'expo-status-bar';
import React,{useState} from 'react';
import { StyleSheet, Text, View, TextInput, Button, ToastAndroid, Alert } from 'react-native';
import {onPressButton} from "./ButtonActions.js";



export default function App() {
const [text, setText] = useState('');

  return (
    <View style={styles.container}>
       <TextInput style={styles.screen} value = {text} />
       <Button style={styles.numberKeys} title="0" onPress={()=>setText(text+"0")}/>
       <Button title="1" onPress={()=>setText(text+"1")}/>
       <Button title="2" onPress={()=>setText(text+"2")}/>
       <Button title="3" onPress={()=>setText(text+"3")}/>
       <Button title="4" onPress={()=>setText(text+"4")}/>
       <Button title="5" onPress={()=>setText(text+"5")}/>
       <Button title="6" onPress={()=>setText(text+"6")}/>
       <Button title="7" onPress={()=>setText(text+"7")}/>
       <Button title="8" onPress={()=>setText(text+"8")}/>
       <Button title="9" onPress={()=>setText(text+"9")}/>
       <Button title="+" onPress={()=>setText(text+"+")}/>
       <Button title="-" onPress={()=>setText(text+"-")}/>
       <Button title="*" onPress={()=>setText(text+"*")}/>
       <Button title="/" onPress={()=>setText(text+"/")}/>
       <Button title="=" onPress={()=>setText(eval(text).toString())}/>
       <Button title="c" onPress={()=>setText('')}/>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },

  screen: {
  },

  numberKeys:{
     backgroundColor:'white',
     color:'black',
  },
});
