let myLibrary = [];

function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
}

function addBookToLibrary() {
  const title = prompt('What is the title of the book?');
  const author = prompt('Who wrote it?');
  const pages = parseInt(prompt('How many pages does it have?'));
  const read = confirm('Have you read it?');

  myLibrary.push(new Book(title, author, pages, read));
}
