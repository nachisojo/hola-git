let formuhome = document.querySelector(".formhome")
let resphomee = document.querySelector(".resphome")
let searchinput = document.querySelector(".searchinput")


let containerrecetas = document.querySelector(".containerrecetas");
 
fetch('https://dummyjson.com/recipes')
    .then(function (response){
        return response.json();
    })
    
    .then(function (data){   
        let contenidos = '';
        for (let i=0; i < 10; i++){
            let comida = data.recipes[i];
            
            let contenido =
                `<article class="contenidorec">
                    <img src = ${comida.image}>
                    <p class = "nombre"> ${comida.name} </p>
                    <P class = "dificultad"> Nivel de dificultad: ${comida.difficulty} </p>
                    <p class = "info"> <a class="botondetalle" href="detalle.html?id=${comida.id}"> Ver más </a></p>
                </article>`;
            contenidos += contenido
        }
        containerrecetas.innerHTML = contenidos;

    })
    .catch(function (error){
        console.log("Mi error fue", error);
    })

    let search2 = document.getElementById("buscador")
    let home = document.querySelector(".home")
    formuhome.addEventListener('submit', function(e){
        e.preventDefault();
        let errors= false
        if (search2.value === ""){
            home.innerText= "El campo no puede esatr vacio ni tener menos de tres letras"
            home.style.display = "block"
            errors = true
        }else  
        home.style.display = "none"
     
        
        if (search2.value.length <4){
            home.innerText= "El campo no puede esatr vacio ni tener menos de tres letras"
            home.style.display = "block"
            errors = true
        }else  
        home.style.display = "none"
    
        if (!errors){
        this.submit()
        }
    })
