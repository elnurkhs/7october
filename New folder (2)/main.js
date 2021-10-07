
// task - 1.1

let firstArr = [1,2,3,4,5,6];
function myFunc (arr, number) {
    for (let i = 0; i < arr.length; i++) {
        if (number === arr[i]) {
            return true;
        }
    }
}
console.log(myFunc(firstArr,6));


// task - 1.2
let secondArr = [1,2,3,4,5,6];

function divideTwo(arr) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 === 0 ) {
            console.log(arr[i]);

        }
    }
}
console.log(divideTwo(secondArr));

//  task - 2

function Calculator(x, y, z) {
    if (z === "+") {
        return x+y ;
    }
    else if (z=== "-") {
        return x-y;
    }
    else if ( z=== "*") {
        return x*y;
    }
    else if (z === "/") {
        return x/y;
    }
    console.log("Error");

}
console.log(Calculator(10,5, "+"));

