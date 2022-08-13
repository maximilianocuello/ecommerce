
const SUBMIT= document.getElementById('submit');
const error = document.getElementById('incorrecto');


SUBMIT.addEventListener('click', () => {
    const inputEmail = document.getElementById('inputEmail').value;
    const inputPassword = document.getElementById('inputPassword').value;
    if(inputEmail && inputPassword){
        window.location.href = "index.html";
    }
    else{
         error.innerHTML = "Email o contraseña incorrectos";
    }
});