import { Component } from "react";
import { StyleSheet, Text, TouchableOpacity } from 'react-native';

export default class CalculatorButton extends Component {
    render(){
        return(
            <TouchableOpacity style={styles.CButton} onPress={()=>{this.props.onClickFunction}}>
                <Text style={styles.CText}>{this.props.label}</Text>
            </TouchableOpacity>
        )
    }
}



const styles = StyleSheet.create({
    
    numberKeys:{
       backgroundColor:'darkgray',
       alignItems: 'center',
       padding: 10,
       flex: 1,
       margin:5,
       borderRadius:999,
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
  