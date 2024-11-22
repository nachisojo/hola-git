let formuhome = document.querySelector(".formhome")
let resphomee = document.querySelector(".resphome")
let home = document.querySelector(".home")
let searchinput = document.querySelector(".searchinput")
formuhome.addEventListener("submit",function(event){
    
    if(searchinput.value == ""){
        home.style.display = "block";
        resphomee.innerText = "Tenes que poner algo.";
        event.preventDefault()
        return;
    }else if(searchinput.value <= 3){
        home.style.display = "block";
        resphomee.innerText = "Tiene que tener más de tres letras la busqueda.";
        event.preventDefault()
        return;
    }else if(searchinput == "categorias"){
        window.location.href = "categorias.html";
        return;
    }else if(searchinput == "detalle"){
        window.location.href = "detalle.html";
        return;
    }else if(searchinput === "hometalle"){
        window.location.href = "home.html";
        return;
    }else if(searchinput == "registro"){
        window.location.href = "registro.html";
        return;
    }else if(searchinput == "login"){
        window.location.href = "login.html";
        return;
    }else if(searchinput == "categoria"){
        window.location.href = "categoria.html";
        return;
    }
}) 
 
fetch('https://dummyjson.com/recipes')
    .then(function (response){
        return response.json();
    })
    
    .then(function (data){   
        let containerrecetas = document.querySelector(".containerrecetas");
        let contenidos = '';
        for (let i=0; i < 10; i++){
            let comida = data.recipes[i];
            
            let contenido =
                `<article class="contenidorec">
                    <img src = ${comida.image}>
                    <p class = "nombre"> ${comida.name} </p>
                    <P class = "dificultad"> Nivel de dificultad: ${comida.difficulty} </p>
                    <p class = "info"> <a class="btn" href="detalle.html?id=${comida.id}"> Ver más </a></p>
                </article>`;
            contenidos += contenido
        }
        containerrecetas.innerHTML = contenidos;

    })
    .catch(function (error){
        console.log("Mi error fue", error);
    })