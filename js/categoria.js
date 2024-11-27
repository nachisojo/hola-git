let queryString = location.search;
let queryStringObj = new URLSearchParams(queryString);
let tagg = queryStringObj.get("tag");
let secunidad = document.querySelector(".sectionunidad");
fetch(`https://dummyjson.com/recipes/tag/${tagg}`)
.then(res => res.json())
.then(function(data){
    categoriaunidad = " ";
    let comidaii = data.recipes;
        for (let i=0; i<data.length; i++){
            let cat = 
            `<h1 class="titulounidad">${comidaii.tag}</h1>
            <article class="catunidad">
                <img class="imagenunidad" src =${comidaii.image}>
                <h2 class="titulitounidad">${comidaii.name}</h2>
                <p class="difiunidad">Dificultad: ${comidaii.difficulty}</p>
                <p class = "detalleunidad"> <a class="botonunidad" href="detalle.html?id=${comidaii.id}"> Ver más </a></p>
            </article>
            `;
            categoriaunidad += cat;
            secunidad.innerHTML = categoriaunidad;
            
        } 
})
.catch((error) => console.log('Mi error fue:', error));