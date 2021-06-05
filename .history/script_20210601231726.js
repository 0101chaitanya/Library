let heading = document.createElement("h1");
heading.textContent = 'Library';
document.body.appendChild(heading);
let newBook = document.createElement('button');
newBook.textContent = 'NEW BOOK';
document.body.appendChild(newBook);
let form = document.createElement('form');
h2 = document.createElement('h2');
form.appendChild(h2);

function createElmt(labelName, labelId, tipe, labelTextContent, inputId) {
    labelName = document.createElement('label');
    labelName.textContent = labelTextContent;
    labelName.id = labelId;
    labelName.htmlFor = inputId;
    inputId = document.createElement('input');
    inputId.type = tipe;
    inputId.id = inputId;
    labelName.appendChild(inputId);
    form.appendChild(labelName);
}

let author = createElmt('author', 'author', 'text', 'Author:', 'authorInput');
let title = createElmt('title', 'title', 'text', 'Title:', 'titleInput');

let pages = createElmt('pages', 'pages', 'number', 'Pages:', 'pagesInput');
let read = createElmt('read', 'read', 'checkbox', 'Read:', 'readInput');
h2.textContent = `New Book`;
console.log('author'.id);
/*
let author = document.createElement('label');
author.textContent = 'Author :';
author.htmlFor = 'authorInput';
let authorInput = document.createElement('input');
authorInput.id = 'authorInput';
author.appendChild(authorInput);
document.body.appendChild(author);
 */


function setBookObj(author, title, pages, readStatus, refUrl) {
    this.author = author;
    this.title = title;
    this.pages = pages;
    this.readStatus = readStatus;
    this.refUrl = refUrl;
}
document.body.appendChild(form);