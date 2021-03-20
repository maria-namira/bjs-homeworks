 /*
	Кратко о работе с функциями:
	1) Значения в скобках - это аргументы, которые мы получаем в момент вызова функции. Их и надо присваивать требуемым в заданиях переменным.
	2) После ключевого слова return вместо комментария необходимо написать переменную либо выражение с ответом.
	3) console.log() прописывать не обязательно, т.к. команда return уже означает вывод результата работы функции.
 */

function getResult(a,b,c){
	let discr = (a, b , c) =>
		b * b - 4 * a * c;
		arr = getResult(a, b, c),
		d = arr[0];
		console.log("Дискриминант:" + d);
		console.log(d < 0 ? "Корней нет" : d ===0 ? "Один корень:" + arr[1] : `Два корня: ${arr[1]} и ${arr[2]}`);
		// если значение дискриминанта квадрат уравнения < 0, то корней на множество действ. чисел
    let d = discr(a, b, c);
    if(d < 0) return [d];
    let x1 =(-b + Math.sqrt(d))/(2*a),
        x2 =(-b - Math.sqrt(d))/(2*a);
        return [d, x1, x2];
	}
    // код для задачи №1 писать здесь
    // return x;


function getAverageMark(marks){
	let marks = [2, 3, 4, 5];
	marks.slice(5, from);
	let marksRes = [];
	if (marks.length == 0){
		console.log('массив marks пустой');
	}

	count2 = 0, count3= 0,
	count4= 0, count5 = 0,
	result = marks.Math(d/g);
	for(let i =0; i<result.length; i++)
		switch(result[i]){
			case'2': count2++; break;
			case'3': count3++; break;
			case'4': count4++; break;
			case'5': count5++; break;
};

console.log('2: '+count2', 3: '+count3+', '+count4+', 5: 'count5'');
console.log("троек" + "5,5,2,3,3,3". replace(/[^3]/g, "").length);
	
	
    // код для задачи №2 писать здесь
    // return averageMark;
}

function askDrink(name,dateOfBirthday){
	
    // код для задачи №3 писать здесь
    // return result;
}