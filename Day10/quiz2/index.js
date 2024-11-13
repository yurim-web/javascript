const id = document.getElementById("id");
const button = document.getElementById("button");

button.addEventListener("click", () => {
  button.innerHTML =
    button.innerHTML == `<i class="fa-solid fa-eye"></i>`
      ? `<i class="fa-solid fa-eye-slash"></i>`
      : `<i class="fa-solid fa-eye"></i>`;

  id.type = id.type == "text" ? "password" : "text";
});
