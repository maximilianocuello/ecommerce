let productsArray = [];
let arrayProducts =[];
let searching = [];
const catID =  localStorage.getItem("catID");
const PRODUCTS_URL_CARS = `${PRODUCTS_URL}${catID}${EXT_TYPE}`;
let min;
let max;


usuario.innerHTML = localStorage.getItem("usuario");

document.addEventListener("DOMContentLoaded", function(e){
    getJSONData(PRODUCTS_URL_CARS).then(function(resultObj){
        if (resultObj.status === "ok"){
            productsArray = resultObj.data;
            arrayProducts = productsArray.products;
            showProductsArray();
        }
    });
})


function setProductID(id) {
    localStorage.setItem("productID", id);
    window.location = "product-info.html";
}

/* Mostrando cada Carta de los products */
function showProductsArray(){
    let htmlContentTitle = "";
    htmlContentTitle = `<h2>${productsArray.catName}</h2>
    <p class="lead">Aqui veras que clase vendemos.</p> `
    document.getElementById("title").innerHTML = htmlContentTitle;
    
    let htmlContentToAppend = "";
    
    for(let product of arrayProducts){
        if (((min == undefined) || (min != undefined && product.cost >= min)) &&
            ((max == undefined) || (max != undefined && product.cost <= max))){

        htmlContentToAppend += `
        <div onclick="setProductID(${product.id})" class="list-group-item list-group-item-action cursor-active">
        <div class="row">
        <div class="col-3">
        <img src="${product.image}" alt="${product.description}" class="img-thumbnail">
        </div>
        <div class="col">
        <div class="d-flex w-100 justify-content-between">
        <h4 class="mb-1">${product.name} - ${product.currency} ${product.cost}</h4>
                        <small class="text-muted">${product.soldCount} artículos vendidos</small>
                        </div>
                        <p class="mb-1">${product.description}</p>
                        </div>
                        </div>
                        </div>
                        `
                    }
                    console.log(product.id);
                    document.getElementById("cat-list-container").innerHTML = htmlContentToAppend;
                    
                }
                
                
            }
            
/*----------------------------Filtros-------------------------*/ 
            
const FILTERBTN = document.getElementById('rangeFilterCount');
FILTERBTN.addEventListener('click', ()=>{
min = document.getElementById('rangeFilterCountMin').value;
max = document.getElementById('rangeFilterCountMax').value;
showProductsArray();
            
})
/*------------------*-------Clean ------------------*/
document.getElementById("clearRangeFilter").addEventListener("click", () =>{
document.getElementById("rangeFilterCountMin").value = "";
document.getElementById("rangeFilterCountMax").value = "";
            
min = undefined;
max = undefined;
            
showProductsArray();
});
/*  LLAMADAS A LAS FUNCIONES DE FILTRO */
document.getElementById('sortByCount').addEventListener('click', () =>{
    sortAndShowProducts("ContadorCost");
})
document.getElementById('soldCountVent').addEventListener('click', () =>{
    sortAndShowProducts("ContVent");
})
document.getElementById('sortAsc').addEventListener('click', () =>{
    sortAndShowProducts("Ascender");
})
document.getElementById('sortDesc').addEventListener('click', () =>{
    sortAndShowProducts("Descender");
})

/*     Order in array from products */


function sortProducts(criterio,array){
    
    let products=[];
    products = array.sort((a,b)=>{
        
        if(criterio === "ContadorCost"){
            let aCount = parseInt(a.cost);
            let bCount = parseInt(b.cost);
            if(aCount > bCount){
                return 1;
            }
            if(aCount < bCount){
                return -1;
            }
            else return 0;
        }
        else if(criterio === "Ascender"){
            if (a.name > b.name) {
                return 1;
            }
            if (a.name < b.name) {
                return -1;
            }
            else{
                return 0;
            }
        }
        else if(criterio === "Descender"){
            if (a.name < b.name) {
                return 1;
            }
            if (a.name > b.name) {
                return -1;
            }
            else{
                return 0;
            }
        }
        else if(criterio === "ContVent"){
            let aSoldCount = parseInt(a.soldCount);
            let bSoldCount = parseInt(b.soldCount);
            if(aSoldCount < bSoldCount){
                return 1;
            }
            if(aSoldCount > bSoldCount){
                return -1;
            }
            else return 0;
        }
    }
    )
    
    
    return products;
}

function sortAndShowProducts(criterio){
   

   arrayProducts = sortProducts(criterio, arrayProducts);

   showProductsArray();
}


/*         Funcion buscando en tiempo real */
/*let search = document.getElementById('search');
search.addEventListener('keyup' , (e) =>{
    e.target.matches('#search')
    if (e.target.value != "") {
    
       arrayProducts = arrayProducts.filter(elemento => {
            return elemento.name.toUpperCase().includes(e.target.value.toUpperCase());
       })
       
    }
    else{
        console.log('mostrar tuti')
    }
    console.log(arrayProducts)
}) */

