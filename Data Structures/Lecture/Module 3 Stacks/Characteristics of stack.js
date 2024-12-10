// Characteristics of stack
    //push,pop,peek,isEmpty

//push : adding new element
class Stack{
    constructor(){
        this.items=[];
    }

push(element){
    this.items.push(element);
    }
// pop : remove the top element
pop(){
    return this.items.pop();
}

//peek/top: return the top element
peek(){
    return this.items[this.items.length-1];
}

// isEmpty: to check the stack is empty or not
isEmpty(){
    return this.items.length==0;
}
}

let myStack=new Stack();
myStack.push(10);
myStack.push(20);
myStack.push(30);
myStack.push(40);
let peekItem=myStack.peek();
console.log(peekItem," item is at the top");
let isEmptyItem=myStack.isEmpty();
console.log("is empty:",isEmptyItem);
console.log(myStack);
console.log(myStack);
let popItem=myStack.pop();
console.log(popItem+"removed!");
console.log("after pop",myStack);

