// const button = document.createElement("button");
// button.innerHTML = "요거트";

// const hello = () => {
//   console.log("요거트 안녕!");
// };

// button.addEventListener("click", hello);

// document.body.appendChild(button);

//⚡ 🧊 🔥

const skillList = ["⚡", "🧊", "🔥"];

const makeButton = (skill) => {
  const button = document.createElement("button");
  button.innerHTML = skill;
  button.addEventListener("click", () => {
    alert(`${skill}발동!`);
  });
  return button;
};

skillList.forEach((v) => document.body.appendChild(makeButton(v)));
