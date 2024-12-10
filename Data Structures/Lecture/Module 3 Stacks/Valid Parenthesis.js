//
function isValid(expression){
    let stack=[];

    for(let c of expression){
        if(c=='('|| c =='[' || c=='{'){
            stack.push(c);
        }
        else{
            if(!stack.length || 
                (c==')' && stack[stack.length-1]!=='(')||
                
                (c=='}' && stack[stack.length-1]!=='{')||
                
                (c==']' && stack[stack.length-1]!=='[')
            )
            return false;
        stack.pop();
        }
    }
    return !stack.length;
}

let result=isValid("(){{[]}}");
console.log(result);