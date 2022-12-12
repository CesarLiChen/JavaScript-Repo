// Classes

class Book{
	constructor(title, author){
		this.title = title;
		this.author = author;
	}

	readBook(){
		console.log("Reading " + this.title);
	}

	description(){
		console.log(this.title + " was written by: " + this.author);
	}
}

let book = new Book();
console.log(book);
let hp = new Book("Harry Potter", "JK Rowling");
console.log(hp);
let hobbit = new Book("The Hobbit", "JRR Tolkien");
console.log(hobbit.title);
hp.readBook();

hp.description();
hobbit.description();