// js로 HTML 다루기 수업
//1. 태그 생성!

const box = document.querySelector(".box");

const menu = ["아메리카노", "라떼", "모카"];
const order = "주문";
box.innerHTML = `<div class ="card">
<ul>${menu.map((V) => `<li>${v}</li>`).join(" ")}</ul>

<button>${order}</button></div>`;
