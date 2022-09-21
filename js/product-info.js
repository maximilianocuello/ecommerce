
let urlFinal;
let productInfoArray = [];
let arrayComments = []; 
const FORM = document.getElementById('form')
let arrayStars = FORM.getElementsByClassName('fa fa-star');
const productID =  localStorage.getItem("productID");
let score; 

usuario.innerHTML = localStorage.getItem("usuario");

function setProductID(id) {
  localStorage.setItem("productID", id);
  window.location = "product-info.html";
}

function crearUrl(url) {
   urlFinal = `${url}${productID}${EXT_TYPE}`;
  return urlFinal;
}

document.addEventListener("DOMContentLoaded", function(e){
    getJSONData(crearUrl(PRODUCT_INFO_URL)).then(function(resultObj){
        if (resultObj.status === "ok"){
          
            productInfoArray = resultObj.data;
            showInfoArray(productInfoArray);
            showProdRel(productInfoArray);
        }
    });
    getJSONData(crearUrl(PRODUCT_INFO_COMMENTS_URL)).then(function(resultObj){
      if (resultObj.status === "ok"){
        
          arrayComments = resultObj.data;
          showCommentsArray(arrayComments);
          
      }
  });

  
    
})

/* ------------------ MUESTRA INFO -----------------------*/

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
    
    /*------------------- MUESTRA COMENTARIOS ---------------*/
    
    function showCommentsArray(array) {
      
      let htmlContentToAppend = "";
      for (const ar of array) {
        htmlContentToAppend += `
        <div class="container-fluid  bg-light text-dark border-bottom border-dark">
        <h6 >${ar.user} ${showStars(ar.score)} ${ar.dateTime}</span> </h6> 
        <p class="">${ar.description}</p>
        </div>
        `
        
      }
      
      document.getElementById('container-comment').innerHTML = htmlContentToAppend;
      
    }
    
      /* ---------------------- MUESTRA PRODUCTOS RELACIONADOS ------*/
    function showProdRel({relatedProducts}){
     let htmlContentToAppend = "";
     for (const relProd of relatedProducts) {
       
       htmlContentToAppend += `
       <div onclick = "setProductID(${relProd.id})" class="card m-2" style="width: 18rem;">
        <img src="${relProd.image}" class="card-img-top" alt="...">
        <div class="card-body">
         <h5 class="card-title">Card title</h5>
        </div>
      </div>
      `
     }

     document.getElementById("containerRelProd").innerHTML = htmlContentToAppend;
    }
    // Funcion para imprimir score
    
    

 function showStars(value){
  let htmlContentToAppend = '';
  for (let i = 0; i < 5; i++) {
    if (i < value) {
      htmlContentToAppend += `
     <span class="fa fa-star checked"></span>
  `
               }
    else{
      htmlContentToAppend +=  `
     <span class="fa fa-star"></span>
  `
    }
   
  }
  return htmlContentToAppend;
}




function addStar(stars){
  quiteStars();
  for (let i=0; i < arrayStars.length; i++) {
    if (i < stars) {
      
      arrayStars[i].classList.add('checked');
    }
    else{
      break;
    }
  }
  return arrayStars;
}

function quiteStars(){
  
  for (let i=0; i < arrayStars.length; i++) {
    
      
      arrayStars[i].classList.remove('checked');
    
    
  }
  return arrayStars;
}
arrayStars[0].addEventListener('click', function(){
    addStar(1);
    score = 1
    return score 
});
arrayStars[1].addEventListener('click', function(){
  addStar(2);
  score = 2
  return score
});
arrayStars[2].addEventListener('click', function(){
  addStar(3);
  score = 3
  return score
});
arrayStars[3].addEventListener('click', function(){
  addStar(4);
  score = 4
  return score
});
arrayStars[4].addEventListener('click', function(){
  addStar(5);
  score = 5
  return score
});



document.getElementById('btnComment').addEventListener('click', function submit(){
  let today = new Date();
  let day = today.getDate();
  let month = today.getMonth() + 1;
  let year = today.getFullYear();
  let hour = today.getHours() + ':' + today.getMinutes() + ':' + today.getSeconds();
  let comment = document.getElementById('addComment').value;
  arrayComments.push({"product": localStorage.getItem("productID"),"user":localStorage.getItem("usuario") ,"score":score, "description": comment , "dateTime": `${day}-${month}-${year} ${hour}`});
  showCommentsArray(arrayComments);
  document.getElementById('addComment').value = "";
})

