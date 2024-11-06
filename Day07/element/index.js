// 기본타입 : string, number, boolean, null, undefined
// 참조타입 :
//  1. array([]), object({})
//  2. element (tag)

const coffee = {
  name: "아메리카노",
  ingredients: [],
};

const div = document.createElement("div");

//1. 태그의 컨텐츠 만들기!
div.innerText = "<button>라면</button>";
div.innerHTML = "<button>라면</button>";

//2. 태그의 스타일 바꾸기!

div.style.backgroundColor = "red";
div.style.setProperty("color", "pink");
div.style.setProperty("border", "1px solid green");
div.style.cssText = "margin : 10px; padding : 20px;. border-radius:20px";

//3. 태그의 자식 추가
// div.appendChild();
// div.removeChild();

document.body.appendChild(div);
