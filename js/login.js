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



  function oauthSignIn() {
    // Google's OAuth 2.0 endpoint for requesting an access token
    var oauth2Endpoint = 'https://accounts.google.com/o/oauth2/v2/auth';
  
    // Create <form> element to submit parameters to OAuth 2.0 endpoint.
    var form = document.createElement('form');
    form.setAttribute('method', 'GET'); // Send as a GET request.
    form.setAttribute('action', oauth2Endpoint);
  
    // Parameters to pass to OAuth 2.0 endpoint.
    var params = {'client_id': '564727709025-cjavt28rtr3niicv75cje2107dgdk4ga.apps.googleusercontent.com',
                  'redirect_uri': 'https://maximilianocuello.github.io/ecommerce/index.html',
                  'response_type': 'token',
                  'scope': 'https://www.googleapis.com/auth/drive.metadata.readonly',
                  'include_granted_scopes': 'true',
                  'state': 'pass-through value'};
  
    // Add form parameters as hidden input values.
    for (var p in params) {
      var input = document.createElement('input');
      input.setAttribute('type', 'hidden');
      input.setAttribute('name', p);
      input.setAttribute('value', params[p]);
      form.appendChild(input);
    }
  
    // Add form to page and submit it to open the OAuth 2.0 endpoint.
    document.body.appendChild(form);
    form.submit();
  }