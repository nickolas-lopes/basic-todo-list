const input = document.querySelector("#input");
const btn = document.querySelector("button");
const tasks = document.querySelector("#tasks");
let arrayTasks = [];
function addTask() {
  const errorMsg = document.querySelector('#error')
  if(input.value.trim() === '') {
    errorMsg.innerHTML = 'Insira uma tarefa';
    errorMsg.style.color = 'red';
    errorMsg.style.fontSize = '13px';
    return; 
}else{
  errorMsg.style.display = 'none'
  arrayTasks.push(input.value.toUpperCase())
  input.value = ''
  return display()
}
}
function display() {
  let displayTasks = '';
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

