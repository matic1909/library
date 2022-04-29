let myLibrary = [
  {
    title: 'The Fellowship of the Ring',
    author: 'J.R.R. Tolkien',
    pages: 459,
    read: false,
  },
  {
    title: 'The Bible',
    author: 'J.J.J. Jesus',
    pages: 1000,
    read: false,
  },
  {
    title: 'The Greatest Show on Earth',
    author: 'Richard Dawkins',
    pages: 309,
    read: true,
  },
  {
    title: 'Last Chance to See',
    author: 'Douglas Adams',
    pages: 378,
    read: true,
  },
  {
    title: 'It',
    author: 'Stephen King',
    pages: 459,
    read: false,
  },
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

function deleteBook(e) {
  const title = e.target.parentNode.firstChild.innerHTML;
  const filteredLibrary = myLibrary.filter((book) => book.title !== title);
  myLibrary = filteredLibrary;
  renderBooks();
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

    const deleteBookButton = document.createElement('button');
    deleteBookButton.textContent = 'Delete';
    deleteBookButton.classList.add('btn');
    deleteBookButton.addEventListener('click', deleteBook);

    cardDiv.appendChild(title);
    cardDiv.appendChild(author);
    cardDiv.appendChild(pages);
    cardDiv.appendChild(readStatus);
    cardDiv.appendChild(deleteBookButton);
    libraryDiv.appendChild(cardDiv);
  });
}

renderBooks();
