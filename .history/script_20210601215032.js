let heading = document.createElement("h1");
heading.textContent = 'Library';
document.body.appendChild(heading);
let newBook = document.createElement('button');
newBook.textContent = 'NEW BOOK';
document.body.appendChild(newBook);
let form = document.createElement('form');
form.style.color = 'white';
document.body.appendChild(form);


function page(Labelelement, formElement) {}


let author = document.createElement('label');
author.textContent = 'Author :';
author.htmlFor = 'authorInput';
let authorInput = document.createElement('input');
authorInput.id = 'authorInput';
author.appendChild(authorInput);
document.body.appendChild(author);



function setBookObj(author, title, pages, readStatus, refUrl) {
    this.author = author;
    this.title = title;
    this.pages = pages;
    this.readStatus = readStatus;
    this.refUrl = refUrl;
}