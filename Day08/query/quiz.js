// 화면에
// - 버튼이 있고 -> -1
// 숫자 0이 있고
// + 버튼이 있고-> +1
const number = document. 

const minus = document.getElementById("minus");
minus.addEventListener("click", () => {
  if (Number(number.innerText) <= 10) {
    number.style.color = "black";
  } else {
    number.style.color = "red";
  }

  if (Number(number.innerText) > 0) {
    number.innerText = Number(number.innerText) - 1;
  }
});

const plus = document.getElementById("plus");
plus.addEventListener("click", () => {
  number.innerText = Number(number.innerText) + 1;

  if (Number(number.innerText) < 10) {
    number.style.color = "black";
  } else {
    number.style.color = "red";
  }
});

// 0 이하로 안떨어지도록 수정

// 10 이상이 되면 빨간색으로 숫자 바뀌기
