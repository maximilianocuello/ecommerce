const SUBMIT= document.getElementById('submit');
const error = document.getElementById('incorrecto');


SUBMIT.addEventListener('click', () => {
    let inputEmail = document.getElementById('inputEmail').value;
    let inputPassword = document.getElementById('inputPassword').value;
    
    if(inputEmail && inputPassword){
        localStorage.setItem("usuario", inputEmail);
        window.location.href = "index.html";
    }
    else{
        
         error.innerHTML = "Email o contraseña incorrectos";
    }
});

const client = google.accounts.oauth2.initCodeClient({
    client_id: '564727709025-cjavt28rtr3niicv75cje2107dgdk4ga.apps.googleusercontent.com',
    scope: 'https://www.googleapis.com/auth/calendar.readonly',
    ux_mode: 'redirect',
    redirect_uri: "https://your.domain/code_callback_endpoint",
    state: "YOUR_BINDING_VALUE"
  });