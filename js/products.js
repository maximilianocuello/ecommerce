let productsArray = [];
let arrayProducts =[];
let arrayFilter = undefined;
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
            showProductsArray(arrayProducts);
        }
    });
})


function setProductID(id) {
    localStorage.setItem("productID", id);
    window.location = "product-info.html";
}

/* Mostrando cada Carta de los products */
function showProductsArray(arr){
    let htmlContentTitle = "";
    htmlContentTitle = `<h2>${productsArray.catName}</h2>
    <p class="lead">Aqui veras que clase vendemos.</p> `
    document.getElementById("title").innerHTML = htmlContentTitle;
    
    let htmlContentToAppend = "";
    
    for(let product of arr){
        let {id , image, description, name, currency, cost, soldCount} = product;   
        if (((min == undefined) || (min != undefined && cost >= min)) &&
            ((max == undefined) || (max != undefined && cost <= max))){
        htmlContentToAppend += `
        <div onclick="setProductID(${id})" class="list-group-item list-group-item-action cursor-active">
            <div class="row">
                <div class="col-3">
                    <img src="${image}" alt="${description}" class="img-thumbnail">
                </div>
                <div class="col">
                    <div class="d-flex w-100 justify-content-between">
                        <h4 class="mb-1">${name} - ${currency} ${cost}</h4>
                        <small class="text-muted">${soldCount} artículos vendidos</small>
                    </div>
                        <p class="mb-1">${description}</p>
                    </div>
                </div>
            </div>
                        `
                    }
                    
                    document.getElementById("cat-list-container").innerHTML = htmlContentToAppend;
                    
                }
                
                
            }
            
/*----------------------------Filtros-------------------------*/ 
            
const FILTERBTN = document.getElementById('rangeFilterCount');
FILTERBTN.addEventListener('click', ()=>{
min = document.getElementById('rangeFilterCountMin').value;
max = document.getElementById('rangeFilterCountMax').value;
arrayFilter ? showProductsArray(arrayFilter) : showProductsArray(arrayProducts);
            
})
/*------------------*-------Clean ------------------*/
document.getElementById("clearRangeFilter").addEventListener("click", () =>{
document.getElementById("rangeFilterCountMin").value = "";
document.getElementById("rangeFilterCountMax").value = "";
            
min = undefined;
max = undefined;
            
showProductsArray(arrayProducts);
});
/*  LLAMADAS A LAS FUNCIONES DE FILTRO */
document.getElementById('sortByCountAsc').addEventListener('click', () =>{
    sortAndShowProducts("CountCostAsc");
})
document.getElementById('sortByCountDesc').addEventListener('click', () =>{
    sortAndShowProducts("CountCostDesc");
})
document.getElementById('soldCountVent').addEventListener('click', () =>{
    sortAndShowProducts("ContVent");
})


/*     Order in array from products */


function sortProducts(criterio,array){
    
    let products=[];
    products = array.sort((a,b)=>{
        
        if(criterio === "CountCostAsc"){
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
        else if(criterio === "CountCostDesc"){
            let aCount = parseInt(a.cost);
            let bCount = parseInt(b.cost);
            if(aCount > bCount){
                return -1;
            }
            if(aCount < bCount){
                return 1;
            }
            else return 0;
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
if(arrayFilter){
    arrayFilter = sortProducts(criterio, arrayFilter);
   showProductsArray(arrayFilter);
}
else{
    showProductsArray(arrayProducts);
}
}


/*         Funcion buscando en tiempo real */
let search = document.getElementById('search');
search.addEventListener('keyup' , (e) =>{
    e.target.matches('#search')
    if (e.target.value != "") {
    
       arrayFilter = arrayProducts.filter(elemento => {
            return (elemento.name.toUpperCase().includes(e.target.value.toUpperCase()) || elemento.description.toUpperCase().includes(e.target.value.toUpperCase()));
       })
       
    }
    else{
        arrayFilter = arrayProducts;
    }
    showProductsArray(arrayFilter)
}) 

