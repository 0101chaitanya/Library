let heading = document.createElement("h1");
heading.textContent = 'Library';
document.body.appendChild(heading);
let newBook = document.createElement('button');
newBook.textContent = 'NEW BOOK';
document.body.appendChild(newBook);
let form = document.createElement('form');
form.style.backgroundColor = 'white';


function createElmt(labelName, type, labelTextContent, inputId) {
    labelName = document.createElement('label');
    labelName.textContent = labelTextContent;
    labelName.htmlFor = inputId;
    inputId = document.createElement('input');
    inputId.type = type;
    inputId.id = inputId;
    labelName.appendChild(inputId);
    form.appendChild(labelName);


}

let author = createElmt('author', 'text', 'Author :', 'authorInput');
let title = createElmt('title', 'text', 'Title :', 'titleInput');

let = createElmt('author', 'Author :', 'authorInput');
console.dir(author);

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