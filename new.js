/* 
* Title = To Do aplication using dom
* Description = this file ha all the js file necessary
* author =  imran (2/18/2023)
* date = 

*/

let newTask = document.querySelector('#new-task');

let form = document.querySelector('form');

let todoUl = document.querySelector('#items');

let completeUl = document.querySelector('.complete-list ul');

// functions

let createTask = function(task){
  let listItem = document.createElement('li');

  let checkBox = document.createElement('input');
  let label =  document.createElement('label');
 let update = document.createElement('button')
  label.innerText = task;
  checkBox.type = 'checkbox';
 update.innerText ='update';
 update.className = 'update';
  listItem.appendChild(checkBox);
  listItem.appendChild(label);
  listItem.appendChild(update);
  
  return listItem; 
}

let addTask = function(event){
  event.preventDefault();

  let listItem = createTask(newTask.value);

  todoUl.appendChild(listItem);
  newTask.value = "";
  // bind the new list item to the incomplete list
  bindIncompleteItems(listItem, completeTask);
}


let completeTask = function(){
  let listItem = this.parentNode;
  let deleteBtn = document.createElement('button');
  deleteBtn.innerText ='Delete';
  deleteBtn.className = 'delete';
  listItem.appendChild(deleteBtn);


let checkBox =listItem.querySelector('input[type="checkbox"] ');
checkBox.remove();
 completeUl.appendChild(listItem);
 bindcompleteItems(listItem, deleteTask);


let update =listItem.querySelector('.update ');
update.remove();
 completeUl.appendChild(listItem);
 bindcompleteItems(listItem, deleteTask);

}

let deleteTask = function(){
  let listItem =this.parentNode;
  let ul = listItem.parentNode;
  ul.removeChild(listItem);
}

let bindIncompleteItems = function(taskItem, checkBoxClick){
  let checkBox =taskItem.querySelector('input[type="checkbox"]');
  checkBox.onchange = checkBoxClick;

}
let bindcompleteItems = function(taskItem, deleteButtonClick){
  let deleteButton =taskItem.querySelector('.delete');
  deleteButton.onclick = deleteButtonClick;

}
for(let i = 0 ; i<todoUl.children.length ; i++){
  bindIncompleteItems(todoUl.children[i], completeTask);
}
for(let i = 0 ; i<completeUl.children.length ; i++){
  bindcompleteItems(completeUl.children[i], deleteTask);
}

form.addEventListener('submit', addTask);