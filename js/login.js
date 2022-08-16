
const SUBMIT= document.getElementById('submit');
const error = document.getElementById('incorrecto');


SUBMIT.addEventListener('click', () => {
    let inputEmail = document.getElementById('inputEmail').value;
    let inputPassword = document.getElementById('inputPassword').value;
    
    if(inputEmail && inputPassword){
        window.location.href = "index.html";
    }
    else{
        
         error.innerHTML = "Email o contraseña incorrectos";
    }
});