import {ToastAndroid} from 'react-native';
import { evaluate } from 'mathjs';


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
    // ToastAndroid.show(expression,ToastAndroid.SHORT);
    // var expressionArray = expression.split(' ');
    // var stack = new Stack();

    // expressionArray.forEach(element => {
    //     stack.push(element);
    // });

    // while (!stack.isEmpty()){
    //     val = stack.pop();
    //     console.log(val + "\n");

    // }
    var answer = evaluate(expression);
    console.log(answer)
    return answer.toString();
}

class Stack {

    // https://www.geeksforgeeks.org/implementation-stack-javascript/

 
    // Array is used to implement stack
    constructor()
    {
        this.items = [];
    }

    push(item){
        this.items.push(item);
    }

    pop(){
        if (this.items.length > 0){
            return this.items.pop();
        }
    }

    isEmpty(){
        return this.items.length == 0;
    }

}

export default parseExpression;

