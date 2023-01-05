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
    console.log(input_formulario.value);
}
btn_agregar.addEventListener("click", createTask);
