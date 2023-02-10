console.log("hello world");


function handleSubmit(evt) {
  evt.preventDefault();
  
  alert("Form submitted successfully!");
}


let compliments = document.querySelector('ul').querySelectorAll('li');


function handleMouseover(evt) {
  let randomIndex = Math.floor(Math.random() * compliments.length);
  let selectedCompliment = compliments[randomIndex].textContent;
  alert("You're " + selectedCompliment + "!");
}
  

let form = document.querySelector('#contact');
let picture = document.querySelector('img');

form.addEventListener('submit', handleSubmit);
picture.addEventListener('mouseover', handleMouseover);
