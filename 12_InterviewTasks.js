/**
 * Write a function that can find the max number from a number Array
 */

let numbers = [3, 4, 6, 9, 1, 2, 20, 180, 'hello'];
numbers.push(15.5);
console.log(numbers);
maxValue(numbers);

function maxValue(arrName) {
    let maxValue = arrName[0]
    arrName.forEach(element => {
        if (maxValue<element) {
            maxValue = element
        }
    });

    console.log(maxValue)
}