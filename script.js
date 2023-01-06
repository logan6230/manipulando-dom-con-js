import checkComplete from "./componentes/checkComplete.js";
import deleteIcon from "./componentes/deleteIcon.js";

    const btn_agregar = document.querySelector("[data-form-btn]")



    //Creamos un listener
    // btn_agregar.addEventListener("click", function(evento){
    //     evento.preventDefault();
    //     const input_formulario = document.querySelector("[data-form-input]")
    //     console.log(input_formulario.value);
    // })

    //Codigo anterior en funcion anonima o arrow function
    const createTask = (evento) => {
        evento.preventDefault();
        const input_formulario = document.querySelector("[data-form-input]")
        const value = input_formulario.value
        const list = document.querySelector("[data-list]")
        const task = document.createElement("li")
        task.classList.add("card")
        input_formulario.value = '';
        const taskContent = document.createElement("div");

        const titleTask = document.createElement("span");
        titleTask.classList.add("task");
        titleTask.innerText = value;
        taskContent.appendChild(checkComplete());
        taskContent.appendChild(titleTask);

        // task.innerHTML = content;
        task.appendChild(taskContent)
        task.appendChild(deleteIcon())
        list.appendChild(task)
    }

    btn_agregar.addEventListener("click", createTask);