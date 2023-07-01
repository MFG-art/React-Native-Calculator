import { StatusBar } from 'expo-status-bar';
import React,{useState} from 'react';
import { StyleSheet, Text, View, TextInput, Button, ToastAndroid, Alert,TouchableOpacity } from 'react-native';
import parseExpression from "./ButtonActions.js";
import CalculatorButton from './CalculatorButton.js';



export default function App() {
const [text, setText] = useState('');
  return (
    <View style={styles.column}>
        <View style={styles.screenContainer}>
            <Text style={styles.screen}>{text}</Text>
        </View>
        <View style={styles.row} >
             {/* <TouchableOpacity style={styles.CButton} onPress={()=>setText('')}>
               <Text style={styles.CText}>C</Text>
             </TouchableOpacity> */}
             <CalculatorButton label={'C'} onClickFunction={()=>console.log("clear!")}/>
             <TouchableOpacity style={styles.numberKeys} onPress={()=>setText(text+"8")}>
               <Text style={styles.text}>()</Text>
             </TouchableOpacity>
             <TouchableOpacity style={styles.numberKeys} onPress={()=>setText(text+"9")}>
               <Text style={styles.text}>%</Text>
             </TouchableOpacity>
            <TouchableOpacity style={styles.numberKeys} onPress={()=>setText(text+" / ")}>
              <Text style={styles.text}>/</Text>
            </TouchableOpacity>
         </View>
           <View style={styles.row} >
             <TouchableOpacity style={styles.numberKeys} onPress={()=>setText(text+"7")}>
               <Text style={styles.text}>7</Text>
             </TouchableOpacity>
             <TouchableOpacity style={styles.numberKeys} onPress={()=>setText(text+"8")}>
               <Text style={styles.text}>8</Text>
             </TouchableOpacity>
             <TouchableOpacity style={styles.numberKeys} onPress={()=>setText(text+"9")}>
               <Text style={styles.text}>9</Text>
             </TouchableOpacity>
            <TouchableOpacity style={styles.numberKeys} onPress={()=>setText(text+" * ")}>
              <Text style={styles.text}>*</Text>
            </TouchableOpacity>
            </View>
            <View style={styles.row}>
              <TouchableOpacity style={styles.numberKeys} onPress={()=>setText(text+"4")}>
                <Text style={styles.text}>4</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.numberKeys} onPress={()=>setText(text+"5")}>
                <Text style={styles.text}>5</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.numberKeys} onPress={()=>setText(text+"6")}>
                <Text style={styles.text}>6</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.numberKeys} onPress={()=>setText(text+" - ")}>
                <Text style={styles.text}>-</Text>
              </TouchableOpacity>
            </View>

             <View style={styles.row}>
               <TouchableOpacity style={styles.numberKeys} onPress={()=>setText(text+"1")}>
                 <Text style={styles.text}>1</Text>
               </TouchableOpacity>
               <TouchableOpacity style={styles.numberKeys} onPress={()=>setText(text+"2")}>
                 <Text style={styles.text}>2</Text>
               </TouchableOpacity>
               <TouchableOpacity style={styles.numberKeys} onPress={()=>setText(text+"3")}>
                 <Text style={styles.text}>3</Text>
               </TouchableOpacity>
              <TouchableOpacity style={styles.numberKeys} onPress={()=>setText(text+" + ")}>
                <Text style={styles.text}>+</Text>
              </TouchableOpacity>
            </View>
           <View style={styles.row} >
                <TouchableOpacity style={styles.numberKeys} onPress={()=>setText(" -")}>
                  <Text style={styles.text}>+/-</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.numberKeys} onPress={()=>setText(text+"0")}>
                  <Text style={styles.text}>0</Text>
                </TouchableOpacity>
               <TouchableOpacity style={styles.numberKeys} onPress={()=>setText(text+".")}>
                 <Text style={styles.text}>.</Text>
               </TouchableOpacity>
               <TouchableOpacity style={styles.numberKeys} onPress={()=>setText(parseExpression(text))}>
                 <Text style={styles.text}>=</Text>
               </TouchableOpacity>
           </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column'
  },
  screen: {
    fontSize: 60,
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    position: 'absolute',
    left: 10,
    right: 10,
    bottom: 0,

  },
  screenContainer: {
    flex: 4,
    flexDirection: 'column',
    justifyContent: 'center',
    padding: 50,
    backgroundColor: 'lightgrey',

  },
  numberKeys:{
     backgroundColor:'darkgray',
     alignItems: 'center',
     padding: 10,
     flex: 1,
     margin:5,
     borderRadius:999,
  },

    column: {
      flex: 1,
      flexDirection: 'column',
    },
    row: {
      flex: 1,
      flexDirection: 'row',
    },
    text: {
      color:'#262626',
      fontSize: 20,
    },
    CText: {
      color: '#FFFFF0',
      fontSize: 20,
    },
    CButton: {
       backgroundColor:'#CD5C5C',
       alignItems: 'center',
       padding: 10,
       flex: 1,
       margin:5,
       borderRadius:999,
    },
    buttonBackground:{
      backgroundColor:'#404040'
    }
});
