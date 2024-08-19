const input = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");

function AddTask() {
  if (input.value == "") {
    alert("You must write something");
    input.style.borderColor = "red";
    input.style.background = "#e08d8d";
  } else {
    input.style.borderColor = "black";
    input.style.background = "transparent";
    let li = document.createElement("li");
    li.innerHTML = `<input type="checkbox" onclick="toggleCheck(this)"> ${input.value} <button class="clear-btn" onclick="deleteTask(this)">x</button>`;
    listContainer.appendChild(li);
    input.value = "";
  }
  saveData();
}

function toggleCheck(checkbox) {
  const li = checkbox.parentElement;
  if (checkbox.checked) {
    li.style.textDecoration = "line-through";
  } else {
    li.style.textDecoration = "none";
  }
  saveData();
}

function deleteTask(button) {
  const li = button.parentElement;
  listContainer.removeChild(li);
  saveData();
}

function saveData() {
  localStorage.setItem("data", listContainer.innerHTML);
}

function showTask() {
  listContainer.innerHTML = localStorage.getItem("data");
  // Re-add event listeners for dynamically added checkboxes
  const checkboxes = document.querySelectorAll('input[type="checkbox"]');
  checkboxes.forEach((checkbox) =>
    checkbox.addEventListener("click", function () {
      toggleCheck(this);
    })
  );
}

showTask();
