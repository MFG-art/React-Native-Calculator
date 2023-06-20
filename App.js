import { StatusBar } from 'expo-status-bar';
import React,{useState} from 'react';
import { StyleSheet, Text, View, TextInput, Button, ToastAndroid, Alert,TouchableOpacity } from 'react-native';
import {onPressButton} from "./ButtonActions.js";



export default function App() {
const [text, setText] = useState('');
//const arr = {"1",2,3,+,4,5,6,-7,8,9,0};
  return (
    <View style={styles.column}>
        <View style={styles.screenContainer}>
            <Text style={styles.screen}>{text}</Text>
        </View>
          <View style={styles.row}>
               <TouchableOpacity style={styles.numberKeys} onPress={()=>setText(text+"1")}>
                 <Text>1</Text>
               </TouchableOpacity>
               <TouchableOpacity style={styles.numberKeys} onPress={()=>setText(text+"2")}>
                 <Text>2</Text>
               </TouchableOpacity>
               <TouchableOpacity style={styles.numberKeys} onPress={()=>setText(text+"3")}>
                 <Text>3</Text>
               </TouchableOpacity>
              <TouchableOpacity style={styles.numberKeys} onPress={()=>setText(text+"+")}>
                <Text>+</Text>
              </TouchableOpacity>
          </View>
<<<<<<< HEAD
          <View style={styles.row} >
            <View style={styles.row}>
              <TouchableOpacity style={styles.numberKeys} onPress={()=>setText(text+"4")}><Text>4</Text></TouchableOpacity>
            </View>
            <View style={styles.row}>
              <TouchableOpacity style={styles.numberKeys} onPress={()=>setText(text+"5")}><Text style={styles.text}>5</Text></TouchableOpacity>
            </View>
            <View style={styles.row}>
              <TouchableOpacity style={styles.numberKeys} onPress={()=>setText(text+"6")}><Text>6</Text></TouchableOpacity>
            </View>
            <TouchableOpacity style={styles.numberKeys} onPress={()=>setText(text+"-")}>
              <Text>-</Text>
=======
          <View style={styles.row}>
          <TouchableOpacity style={styles.numberKeys} onPress={()=>setText(text+"4")}>
            <Text>4</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.numberKeys} onPress={()=>setText(text+"5")}>
            <Text>5</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.numberKeys} onPress={()=>setText(text+"6")}>
            <Text>6</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.numberKeys} onPress={()=>setText(text+"-")}>
            <Text>-</Text>
          </TouchableOpacity>
          </View>
           <View style={styles.row} >
             <TouchableOpacity style={styles.numberKeys} onPress={()=>setText(text+"7")}>
               <Text>7</Text>
             </TouchableOpacity>
             <TouchableOpacity style={styles.numberKeys} onPress={()=>setText(text+"8")}>
               <Text>8</Text>
             </TouchableOpacity>
             <TouchableOpacity style={styles.numberKeys} onPress={()=>setText(text+"9")}>
               <Text>9</Text>
             </TouchableOpacity>
            <TouchableOpacity style={styles.numberKeys} onPress={()=>setText(text+"*")}>
              <Text>*</Text>
>>>>>>> main
            </TouchableOpacity>
            </View>
           <View style={styles.row} >
                <TouchableOpacity style={styles.numberKeys} onPress={()=>setText('')}>
                  <Text>c</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.numberKeys} onPress={()=>setText(text+"0")}>
                  <Text>0</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.numberKeys} onPress={()=>setText("Calculating...")}>
                  <Text>=</Text>
                </TouchableOpacity>
               <TouchableOpacity style={styles.numberKeys} onPress={()=>setText(text+"/")}>
                 <Text>/</Text>
               </TouchableOpacity>
           </View>
    </View>
  );
}

const styles = StyleSheet.create({
<<<<<<< HEAD


=======
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column'
  },
>>>>>>> main
  screen: {
    fontSize: 60,
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',

  },
  screenContainer: {
    flex: 4,
    flexDirection: 'column',
    justifyContent: 'center',
    padding: 50,
    backgroundColor: 'lightgrey',

  },
  numberKeys:{
     backgroundColor:'gray',
     alignItems: 'center',
     padding: 10,
     flex: 1
  },

    column: {
      flex: 1,
      flexDirection: 'column',
<<<<<<< HEAD
      margin: 2
=======
>>>>>>> main
    },
    row: {
      flex: 1,
      flexDirection: 'row',
<<<<<<< HEAD
      margin: 2,
=======
>>>>>>> main
    },

    text: {
        alignItems: 'center',
        justifyContent: 'center',
    }
});
