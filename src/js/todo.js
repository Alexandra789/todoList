let inputButton = document.querySelector('.input__button');
let inputText = document.querySelector('.input__text').value;
let error = document.querySelector('.error');
let deleteButton = document.querySelector('.task__button-delete');

inputButton.addEventListener('click', ()=>{
    if(inputText === ''){
        error.innerText = 'Enter your task';
    }
    else{
        console.log('dd');
        let task = document.createElement('div');
        task.classList.add("task");
        task.innerHTML =
            "<label class=\"task__title\"><input type=\"checkbox\">{inputText}</label>\n" +
            "<button class=\"button task__button-delete\">Delete</button>";
    }
})
