import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, TextInput, Button, ToastAndroid, Alert } from 'react-native';
import {onPressButton} from "./ButtonActions.js";


export default function App() {

  return (
    <View style={styles.container}>
        <View style={styles.box}>
            <View style={styles.inner}>
                <Text>Box 1</Text>
                <TextInput

                    style={styles.input}
                />
                <Button title="The Button" onPress={() => {Alert.alert("Pressed the button")}}/>
            </View>
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
  },
  input: {
    height: 40,
    borderWidth: 1
  }
});
