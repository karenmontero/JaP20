var product = {};
var productList = {};
const maxProductRating = 5;

function showImagesGallery(array){

    let htmlContentToAppend = "";

    for(let i = 0; i < array.length; i++){
        let images = array[i];

        htmlContentToAppend += `
        <div class="col-lg-3 col-md-4 col-6">
            <div class="d-block mb-4 h-100">
                <img class="img-fluid img-thumbnail" src="` + images + `" alt="">
            </div>
        </div>
        `

        document.getElementById("productImages").innerHTML = htmlContentToAppend;
    }
}
//function showRating() {
//    let score = product.rating;
//    let stars = "";
//    let html = "";
//    for (let i = 1; i <= maxProductRating; i++) {
//        if (i <= score) {
//            stars += '<i class="fa fa-star checked"></i>';
//        } else {
//            stars += '<i class="fa fa-star"></i>';
//        }
//    }

//    html = `<span>  ${stars}</span>`

//    document.getElementById("rating").innerHTML = html;

//}

function showRelatedProducts(relatedProductArray) {
    getJSONData(PRODUCT_INFO_URL).then(function (resultObj) {
        if (resultObj.status === "ok") {
            productList = resultObj.data;

            let htmlRelatedProduct = "";

            for (let i = 0; i < relatedProductArray.length; i++) {
                let relatedProductPosition = relatedProductArray[i];
                let relatedProduct = productList[relatedProductPosition];

                htmlRelatedProduct += `
                <div class= "col-lg-3 col-md-4 col-6 border">
                    <div id="relatedVideogameImg" class= "row">
                        <img class="img-fluid p-2" src="`+relatedProduct.images[0]+`">                                              
                    </div>                   
                    <div "relatedVideogameInfo" class= "row p-2">
                    <p>`+ relatedProduct.name + `</p> 
                    <p>`+ relatedProduct.description + `</p>
                    </div>
                    <div class= "row p-2">
                    <a href="videogames-info.html">Ver</a>
                    </div>                     
                </div>`
            }
            document.getElementById("relatedProductContainer").innerHTML = htmlRelatedProduct;
        }
    })
}

//Función que se ejecuta una vez que se haya lanzado el evento de
//que el documento se encuentra cargado, es decir, se encuentran todos los
//elementos HTML presentes.
document.addEventListener("DOMContentLoaded", function(e){
    getJSONData(PRODUCT_INFO_URL).then(function(resultObj){
        if (resultObj.status === "ok")
        {
            product = resultObj.data;

            let productNameHTML  = document.getElementById("productName");
            let productDescriptionHTML = document.getElementById("productDescription");
            let productCurrencyHTML = document.getElementById("productCurrency");
            let productCostHTML = document.getElementById("productCost");
        
            productNameHTML = product.name;
            productDescriptionHTML = product.description;
            productCurrencyHTML = product.currency;
            productCostHTML = product.cost;

            //Muestro las imagenes en forma de galería
            showImagesGallery(product.images);
//            showRating();
            showRelatedProducts(product.relatedProduct);
        }
    });

});