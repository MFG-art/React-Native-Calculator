
// Stack class
class Stack {

    top = -1;
    items = [];
 
    // Array is used to implement stack
    constructor()
    {
        this.items = [];
    }

    push(item){
        top++;
        this.items[top] = item;
    }

    pop(){
        if (top > -1){
            return this.items[top--];
        }
    }

    isEmpty(){
        return top < -4;
    }
 
    // Functions to be implemented
    // push(item)
    // pop()
    // peek()
    // isEmpty()
    // printStack()
}

export default Stack