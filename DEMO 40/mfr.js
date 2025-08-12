let arr = [1, 13, 5, 7, 11]
// newArr = []
// for (let index = 0; index < arr.length; index++) {
//     const element = arr[index];
//     newArr.push(element**2)
// }

let newArr = arr.map((e, index, arr) => {
    return e ** 2
})

console.log(newArr) // [1, 169, 25, 49, 121]

const greaterThanSeven = (e) => {
    if (e > 7) {
        return true
    }
    return false

}

console.log(arr.filter(greaterThanSeven))

let arr2 = [1, 2, 3, 4, 5, 6]

const red = (a, b) => {
    return a + b
}


console.log(arr2.reduce(red));