// const num = Number(prompt("숫자입력"));

// if (num % 2) {
//   console.log("홀수입니다.");
// } else {
//   console.log("짝수입니다");
// }

// const test = Number(prompt("js 시험점수는?"));

// if (test >= 90) {
//   console.log("A");
// } else if (test >= 80) {
//   console.log("B");
// } else if (test >= 70) {
//   console.log("C");
// } else if (test >= 60) {
//   console.log("D");
// } else {
//   console.log("탈락!!!!");
// }

const num1 = Number(prompt("숫자를 입력하시오"));
const Postive = num1 > 0;
const negative = num1 < 0;
const odd = num % 2;
const even = num1 % 2 == 0;

if (Postive && odd) {
} else if (Postive && even) {
} else if (negative && odd) {
} else if (negative && even) {
} else {
}
