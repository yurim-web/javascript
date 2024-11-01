// condition (조건문)
// 조건이 맞는다면 이 코드를 실행하셈
// if- else, switch -> obj타입

const num = Number(prompt("숫자입력"));

if (num > 0) {
  console.log("양수입니다");
} else if (num == 0) {
  console.log("0입니다.");
} else {
  console.log("음수입니다.");
}
