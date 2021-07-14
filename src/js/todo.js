let inputButton = document.querySelector('.input__button');
let inputText = document.querySelector('.input__text');
let tasksWrapper = document.querySelector('.tasks-wrapper');
let task = document.querySelectorAll('.task');
let error = document.querySelector('.error');
let deleteButton = document.querySelector('.task__button-delete');
let title = document.querySelector('.todo-list__title');
// deleteButton = document.querySelectorAll('.task__button-delete');
// const getTaskCount = (selector) => {
//     let count = 0;
//     selector.forEach((item) => {
//         count++;
//     });
//
//     return count;
// }

title.innerText = `${task.length} Task `
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

        // const taskNodes = document.querySelectorAll('.task');
        title.innerText = `${++countTask} Task `;


    }
})

    tasksWrapper.addEventListener('click', (e)=> {

        if(e.target.className === 'button task__button-delete'){
            console.log(e.target.parentNode);
            console.log(e.target);
            e.target.parentNode.remove();
            title.innerText = `${--countTask} Task `;
        }

    })

