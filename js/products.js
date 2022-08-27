let productsArray = [];
const catID =  localStorage.getItem("catID");
const PRODUCTS_URL_CARS = `${PRODUCTS_URL}${catID}${EXT_TYPE}`;
let min;
let max;
document.addEventListener("DOMContentLoaded", function(e){
    getJSONData(PRODUCTS_URL_CARS).then(function(resultObj){
        if (resultObj.status === "ok"){
            productsArray = resultObj.data;
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