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
//form.method = "post";
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
let submitBtn = document.createElement('button');
submitBtn.textContent = 'button';
submitBtn.id = "submitBtn";
submitBtn.type = 'submit';
submitBtn.classList.add('selection');
submission.appendChild(submitBtn);
let cancel = document.createElement('button');
cancel.textContent = 'Cancel';
cancel.id = 'cancel';
cancel.type = 'button';
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

let objArray = [];

form.addEventListener('submit', addBook(form)); //console.log(ObjArray.length);

function addBook(form) {
    /*   let obj1 = new setBookObj(form.elements[0].value, form.elements[0].value, form.elements[2].value, form.elements[3].value);
      console.log(form.elements[0].value);
  
     */
    /* 
           obj[author] = form.elements[0].value;
           obj[title] = e.target.elements[1].value;
           obj[pages] = e.target.elements[2].value;
           obj.readStatus = e.target.elements[3].value;
        */
    // Object.call(ObjArray);
    // console.log(obj);

    // e.target.submit();
    //  return ObjArray;
    //console.log(ObjArray);

    // console.log(ObjArray);
    //form.submit();
}
console.log(objArray);

let obj1 = new setBookObj('cat', 'dog', 123, 'off');
objArray.push(obj1);

objArray.forEach((item, i) => {


    let divOut = document.createElement('div');
    divOut.id = `divOut${i}`;
    let authOut = document.createElement('p');
    authOut.classList.add(`out${i}`);
    authOut.textContent = `${item.author}`;
    let titleOut = document.createElement('p');
    titleOut.textContent = item.title;
    titleOut.classList.add(`out${i}`);
    let pgsOut = document.createElement('p');
    pgsOut.textContent = item.pages;
    pgsOut.classList.add(`out${i}`);
    let redLabel = document.createElement('label');
    redLabel.classList.add(`out${i}`);
    redLabel.textContent = `Read:`;
    redLabel.htmlFor = red;
    let redOut = document.createElement('input');
    redOut.textContent = item.readStatus;
    divOut.appendChild(authOut);
    divOut.appendChild(titleOut);
    divOut.appendChild(pgsOut);
    divOut.appendChild(redOut);
    viewBox.appendChild(divOut);

    console.log(item);
});

form.style.display = 'flex';

function formEnable() {
    form.style.display = 'flex';
}

function formDisable() {
    form.style.display = 'none';
}