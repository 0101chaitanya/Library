let heading = document.createElement("h1");
heading.textContent = 'Library';
document.body.appendChild(heading);
let newBook = document.createElement('button');
newBook.textContent = 'NEW BOOK';
document.body.appendChild(newBook);

let author = document.createElement('label');
author.textContent = 'Author :';
let authorInput = document.createElement('input');
author.appendChild(authorInput);
document.body.appendChild(author);