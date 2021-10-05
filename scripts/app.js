

//FORMULARIO LOGIN
let formulario= document.getElementById('form')
let btnLogin = document.getElementById('btnLogin')
let inputName = document.getElementById('inputName');


$(".loginForm").on("submit", validar);
function validar (e){

  e.preventDefault();
  

  if ($("#inputName").val() == ""){
    alert("Ingrese su usuario")
  }
  else if ($("#inputPass").val() == ""){
    alert("Ingrese su contraseña")
  }else {
    inicioSesion()
  }


}
//INICIO DE SESION
 function inicioSesion(){
    $("#loginCard").fadeOut(400);
    $("#layout").fadeOut(400);
//   let nombreUsuario = $("#inputName").val()  
}



var user=""
    
    let listaProductos =
    [ 
        {id:"0", nombre: "Adidas Yeezy Boost 700 vs 'CREAM'", precio:320, categoria:"zapatillas", img:"img/products/zapatillas/adidas-Yeezy-Boost-700 V2-Cream.jpg"},

        {id:"1", nombre: "Eric Emanuel EE Basic Short 'VEGAS SUMMIT'", precio:218, categoria:"shorts", img:"img/products/shorts/Eric-Emanuel-EE-Basic-Short-Vegas-Summit.jpg"},

        {id:"2", nombre: "Nike SB Dunk Low 'J-Pack Chicago'", precio:529, categoria:"zapatillas", img:"img/products/zapatillas/nike-sb.chicago.jpg"},

        {id:"3", nombre: "Eric Emanuel EE Basic Short 'ORANGE'", precio:83, categoria:"shorts", img:"img/products/shorts/Eric-Emanuel-EE-Basic-Short-Orange.jpg"},

        {id:"4", nombre: "BAPE Color Camo Champion Full Zip Hoodie Red", precio:450, categoria:"hoodies", img:"img/products/hoodies/Bape-Color-Camo-Champion-Full-Zip-Hoodie-Red.jpg"},

        {id:"5", nombre: "Adidas Yeezy Calabasas Long Sleeves Tee Frozen Yellow", precio:120, categoria:"remeras", img:"img/products/remeras/Adidas-Yeezy-Calabasas-Long-Sleeves-Tee-Frozen-Yellow-1.jpg"},

        {id:"6", nombre: "BAPE Color Camo Tiger Shark Wide Full Zip Double Hoodie", precio:550, categoria:"hoodies", img:"img/products/hoodies/BAPE-Color-Camo-Tiger-Shark-Wide-Full-Zip-Double-Hoodie-Black-2.jpg"},

        {id:"7", nombre: "Nike SB Dunk Low Grateful Dead Bears Opti 'Yellow'", precio:810, categoria:"zapatillas", img:"img/products/zapatillas/Nike-SB-Dunk-Low-Pro-x-GRATEFUL-DEAD-BEARS-OPTI-YELLOW.jpg"},

        {id:"8", nombre: "Nike SB Dunk Low 'BEN & JERRY'S'", precio:1300, categoria:"zapatillas", img:"img/products/zapatillas/Nike-SB-Dunk-Low-Ben-Jerrys-Chunky-Dunky-Product.jpg"},

        {id:"9", nombre: "Kaws Companion open Edition Vinyl Figure Brown", precio:398, categoria:"accesorios", img:"img/products/accesorios/Kaws-Companion-open-Edition-Vinyl-Figure-Brown-1.jpg"},

        {id:"10", nombre: "Bearbrick Jean-Michel Basquiat #7 100% & 400% Set", precio:260, categoria:"accesorios", img:"img/products/accesorios/Bearbrick-Jean-Michel-Basquiat-7-100_-_-400_-Set.jpg"},

        {id:"11", nombre: "Nike SB Dunk Low x TRAVIS SCOTT", precio:1960, categoria:"zapatillas", img:"img/products/zapatillas/Nike-SB-Dunk-Low-Travis-Scott-Product.jpg"},

        {id:"12", nombre: "Travis Scott The Scotts World T-shirt 'Black'", precio:70, categoria:"remeras", img:"img/products/remeras/Travis-Scott-The-Scotts-World-T-Shirt-Black.jpg"}

    ]
    


    // PINTANDO PRODUCTOS: 
    let contenedor = document.createElement("div");
    contenedor.classList.add('sectionOne');

    
    contenedor.innerHTML= `
    
    <section class="welcomeUser"> 
    
    <p class="subtitle" id="asd"> ¡ Welcome to <span class="hypeRed">Hype</span>App !<br>${user}</p>
    
    </section>
    <div class="slider">
            <div class="slide-track">
                <div class="slide slideOne">
                    <img src="img/logosMarcas/nike.png" height="84" width="84" alt="logoMarca">
                </div>
                <div class="slideContainer">
                    <img src="img/logosMarcas/adidas.png" height="84" width="84" alt="logoMarca">
                </div>
                <div class="slideContainer">
                    <img src="img/logosMarcas/yzy.png" height="84" width="84" alt="logoMarca">
                </div>
                <div class="slideContainer">
                    <img src="img/logosMarcas/bape.png" height="84" width="84" alt="logoMarca">
                </div>
                <div class="slideContainer">
                    <img src="img/logosMarcas/kaws.png" height="84" width="84" alt="logoMarca">
                </div>
                <div class="slideContainer">
                    <img src="img/logosMarcas/champ.png" height="84" width="84" alt="logoMarca">
                </div>
                <div class="slideContainer">
                    <img src="img/logosMarcas/EE.png" height="84" width="84" alt="logoMarca">
                </div>
                <div class="slideContainer">
                    <img src="img/logosMarcas/supreme.png" height="84" width="84" alt="logoMarca">
                </div>
                <div class="slideContainer">
                    <img src="img/logosMarcas/adidas.png" height="84" width="84" alt="logoMarca">
                </div>
                <div class="slideContainer">
                    <img src="img/logosMarcas/yzy.png" height="84" width="84" alt="logoMarca">
                </div>
                <div class="slideContainer">
                    <img src="img/logosMarcas/bape.png" height="84" width="84" alt="logoMarca">
                </div>
                <div class="slideContainer">
                    <img src="img/logosMarcas/kaws.png" height="84" width="84" alt="logoMarca">
                </div>
                <div class="slideContainer">
                    <img src="img/logosMarcas/champ.png" height="84" width="84" alt="logoMarca">
                </div>
                <div class="slideContainer">
                    <img src="img/logosMarcas/EE.png" height="84" width="84" alt="logoMarca">
                </div>
                <div class="slideContainer">
                    <img src="img/logosMarcas/supreme.png" height="84" width="84" alt="logoMarca">
                </div>
            </div>
        </div>
        <div class="galeria">

            <div class="imgGaleria">
                <div class="img imgOne"><h5>YOUR OWN STYLE</h5></div>
            </div>
            <div class="imgGaleria">
                <div class="img imgTwo"><h5>NO RULES</h5></div>
            </div>
            <div class="imgGaleria">
                <div class="img imgThree"><h5>SHOW WHO YOU ARE</h5></div>
            </div>

        </div>
        <div class="mensaje">
                    <div class="msjDiv">
                        <h3 class="msj msjOne">ALL BRANDS IN ONE PLACE</h3>
                    </div>
                    <div class="msjDiv">
                        <h3 class="msj msjTwo">EVERYTHING YOU NEED</h3>
                    </div>
        </div>
    <div class="content" id="cardsContainer">
        <h2>Products available</h2>
        <hr>
        <div class="search">
            
            <select class="searchCategoria" name="search__cat">
                <option value="all">Filter</option>
                <option value="accesorios">Accessories</option>
                <option value="zapatillas">Shoes</option>
                <option value="hoodies">Hoodies</option>
                <option value="remeras">T-Shirts</option>
                <option value="shorts">Shorts</option>
            </select>
        </div>
        <ul id="listaProductos"></ul>
    </div>
    
    <div  id="tableCarrito">
    <div class="checkNone" id="check">
        <i class="fas fa-check-circle"></i>
        <p>¡Gracias por su compra!</p> 
        <a href="index.html" >Volver al inicio</a>    
    </div>
    <div class="" id="loaderFC"></div>
        <div class="clCarrito"><button id="btnClCarrito">X</button></div>
            <div class="tableCarritoContent">
                <section class="thead">
                        <h3 class="col">SHOPPING CART</h3>
                </section>
                
                <section id="tbody" class="items">
                
                </section>

                <section id="tfoot">
                    <p class="total">El carrito esta vacio </p>
                    <p class="totalCant"></p>
                    <p class="totalCarrito"></p>   
                </section>
            </div>
          
            <div class="finalizarCompra" id="finalizarCompra">
            <button class="btnFC" id="btnFC">Finalizar compra</button>
            </div>
    </div>
        
    </div>
   
    `
    // <input id="search" type="search" name="search" placeholder="Search..." class="search" autocomplete="off">

    
    
    
    $("main").append(contenedor);



    $(".subtitle").fadeIn(1000)
    
    let padreLista = $("#listaProductos");
    
    
    listaProductos.forEach(producto =>{
        
        let li=document.createElement("li");
        li.classList.add('cards')
        li.setAttribute("cat", `${producto.categoria}`)
        li.setAttribute("marc", `${producto.marca}`)
         li.innerHTML=`
         <div class="card__img">
            <img class="imgItem" id="imgItem" src="${producto.img}">
        </div>
        <div class="card__content">
            <div class="card__title">
                <p class="nombreItem">${producto.nombre}</p>
            </div>
            <p class="precioUnit" id="precioPorUsdBlue${producto.id}">$</p>
            <p class="precioUnitUsd">$${producto.precio}usd</p>
            <button class="agregarCarrito" data-id="${producto.id}">Add to cart</button>
         </div>
         `
         // SET API CAMBIO
            let urlCambio= "https://www.dolarsi.com/api/api.php?type=valoresprincipales"

           $.getJSON(urlCambio, (resp, estado) => {
               if(estado=="success"){
                    let precioCambio = $(`#precioPorUsdBlue${producto.id}`)
                    let precioUsdOficial= resp[1].casa.venta
                    precioUsdOficial = precioUsdOficial.replace(/,/g, '.');
                    precioUsdOficial = parseFloat(precioUsdOficial)

                    //SET DOLAR OFICIAL EN DOM
                    let precioPorUsdBlue= producto.precio*precioUsdOficial
                    precioCambio.append(precioPorUsdBlue.toFixed())

                   console.log(precioUsdOficial)
               }
               
           })
           $(padreLista).append(li);
        
    })


   
    //SET LISTA CARRITO
    const cards = $('.cards')
    const items = $('.items')
    const footer = $('tfoot')
    

    let carrito= {}

        
    $(cards).on('click', e =>{
        addCarrito(e)
    })
    $(items).on('click', e =>{
        btnAccion(e)
    })
    
    
    const addCarrito = e =>{
        if(e.target.classList.contains('agregarCarrito')){
            setCarrito(e.target.parentElement)
        }
        e.stopPropagation();
  
    }
    const setCarrito = obj =>{
        const producto = {
            id: obj.querySelector('.agregarCarrito').dataset.id,
            img: obj.querySelector("#imgItem"),
            title: obj.querySelector('.nombreItem').textContent,
            precio: obj.querySelector('.precioUnit').textContent,
            precioUsd: obj.querySelector('.precioUnitUsd').textContent,
            cantidad: 1
        }
        // PRODUCTOS ACUMULADOS
        if(carrito.hasOwnProperty(producto.id)){
            producto.cantidad = carrito[producto.id].cantidad + 1
        }
        // COPIAMOS A LISTA CARRITO
        carrito[producto.id]={...producto}
        pintarCarrito()
    }

    // PINTAMOS CARRITO
    const pintarCarrito = ()=>{

        const listaItems =document.getElementById('tbody');
        listaItems.innerHTML =''
        Object.values(carrito).forEach(element => {
            listaItems.innerHTML += `
            <div class="rowItemContainer">
                <div class="rowTitleDetails">
                    <div class="rowTitle"><div class="rowId"><p>#ID: ${element.id}</p></div><p class="boldTitle"> ${element.title}</p></div>
                    <div class="rowDetails">
                        <div class="row">
                            <div class="rowBtn">
                                <p></p>
                                <button class="btnResta btn" data-id="${element.id}">
                                    -
                                </button>
                                <p>${element.cantidad}</p>
                                <button class="btnSuma btn" data-id="${element.id}">
                                    +
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                
                <div class="rowPrice">$ 
                    <span>${parseInt(element.cantidad)*parseInt(element.precio.slice(1))}</span>
                </div>
            </div>
             `
        })

        // PINTAMOS FOOTER
        pintarFooter()
        pintaBtnFinalizar()
        // SET LOCAL STORAGE
        localStorage.setItem('carrito', JSON.stringify(carrito))
    }

    // SET FOOTER CARRITO
    const pintarFooter = () => {
        footer.innerHTML= ''
        // console.log(Object.keys(carrito).length)
        if(Object.keys(carrito).length === 0){

            const footerDef =  document.querySelector(".total")
            footerDef.innerText = ` Your cart is empty  `
        }else{
            const total = document.querySelector(".total")
            total.innerText = "Total"
        }
        const nCantidad = Object.values(carrito).reduce((acc, {cantidad}) => acc+cantidad,0)
        const nPrecio = Object.values(carrito).reduce((acc, {cantidad, precio}) => acc + cantidad * parseInt(precio.slice(1)) ,0)
        const totalCarrito = document.querySelector(".totalCarrito")
        const totalCant = document.querySelector(".totalCant")
        const navBarCarrito = document.querySelector(".nCantidad")

        totalCarrito.innerHTML = `$${nPrecio.toFixed(0)}`
        totalCant.innerHTML = `${nCantidad} (items) <button class="btnDeleteCant btn" id="vaciarcarrito"> Vaciar Carrito </button> `
        //CONTADOR NAVBAR
        if (nCantidad != 0){
            navBarCarrito.innerText=`${nCantidad}`  
        }else {
            navBarCarrito.innerText=``
        }
       
        
        // BTN VACIAR CARRITO
        const btnVaciar = document.getElementById('vaciarcarrito')
        $(btnVaciar).on('click', ()=> {
            carrito = {}
            pintarCarrito()
            
        })
        
    }
    const pintaBtnFinalizar = () => {
        if(Object.keys(carrito).length !== 0){
            document.getElementById("finalizarCompra").style.display="flex"
        }else{
            document.getElementById("finalizarCompra").style.display="none"
        }
       
    }
 
    const btnAccion = (e) => {
        // SET BTN SUMA
        if(e.target.classList.contains('btnSuma')){
            const producto = carrito[e.target.dataset.id]
            producto.cantidad++
            carrito[e.target.dataset.id] = {...producto}
            pintarCarrito()
        }
        // SET BTN RESTA
        if(e.target.classList.contains('btnResta')){
            const producto = carrito[e.target.dataset.id]
            producto.cantidad--
            if(producto.cantidad===0){
                delete carrito[e.target.dataset.id]
            }
            pintarCarrito()
            
            
        }
        e.stopPropagation();

    }
    if (localStorage.getItem('carrito')){
        carrito = JSON.parse(localStorage.getItem('carrito'))
        pintarCarrito()
    }


    // SET BUSCADOR


    // BUSCADO POR CATEGORIA
    const searchCategoria = document.querySelector('.searchCategoria')
    // const catProduct = $
    searchCategoria.addEventListener('change', (e) => {
        console.log(e.target.value)
        
        let valueCat = e.target.value
        if (valueCat!="all"){
            ocultarProductosCat()
            mostrarProductos(valueCat)     
        }else{
            $('.cards').show();
        }  
    })


    function ocultarProductosCat(){
        $('.cards').hide();

    }
    //mostrarProductos
    function mostrarProductos(valueCat){
        $('.cards[cat="'+valueCat+'"]').show();
        console.log(valueCat)
    }
    

    //BUSCADOR TEXTO
    document.querySelector(".search").addEventListener('keyup', (e) => {
        console.log(e.target.value)
        document.querySelectorAll(".cards").forEach(el => el.textContent.toLowerCase().includes(e.target.value.toLowerCase())
        ?el.classList.remove("filter")
        :el.classList.add("filter")
        )
    })



    
    
    
    

//sesion     

       
          
      
 
    

      
