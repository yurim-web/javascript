const date = new Date();
const a = document.getElementById("a");
const b = document.getElementById("b");

const c = document.getElementById("c");

const d = document.getElementById("d");

const e = document.getElementById("e");
const hour = document.getElementById("hour");

a.addEventListener("click", () => {
  const hour = date.getHour();
  hour.innerText = hour;
});
