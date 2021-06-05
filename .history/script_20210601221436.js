let heading = document.createElement("h1");
heading.textContent = 'Library';
document.body.appendChild(heading);
let newBook = document.createElement('button');
newBook.textContent = 'NEW BOOK';
document.body.appendChild(newBook);
let form = document.createElement('form');
form.style.backgroundColor = 'white';
form.textContent = 'haha';
document.body.appendChild(form);


function page(labelName, labelTextContent, inputId) {
    this.labelName = labelName;
    this.labelTextContent = labelTextContent;
    this.inputId = inputId;
}
page.prototype.createElmt = function() {

    this.labelName = document.createElement('label');
    this.labelName.textContent = this.labelTextContent;
    this.labelName.htmlFor = this.inputId;
    this.inputId = document.createElement('input');
    this.inputId.id = this.inputId;
    this.labelName.appendChild(inputId);
    document.body.appendChild(labelName);


};

let author = new page('author', 'Author :', 'authorInput');
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