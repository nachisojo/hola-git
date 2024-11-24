let queryString = location.search
let queryStringObj = new URLSearchParams(queryString);
let id = queryStringObj.get("id")



let botondetalle = document.querySelector(".botondetalle");
let maindetalle = document.querySelector(".detalle");
fetch(`https://dummyjson.com/recipes/${id}`)
.then(function(response) {
    return response.json()
  })
  .then(function(data){
   
    botondetalle.addEventListener('click', function(data){
      let detallecomida = data.recipes[i];
      let detallee = '';
      let infocomida =  
      `<article class="detalleee">
      <h1 class="nombreecomida"><bold>${detallecomida.name}</bold></h1>
      <p class="instrucciones">Instrucciones: ${detallecomida.instructions}</p>
      <p class="tiempoc">El tiempo de cocción es ${detallecomida.prepTimeMinutes}</p>
      <img class="fotocomida">${detallecomida.image}>
      <p class="categoriia"> Categoria: ${detallecomida.tags}</p>
      </article>`
      detallee += infocomida;
      maindetalle.innerHTML = detallee;

    })
    
  })
.catch(function(e){
    console.log(e)
})