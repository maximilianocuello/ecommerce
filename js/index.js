let usuario = document.getElementById('usuario');
if(localStorage.getItem('usuario')){
document.addEventListener("DOMContentLoaded", function (){
    
    
    document.getElementById("autos").addEventListener("click", function() {
        localStorage.setItem("catID", 101);
        window.location = "products.html"
    });
    document.getElementById("juguetes").addEventListener("click", function() {
        localStorage.setItem("catID", 102);
        window.location = "products.html"
    });
    document.getElementById("muebles").addEventListener("click", function() {
        localStorage.setItem("catID", 103);
        window.location = "products.html"
    });
    usuario.innerHTML = localStorage.getItem("usuario");})}
    else{
        window.location = 'login.html';
    }
document.getElementById('logOut').addEventListener('click', function logOut(){
    localStorage.removeItem('usuario');
    window.location = 'login.html';
})
