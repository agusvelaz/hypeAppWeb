
// LOADER

window.addEventListener('load', function() {
    const loader= document.getElementById('loader')
    loader.classList.toggle('loaderNone')
})
// NAVBAR 
$(window).scroll(function(){
    if ($("#navBar").offset().top > 450){
        $("#navBar").addClass("navBarInverse");
    }else {
        $("#navBar").removeClass("navBarInverse")
    }
})

const opCarrtito = document.getElementById("opCarrtito")
const btnClCarrito = document.getElementById("btnClCarrito")
const btnCuenta = document.getElementById("btnCuenta")
const btnClCuenta = document.getElementById("btnClCuenta")
const btnFC= document.getElementById("btnFC")
const check= document.getElementById("check")



// VENTANA CARRITO 

// ABRIR CARRITO
$(opCarrtito).on('click', ()=> {
    abrirCarrito()
    
})
function abrirCarrito(){
    $("#tableCarrito").fadeIn(400);
    $("#layout").fadeIn(400);
    // document.getElementById("tableCarrito").style.display="block"
    // document.getElementById("layout").style.display="block"
    
    
}
// CERRAR CARRITO
$(btnClCarrito).on('click', ()=> {
    cerrarCarrito()
    
})
function cerrarCarrito(){
    $("#tableCarrito").fadeOut(400);
    $("#layout").fadeOut(400);
    // document.getElementById("tableCarrito").style.display="none"
    // document.getElementById("layout").style.display="none"  
}

// VENTANA LOGIN

$(btnCuenta).on('click', ()=> {
    abrirModalCuenta()
    
})
function abrirModalCuenta(){
    $("#loginCard").fadeIn(400);
    document.getElementById("loginCard").style.display="flex"
    $("#layout").fadeIn(400);
    
    // document.getElementById("layout").style.display="block"
    
    
}
// CERRAR CARRITO
$(btnClCuenta).on('click', ()=> {
    cerrarModalCuenta()
    
})
function cerrarModalCuenta(){
    $("#loginCard").fadeOut(400);
    $("#layout").fadeOut(400);
    // document.getElementById("tableCarrito").style.display="none"
    // document.getElementById("layout").style.display="none"  
}

// FINALIZAR COMPRA 
$(btnFC).on('click', ()=> {
loaderFC()    
})

function loaderFC(){
const loader= document.getElementById('loaderFC')
loader.classList.toggle('lds-dual-ringFC')
loader.classList.toggle('loaderFC')
carrito = {}
setTimeout(function(){ pintarCarrito() },2000);
setTimeout(function(){check.style.display="block"}, 2500)
setTimeout(function(){ loader.classList.toggle('loaderNoneFC'); },3000);
}


// SLIDER 




