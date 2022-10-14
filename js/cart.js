usuario.innerHTML = localStorage.getItem("usuario");
const fragment = document.createDocumentFragment()
let nCantidad
let idUser = localStorage.getItem('user');
let userArr ={};


function quantityPlus(){
  userArr[0].count =  userArr[0].count +1
   nCantidad = Object.values(userArr).reduce((acc, { count }) => acc + count, 0)
  const nPrecio = Object.values(userArr).reduce((acc, {count, unitCost}) => acc + count * unitCost ,0)
  
  document.getElementById('form1').value= nCantidad
  document.getElementById('price').textContent = `${userArr[0].currency} ${nPrecio}`

    const clone = document.getElementById('siteItems').cloneNode(true)
    fragment.appendChild(clone)

    
}
function quantityMinus(){
  if(nCantidad != 0){debugger
  userArr[0].count =  userArr[0].count - 1
   nCantidad = Object.values(userArr).reduce((acc, { count }) => acc + count, 0)
  const nPrecio = Object.values(userArr).reduce((acc, {count, unitCost}) => acc + count * unitCost ,0)
  
  document.getElementById('form1').value= nCantidad
  document.getElementById('price').textContent = `${userArr[0].currency} ${nPrecio}`

    const clone = document.getElementById('siteItems').cloneNode(true)
    fragment.appendChild(clone)
  }
    
}

let cartUser = `${CART_INFO_URL}${idUser}${EXT_TYPE}`;
document.addEventListener("DOMContentLoaded", function(e){
    getJSONData(cartUser).then(function(resultObj){
        if (resultObj.status === "ok"){
            userArr = resultObj.data.articles;
            showItem(userArr);
           
           
        }
    });
})

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
        <input id="form1" min="0" name="quantity" value="${count}" type="number" class="form-control" />
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



/* ITEMS QUE INSERTAR 

<img class="me-2" width="45px"
                  src="https://mdbcdn.b-cdn.net/wp-content/plugins/woocommerce/includes/gateways/paypal/assets/images/paypal.webp"
                  alt="PayPal acceptance mark" />
              </div>

<div class="card-body">
                <!-- Single item -->
                <div class="row">
                  <div class="col-lg-3 col-md-12 mb-4 mb-lg-0">
                    <!-- Image -->
                    <div class="bg-image hover-overlay hover-zoom ripple rounded" data-mdb-ripple-color="light">
                      <img src="https://mdbcdn.b-cdn.net/img/Photos/Horizontal/E-commerce/Vertical/12a.webp"
                        class="w-100" alt="Blue Jeans Jacket" />
                      <a href="#!">
                        <div class="mask" style="background-color: rgba(251, 251, 251, 0.2)"></div>
                      </a>
                    </div>
                    <!-- Image -->
                  </div>
    
                  <div class="col-lg-5 col-md-6 mb-4 mb-lg-0">
                    <!-- Data -->
                    <p><strong>Blue denim shirt</strong></p>
                    <p>Color: blue</p>
                    <p>Size: M</p>
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
                        onclick="this.parentNode.querySelector('input[type=number]').stepDown()">
                        <i class="fas fa-minus"></i>
                      </button>
    
                      <div class="form-outline">
                        <input id="form1" min="0" name="quantity" value="1" type="number" class="form-control" />
                        <label class="form-label" for="form1">Quantity</label>
                      </div>
    
                      <button class="btn btn-primary px-3 ms-2"
                        onclick="this.parentNode.querySelector('input[type=number]').stepUp()">
                        <i class="fas fa-plus"></i>
                      </button>
                    </div>
                    <!-- Quantity -->
    
                    <!-- Price -->
                    <p class="text-start text-md-center">
                      <strong>$17.99</strong>
                    </p>
                    <!-- Price -->
                  </div>
                </div>
                <!-- Single item -->
    
                <hr class="my-4" />
    
                <!-- Single item -->
                <div class="row">
                  <div class="col-lg-3 col-md-12 mb-4 mb-lg-0">
                    <!-- Image -->
                    <div class="bg-image hover-overlay hover-zoom ripple rounded" data-mdb-ripple-color="light">
                      <img src="https://mdbcdn.b-cdn.net/img/Photos/Horizontal/E-commerce/Vertical/13a.webp"
                        class="w-100" />
                      <a href="#!">
                        <div class="mask" style="background-color: rgba(251, 251, 251, 0.2)"></div>
                      </a>
                    </div>
                    <!-- Image -->
                  </div>
    
                  <div class="col-lg-5 col-md-6 mb-4 mb-lg-0">
                    <!-- Data -->
                    <p><strong>Red hoodie</strong></p>
                    <p>Color: red</p>
                    <p>Size: M</p>
    
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
                        onclick="this.parentNode.querySelector('input[type=number]').stepDown()">
                        <i class="fas fa-minus"></i>
                      </button>
    
                      <div class="form-outline">
                        <input id="form1" min="0" name="quantity" value="1" type="number" class="form-control" />
                        <label class="form-label" for="form1">Quantity</label>
                      </div>
    
                      <button class="btn btn-primary px-3 ms-2"
                        onclick="this.parentNode.querySelector('input[type=number]').stepUp()">
                        <i class="fas fa-plus"></i>
                      </button>
                    </div>
                    <!-- Quantity -->
    
                    <!-- Price -->
                    <p class="text-start text-md-center">
                      <strong>$17.99</strong>
                    </p>
                    <!-- Price -->
                  </div>
                </div>
                <!-- Single item -->
              </div>



*/