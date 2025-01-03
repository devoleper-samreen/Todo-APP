const input = document.getElementById("input");
const addBtn = document.getElementById("btn");
const list_item = document.getElementById("list_item");

// Load tasks from LocalStorage
function loadTasks() {
  const tasks = JSON.parse(localStorage.getItem('todos')) || [];
  tasks.forEach((task) => renderTask(task));
}

//save task into localstorage
function saveTasks() {
  const tasks = [];
  const lis = list_item.querySelectorAll('li');

  lis.forEach((li) => {
    tasks.push(li.firstChild.textContent);
  });

  localStorage.setItem('todos', JSON.stringify(tasks));
}

//render task
function renderTask(task) {
  let li = document.createElement("li");
  li.innerText = task;

  let btn = document.createElement("button");
  btn.innerText = "Delete";
  btn.classList.add('Dbtn');
  li.appendChild(btn);

  let upbtn = document.createElement("button");
  upbtn.innerText = "Update";
  upbtn.classList.add('upbtn');
  li.appendChild(upbtn);

  list_item.appendChild(li);

  btn.addEventListener("click", () => {
    li.remove();
    saveTasks();
  })

}

//add task
function add_item() {

  const task = input.value.trim();
  if (task === '') {
    alert('Please enter a task!');
    return;
  }

  renderTask(task);
  saveTasks();

  input.value = "";

}

loadTasks();

addBtn.addEventListener("click", add_item);

