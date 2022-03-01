//VARIABLES
const formulario = document.getElementById('formulario');
const inputUser = document.getElementById('user');
const inputPassword = document.getElementById('password');
const btnIniciarSesion = document.getElementById('ingresar');

//EVENTOS
eventos();
function eventos(){

    //ValidarFormulario
    inputUser.addEventListener('blur', validarCampos);
    inputPassword.addEventListener('blur', validarCampos);

}


//FUNCIONES

//Funcion para validar los campos
function validarCampos(e){

    if(e.target.value.length > 0){//Hay algo en el input

        const error = document.querySelector('p.error');

        if(error){
            error.remove();
        }

        e.target.classList.add('border', 'border-4', 'border-success');
        e.target.classList.remove('border-danger');

    }else{ //Si esta vacio

        e.target.classList.add('border', 'border-4', 'border-danger');
        e.target.classList.remove('border-success');

        mostrarMensajeError('Todos los campos son obligatorios');

    } 


    //Validamos todos los campos para habilitar el ingreso
    if(inputUser.value !== '' && inputPassword.value !== ''){

        btnIniciarSesion.disabled = false;

    }else{

        btnIniciarSesion.disabled = true;
        mostrarMensajeError('Todos los campos son obligatorios');

    }

}

//Mostrar mensaje de error
function mostrarMensajeError(mensaje){

    const mensajeError = document.createElement('p');
    mensajeError.textContent = mensaje;
    mensajeError.classList.add('border', 'border-4', 'border-danger', 'mt-5', 'p-3', 'text-uppercase', 'bg-danger', 'error');

    const errores = document.querySelectorAll('.error');

    if(errores.length === 0){
        formulario.appendChild(mensajeError);
    }

}