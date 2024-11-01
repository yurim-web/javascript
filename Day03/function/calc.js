const first = Number(prompt("첫번째 숫자 입력!"));
const second = Number(prompt("두번째 숫자 입력!"));
const operator = prompt("연산자를 입력하시죠! (+,-,*,/,**)중 하나를 입력할 것");

// add: (a+b) => a+b;  -

const clac = {
  add: (a, b) => a + b,

  substract: (a, b) => a - b,

  multiply: (a, b) => a * b,

  device: (a, b) => a / b,

  square: (a, b) => a * b,
};

alert(clac[operator](first, second));

// alert(`${clac[operator]}`);

//  함수가 일급 객체라서 가능

// if (operator == "+") {
//   alert(clac.add(first, second));
// } else if (operator == "-") {
//   alert(clac.substract(first, second));
// } else if (operator == "*") {
//   alert(clac.multiply(first, second));
// } else if (operator == "/") {
//   alert(clac.device(first, second));
// } else if (operator == "**") {
//   alert(clac.square(first, second));
// } else {
//   alert("없음");
// }
