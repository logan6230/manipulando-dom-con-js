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
    const content = `<div>
                    <i class="far fa-check-square icon"></i>
                    <span class="task">${value}</span>
                    </div>
                    <i class="fas fa-trash-alt trashIcon icon"></i>`
    task.innerHTML = content;
    list.appendChild(task)
    console.log(content);
}

btn_agregar.addEventListener("click", createTask);
