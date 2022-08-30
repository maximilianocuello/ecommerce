let productsArray = [];
let arrayProducts =[];
const catID =  localStorage.getItem("catID");
const PRODUCTS_URL_CARS = `${PRODUCTS_URL}${catID}${EXT_TYPE}`;
let min;
let max;
document.addEventListener("DOMContentLoaded", function(e){
    getJSONData(PRODUCTS_URL_CARS).then(function(resultObj){
        if (resultObj.status === "ok"){
            productsArray = resultObj.data;
            arrayProducts = productsArray.products;
            showProductsArray();
        }
    });
})

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
        <div class="list-group-item list-group-item-action cursor-active">
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
            
        document.getElementById("cat-list-container").innerHTML = htmlContentToAppend;
    
}


}
 /*     Order in array from products */

 function sortAndShowProducts(arrayProducts){
    

    arrayProducts = sortProducts(arrayProducts);

    showProductsArray();
}

document.getElementById('sortByCount').addEventListener('click', () =>{
    debugger;
    sortAndShowProducts(arrayProducts);
})
function sortProducts(array){
    debugger;
let products=[];

products = array.sort((a,b)=>{
    
    let aCount = parseInt(a.cost);
    let bCount = parseInt(b.cost);
    if(aCount > bCount){
        return 1;
    }
    if(aCount < bCount){
        return -1;
    }
    else return 0;
})

return products;
}
