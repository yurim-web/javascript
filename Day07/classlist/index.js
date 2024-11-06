// const button = document.createElement("button");
// button.innerText = "오렌지";
// // button.className = "bold orange button"
// button.classList.add("bold");
// button.classList.add("orange");
// button.classList.add("button");
// button.classList.toggle();

// document.body.appendChild(button);

//유저에게 버튼 내용을 물어보고
const button = document.createElement("button");
const text = (button.innerText = prompt("버튼에 넣을 내용을 적으세요"));
//색상 [orange, green, pink] 글씨두께 [light. bold, bolder]를

const color = prompt("색상 [orange, green, pink] 입력");
const weight = prompt("색글씨두께 [light. bold, bolder]를 입력하세요");

// [prompt("색상입력"),prompt("두께입력"),"button"].forEach((v)=> button.button.classList.add(v);)

button.classList.add(color);
button.classList.add(weight);
button.classList.add("button");

document.body.appendChild(button);

//둘다 입력 받고 화면에 출력하기 ! (단 css 관련된것은 css 파일로!)
