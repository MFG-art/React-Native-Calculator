import { StatusBar } from 'expo-status-bar';
import React,{useState} from 'react';
import { StyleSheet, Text, View, TextInput, Button, ToastAndroid, Alert,TouchableOpacity } from 'react-native';
import parseExpression from "./ButtonActions.js";
import CalculatorButton from './CalculatorButton.js';
import { Component } from "react";

function CalculatorScreen (){

return (
<View style={styles.column}>
        <View style={styles.screenContainer}>
            <Text style={styles.screen}>{text}</Text>
        </View>

            <View style={styles.row}>
                <CalculatorButton label={'C'} style={styles.CButton} onClickFunction={()=>setText("")}/>
                <CalculatorButton label={'('} style={styles.numberKeys} onClickFunction={()=>setText(text+"(")}/>
                <CalculatorButton label={')'} style={styles.numberKeys} onClickFunction={()=>setText(text+")")}/>
                <CalculatorButton label={'/'} style={styles.numberKeys}  onClickFunction={()=>setText(text+"/")}/>
            </View>
            <View style={styles.row} >
               <CalculatorButton label={'7'} style={styles.numberKeys} onClickFunction={()=>setText(text+"7")}/>
               <CalculatorButton label={'8'} style={styles.numberKeys} onClickFunction={()=>setText(text+"8")}/>
               <CalculatorButton label={'9'} style={styles.numberKeys} onClickFunction={()=>setText(text+"9")}/>
               <CalculatorButton label={'*'} style={styles.numberKeys} onClickFunction={()=>setText(text+"*")}/>
            </View>
            <View style={styles.row} >
               <CalculatorButton label={'4'} style={styles.numberKeys} onClickFunction={()=>setText(text+"4")}/>
               <CalculatorButton label={'5'} style={styles.numberKeys} onClickFunction={()=>setText(text+"5")}/>
               <CalculatorButton label={'6'} style={styles.numberKeys} onClickFunction={()=>setText(text+"6")}/>
               <CalculatorButton label={'-'} style={styles.numberKeys} onClickFunction={()=>setText(text+"-")}/>
            </View>
            <View style={styles.row} >
               <CalculatorButton label={'1'} style={styles.numberKeys} onClickFunction={()=>setText(text+"1")}/>
               <CalculatorButton label={'2'} style={styles.numberKeys} onClickFunction={()=>setText(text+"2")}/>
               <CalculatorButton label={'3'} style={styles.numberKeys} onClickFunction={()=>setText(text+"3")}/>
               <CalculatorButton label={'+'} style={styles.numberKeys} onClickFunction={()=>setText(text+"+")}/>
            </View>
            <View style={styles.row} >
               <CalculatorButton label={'+/-'} style={styles.numberKeys} onClickFunction={()=>setText(tex+" -")}/>
               <CalculatorButton label={'0'} style={styles.numberKeys} onClickFunction={()=>setText(text+"0")}/>
               <CalculatorButton label={'.'} style={styles.numberKeys} onClickFunction={()=>setText(text+".")}/>
               <CalculatorButton label={'='} style={styles.numberKeys} onClickFunction={()=>setText(parseExpression(text))}/>
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
