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

 function showRelatedProducts(relatedProductArray) {
    getJSONData(PRODUCTS_URL).then(function (resultObj) {
        if (resultObj.status === "ok") {
            productList = resultObj.data;

            let htmlRelatedProduct = "";

            for (let i = 0; i < relatedProductArray.length; i++) {
                let relatedProductPosition = relatedProductArray[i];
                let relatedProduct = productList[relatedProductPosition];

                htmlRelatedProduct += `
                <div class= "col-lg-3 col-md-4 col-6 border">
                    <div id="relatedProductImg" class= "row">
                        <img class="img-fluid p-2" src="`+ relatedProduct.imgSrc +`">                                              
                    </div>                   
                    <div "relatedProductInfo" class= "row p-2">
                    <p>`+ relatedProduct.name + `</p> 
                    <p>`+ relatedProduct.description + `</p>
                    </div>
                    <div class= "row p-2">
                    <a href="product-info.html">Ver</a>
                    </div>                     
                </div>`
            }
            document.getElementById("relatedProductContainer").innerHTML = htmlRelatedProduct;
        }
    });
};



    getJSONData(PRODUCT_INFO_COMMENTS_URL).then(function(resultObj){
        if (resultObj.status === "ok")
        {
           let comment = resultObj.data;
           
           let htmlContentToAppend = "";
           comment.forEach(function(comment){
            let commentScore = comment.score;
            let score = '';
            for (let i = 1; i <= commentScore; i++) {
                score += '<i class="fas fa-star checked"></i>';
            }
            
            for (let i = commentScore +1; i <= commentScore; i++) {
                score += '<i class="far fa-star"></i>';
            }

            htmlContentToAppend += `
            <li class="list-group-item list-group-item-action">
                <div class="row">
                    <div class="col">
                    <div class="d-flex w-100 justify-content-between">
                        <h5 class="mb-1">`+ comment.user +`</h5>
                         <small class="valoracion">` + score + `</small>
                    </div>
                     <p class="mb-1"><label>` + comment.description + `</label></p>
                     <p class="text-muted">` + comment.dateTime + `</p>
                    </div>
                </div>
             `
            });
            document.getElementById("comments").innerHTML = htmlContentToAppend;
        }
    });


        
 
function newcomment(comentario){
//     if ((localStorage.comentario != undefined) && (localStorage.calificacion != undefined)) {
//         document.getElementsByClassName("comentario").innerHTML = "Nombre: " + localStorage.nombre;
//         document.getElementsByClassName("input password").innerHTML= " Password: " + localStorage.password;
//     } else {
//         document.getElementsByClassName("input password").innerHTML = "No has introducido tu contraseña";
//     }
// }
    localStorage.comentario = document.getElementsByClassName("comentario").value;
    localStorage.calificacion = document.getElementsByClassName("calificacion").value;
    alert ("Su comentario a sido enviado con exito");
    document.getElementById("comentario").value="";
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
            let productCategoryHTML = document.getElementById("productCategory");
            let productSoldCountHTML = document.getElementById("productSoldCount");
        
            productNameHTML.innerHTML = product.name;
            productDescriptionHTML.innerHTML = product.description;
            productCurrencyHTML.innerHTML = product.currency;
            productCostHTML.innerHTML = product.cost;
            productCategoryHTML.innerHTML = product.category;
            productSoldCountHTML.innerHTML = product.soldCount;
            //Muestro las imagenes en forma de galería
            showImagesGallery(product.images);
        }
        
        showRelatedProducts(product.relatedProducts);

    });
});