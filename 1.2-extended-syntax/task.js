 /*
	Кратко о работе с функциями:
	1) Значения в скобках - это аргументы, которые мы получаем в момент вызова функции. Их и надо присваивать требуемым в заданиях переменным.
	2) После ключевого слова return вместо комментария необходимо написать переменную либо выражение с ответом.
	3) console.log() прописывать не обязательно, т.к. команда return уже означает вывод результата работы функции.
 */
    "use strict"
function getResult(a, b, c) {
 
    let D = Math.pow(b, 2) - 4 * a * c;
    let x1;
    let x2;
    if (D > 0) {

        x1 = (-b + Math.sqrt(D)) / (2 * a);
        x2 = (-b - Math.sqrt(D)) / (2 * a);
        
        console.log(`Существует 2 корня`);
        return [x1, x2];

    }
    if (D == 0) {
        x1 = (-b + Math.sqrt(D)) / (2 * a);
        console.log(`Cуществует 1 корень`);
        
        return [x1];
    }
    if (D < 0) {
        console.log(`Значения не существует`)
        
        return [x];
    }
    // код для задачи№ 1 писать здесь
    console.log(x);
    console.log(return);
    // return x;
}
    // код для задачи №1 писать здесь
    // return x;


function getAverageMark(marks) {
    let average;
    if (marks.length == 0) {
        average = 0;
        console.log("Оценок нет");
        return average;
    }
    else if (marks.length > 5) {
        marks.splice(0, 5);
        console.log("Ой, похоже вы ввели лишнии оценки, но не волнуйтесь мы их уже убрали!")
    }
    
    let averageMark = 0;
    for (let i = 0; i < marks.length; i++){
    	averageMark = averageMark + marks[i];
    }
    
  averageMark = averageMark/marks.length;
  return averageMark;
}


    // код для задачи №2 писать здесь
    // return averageMark;


function askDrink(name, dateOfBirthday) {
    
    let date = new Date; //Текущя дата
    if (date.getFullYear() - dateOfBirthday.getFullYear() > 18) {
    	return `Не желаете ли олд-фэшн, ${name}?`;
    } else{
    	return `Сожалею, ${name}, ноя могу вам продать алкоголь. Могу предложить вам замечательный клюквенный компот!`;
    }

}