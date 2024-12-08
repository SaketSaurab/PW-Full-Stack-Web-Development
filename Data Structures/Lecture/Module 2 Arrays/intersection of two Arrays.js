//intersection of two arrays 
// we have to give common elements from both arrays 
function intersect(num1 ,num2){
    let result=[];
    let visited=new Array(num2.length).fill(false);

    for (i=0;i<num1.length;i++){
        for(j=0;j<num2.length;j++){
            if(num1[i]==num2[j] && !visited[j]){
                result.push(num1[i]);
                visited[j]=true;
                break;
            }
        }
    }
    return result;
}

arr1=[1,2,2,1];
arr2=[2,2];
console.log(intersect(arr1,arr2));