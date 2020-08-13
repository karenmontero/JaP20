var ProductsArray = [];

function showProductsList(array){

    let htmlContentToAppend = "";
    for(let i = 0; i < array.length; i++){
        let products = array[i];

        htmlContentToAppend += `
        <div class="list-group-item list-group-item-action">
            <div class="row">
                <div class="col-3">
                    <img src="` + products.imgSrc + `" alt="` + products.description +` " class="img-thumbnail">
                </div>
                <div class="col">
                    <div class=" d-flex w-100 justify-content-between">
                        <h4 class="mb-1">`+ products.name +`</h4>
                        <small class="text-muted">` + products.soldCount + ` artículos</small>
                    </div>
                <p>
                    `+ products.description +` 
                </p>
                 <p>
                    `+ products.currency + " " + products.cost + ` 
                </p>
                </div>
                
            </div>
        </div>
        `

        document.getElementById("product-list-container").innerHTML = htmlContentToAppend;
    }
}

//Función que se ejecuta una vez que se haya lanzado el evento de
//que el documento se encuentra cargado, es decir, se encuentran todos los
//elementos HTML presentes.
document.addEventListener("DOMContentLoaded", function(e){
    getJSONData(PRODUCTS_URL).then(function(resultObj){
        if (resultObj.status === "ok")
        {

            productsArray = resultObj.data;
            //Muestro las categorías ordenadas
            showProductsList(productsArray);
        } 
    });
});

//const ORDER_ASC_BY_NAME = "AZ";
//const ORDER_DESC_BY_NAME = "ZA";
//const ORDER_BY_PROD_COUNT = "Cant.";
//var currentProductsArray = [];
//var currentSortCriteria = undefined;
//var minCount = undefined;
//var maxCount = undefined;

//function sortProductos(criteria, array){
//    let result = [];
//    if (criteria === ORDER_ASC_BY_NAME)
//    {
//        result = array.sort(function(a, b) {
//            if ( a.name < b.name ){ return -1; }
//            if ( a.name > b.name ){ return 1; }
//            return 0;
//        });
//    }else if (criteria === ORDER_DESC_BY_NAME){
//        result = array.sort(function(a, b) {
//            if ( a.name > b.name ){ return -1; }
//            if ( a.name < b.name ){ return 1; }
//            return 0;
//        });
//    }else if (criteria === ORDER_BY_PROD_COUNT){
//        result = array.sort(function(a, b) {
//            let aCount = parseInt(a.productCount);
//            let bCount = parseInt(b.productCount);

//          if ( aCount > bCount ){ return -1; }
//            if ( aCount < bCount ){ return 1; }
//            return 0;
//        });
//    }

//    return result;
//}

//function showProductsList(){

// let htmlContentToAppend = "";
//    for(let i = 0; i < currentProductsArray.length; i++){
//        let category = currentProductsArray[i];

//        if (((minCount == undefined) || (minCount != undefined && parseInt(category.productCount) >= minCount)) &&
//            ((maxCount == undefined) || (maxCount != undefined && parseInt(category.productCount) <= maxCount))){

//            htmlContentToAppend += `
//            <a href="products.html" class="list-group-item list-group-item-action">
//                <div class="row">
//                    <div class="col-3">
//                        <img src="` + category.imgSrc + `" alt="` + category.description + `" class="img-thumbnail">
//                    </div>
//                   <div class="col">
//                    <div class="col">
//                        <div class="d-flex w-100 justify-content-between">
//                            <h4 class="mb-1">`+ category.name +`</h4>
//                            <small class="text-muted">` + category.currency + category.cost + category.soldCount + ` artículos</small>
//                        </div>
//                        <p class="mb-1">` + category.description + `</p>
//                    </div>
//                </div>
//            </a>
//            `
//        }

//        document.getElementById("cat-list-container").innerHTML = htmlContentToAppend;
//    }
//}

//function sortAndShowProducts(sortCriteria, ProductsArray){
//    currentSortCriteria = sortCriteria;

//    if(ProductsArray != undefined){
//        currentProductsArray = ProductsArray;
//    }

//    currentProductsArray = sortProducts(currentSortCriteria, currentCategoriesArray);

    //Muestro las categorías ordenadas
//    showProductsList();
//}
//document.addEventListener("DOMContentLoaded", function(){
//    getJSONData(PRODUCTS_URL).then(function(resultObj){
//        if (resultObj.status === "ok"){
//            sortAndShowCategories(ORDER_ASC_BY_NAME, resultObj.data);
//        }
//    });

//    document.getElementById("sortAsc").addEventListener("click", function(){
//        sortAndShowCategories(ORDER_ASC_BY_NAME);
//    });

//    document.getElementById("sortDesc").addEventListener("click", function(){
//        sortAndShowProducts(ORDER_DESC_BY_NAME);
//    });

//    document.getElementById("sortByCount").addEventListener("click", function(){
//        sortAndShowProductos(ORDER_BY_PROD_COUNT);
//    });

//    document.getElementById("clearRangeFilter").addEventListener("click", function(){
//        document.getElementById("rangeFilterCountMin").value = "";
//        document.getElementById("rangeFilterCountMax").value = "";

//        minCount = undefined;
//        maxCount = undefined;

//        showProductsList();
//    });

//    document.getElementById("rangeFilterCount").addEventListener("click", function(){
//        //Obtengo el mínimo y máximo de los intervalos para filtrar por cantidad
//        //de productos por categoría.
//        minCount = document.getElementById("rangeFilterCountMin").value;
//        maxCount = document.getElementById("rangeFilterCountMax").value;

//        if ((minCount != undefined) && (minCount != "") && (parseInt(minCount)) >= 0){
//            minCount = parseInt(minCount);
//        }
//        else{
//            minCount = undefined;
//        }

//        if ((maxCount != undefined) && (maxCount != "") && (parseInt(maxCount)) >= 0){
//            maxCount = parseInt(maxCount);
//        }
//        else{
//            maxCount = undefined;
//        }

//        showProductsList();
//    });
//});
//Función que se ejecuta una vez que se haya lanzado el evento de
//que el documento se encuentra cargado, es decir, se encuentran todos los
//elementos HTML presentes.
//document.addEventListener("DOMContentLoaded", function () {

//});