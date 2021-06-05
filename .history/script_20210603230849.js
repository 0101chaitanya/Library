let heading = document.createElement("header");
heading.textContent = 'Library';
container = document.getElementById("container");
container.appendChild(heading);
let newBook = document.createElement('button');
newBook.id = 'newBookButton';
newBook.textContent = 'Create new book';
container.appendChild(newBook);

let form = document.createElement('form');
h1 = document.createElement('h1');
form.appendChild(h1);
divInput = document.createElement('div');
divInput.id = 'divInput';

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

    divInput.appendChild(formGroup);
}

h1.textContent = `New Book`;
createElmt('author', 'author', 'text', 'Author:', 'authorInput', 'authorInput', true, 'Enter name of author');
createElmt('title', 'title', 'text', 'Title:', 'titleInput', 'titleInput', true, 'Enter title of the book');
createElmt('pages', 'pages', 'number', 'Pages:', 'pagesInput', 'pagesInput', true, '');
createElmt('url', 'url', 'text', 'Url:', 'urlInput', 'urlInput', false, 'Enter reference url');

createElmt('read', 'read', 'checkbox', 'Read:', 'readInput', 'readInput', false, null, 'read');
form.appendChild(divInput);
submission = document.createElement('div');
submission.classList.add('formGroup');
submission.id = 'submission';
submit = document.createElement('button');
submit.textContent = 'Submit';
submit.id = "submit";
submit.classList.add('selection');
submission.appendChild(submit);
cancel = document.createElement('button');
cancel.textContent = 'Cancel';
cancel.id = 'cancel';
cancel.classList.add('selection');
submission.appendChild(cancel);
form.appendChild(submission);
console.log('author'.id);

container.appendChild(form);


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
obj = Object.create(setBookObj.prototype);
console.log(obj);

function formEnable() {
    form.style.display = 'flex';
}

formEnable();

function formDisable() {
    form.style.display = 'none';
}
formDisable();

function formSubmit() {

}