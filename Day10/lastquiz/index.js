const idbox = document.getElementById("idbox");
const button1_length = document.getElementById("button1_length");
const passwordbox = document.getElementById("passwordbox");

idbox.addEventListener("input", (e) => {
  if (e.target.value.length > 5 && e.target.value.length < 21) {
    button1_length.style.color = "#04ca5b";
  } else {
    button1_length.style.color = "black";
  }
});

const messsage = document.getElementById("messsage");
const passwordnum = document.getElementById("passwordnum");
passwordbox.addEventListener("input", (e) => {
  if (["!", "@"].some((V) => e.target.value.includes(V))) {
    messsage.style.color = "#04ca5b";
  } else if (e.target.value.length > 7 && e.target.value.length < 21) {
    passwordnum.style.color = "#04ca5b";
  } else {
    messsage.style.color = "black";
    passwordnum.style.color = "black";
  }
});

// 눈버튼
const button = document.getElementById("button");
button.addEventListener("click", () => {
  button.innerHTML =
    button.innerHTML == `<i class="fa-solid fa-eye"></i>`
      ? `<i class="fa-solid fa-eye-slash"></i>`
      : `<i class="fa-solid fa-eye"></i>`;

  passwordbox.type = passwordbox.type == "text" ? "password" : "text";
});
