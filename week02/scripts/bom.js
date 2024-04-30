const input = document.querySelector("#favchap");
const button = document.querySelector("button");
const list = document.querySelector("#list");

function removeTask(taskElement) {
  taskElement.remove();
  input.focus();
}

function addTask() {
    if (input.value === "") {
      alert("Please enter a chapter");
      input.focus();
      return;
    }
    const li = document.createElement("li");
    const deleteButton = document.createElement("button");
    li.textContent = input.value;
    deleteButton.textContent = "❌";
    deleteButton.addEventListener("click", () => {
      removeTask(li);
    });
    li.append(deleteButton);
    list.append(li);
    input.value = "";
    input.focus();
}

button.addEventListener("click", addTask);
input.addEventListener("keyup", (event) => {
  if (event.key === "Enter") {
    addTask();
  }
});
