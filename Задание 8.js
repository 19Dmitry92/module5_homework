let array = new Map([
    [1, "один"],
    [2, "два"],
    [3, "три"]
]);


for (let elem of array) {
    console.log(`Ключ - ${elem[0]}, значение - ${elem[1]}`)
}