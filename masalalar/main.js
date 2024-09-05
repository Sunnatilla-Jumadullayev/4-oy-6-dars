const elInput1 = document.querySelector("#input1");
const elInput2 = document.querySelector("#input2");

const elPlus = document.querySelector("#plus");
const elMinus = document.querySelector("#minus");
const elDivide = document.querySelector("#divide");
const elMultiple = document.querySelector("#multiple");
const elDegree = document.querySelector("#degree");
const elAmal1 = document.querySelector("#amal1");
const elAmal2 = document.querySelector("#amal2");
const elAmal = document.querySelector("#amal");

const elResult = document.querySelector("#result");

function plus(a, b) {
  return a + b;
}
function minus(a, b) {
  return a - b;
}
function divide(a, b) {
  return a / b;
}
function multiple(a, b) {
  return a * b;
}
function reside(a, b) {
  return a % b;
}
function degree(a, b) {
  return a ** b;
}

elPlus.addEventListener("click", function () {
  const rplus = plus(Number(elInput1.value), Number(elInput2.value));
  console.log(rplus);
  elAmal1.innerHTML = elInput1.value;
  elAmal2.innerHTML = elInput2.value + ` = `;
  elAmal.innerHTML = `+`;
  elResult.innerHTML = rplus;
});
elMinus.addEventListener("click", function () {
  const rminus = minus(Number(elInput1.value), Number(elInput2.value));
  console.log(rminus);
  elAmal1.innerHTML = elInput1.value;
  elAmal2.innerHTML = elInput2.value + ` = `;
  elAmal.innerHTML = `-`;
  elResult.innerText = rminus;
});
elDivide.addEventListener("click", function () {
  const rdivide = divide(Number(elInput1.value), Number(elInput2.value));
  console.log(rdivide);
  elAmal1.innerHTML = elInput1.value;
  elAmal2.innerHTML = elInput2.value + ` = `;
  elAmal.innerHTML = `/`;
  elResult.innerText = rdivide;
});
elMultiple.addEventListener("click", function () {
  const rmultiple = multiple(Number(elInput1.value), Number(elInput2.value));
  console.log(rmultiple);
  elAmal1.innerHTML = elInput1.value;
  elAmal2.innerHTML = elInput2.value + ` = `;
  elAmal.innerHTML = `*`;
  elResult.innerText = rmultiple;
});

elDegree.addEventListener("click", function () {
  const rdegree = degree(Number(elInput1.value), Number(elInput2.value));
  console.log(rdegree);
  elAmal1.innerHTML = elInput1.value;
  elAmal2.innerHTML = elInput2.value + ` = `;
  elAmal.innerHTML = `**`;
  elResult.innerText = rdegree;
});
