let addbtn = document.querySelector('#btn1');
let delallbtn = document.querySelector('#btn2');
let input = document.querySelector('input');
let list = document.querySelector('#list');

function addTask() {
  if (input.value.trim() === "") {
    alert("Enter Task");
  } else {
    const task = document.createElement('li');
    task.innerText = `${input.value}`;
    list.appendChild(task);
    input.value = "";  
  }
}

function clearAllTasks() {
  list.innerHTML = "";
}

addbtn.onclick = addTask;
delallbtn.onclick = clearAllTasks;

