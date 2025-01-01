/**
 * Create an object Calculator with methods add, subtract, multiply, and divide. Demonstrate the usage of this within these methods such that method chaining of add, subtract, multiply and divide is possible. 
 */

let Calculator = {
    value: 0,
    add: function(num) {
        this.value += num;
        return this;
    },
    subtract: function(num) {
        this.value -= num;
        return this;
    },
    multiply: function(num) {
        this.value *= num;
        return this;
    },
    divide: function(num) {
        if (num !== 0) {
            this.value /= num;
        } else {
            console.log('Cannot divide by zero');
        }
        return this;
    },
    result: function() {
        console.log(this.value);
        return this;
    }
};

Calculator.add(10).subtract(3).multiply(4).divide(2).result();
