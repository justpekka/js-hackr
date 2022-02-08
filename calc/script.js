let result = document.querySelector("#result");
let formula = document.querySelector("#formula");
let operators = document.querySelectorAll(".operator");
let buttons = document.querySelectorAll(".calc-buttons");
let numbers = [];
buttons.forEach((child, index) => {
  numbers[index] = child.children;
})

numbers.forEach(child => {
  for(let i = 0; i < child.length; i++) {
    // console.log(child[i]);

    child[i].addEventListener('click', (e) => {
      e.preventDefault();

      formula.innerHTML += child[i].id;
    })
  }
})
// operators.forEach((child, key) => {
//   child.addEventListener('click', (e) => {
//     e.preventDefault();

//     display.innerHTML += child.id;
//   })
// })

function calc() {  
};