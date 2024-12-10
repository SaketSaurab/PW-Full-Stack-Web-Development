// daily temprature

// function dailyTemprature(T){
//     const result=new Array(T.length).fill(0);
//     for(i=0;i<T.length;i++){
//         for(j=i+1;j<T.length;j++){
//             if(T[j]>T[i]){
//                 result[i]=j-i;
//                 break;
//             }
//         }
//     }
//     return result;
// }

/// method 2
function dailyTemprature(T){
    const result=new Array(T.length).fill(0);
    const stack=[];
    for(i=0;i<T.length;i++){
        while(stack.length && T[i]>T[stack[stack.length-1]]){
            const previousIndex=stack.pop();
            result[previousIndex]=i-previousIndex;
        }
        stack.push(i);
    }
    return result;
}


let T=[73,74,75,69,70,76,73];
console.log(dailyTemprature(T));



