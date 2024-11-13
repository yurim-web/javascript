const todolist = [];

const input = document.getElementById("input");
const button = document.getElementById("button");
const todo = document.getElementById("todo");

button.addEventListener("click", (e) => {
  todolist.push(input.value);
  todo.innerHTML = todolist
    .map(
      (v) => `<li>
${v}
</li>`
    )
    .join("");
  input.value = "";
});
