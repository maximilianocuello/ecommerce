let productsArray = [];
const catID =  localStorage.getItem("catID");
const PRODUCTS_URL_CARS = `${PRODUCTS_URL}${catID}${EXT_TYPE}`;

document.addEventListener("DOMContentLoaded", function(e){
    getJSONData(PRODUCTS_URL_CARS).then(function(resultObj){
        if (resultObj.status === "ok"){
            productsArray = resultObj.data;
            showProductsArray();
        }
    });
})



