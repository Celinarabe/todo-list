import { populateList } from '../helpers/todo.js';



//rendering
function onload(){
  
  let DOMtaskList = document.getElementById('task-list')
  let taskList = populateList();
 
  
  for (let i of taskList){
    console.log(i);
    let newTask = document.createElement('div');
    newTask.classList.add("task");
    newTask.innerHTML = `<div class="round">
    <input type="checkbox" id="${i.id}"/>
    <label for="${i.id}"></label>
  </div>

  <label class="task-label">${i.title}</label>`

  DOMtaskList.appendChild(newTask);
  }

  let newTask = document.createElement('div');
  newTask.classList.add("task", "add-new");
    newTask.innerHTML = `
  <div class="round">
    <input type="checkbox" id="addNew" disabled>
    <label for="addNew"></label>
  </div>
  <label class="task-label">Add New...</label>
</div>`

DOMtaskList.appendChild(newTask);



}





export {
  onload
};