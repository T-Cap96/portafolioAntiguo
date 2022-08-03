// Boton Regreso atrás, activado por un Scroll // 

const regresoAtras = document.getElementById("arriba");

window.onscroll = function() {
    funcionScroll()
};

function funcionScroll() {
    if(document.body.scroll > 600 || document.documentElement.scrollTop > 600) {
        regresoAtras.style.display= "block";            
    }

    else{
        regresoAtras.style.display= "none";        
    }
};  