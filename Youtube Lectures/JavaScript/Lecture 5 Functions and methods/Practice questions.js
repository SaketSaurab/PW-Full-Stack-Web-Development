// practice question 1
// count number of vovels in string
function countVowels(text){
    let count=0;
    for(const char of text){
        if(char==='a'||char==='e'||char==='i'||char==='o'||char==='u'){
            count++;
        }
    }
    console.log(`total number of vowels in ${text} is ${count}`);
}
countVowels("hello world");

// performing the same task using arrow function

const vowels=(text)=>{
    let count=0;
    for(const char of text){
        if(char==='a'||char==='e'||char==='i'||char==='o'||char==='u'){
            count++;
        }
    }
    console.log(` counting the total number of vowels in ${text} using arrow functions is ${count}`);
};

vowels("apna college");
