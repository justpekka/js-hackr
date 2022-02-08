let result = document.querySelector("#result");
let formula = document.querySelector("#formula");

function display(a = undefined) {
  formula.innerHTML += a;
}

function operator(a = undefined) {
  if(formula.innerHTML == "+" || "-" || "*" || "/" ) formula.innerHTML[-1] = a;
  formula.innerHTML += a;

}

function calc() {
  result.innerHTML = eval(formula.value);
};

function del() {
  formula.value -= 1;
};

function clear() {
  formula.value = 0;
};

