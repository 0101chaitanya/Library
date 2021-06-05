let heading = document.createElement("h1");
heading.textContent = 'Library';
document.body.appendChild(heading);
let newBook = document.createElement('button');
newBook.id = 'newBook';
newBook.textContent = 'NEW BOOK';
document.body.appendChild(newBook);
let form = document.createElement('form');
h3 = document.createElement('h3');
form.appendChild(h3);

function createElmt(labelName, labelId, tipe, labelTextContent, inputId, inpId, checkMk) {
    labelName = document.createElement('label');
    labelName.textContent = labelTextContent;
    labelName.id = labelId;
    labelName.htmlFor = inputId;
    inputId = document.createElement('input');
    inputId.type = tipe;
    inputId.id = inpId;
    if (inputId.type == 'text') {
        inputId.classList.add('textBox');
    }
    labelName.appendChild(inputId);
    if (checkMk == 'read') {
        let span = document.createElement('span');
        span.className = 'checkMark';
        span.innerHTML = '&#10003';


        labelName.appendChild(span);
    }
    form.appendChild(labelName);
}
h3.textContent = `New Book`;
createElmt('author', 'author', 'text', 'Author:', 'authorInput', 'authorInput');
createElmt('title', 'title', 'text', 'Title:', 'titleInput', 'titleInput');
createElmt('pages', 'pages', 'number', 'Pages:', 'pagesInput', 'pagesInput');
createElmt('read', 'read', 'checkbox', 'Read:', 'readInput', 'readInput', 'read');
createElmt('url', 'url', 'text', 'Url (eg: Wiki) :', 'urlInput', 'urlInput')
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