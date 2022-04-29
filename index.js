let myLibrary = [];
const libraryDiv = document.querySelector('#book-display');
const addBookButton = document.querySelector('#add-book-button');
const addBookModal = document.querySelector('#add-book-modal');
const submitBookButton = document.querySelector('#submit-book-button');

addBookButton.addEventListener('click', (e) => {
  addBookModal.classList.add('active');
});

submitBookButton.addEventListener('click', (e) => {
  e.preventDefault();
  const bookToAdd = getBookInput();
  addBookToLibrary(bookToAdd);
  addBookModal.classList.remove('active');
  renderBooks();
});

function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
}

const getBookInput = () => {
  const title = document.getElementById('title').value;
  const author = document.getElementById('author').value;
  const pages = document.getElementById('pages').value;
  const read = document.getElementById('read').checked;
  return new Book(title, author, pages, read);
};

function addBookToLibrary(book) {
  myLibrary.push(book);
}

function resetBookDisplay() {
  libraryDiv.innerHTML = '';
}

function renderBooks() {
  resetBookDisplay();
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

renderBooks();
