const chosebuger = document.getElementById("chosebuger");
const chosedrink = document.getElementById("chosedrink");

const bugermenu1 = document.getElementById("bugermenu1");
bugermenu1.addEventListener("click", () => {
  const span = document.createElement("span");
  span.innerText = "새우";
  const uu = chosebuger.appendChild(span);
});

const bugermenu2 = document.getElementById("bugermenu2");
bugermenu2.addEventListener("click", () => {
  const span = document.createElement("span");
  span.innerText = "불고기";
  chosebuger.appendChild(span);
});

const bugermenu3 = document.getElementById("bugermenu3");
bugermenu3.addEventListener("click", () => {
  const span = document.createElement("span");
  span.innerText = "치킨";
  chosebuger.appendChild(span);
});

const bugermenu4 = document.getElementById("bugermenu4");
bugermenu4.addEventListener("click", () => {
  const span = document.createElement("span");
  span.innerText = "치즈";
  chosebuger.appendChild(span);
});

const bugermenu5 = document.getElementById("bugermenu5");
bugermenu5.addEventListener("click", () => {
  const span = document.createElement("span");
  span.innerText = "떡불";
  chosebuger.appendChild(span);
});

const choseside = document.getElementById("choseside");
const sidemenu1 = document.getElementById("sidemenu1");
sidemenu1.addEventListener("click", () => {
  const span = document.createElement("span");
  span.innerText = "감자튀김";
  choseside.appendChild(span);
});

const sidemenu2 = document.getElementById("sidemenu2");
sidemenu2.addEventListener("click", () => {
  const span = document.createElement("span");
  span.innerText = "치즈스틱";
  choseside.appendChild(span);
});

const sidemenu3 = document.getElementById("sidemenu3");
sidemenu3.addEventListener("click", () => {
  const span = document.createElement("span");
  span.innerText = "코우슬로";
  choseside.appendChild(span);
});

const sidemenu4 = document.getElementById("sidemenu4");
sidemenu4.addEventListener("click", () => {
  const span = document.createElement("span");
  span.innerText = "콘샐러드";
  choseside.appendChild(span);
});

const drinkmenu1 = document.getElementById("drinkmenu1");
drinkmenu1.addEventListener("click", () => {
  const span = document.createElement("span");
  span.innerText = "콜라";
  chosedrink.appendChild(span);
});

const drinkmenu2 = document.getElementById("drinkmenu2");
drinkmenu2.addEventListener("click", () => {
  const span = document.createElement("span");
  span.innerText = "제로콜라";
  chosedrink.appendChild(span);
});

const drinkmenu3 = document.getElementById("drinkmenu3");
drinkmenu3.addEventListener("click", () => {
  const span = document.createElement("span");
  span.innerText = "스프라이트";
  chosedrink.appendChild(span);
});

const drinkmenu4 = document.getElementById("drinkmenu4");
drinkmenu4.addEventListener("click", () => {
  const span = document.createElement("span");
  span.innerText = "오렌지주스";
  chosedrink.appendChild(span);
});

const purchase = document.getElementById("purchase");
purchase.addEventListener("click", () => {
  alert(`${drinkmenu4}`);
});
