// function (함수) : 레시피

// function ramen(x) {
//   console.log("물 끓이기");
//   console.log("면넣기");

//   console.log("스프 넣기");
//   console.log(`${x} 넣기`);
//   console.log("3분 기다리기");
//   console.log("라면 완성 두둥!!");
// }

// ramen("계란");

const ingredient = prompt("김밥에 어떤 재료 넣을까요?");
const ingredient1 = prompt("김밥에 어떤 재료 넣을까요?");

function gimbap(x, y) {
  console.log("김을 편다");
  console.log("밥을 편다");
  console.log("밥 위에 기본 재료를 넣는다");
  console.log(`추가로 ${y}를 넣는다`);
  console.log("모두 다 뭉친다");
  console.log(`${x}김밥 완성 두둥!!`);
}

gimbap(ingredient, ingredient1);
