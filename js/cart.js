function showProductsArray(){
    let htmlContentTitle = "";
    htmlContentTitle = `<h2>${productsArray.catName}</h2>
    <p class="lead">Aqui veras que clase vendemos.</p> `
    document.getElementById("title").innerHTML = htmlContentTitle;

    let htmlContentToAppend = "";
    for(let product of productsArray.products){
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
        document.getElementById("cat-list-container").innerHTML = htmlContentToAppend;
    }
}
