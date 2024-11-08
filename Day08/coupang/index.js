const nubmer = document.getElementById("number");
const price = document.getElementById("price");

const minus = document.getElementById("minus");
minus.addEventListener("click", () => {
  if (Number(nubmer.innerText) > 0) {
    nubmer.innerText = Number(nubmer.innerText) - 1;
    price.innerText = Number(price.innerText) - 13160;
  }
});

const plus = document.getElementById("plus");
plus.addEventListener("click", () => {
  nubmer.innerText = Number(nubmer.innerText) + 1;
  price.innerText = Number(price.innerText) + 13160;
});
