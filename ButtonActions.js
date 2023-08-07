import { evaluate } from 'mathjs';
import {ToastAndroid} from 'react-native';

// parseExpression uses math.js

const parseExpression = (expression) => {

    try {
    var answer = evaluate(expression);
    return answer;
    }
    catch (error){
    return "error";

    }

}

export default parseExpression;

