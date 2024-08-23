const todos = [];
function addTodo() {
  todos.push({
    title: document.querySelector("#task").value,
  });
  console.log(todos);
  render();
}

function render() {
  document.getElementById("todos").innerHTML = "";
  for (let i = 0; i < todos.length; i++) {
    const newTodo = document.createElement("div");
    newTodo.textContent = todos[i].title;
    console.log(newTodo);
    const parentEle = document.getElementById("todos");
    parentEle.appendChild(newTodo);
  }
}
