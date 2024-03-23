/*
1. Create a class called Author
2. Create a constructor which takes firstName, lastName, country, array of books
3. Create a function called as getFullName() for Author object that will return {firstName lastName}
4. Create a function called as getBooks() for Author object that will return all the books
*/

class Author {
  constructor(firstName, lastName, country, books) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.country = country;
    this.books = books;
  }

  getFullName() {
    return `${this.firstName} ${this.lastName}`;
  }

  // getter
  getBooks() {
    return this.books;
  }
}

/*
1. Create a class called Book
2. Create a constructor which takes title, genre, page
*/

class Book {
  constructor(title, genre, page) {
    this.title = title;
    this.genre = genre;
    this.page = page;
  }
}

/*
We will write our actual program that we define an author and the books
In this program we will write the biography of George R. R. Martin, an American novelist.

Create 3 books object with the below information:
        BookName                            Genre           TotalPage
        A Game of Thrones                   Epic Fantasy    694
        A Clash of Kings                    Epic Fantasy    768
        A Storm of Swords                   Epic Fantasy    973

Create an Author object with the below information:
    First name: George R. R.
    Last name: Martin
    Country: United States
    Books: are given above

1. Get and print Author's full name
2. Get and print Author's books iterated with a loop

EXPECTED OUTPUT:
George R. R. Martin
Book { title: 'A Game of Thrones', genre: 'Epic Fantasy', page: 694 }
Book { title: 'A Clash of Kings', genre: 'Epic Fantasy', page: 768 }
Book { title: 'A Storm of Swords', genre: 'Epic Fantasy', page: 973 }
*/

const book1 = new Book("A Game of Thrones", "Epic Fantasy", 694);
const book2 = new Book("A Clash of Kings", "Epic Fantasy", 768);
const book3 = new Book("A Storm of Swords", "Epic Fantasy", 973);

const books = [book1, book2, book3];

const author = new Author("George R. R.", "Martin", "United States", books);

console.log(author.getFullName());
// for(const book of author.getBooks()) {
//     console.log(book);
// }

author.getBooks().forEach((book) => {
  console.log(book);
});

function AuthorProto(firstName, lastName, country, books) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.country = country;
  this.books = books;
}

AuthorProto.prototype.getFullName = function () {
  return `${this.firstName} ${this.lastName}`;
};

AuthorProto.prototype.getBooks = function () {
  return this.books;
};


function Book(title, genre, page) {
    this.title = title;
    this.genre = genre;
    this.page = page;
}