const num1 = Number(prompt("첫번째 숫자를 입력하시오"));
const num2 = Number(prompt("두번째 숫자를 입력하시오"));
const operator = prompt("연산자를 입력하세요 (+,-,*,/,** )");

const sum = num1 + num2;
const sub = num1 - num2;
const multiply = num1 * num2;
const divide = num1 / num2;
const square = num1 ** num2;

if (operator == "+") {
  console.log(sum);
} else if (operator == "-") {
  console.log(sub);
} else if (operator == "*") {
  console.log(multiply);
} else if (operator == "/") {
  if (num2 == 0) {
    console.log("해당 숫자로 나눌 수 없습니다.");
  } else {
    console.log(divide);
  }
} else if (operator == "**") {
  console.log(square);
} else {
  console.log("x");
}

// const Postive = num1 > 0;
// const negative = num1 < 0;
// const odd = num % 2;
// const even = num1 % 2 == 0;

// if (Postive && odd) {
// } else if (Postive && even) {
// } else if (negative && odd) {
// } else if (negative && even) {
// } else {
// }
