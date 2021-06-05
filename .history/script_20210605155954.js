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
    labelName.name = labelId;
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
createElmt('read', 'read', 'checkbox', 'Read:', 'readInput', 'readInput', false, null, 'read');
form.appendChild(divInput);
let submission = document.createElement('div');
submission.classList.add('formGroup');
submission.id = 'submission';
let submitBtn = document.createElement('button');
submitBtn.textContent = 'Submit-form';
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

form.style.display = 'flex';

function formEnable() {
    form.style.display = 'flex';
}

function formDisable() {
    form.style.display = 'none';
}

let objArray = [];
console.log(objArray.length);
//let x = document.getElementById(`authorInput`);

//localStorage.clear();
form.addEventListener('submit',
    function() {
        // let obj = 
        e.preventDefault();

        window[`obj` + objArray.length] = new setBookObj(form.elements[0].value, form.elements[1].value, form.elements[2].value, form.elements[3].checked);
        console.log(`obj` + objArray.length);

        objArray.splice(objArray.length, 0, window[`obj` + objArray.length]);
        //console.log();
        console.log(objArray[0]);
        //        objArray.splice(i, 0, obj);
        localStorage.setItem(`objArray`, JSON.stringify(objArray));

        formDisable();
        form.submit();
    }); //console.log(ObjArray.length);


console.log(objArray);
if ((JSON.parse(localStorage.getItem(`objArray`))) !== null && objArray !== null) {

    objArray = JSON.parse(localStorage.getItem(`objArray`));
    console.log(objArray);
    objArray.forEach((item, j) => {

        if (item !== null) {
            let divOut = document.createElement('div');
            divOut.id = `divOut${j}`;
            divOut.classList.add('divElement');
            let authOut = document.createElement('p');
            authOut.classList.add(`out`);
            authOut.textContent = `Author of the book : ${item.author}`;
            let titleOut = document.createElement('p');
            titleOut.textContent = `Title of the book : ${item.title}`;;
            titleOut.classList.add(`out`);
            let pgsOut = document.createElement('p');
            pgsOut.textContent = `No of pages : ${item.pages}`;
            pgsOut.classList.add(`out`);
            let redLabel = document.createElement('label');
            redLabel.classList.add(`out`);
            redLabel.textContent = `Read :`;
            let redOut = document.createElement('input');
            redLabel.htmlFor = redOut;
            redOut.type = 'checkbox';
            redLabel.appendChild(redOut);
            redOut.checked = item.readStatus;
            redOut.addEventListener('change', function() {
                item.readStatus = redOut.checked;
                localStorage.setItem('objArray', JSON.stringify(objArray));
            });
            divOut.appendChild(authOut);
            divOut.appendChild(titleOut);
            divOut.appendChild(pgsOut);
            divOut.appendChild(redLabel);

            let deleteBtn = document.createElement('button');
            deleteBtn.type = 'button';
            deleteBtn.classList.add('deleteBtn');
            deleteBtn.textContent = 'Delete';
            deleteBtn.addEventListener('click', e => {
                objArray.splice(j, 1, 0);
                divOut.remove();
                console.log(objArray);
            });


            divOut.appendChild(deleteBtn);
            viewBox.appendChild(divOut);

            console.log(item);
        }
    });
}