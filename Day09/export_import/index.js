// import { minus, plus } from "./calc.js";
// import { hello } from "./greeting.js";

import { hello, sugo } from "./greeting.js";

// console.log(plus(2, 3));
// console.log(minus(10, 1));

//greeting.js
// 클릭을 하면 안녕하세요! 라는 함수
// 클릭을 하면 수고하세요!  라는 함수

//html 안녕 버튼과 수고 버튼을 만들고
//index.js 에서 위 두 함수를 이벤트 처리하고
//실행되도록 하세요

// const hello = () => alert("안녕하세요!");
// const sugo = () => alert("수고하세요!");

const a = document.getElementById("a");
const b = document.getElementById("b");

a.addEventListener("click", hello);
b.addEventListener("click", sugo);
