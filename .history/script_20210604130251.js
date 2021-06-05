'use strict';
let container = document.getElementById("container");

let heading = document.createElement("header");
heading.textContent = 'Library';
container.appendChild(heading);
let newBook = document.createElement('button');
newBook.id = 'newBookButton';
newBook.textContent = 'Create new book';
container.appendChild(newBook);

let form = document.createElement('form');
let h1 = document.createElement('h1');
form.appendChild(h1);
let divInput = document.createElement('div');
divInput.id = 'divInput';

function createElmt(labelName, labelId, tipe, labelTextContent, inputId, inpId, req, place, checkMk) {

    let formGroup = document.createElement('div');
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

    divInput.appendChild(formGroup);
}

h1.textContent = `New Book`;
createElmt('author', 'author', 'text', 'Author:', 'authorInput', 'authorInput', true, 'Enter name of author');
createElmt('title', 'title', 'text', 'Title:', 'titleInput', 'titleInput', true, 'Enter title of the book');
createElmt('pages', 'pages', 'number', 'Pages:', 'pagesInput', 'pagesInput', true, '');
createElmt('url', 'url', 'url', 'Url:', 'urlInput', 'urlInput', false, 'Enter reference url');
createElmt('read', 'read', 'checkbox', 'Read:', 'readInput', 'readInput', false, null, 'read');
form.appendChild(divInput);
let submission = document.createElement('div');
submission.classList.add('formGroup');
submission.id = 'submission';
let submit = document.createElement('button');
submit.textContent = 'Submit';
submit.id = "submit";
submit.classList.add('selection');
submission.appendChild(submit);
let cancel = document.createElement('button');
cancel.textContent = 'Cancel';
cancel.id = 'cancel';
cancel.classList.add('selection');
submission.appendChild(cancel);
form.appendChild(submission);
container.appendChild(form);
let viewBox = document.createElement('div');
viewBox.id = 'vb';
let i = 0;
class setBookObj {
    constructor(author, title, pages, readStatus, refUrl) {
        this.author = author;
        this.title = title;
        this.pages = pages;
        this.refUrl = refUrl;
        this.readStatus = readStatus;
    }
}
submit.addEventListener('click', formParse);

function formEnable(e) {
    form.style.display = 'flex';
}
formDisable(e);

function formDisable() {
    form.style.display = 'none';
}
formEnable(e);
//formSubmit();
function formSubmit(i, obj, auth, ttl, pgs, ul, red, div) {
    div = document.createElement('div');
    auth = document.createElement('p');
    auth.classList.add(`book${i}`);

    ttl = document.createElement('p');
    ttl.classList.add(`book${i}`);
    pgs = document.createElement('p');
    pgs.classList.add(`book${i}`);
    ul = document.createElement('p');
    ul.classList.add(`book${i}`);
    red = document.createElement('input');
    red.type = 'checkBox';
    red.classList.add(`book${i}`);
    red.id = `Red${i}`;
    div.appendChild(auth);
    div.appendChild(ttl);
    div.appendChild(pgs);
    div.appendChild(ul);
    div.appendChild(red);
    viewBox.appendChild(div);
    i++;
}

function formParse(e) {
    obj = Object.create(setBookObj.prototype);
    obj.aI = e.authorInput.textContent;
    obj.tI = e.titleInput.textContent;
    obj.pI = e.pagesInput.textContent;
    obj.uI = e.urlInput.textContent;
    obj.rI = e.readInput.textContent;
    console.log(readInput);
    /*  createElmt(labelName, labelId, tipe, labelTextContent, inputId, inpId, req, place, checkMk);
     createElmt('author', 'author', 'text', 'Author:', 'authorInput', 'authorInput', true, 'Enter name of author');
     createElmt('title', 'title', 'text', 'Title:', 'titleInput', 'titleInput', true, 'Enter title of the book');
     createElmt('pages', 'pages', 'number', 'Pages:', 'pagesInput', 'pagesInput', true, '');
     createElmt('url', 'url', 'url', 'Url:', 'urlInput', 'urlInput', false, 'Enter reference url');
     createElmt('read', 'read', 'checkbox', 'Read:', 'readInput', 'readInput', false, null, 'read');
  */
}
formSubmit(i, `obj${i}`, `auth${i}`, `ttl${i}`, `pgs${i}`, `ul${i}`, `red${i}`, `div${i}`);
container.appendChild(viewBox);