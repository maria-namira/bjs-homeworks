 /*
	Кратко о работе с функциями:
	1) Значения в скобках - это аргументы, которые мы получаем в момент вызова функции. Их и надо присваивать требуемым в заданиях переменным.
	2) После ключевого слова return вместо комментария необходимо написать переменную либо выражение с ответом.
	3) console.log() прописывать не обязательно, т.к. команда return уже означает вывод результата работы функции.
 */

function averageMark(a, g, p) {
	let algebra = a;
	let geography = g;
	let phisics = p;
	let result = (algebra + geography + phisics) / 3;
	


    // реализуйте здесь задание №1
    
	return result // ваш ответ;
}

function sayHello(userName) {
	let message;
	message = (`Привет, мир! меня зовут ${userName}`);
    // реализуйте здесь задание №2
    
	return message // ваш ответ;
}

function calculateFormula() {
    let x = 2;
    let y = 22;
    let z = 0;
    let result = (x * y + 5 * z + x - 1);
	// реализуйте здесь задание №3
    
    return result// ваш ответ;
}
