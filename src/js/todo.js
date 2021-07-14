let inputButton = document.querySelector('.input__button');
let inputText = document.querySelector('.input__text');
let tasksWrapper = document.querySelector('.tasks-wrapper');
let task = document.querySelectorAll('.task');
let error = document.querySelector('.error');
let deleteButton = document.querySelectorAll('.task__button-delete');
let title = document.querySelector('.todo-list__title');

title.innerText +=' '+task.length;
let countTask = task.length;
inputButton.addEventListener('click', ()=>{

    if(inputText.value === ''){
        error.innerText = 'Enter your task';
    }
    else{
        error.innerText = '';
        let newTask = document.createElement('div');
        newTask.classList.add("task");
        newTask.innerHTML =
            `<label class=\"task__title\"><input type=\"checkbox\">${inputText.value}</label>\n` +
            `<button class=\"button task__button-delete\">Delete</button>`;
        tasksWrapper.appendChild(newTask);
        inputText.innerText += '';
        title.innerText = `Task ${++countTask}`;
        deleteButton = document.querySelectorAll('.task__button-delete');
    }
})

for (let i = 0; i < deleteButton.length; i++) {
    deleteButton[i].addEventListener('click', ()=> {
        deleteButton = document.querySelectorAll('.task__button-delete');
        deleteButton[i].parentNode.remove();
        title.innerText = `Task ${--countTask}`;
    })
}

