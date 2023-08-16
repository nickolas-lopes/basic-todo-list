const input = document.querySelector("#input");
const btn = document.querySelector("button");
const tasks = document.querySelector("#tasks");
const arrayTasks = [];
function addTask() {
  arrayTasks.push(input.value);
  input.value = ''
  display();
}
function display() {
    let displayTasks = "";
    arrayTasks.forEach((task) => {
      displayTasks =
        displayTasks +
        `
            <li>
                <p>${task}</p>
            </li>
        `;
    });
    tasks.innerHTML = displayTasks;
}

btn.addEventListener("click", addTask);