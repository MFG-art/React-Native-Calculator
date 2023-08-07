import { Component } from "react";
import { StyleSheet, Text, TouchableOpacity } from 'react-native';

export default class CalculatorButton extends Component {

    constructor(props){
    super(props);
    }

// This allows us to access the passed lambda function props

    onClickFunction = () => {
    this.props.onClickFunction?.();
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
    CText: {
        color: '#FFFFF0',
        fontSize: 20,
    }
  });
  