// const inputId = document.getElementById("inputId");
// inputId.addEventListener("input", (e) => {
//   console.log(e.target);
// });

//1.  input 안에 몇글자가 쳐졌는지 콘솔로 나타내기

// const inputId = document.getElementById("inputId");
// inputId.addEventListener("input", (e) => {
//   console.log(e.target.value.length);
// });

//2. input 옆에 span 태그 만들고 현재 인풋에 몇글자인지 알려주ㄱ;!
// const spanId = document.getElementById("spanId");

// const inputId = document.getElementById("inputId");
// inputId.addEventListener("input", (e) => {
//   console.log(e.target.value.length);
//   spanId.innerText = e.target.value.length;
// });

//1. input 태그를 두개 만들고 확인버튼 만들고

// 두 인풋의 벨류가 똑같으면  확인버튼 누르면 통과 알럿 나오고
//  두 인풋의 벨류가 똑같으면  확인버튼 누르면 에러 알럿 나오고

// const button = document.getElementById("button");
// const inputId1 = document.getElementById("inputId1");
// const inputId2 = document.getElementById("inputId2");

// button.addEventListener("click", () => {
//   const result = inputId1.value == inputId2.value ? "통과" : "에러";
//   alert(result);
// });

// input의 벨류가 4~12글자 사이이면
// 오른쪽 버튼 태그가 "확인" 버튼으로 바꾸ㅣ고
// 아니면 버튼 태그가 "안됨" 버튼 바뀌기

// const button = document.getElementById("button");
// const text = document.getElementById("text");
// text.addEventListener("input", (e) => {
//   if (3 < e.target.value.length && e.target.value.length < 13) {
//     button.innerText = "확인";
//   } else {
//     button.innerText = "안됨";
//   }
// });

// input 의 벨류가 20글자가 넘지 못하도록 하기!!

const text = document.getElementById("text");

text.addEventListener("input", (e) => {
  if (e.target.value.length > 5) {
    e.target.value = e.target.value.slice(0, 5);
  }
});
