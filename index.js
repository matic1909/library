let myLibrary = [];
const libraryDiv = document.querySelector('#book-display');

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

function renderBooks() {
  myLibrary.forEach((book) => {
    const cardDiv = document.createElement('div');
    cardDiv.classList.add('book-card');

    const title = document.createElement('h2');
    title.textContent = book.title;
    title.classList.add('title');

    const author = document.createElement('p');
    author.textContent = book.author;
    author.classList.add('author');

    const pages = document.createElement('p');
    pages.textContent = `${book.pages} pages`;
    pages.classList.add('pages');

    const readStatus = document.createElement('p');
    readStatus.textContent = `${book.read ? 'read' : 'not read yet'}`;
    readStatus.classList.add('read');

    cardDiv.appendChild(title);
    cardDiv.appendChild(author);
    cardDiv.appendChild(pages);
    cardDiv.appendChild(readStatus);
    libraryDiv.appendChild(cardDiv);
  });
}
