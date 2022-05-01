class Book {
  constructor(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
  }

  toggleRead = () => {
    this.read = !this.read;
  };
}
let myLibrary = [
  new Book('The Fellowship of the Ring', 'J.R.R. Tolkien', 459, false),
  new Book('The Fellowship of the Rings', 'J.R.R. Tolkien', 459, false),
  new Book('The Fellowship of the Ringses', 'J.R.R. Tolkien', 459, false),
  new Book('The Fellowship of the Ringlings', 'J.R.R. Tolkien', 459, false),
  new Book(
    'The Fellowship of the Ringadingdings',
    'J.R.R. Tolkien',
    459,
    false
  ),
  new Book('The Fellowship of the Bling', 'J.R.R. Tolkien', 459, false),
];

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

function deleteBook(e) {
  const title =
    e.target.parentNode.parentNode.querySelector('.title').textContent;
  const filteredLibrary = myLibrary.filter((book) => book.title !== title);
  myLibrary = filteredLibrary;
  renderBooks();
}

function handleReadToggle(e) {
  const title =
    e.target.parentNode.parentNode.querySelector('.title').textContent;
  myLibrary.forEach((book) => {
    if (book.title === title) book.toggleRead();
  });
  renderBooks();
}

function createBookCard(book) {
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

  const deleteBookButton = document.createElement('button');
  deleteBookButton.textContent = 'Delete';
  deleteBookButton.classList.add('btn');
  deleteBookButton.addEventListener('click', deleteBook);

  const toggleReadButton = document.createElement('button');
  toggleReadButton.textContent = `Set as ${book.read ? 'unread' : 'read'}`;
  toggleReadButton.classList.add('btn');
  toggleReadButton.addEventListener('click', handleReadToggle);

  const buttonsDiv = document.createElement('div');
  buttonsDiv.classList.add('buttons');
  buttonsDiv.appendChild(deleteBookButton);
  buttonsDiv.appendChild(toggleReadButton);

  cardDiv.appendChild(title);
  cardDiv.appendChild(author);
  cardDiv.appendChild(pages);
  cardDiv.appendChild(readStatus);
  cardDiv.appendChild(buttonsDiv);
  libraryDiv.appendChild(cardDiv);
}

function renderBooks() {
  resetBookDisplay();
  myLibrary.forEach((book) => {
    createBookCard(book);
  });
}

renderBooks();
