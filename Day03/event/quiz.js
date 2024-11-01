// + 버튼, 0 span, -버튼 만들고
// count 프로그램 만들기

// event : 상호작용 하는거
// 클릭, 글쓰기, 스크롤, 데이터가져오기,...

//버튼 생성하기

const plusbtn = document.createElement("button");
plusbtn.innerHTML = "+";

const count = document.createElement("span");
count.innerHTML = 0;

const minusbtn = document.createElement("button");
minusbtn.innerHTML = "-";

// 버튼에 이벤트 넣기 (클릭, 헬로우)
//addEventListener(이벤트, 이벤트가 발생했을 때 일어나는 함수);

plusbtn.addEventListener("click", () => {
  count.innerHTML = Number(count.innerHTML) + 1;
});

minusbtn.addEventListener("click", () => {
  count.innerHTML = Number(count.innerHTML) - 1;
});

document.body.appendChild(plusbtn);
document.body.appendChild(count);
document.body.appendChild(minusbtn);
