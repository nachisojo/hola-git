let queryString = location.search;
let queryStringObj = new URLSearchParams(queryString);
let query = queryStringObj.get("q");
let searchh = document.querySelector(".searchfinal")
let comidas_search = ""
fetch(`https://dummyjson.com/recipes/search?q=${query}`)
.then(res => res.json())
.then(function(data){
    
    for (let i=0; i < data.recipes.length ; i++){
        let seaarch = data.recipes[i];
        
        let ressearch =
            `<article class="contenidorec">
                <img src = ${seaarch.image}>
                <p class = "nombre"> ${seaarch.name} </p>
                <P class = "dificultad"> Nivel de dificultad: ${seaarch.difficulty} </p>
                <p class = "info"> <a class="botondetalle" href="detalle.html?id=${seaarch.id}"> Ver más </a></p>
            </article>`;
        comidas_search += ressearch
    }
    searchh.innerHTML = comidas_search

});
