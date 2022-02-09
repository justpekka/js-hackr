let result = document.querySelector("#result");
let formula = document.querySelector("#formula");

let query;
let calcStatus;

function display(a) {
  if(calcStatus) {
    query = undefined;
    if(result.classList == "result") result.classList = 'formula';
    if(formula.classList == "formula") formula.classList = 'result';
    calcStatus = false;
  };
  query == undefined ? query = a : query += a;
  formula.innerHTML = query;
  update();
}

function operator(a) {
  if(calcStatus) {
    query = undefined;
    if(result.classList == "result") result.classList = 'formula';
    if(formula.classList == "formula") formula.classList = 'result';
    calcStatus = false;
  };
  if (query == undefined) query = 0+a;
  // query.search(/\+\-\*\//i) ? query.replace(/\+\-\*\//i, a) : query += a;
  query += a;
  
  formula.innerHTML = query;
}

function update() {
  let updating = eval(query);
  updating == undefined ? result.innerHTML = 0 : result.innerHTML = updating;
}

function calc() {
  calcStatus = true;
  if(result.classList == "formula") result.classList = 'result';
  if(formula.classList == "result") formula.classList = 'formula';
};

function del() {
  query == undefined ? query = 0 : query.slice(-1);
  formula.innerHTML = query;
};

function clr() {
  query = 0;
  formula.innerHTML = query;
  if(result.classList == "result") result.classList = 'formula';
  if(formula.classList == "formula") formula.classList = 'result';
  update();
};

