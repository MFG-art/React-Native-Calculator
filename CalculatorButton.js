import { Component } from "react";
import { StyleSheet, Text, TouchableOpacity } from 'react-native';

export default class CalculatorButton extends Component {

    constructor(props){
    super(props);
    }

    onClickFunction = () => {
    this.props.onClickFunction?.(); // we do this to check if it is not null
    }

    render(){
        return(
            <TouchableOpacity style={this.props.style} onPress={()=>{this.onClickFunction()}}>
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
  