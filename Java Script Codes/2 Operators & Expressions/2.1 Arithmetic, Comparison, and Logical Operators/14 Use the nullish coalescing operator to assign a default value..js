// Use the nullish coalescing operator to assign a default value.

function NullishValue(x){
    console.log(`${x!==null && x!==undefined?x:"default value"}`);
}
NullishValue("a");
NullishValue(null);
NullishValue(undefined);
NullishValue(23);