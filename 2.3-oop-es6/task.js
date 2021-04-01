class PrintEditionItem{
	constructor(name, releaseDate, pagesCount){
		this.name = name;
		this.releaseDate = releaseDate;
		this.pagesCount = pagesCount;
		this.state = 100;
		this.type = null;
	}
}

fix(){
	this.state = this.state * 1.5;
}

set state(state) {
        if (state < 0) {
            this._state = 0;
        } else if (state > 100) {
            this._state = 100;
        } else {
            this._state = state;
        }
    }

    get state() {
        return this._state;
    }


const sherlock = new PrintEditionItem("Полное собрание повестей и рассказов о Шерлоке Холмсе в одном томе", 2019, 1008);

console.log(sherlock.releaseDate); //2019
console.log(sherlock.state); //100
sherlock.fix();
console.log(sherlock.state); //100

class Magazine extends PrintEditionItem{
    constructor(name, releaseDate, pagesCount) {
        super(name, releaseDate, pagesCount);
        this.type = "magazine";
    }
}

class Book extends PrintEditionItem {
    constructor(author, name, releaseDate, pagesCount) {
        super(name, releaseDate, pagesCount);
        this.type = "book";
        this.author = author;
    }
}

class NovelBook extends Book {
    type = "novel";
}

class FantasticBook extends Book {
    type = "fantastic";
}

class DetectiveBook extends Book {
    type = "detective";
}

const picknick = new FantasticBook("Аркадий и Борис Стругацкие", "Пикник на обочине", 1972, 168);

console.log(picknick.author); //"Аркадий и Борис Стругацкие"
picknick.state = 10;
console.log(picknick.state); //10
picknick.fix();
console.log(picknick.state); //15

//Задание 2
class Library {
    constructor(name) {
        this.name = name;
        this.books = [];
    }

    addBook(book) {
        if (book.state > 30) {
            this.books.push(book);
        }
    }

    findBookBy(type, value) {
        for (let i = 0; i < this.books.length; i++) {
            for (let j = 0; j < Object.entries(this.books[i]).length; j++) {
                if (type === Object.entries(this.books[i])[j][0] && value === Object.entries(this.books[i])[j][1]) {
                    return this.books[i];
                }
            }
            
        }
        return null;
    }

    giveBookByName(bookName) {
        for (let i = 0; i < this.books.length; i++) {
            if (this.books[i].name === bookName) {
                let helper = this.books[i];
                this.books.splice(i, 1);
                return helper;
            }
        }
        return null;
    }
}

console.log("-----");

const library = new Library("Библиотека имени Ленина");

library.addBook(new DetectiveBook("Артур Конан Дойл", "Полное собрание повестей и рассказов о Шерлоке Холмсе в одном томе", 2019, 1008));
library.addBook(new FantasticBook("Аркадий и Борис Стругацкие", "Пикник на обочине", 1972, 168));
library.addBook(new NovelBook("Герберт Уэллс", "Машина времени", 1895, 138));
library.addBook(new Magazine("Мурзилка", 1924, 60));

console.log(library.findBookBy("name", "Властелин колец")); //null
console.log(library.findBookBy("releaseDate", 1924).name); //"Мурзилка"

console.log("Количество книг до выдачи: " + library.books.length); //Количество книг до выдачи: 4
library.giveBookByName("Машина времени");
console.log("Количество книг после выдачи: " + library.books.length); //Количество книг после выдачи: 3

console.log("-----");

const librarySecond = new Library("Mine");
librarySecond.addBook(new FantasticBook("life and death", "life", 2300, 10));
librarySecond.addBook(new DetectiveBook("life and death", "death", 2300, 100));
librarySecond.addBook(new DetectiveBook("Noname", "dunno", 1919, 100));

console.log(librarySecond.findBookBy("releaseDate", 1919));

let book1 = librarySecond.giveBookByName("life");
book1.state = 50;
book1.fix();

librarySecond.addBook(book1);

console.log(librarySecond.findBookBy("name", "life"));
