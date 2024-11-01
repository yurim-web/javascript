// 기본타입 : String , Number, Boolean, Null(없음), Undefined(초기화 안함)
// 참조타입 : Object, Array

// Array (=리스트)
// 1.

const num = new Array(1, 3, 5, 7, 9);
console.log(num[2]); // 5

//2.
const num1 = [1, 3, 5, 7, 9];

num1.push(11); // 맨 뒤에 추가해줘
num1.pop(); // 맨 뒤꺼 빼줘
num1.unshift(0); // 맨 앞에 추가해줘
num1.shift(); // 맨 앞에꺼 빼줘

console.log(num1[4]); //9 출력

// mini quiz

const fruit = ["peach", "strowberry", "grape", "pineapple"];
console.log(fruit[2]);
