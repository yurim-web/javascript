const minus = () => {
  const counter = document.querySelector(".counter");
  counter.innerHTML = Number(counter.innerHTML) - 1;
  const valuecount = document.querySelector(".valuecount");
  valuecount.innerHTML = Number(valuecount.innerHTML) - 1700000;
};

const plus = () => {
  const counter = document.querySelector(".counter");
  counter.innerHTML = Number(counter.innerHTML) + 1;
  const valuecount = document.querySelector(".valuecount");
  valuecount.innerHTML = Number(valuecount.innerHTML) + 1700000;
};

const minus1 = () => {
  const counter = document.querySelector(".counter1");
  counter.innerHTML = Number(counter.innerHTML) - 1;
  const valuecount = document.querySelector(".valuecount");
  valuecount.innerHTML = Number(valuecount.innerHTML) - 745930;
};

const plus1 = () => {
  const counter = document.querySelector(".counter1");
  counter.innerHTML = Number(counter.innerHTML) + 1;
  const valuecount = document.querySelector(".valuecount");
  valuecount.innerHTML = Number(valuecount.innerHTML) + 745930;
};
