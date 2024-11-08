const price = document.getElementById("price");

const loction = document.getElementById("loction");
loction.addEventListener("click", () => {
  price.innerText = Number(price.innerText) + 15000;
});

const skin = document.getElementById("skin");
skin.addEventListener("click", () => {
  price.innerText = Number(price.innerText) + 20000;
});

const lip = document.getElementById("lip");
lip.addEventListener("click", () => {
  price.innerText = Number(price.innerText) + 5000;
});
