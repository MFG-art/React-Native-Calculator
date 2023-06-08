import React, { Component, Alert, ToastAndroid } from 'react';

export default class ButtonActions extends Component {
    onPressButton = () => {
        ToastAndroid.show("Testing a Toast",ToastAndroid.SHORT)
    }
}