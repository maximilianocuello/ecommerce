let productInfoArray = [];
const productID =  localStorage.getItem("productID");
const PRODUCT_INFO = `${PRODUCT_INFO_URL}${productID}${EXT_TYPE}`;



document.addEventListener("DOMContentLoaded", function(e){
    getJSONData(PRODUCT_INFO).then(function(resultObj){
        if (resultObj.status === "ok"){
          
            productInfoArray = resultObj.data;
            showInfoArray(productInfoArray);
        }
    });
})

function showInfoArray({name, description, cost, currency, soldCount,category, images}) {
   
    let htmlContentToAppend = "";
    htmlContentToAppend = `
    <div class="container-fluid p-1 bg-success text-white ">
        <h1>${name}</h1>
        <hr>
      </div>
      <div class="container-fluid pb-1 bg-success text-white">
        <h6>Precio</h6> 
        <p class="">${currency} ${cost}</p>
      </div>
      <div class="container-fluid pb-1 bg-success text-white">
        <h6>Descripcion</h6> 
        <p class="">${description}</p>
      </div>
      <div class="container-fluid pb-1 bg-success text-white">
      <h6>Categoria</h6>  
        <p class="">${category}</p>
      </div>
      <div class="container-fluid pb-1 bg-success text-white">
      <h6>Cantidades</h6>  
        <p class=""> ${soldCount}</p>
      </div>
      <div class="container-fluid pb-1 bg-success text-white">
      <h6>Imagenes</h6>   
        
        <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
      <ol class="carousel-indicators">
        <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
        <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
        <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
      </ol>
      <div class="carousel-inner">
        <div class="carousel-item active">
          <img class="d-block w-100" src="${images[0]}" alt="First slide">
        </div>
        <div class="carousel-item">
          <img class="d-block w-100" src="${images[1]}" alt="Second slide">
        </div>
        <div class="carousel-item">
          <img class="d-block w-100" src="${images[2]}" alt="Third slide">
        </div>
      </div>
      <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="sr-only">Previous</span>
      </a>
      <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="sr-only">Next</span>
      </a>
    </div>
      </div>

                    `
document.getElementById('container').innerHTML += htmlContentToAppend;

}
