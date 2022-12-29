function remove(arr, value) {
    let i = 0;
    while (i < arr.length) {
        if (arr[i] === value) {
            arr.splice(i, 1);
        } else {
            ++i;
        }
    }
    return arr;
}

console.log(remove([1, 2, 3, 4, 5, 6, 7], 5))
