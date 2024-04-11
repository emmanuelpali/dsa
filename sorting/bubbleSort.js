const bubbleSort = (arr) => {
    let len = arr.length;
    for(let i = 0; i < len; i++){
        for( let j = 0; j < len - 1 - i; j++){
            if(arr[j] > arr[j + 1]){
                let temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }
        }
    }
    return arr;
}

// Time Complexity: O(n^2)
// Space Complexity: O(1)
// example
const arr = [5, 4, 8, 2, 1];
console.log(bubbleSort(arr)); // [1, 2, 5, 4, 5]