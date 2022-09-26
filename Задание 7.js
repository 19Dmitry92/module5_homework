let ar = [0, 1, 2, 3, 4, 5, 6, 7, 8]
let evenNum = 0
let oddNum = 0
let zero = 0

for (let i = 0; i < ar.length; ++i) {

    if (ar[i] === 0) {
        zero++
    } else if (typeof ar[i] === 'number' && !isNaN(ar[i]) && ar[i] % 2 === 0) {
        evenNum++
    } else if (typeof ar[i] === 'number' && !isNaN(ar[i])) {
        oddNum++
    }
}
console.log(`В массиве четных чисел: ${evenNum} , не четных: ${oddNum}, нулей: ${zero}`)