let regist = document.querySelector(".emailregistro");
let contra = document.querySelector(".contraregistro"); 
let mensajito = document.querySelector(".mensajemail");
let mensajitoo = document.querySelector(".mensajecontra");      
let formur = document.querySelector(".formregistro");

formur.addEventListener('submit', function(event) {
     
    if(regist.value == ""){
        formur.style.display = "block";
        mensajito.innerText = "Tenes que completar el campo.";
        event.preventDefault();
        
        return;
    }else if(contra.value == ""){
        formur.style.display = "block";
        mensajitoo.innerText = "Tenes que completar el campo";
        event.preventDefault();
        return;
 
    }

    
})