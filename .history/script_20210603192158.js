let heading = document.createElement("header");
heading.textContent = 'Library';
container = document.getElementById("container");
container.appendChild(heading);
let newBook = document.createElement('button');
newBook.id = 'newBookButton';
newBook.textContent = 'Add new book';
container.appendChild(newBook);
let form = document.createElement('form');
h3 = document.createElement('h3');
form.appendChild(h3);

function createElmt(labelName, labelId, tipe, labelTextContent, inputId, inpId, req, place, checkMk) {
    formGroup = document.createElement('div');
    formGroup.classList.add('formGroup');
    labelName = document.createElement('label');
    labelName.textContent = labelTextContent;
    labelName.id = labelId;
    labelName.htmlFor = inputId;
    inputId = document.createElement('input');
    inputId.type = tipe;
    inputId.id = inpId;
    inputId.required = req;
    inputId.placeholder = place;
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
    formGroup.appendChild(labelName);

    form.appendChild(formGroup);
}
submission = document.createElement('div');
submission.classList.add('formGroup');
submit = document.createElement('button');
submit.textContent = 'Submit';
submission.appendChild(submit);
Cancel = document.createElement('button');
Cancel.textContent = 'Cancel';
submission.appendChild(Cancel);
form.appendChild(submission);
h3.textContent = `New Book`;
createElmt('author', 'author', 'text', 'Author:', 'authorInput', 'authorInput', true, 'Enter name of author');
createElmt('title', 'title', 'text', 'Title:', 'titleInput', 'titleInput', true, 'Enter title of the book');
createElmt('pages', 'pages', 'number', 'Pages:', 'pagesInput', 'pagesInput', true, 'Enter the number of pages');
createElmt('url', 'url', 'text', 'Url:', 'urlInput', 'urlInput', false, 'Enter reference url');

createElmt('read', 'read', 'checkbox', 'Read:', 'readInput', 'readInput', false, null, 'read');
console.log('author'.id);

container.appendChild(form);
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