// const lunch = {
//   name: "햄버거",
//   price: 5000,
//   kcal: 600,
//   restaurant: {
//     1: "버거킹",
//     2: "맥도날드",
//     3: "롯데리아",
//   },
// };
// console.log(lunch);

// const name = prompt("후식 이름 ?");
// const price = Number(prompt("가격 ?"));
// const kcal = Number(prompt("칼로리 ?"));

// dessert.name = name;
// dessert.price = price;
// dessert.kcal = kcal;

// const dessert = {
//   name: name,
//   price: price,
//   kcal: kcal,
// };

// console.log(dessert);

const animal = {
  0: "원숭이",
  1: "닭",
  2: "개",
  3: "돼지",
  4: "쥐",
  5: "소",
  6: "호랑이",
  7: "토끼",
  8: "용",
  9: "뱀",
  10: "말",
  11: "양",
};

const year = prompt("태어난 년도를 입력하세요:");
alert(`${animal[year % 12]}띠 이시네요!`);
