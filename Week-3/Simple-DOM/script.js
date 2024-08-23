let count = 1;

function deleteTodo(i) {
  let child = document.getElementById("todo-" + i);
  console.log(child);
  child.parentElement.removeChild(child);
  count--;
}

function addTodo() {
  const inputEl = document.getElementById("task");
  let todoText = inputEl.value.trim();

  if (todoText === "") {
    alert("please enter the valid task input..!");
    return;
  }

  //get the parent element
  const parentEle = document.getElementById("todos");

  //create a new todo and add todo - id
  const newTodo = document.createElement("div");
  newTodo.setAttribute("id", "todo-" + count);

  //create a new h4 and add text
  const newHeading = document.createElement("h4");
  newHeading.textContent = count + "." + todoText;

  //create delete buttuon and add id's
  const newButton = document.createElement("button");
  newButton.textContent = "Delete";
  newButton.setAttribute("onclick", "deleteTodo(" + count + ")");

  //append h4 and delete
  newTodo.appendChild(newHeading);
  newTodo.appendChild(newButton);

  parentEle.appendChild(newTodo);

  count++;
  //clear input
  document.getElementById("task").value = "";
}
