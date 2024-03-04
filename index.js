const item = document.getElementById("description");
const checkbox = document.getElementById("checkbox");
const text = document.getElementById("description");
const deleteButton = document.getElementById("delete-button");
const taskInput = document.getElementById("new-task");

item.innerHTML = localStorage.getItem("new-task");
item.animate();
text.style.textDecoration = localStorage.getItem("text-decoration");

function stateCheckbox() {
  localStorage.setItem("checkbox", checkbox.checked);
  applyCrossedOutStyle();
}

if (item.innerHTML === "") {
  checkbox.style.visibility = "hidden";
  deleteButton.style.visibility = "hidden";
}

var checked = JSON.parse(localStorage.getItem("checkbox"));
document.getElementById("checkbox").checked = checked;

function applyCrossedOutStyle() {
  if (checkbox.checked) {
    text.style.textDecoration = "line-through";
  } else {
    text.style.textDecoration = "none";
  }
  localStorage.setItem("text-decoration", text.style.textDecoration);
}

function deleteItem() {
  item.innerHTML = "";
  localStorage.clear();
  checkbox.checked = false;
  checkbox.style.visibility = "hidden";
  deleteButton.style.visibility = "hidden";
}

function addItem() {
  if (taskInput.value === "") {
    alert("Pole taska nie może być puste!");
    return;
  } else {
    const newTask = document.getElementById("new-task").value;
    localStorage.setItem("new-task", newTask);
    item.innerHTML = localStorage.getItem("new-task");
    checkbox.checked = false;
    text.style.textDecoration = "none";
    checkbox.style.visibility = "visible";
    deleteButton.style.visibility = "visible";
    taskInput.value = "";

    // localStorage.setItem("checkbox", checkbox.checked);
  }
}
