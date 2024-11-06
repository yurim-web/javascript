// 1. 유저에게 영어로 커피 좋아하는 커피를 입력받고 콘솔로 대문자화 해서 보여주기

// const coffee = prompt("좋아하는 커피가 무엇이니?");
// console.log(coffee.toUpperCase());

// 2.  유저에게 영어 한 문장을 입력 받고,반복횟수를 n을 물어보고
// n 번의 문장이 나오도록 콘솔로 만들기

// const english = prompt("영어 한 문장을 입력하세요?");
// const repeat = Number(prompt("몇번 반복할거에요?"));
// console.log(english.repeat(repeat));

// 3. 유저에게 비밀번호 설정을 물어보기

//1. 비밀번호가 알파벳 IT 로 시작안하면 -> 비밀번호가 IT로 시작안합니다!
//2.비밀번호가 #,@,! 문자가 안들어가면 -> 비밀번호에 특수문자가 없습니다!
//3. 비밀번호가 문자 길이가 4~12글자 사이가 아니면 -> 비밀번호 길이가 짧다 OR 비밀번호 길이가 길다
//4. 위의 조건이 다되면 비밀번호 설정완료!

const number = prompt("비밀번호 설정하기");
const isStartwithIT = number.startsWith("IT");
const hasSpecialChar =
  number.includes("#") && number.includes("@") && number.includes("!");
const islowerthan4 = number.length < 4;
const islowerthan12 = number.length > 12;

if (!isStartwithIT) {
  console.log("비밀번호가 IT로 시작안합니다!");
} else if (!hasSpecialChar) {
  console.log("비밀번호에 특수문자가 없습니다!");
} else if (islowerthan4 || islowerthan12) {
  console.log("비밀번호의 길이가 짧거나 깁니다!");
} else {
  console.log("비밀번호 설정완료!");
}
