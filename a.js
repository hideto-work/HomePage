let arr = [2, 3, 4, 5];

function reduce(crb, init) {
    let sum = init;
    for (let i = 0; i < arr.length; i++) {
        const element = arr[i];
        sum = crb(sum, element);
    }

    return sum;
}

let result = reduce((a, b) => a + b, 1);
console.log(result);