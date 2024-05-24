const input = document.querySelector("#favchap");
const button = document.querySelector("button");
const list = document.querySelector("#list");

function removeTask(taskElement) {
  taskElement.remove();
  input.focus();
}

// function addTask() {
//     if (input.value === "") {
//       alert("Please enter a chapter");
//       input.focus();
//       return;
//     }
//     const li = document.createElement("li");
//     const deleteButton = document.createElement("button");
//     li.textContent = input.value;
//     deleteButton.textContent = "❌";
//     deleteButton.addEventListener("click", () => {
//       removeTask(li);
//     });
//     li.append(deleteButton);
//     list.append(li);
//     input.value = "";
//     input.focus();
// }

const displayList = (item) => {
  const li = document.createElement("li");
  const deleteButton = document.createElement("button");
  li.textContent = item;
  deleteButton.textContent = "❌";
  deleteButton.addEventListener("click", () => {
    list.removeChild(li);
    deleteChapter(li.textContent);
  });
  li.append(deleteButton);
  list.append(li);
  input.value = "";
  input.focus();
}

const getChapterList = () => JSON.parse(localStorage.getItem("myFavBOMList"));

const deleteChapter = (chapter) => {
  chapter = chapter.slice(0, chapter.length - 1);
  chaptersArray = chaptersArray.filter((item) => item != chapter);
  setChapterList();
}

const setChapterList = () => {
  localStorage.setItem("myFavBOMList", JSON.stringify(chaptersArray));
}

button.addEventListener("click", () => {
  if (input.value != "") {
    chaptersArray.push(input.value);
    setChapterList();
    displayList(input.value);
    input.value = "";
    input.focus();
  }
});
input.addEventListener("keyup", (event) => {
  if (event.key === "Enter") {
    if (input.value != "") {
      chaptersArray.push(input.value);
      setChapterList();
      displayList(input.value);
      input.value = "";
      input.focus();
    }
  }
});


let chaptersArray = getChapterList() || [];

chaptersArray.forEach((chapter) => displayList(chapter));