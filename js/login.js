let logiin = document.querySelector(".mail");
let contras = document.querySelector(".contras"); 
let mensajito = document.querySelector(".mensajemail");
let mensajitoo = document.querySelector(".mensajecontra");
let formu = document.querySelector(".formulario");

formu.addEventListener('submit', function(event) {
     
    if(logiin.value == ""){
        formu.style.display = "block";
        alert("Tenes que completar el campo.")
        event.preventDefault();
        
        return;
    }else if(contras.value == ""){
        formu.style.display = "block";
        alert("Tenes que completar el campo.")
        event.preventDefault();
        return;
 
    }

    
})