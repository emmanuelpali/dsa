const findNumber = (arr) => {
    let n = arr.length + 1;
    let sum = (n * (n + 1)) / 2;
    let arrSum = arr.reduce((acc, cur) => acc + cur);
    return sum - arrSum;
    }

console.log(findNumber([1, 2, 3, 4, 5, 6, 7, 8, 10])); // 9