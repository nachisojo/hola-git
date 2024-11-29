let queryString = location.search;
let queryStringObj = new URLSearchParams(queryString);
let tagg = queryStringObj.get("tags");
let secunidad = document.querySelector(".sectionunidad");

let catTitle = document.querySelector(".catTitle")
catTitle.innerText = tagg

fetch(`https://dummyjson.com/recipes/tag/${tagg}`)
.then(res => res.json())
.then(function(data){
    
    let categoriaunidad = "";   
    for (let i=0; i< data.recipes.length; i++){
            let comidaii = data.recipes[i];
            let cat = 
            `
            <article class="catunidad">
                <img class="imagenunidad" src =${comidaii.image}>
                <h2 class="titulitounidad">${comidaii.name}</h2>
                <p class="difiunidad">Dificultad: ${comidaii.difficulty}</p>
                <p class = "detalleunidad"> <a class="botonunidad" href="detalle.html?id=${comidaii.id}"> Ver más </a></p>
            </article>
            `;
            categoriaunidad += cat;
        } 
        secunidad.innerHTML = categoriaunidad;
})
.catch((error) => console.log('Mi error fue:', error));