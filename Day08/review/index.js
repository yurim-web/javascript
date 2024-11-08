// 1. 🦐2 🍗2 🍳1 🧀1  🥩3 버튼들이 화면에 있음
// 2. 총가격 : 0$ 가격표시가 화면에 있음
//3. 구매하기 버튼도 화면에 있음!
// 위에 재료들을 클릭하면ㅇ 총 가격이 올라가고 구매하기 버튼을 누르면!
// 총 금액은 ~~ 이고, 구매하신 타코재료는 클릭한 재료들이 알럿으로 나오기!

// const button = document.createElement("button");
// button.innerHTML = text;
// document.appendChild(button);
const price = document.createElement("div");
price.style.cssText = "font-size :20px; color : black;";
price.innerHTML = "0";
document.body.appendChild(price);

const buyBtn = document.createElement("button");
buyBtn.innerHTML = "구매하기";

buyBtn.addEventListener("click", () => {
  alert(`총금액 :${price.innerText} 메뉴:${buymenu}`);
});
document.body.appendChild(buyBtn);

const buttonlist = [
  {
    text: "🦐",
    price: 2,
    icon: "🦐",
  },
  {
    text: "🍗",
    price: 2,
    icon: "🍗",
  },
  {
    text: "🍳",
    price: 1,
    icon: "🍳",
  },
  {
    text: "🧀",
    price: 1,
    icon: "🧀",
  },
  {
    text: "🥩",
    price: 3,
    icon: "🥩",
  },
];
const buymenu = [];

buttonlist.forEach((v) => {
  const btn = document.createElement("button");
  btn.innerText = v.text;
  btn.addEventListener("click", () => {
    price.innerText = Number(price.innerText) + v.price;
    buymenu.push(v.icon);
  });
  document.body.appendChild(btn);
});
