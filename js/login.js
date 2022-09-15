const SUBMIT= document.getElementById('submit');
const error = document.getElementById('incorrecto');


/*SUBMIT.addEventListener('click', () => {
    let inputEmail = document.getElementById('inputEmail').value;
    let inputPassword = document.getElementById('inputPassword').value;
    
    if(inputEmail && inputPassword){
        localStorage.setItem("usuario", inputEmail);
        window.location.href = "index.html";
    }
    else{
        
         error.innerHTML = "Email o contraseña incorrectos";
    }
});*/



function handleCredentialResponse(response) {
  console.log("Encoded JWT ID token: " + response.credential);
}
window.onload = function () {
  google.accounts.id.initialize({
    client_id: "564727709025-cjavt28rtr3niicv75cje2107dgdk4ga.apps.googleusercontent.com",
    callback: handleCredentialResponse
  });
  google.accounts.id.renderButton(
    document.getElementById("buttonDiv"),
    { theme: "outline", size: "large" }  // customization attributes
  );
  google.accounts.id.prompt(); // also display the One Tap dialog
}