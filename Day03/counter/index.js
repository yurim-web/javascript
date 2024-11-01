const minus = () => {
  const counter = document.querySelector(".counter");
  counter.innerHTML = Number(counter.innerHTML) - 1;
};

const plus = () => {
  const counter = document.querySelector(".counter");
  counter.innerHTML = Number(counter.innerHTML) + 1;
};

//   plusbtn.addEventListener("click", () => {
//     count.innerHTML = Number(count.innerHTML) + 1;
//   });

//   minusbtn.addEventListener("click", () => {
//     count.innerHTML = Number(count.innerHTML) - 1;
//   });

//   const bigBox = () => {
//     const box = document.querySelector(".box");
//     box.style.width = "200px";
//     box.style.height = "200px";
//   };
