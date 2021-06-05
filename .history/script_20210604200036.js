//'use strict';
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
    // inputId.required = req;
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
createElmt('read', 'read', 'checkbox', 'Read:', 'readInput', 'readInput', false, null, 'read');
form.appendChild(divInput);
let submission = document.createElement('div');
submission.classList.add('formGroup');
submission.id = 'submission';
let submit = document.createElement('button');
submit.textContent = 'Submit';
submit.id = "submit";
submit.type = 'submit';
submit.classList.add('selection');
submission.appendChild(submit);
let cancel = document.createElement('button');
cancel.textContent = 'Cancel';
cancel.id = 'cancel';
cancel.type = 'reset';
cancel.classList.add('selection');
submission.appendChild(cancel);
form.appendChild(submission);
container.appendChild(form);
let viewBox = document.createElement('div');
viewBox.id = 'vb';
container.appendChild(viewBox);

function setBookObj(author, title, pages, readStatus) {
    this.author = author;
    this.title = title;
    this.pages = pages;
    this.readStatus = readStatus;
}
let x = document.getElementById(`authorInput`);

form.addEventListener('submit', e => {
    addBook(e, createElementAndObject());
});

function addBook(e, createElementAndObject()) {
    let obj = Object.create(setBookObj.prototype);

    obj.author = e.target.elements[0].value;
    obj.title = e.target.elements[1].value;
    obj.pages = e.target.elements[2].value;
    obj.readStatus = e.target.elements[3].value;
    divOut = document.createElement('div');
    authOut = document.createElement('p');
    authOut.textContent = obj.author;
    titOut = document.createElement('p');
    authOut.textContent = obj.title;

    pgsOut = document.createElement('p');
    authOut.textContent = obj.pages;

    redOut = document.createElement('p');
    authOut.textContent = obj.readStatus;

    console.log(obj);


}

function createElementAndObject() {

}

function formEnable() {
    form.style.display = 'flex';
}
formEnable();

function formDisable() {
    form.style.display = 'none';
}
formDisable();
//formSubmit();

formEnable();