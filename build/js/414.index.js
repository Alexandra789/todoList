(self.webpackChunktodolist=self.webpackChunktodolist||[]).push([[414],{414:()=>{let e=document.querySelector(".input__button"),t=document.querySelector(".input__text"),n=document.querySelector(".tasks-wrapper"),l=document.querySelectorAll(".task"),o=document.querySelector(".error"),r=document.querySelectorAll(".task__button-delete"),u=document.querySelector(".todo-list__title");u.innerText+=" "+l.length;let c=l.length;e.addEventListener("click",(()=>{if(""===t.value)o.innerText="Enter your task";else{o.innerText="";let e=document.createElement("div");e.classList.add("task"),e.innerHTML=`<label class="task__title"><input type="checkbox">${t.value}</label>\n<button class="button task__button-delete">Delete</button>`,n.appendChild(e),t.innerText+="",u.innerText="Task "+ ++c,r=document.querySelectorAll(".task__button-delete")}}));for(let e=0;e<r.length;e++)r[e].addEventListener("click",(()=>{r[e].parentNode.remove(),u.innerText="Task "+--c}))}}]);
//# sourceMappingURL=414.index.js.map