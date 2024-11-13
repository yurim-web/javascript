// 랜덤(1~45) 숫자 뽑기 버튼을 누르면
// 아래에 아무숫자나 나오는 프로그램 만들기

// const button = document.getElementById("button");
// const num = document.getElementById("num");

// button.addEventListener("click", () => {
//   const result = Math.floor(Math.random() * (45 - 1 + 1)) + 1;
//   num.innerText = result;
// });

//🍕🍔🍟🌭🍿🧂🥓🥚

const button2 = document.getElementById("button2");
const icon = document.getElementById("icon");

button2.addEventListener("click", (e) => {
  const list = ["🍕", "🍔", "🍟", "🌭", "🍿", "🧂", "🥓", "🥚"];

  icon.innerText = list[Math.floor(Math.random() * (list.length - 1))];
});

// 제비뽑기 프로그램

//div 사람이름 리스트
//input 사람이름 넣기
// button 추가하기 버튼

// button 제비뽑기 버튼

const peoplelist = [];
const people = document.getElementById("people");
const input = document.getElementById("input");

const add = document.getElementById("add");
const pick = document.getElementById("pick");

add.addEventListener("click", (e) => {
  peoplelist.push(input.value);
  people.innerHTML = peoplelist.map((v) => `<span>${v}</span>`).join("");
});

pick.addEventListener("click", (e) => {
  alert(peoplelist[Math.floor(Math.random() * (peoplelist.length - 1))]);
});
