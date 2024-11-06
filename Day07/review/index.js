const makeButton = (title) => {
  const btn = document.createElement("button");
  btn.innerHTML = title;
  btn.style.backgroundColor = "blue";
  btn.style.border = "none";
  btn.style.width = "200px";
  btn.style.height = "50px";
  btn.style.color = "white";
  btn.style.borderRadius = "10px";
  return btn;
};

const container = document.createElement("div");
container.style.display = "flex";
container.style.flexDirection = "column";
container.style.gap = "10px";
container.style.width = "fit-content";

const list = ["dashboard", "dashboard", "dashboard", "dashboard", "dashboard"];
list.forEach((v) => container.appendChild(makeButton(v)));

document.body.appendChild(container);
