console.log('hello Library');
const myLibrary = [
   
];

function Book(title,author,pages,read) {
  // the constructor...
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
}

// DOM
const form = document.getElementById('form');
const titleInput = document.getElementById('title');
const authorInput= document.getElementById('author');
const pagesInput = document.getElementById('pages');
const radioButtons = document.querySelectorAll("input[name='read']");
const section= document.getElementById('output');
const submitButton = document.querySelector('#submit');

function getReadValue(){
    for (i=0;i<radioButtons.length;i++){
        console.log(i);
        if (radioButtons[i].checked){
            return radioButtons[i].value;
        }
    }
}

function addBookToLibrary() {
  // do stuff here
  let title = titleInput.value;
  let author = authorInput.value;
  let pages = pagesInput.value;
  let read = getReadValue()
  const newBook = new Book(title,author,pages,read);
  myLibrary.push(newBook);
  const myBook = document.createElement('p');
  for (const book of myLibrary){
      myBook.textContent = `Book title :${book.title} 
                                author: ${book.author}
                                Number of pages: ${book.pages}
                                 read: ${book.read}`;
      section.appendChild(myBook)
  }
}
submitButton.addEventListener('click',function(e){
    e.preventDefault();
    addBookToLibrary();
    title.value  ='';
    author.value ='';
    pages.value ='';

})




