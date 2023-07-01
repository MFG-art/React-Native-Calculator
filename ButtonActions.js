import {ToastAndroid} from 'react-native';

const buttonActions = () => {
ToastAndroid.show("Testing a Toast",ToastAndroid.SHORT);
}

const add = (x,y) => {
    return x + y;
}

const subtract = (x,y) => {
    return x-y;
}

const multiply = (x, y) => {
    return x*y;
}

const divide = (x,y) => {
    return x/y;
}

const infixToPostfix = () => {
    // This function will take in an infix expression (2 + 3) and return a postfix expression (2 3 + )
}

const parseExpression = (expression) => {
    // this function will parse out a string into tokens

}
export default buttonActions;

