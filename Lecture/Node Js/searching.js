// searching
function linearSearch(arr,element){
    for(let i=0;i<arr.length;i++){
        if(arr[i]==element){
            return i;
        }
    }
    return -1;
}

// function binarySearch(arr,e){
// }

module.exports=linearSearch;