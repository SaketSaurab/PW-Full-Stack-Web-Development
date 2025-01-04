/**
 * Create a simple polyfill for the Array.includes method by the name of customIncludes.

 */

if (!Array.prototype.customIncludes) {
    Array.prototype.customIncludes = function(element) {
        return this.some(function(el) {
            return el === element;
        });
    };
}

let arr = [1, 2, 3, 4, 5];
console.log(arr.customIncludes(3)); 
console.log(arr.customIncludes(6)); 
