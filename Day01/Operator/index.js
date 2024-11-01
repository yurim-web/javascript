// Operator(연산자[=기호])

// 산술연산자

const a = 1 + 1; // 덧셈연산자
const a1 = 1 - 1;
const a2 = 1 * 2;
const a3 = 2 ** 3; // 제곱
const a4 = 2 / 4; // 나누기
const a5 = 5 % 4; // 나머지

const a6 = "마라" + "탕"; // 연결 연산자
const a7 = 100 + "탕"; // 연결 연산자

// 대입 연산자

const b = "아메리카노"; // =(대입연산자)

// 비교 연산자

const c = 5 > 0; // true
const c1 = 5 >= 0; // true
const c2 = 5 < 0; //false
const c3 = 5 <= 0; // false
const c4 = 5 == 5; // same[같다]  true
const c5 = 5 != 5; // diff[다르다] false

// 논리 연산자 (and, or , not)
// &&(and) :  모두 true 이여야만 true
// ||(or) : 하나라도 true 이면 true
// !(not) : 반대

const d = 5 > 0 && 3 > 0; //true
const d1 = 5 < 0 || 3 < 0 || 1 == 1; // true
const d2 = !false; // true
const d3 = !!1; // true
const d4 = !!0; // false

// 삼항 연산자
// 조건 ? 참 : 거짓

const e = 5 > 3 ? "순대" : "튀김";
const e1 = true ? "민트" : "초코";
const e2 = !!0 ? "오" : "아";
