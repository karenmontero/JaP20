let arrayArticulos =[];
let subtotaltotal=0;

//Calculo del total segun la moneda elegida
function calculoMoneda(count,index){
    let sub=0;
    if(arrayArticulos[index].currency==="USD"){
        sub = arrayArticulos[index].unitCost*count*40;

    }else{
        sub = arrayArticulos[index].unitCost*count;
    }
    return sub;
}
//Calculo del subtotal del carrito según la cantidad de articulos
function subtotalCart(){
    let subtotalArray = document.getElementsByClassName("countArticle");
    let subtotal =0;
    for(let i=0;i<subtotalArray.length;i++){
        subtotal += calculoMoneda(subtotalArray[i].value , i);
    }
    document.getElementById("subtotalT").innerHTML = "UYU " + subtotal;
    subtotaltotal=subtotal; 

}
//Total del carrito (todos los subtotales de los productos)
function totalFinal(){
    let total = subtotaltotal;
    document.getElementById("totalCost").innerHTML = "UYU " + total;
}

//subtotal de cada articulo (cantidad por costo unitario)
function cantidadArticle(){
    let subtotalArray = document.getElementsByClassName("countArticle");
    for(let i=0;i<subtotalArray.length;i++){
        subtotalArray[i].addEventListener("change",function(){
        document.getElementById("productSubtotal-"+i).innerHTML= arrayArticulos[i].currency + " "+
        subtotalArray[i].value* arrayArticulos[i].unitCost;
        subtotalCart();
        totalFinal();
    });

    }
    

}

//Mostrar carrito, datos de articulos y subtotales unitarios.
function showCarrito(articulos){
   let htmlContentToAppend ="";
    for(let i = 0; i < articulos.length; i++){
       
        htmlContentToAppend += `
        <tr>
            <td><img src='`+ articulos[i].src + `' width="50px"></td>
            <td>`+ articulos[i].name + `</td>
            <td>`+ articulos[i].currency + " " + articulos[i].unitCost +`</td>
            <td><input class="form-control countArticle" style="width:60px;" type="number" id="productCount-${i}" value="`+ articulos[i].count + `" min="1"></td>
            <td><span id="productSubtotal-${i}" style="font-weight:bold;">${articulos[i].currency} ${articulos[i].unitCost * articulos[i].count}</span></td>
        </tr>
        `
              
    }
    document.getElementById("containerArticles").innerHTML = htmlContentToAppend;
    cantidadArticle();
    subtotalCart();
    totalFinal();


}
//Llamado al JSON para extraer los datos que contiene.
document.addEventListener("DOMContentLoaded", function(e){
    getJSONData("https://japdevdep.github.io/ecommerce-api/cart/654.json").then(function(resultObj){
        if (resultObj.status === 'ok')
        {
            arrayArticulos=resultObj.data.articulos;
            showCarrito(arrayArticulos);
        }
    });
})
