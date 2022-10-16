usuario.innerHTML = localStorage.getItem("usuario");
const fragment = document.createDocumentFragment()
let nCantidad
let idUser = localStorage.getItem('user');
let userArr ={};
let nPrecio

// FETCH
let cartUser = `${CART_INFO_URL}${idUser}${EXT_TYPE}`;
document.addEventListener("DOMContentLoaded", function(e){
    getJSONData(cartUser).then(function(resultObj){
        if (resultObj.status === "ok"){
            userArr = resultObj.data.articles;
            showItem(userArr);
           
           
        }
    });
})

// CLONAR CONTENIDO 
function cloneHtml(){

  document.getElementById('form1').value= nCantidad
  document.getElementById('price').textContent = `${userArr[0].currency} ${nPrecio}`
  
  const clone = document.getElementById('siteItems').cloneNode(true)
    fragment.appendChild(clone)
}

// SUMA DE LA CANTIDAD DEL PRODUCTO

function quantityPlus(){
  userArr[0].count =  userArr[0].count +1
   nCantidad = Object.values(userArr).reduce((acc, { count }) => acc + count, 0)
   nPrecio = Object.values(userArr).reduce((acc, {count, unitCost}) => acc + count * unitCost ,0)
  
  
  cloneHtml()
    

    
}

// SUMA DE LA CANTIDAD DEL PRODUCTO

function quantityMinus(){
  if(nCantidad != 0){
  userArr[0].count =  userArr[0].count - 1
   nCantidad = Object.values(userArr).reduce((acc, { count }) => acc + count, 0)
   nPrecio = Object.values(userArr).reduce((acc, {count, unitCost}) => acc + count * unitCost ,0)
  
  
  cloneHtml()
    
  }
    
}




function showItem(arr){
  let htmlContentToAppend = "";
for (let {name, image, unitCost, currency, count} of arr) {
  
  htmlContentToAppend = `<div class="row">
  <div class="col-lg-3 col-md-12 mb-4 mb-lg-0">
    <!-- Image -->
    <div class="bg-image hover-overlay hover-zoom ripple rounded" data-mdb-ripple-color="light">
      <img src="${image}"
        class="w-100" alt="${name}" />
      <a href="#!">
        <div class="mask" style="background-color: rgba(251, 251, 251, 0.2)"></div>
      </a>
    </div>
    <!-- Image -->
  </div>
  
  <div class="col-lg-5 col-md-6 mb-4 mb-lg-0">
    <!-- Data -->
    <p><strong>${name}</strong></p>
    <p>Color: blue</p>
    
    <button type="button" class="btn btn-primary btn-sm me-1 mb-2" data-mdb-toggle="tooltip"
      title="Remove item">
      <i class="fas fa-trash"></i>
    </button>
    <button type="button" class="btn btn-danger btn-sm mb-2" data-mdb-toggle="tooltip"
      title="Move to the wish list">
      <i class="fas fa-heart"></i>
    </button>
    <!-- Data -->
  </div>
  
  <div class="col-lg-4 col-md-6 mb-4 mb-lg-0">
    <!-- Quantity -->
    <div class="d-flex mb-4" style="max-width: 300px">
      <button class="btn btn-primary px-3 me-2"
        onclick="quantityMinus()">
        <i class="fas fa-minus"></i>
      </button>
  
      <div class="form-outline">
        <input id="form1" min="0" name="quantity" value="${count}" type="number" class="form-control" oninput="quantityInputMod()"/>
      </div>
  
      <button class="btn btn-primary px-3 ms-2"
        onclick="quantityPlus()">
        <i class="fas fa-plus"></i>
      </button>
    </div>
    <!-- Quantity -->
  
    <!-- Price -->
    <p class="text-start text-md-center" >
      <strong id="price">${currency}${unitCost}</strong>
    </p>
    <!-- Price -->
  </div>
  </div>
  <!-- Single item -->
  
  <hr class="my-4" />`
}
  

document.getElementById('siteItems').innerHTML =htmlContentToAppend;
 
}



