num = prompt("Введите целое число")
count = +num
if (!Number(count) || Number.isNaN(count)) {
	alert("Упс, кажется, вы ошиблись")
} else if (Number(count) && (count % 2 === 0)) {
	alert("Это четное число")
} else {
	alert("Это нечетное число")
}