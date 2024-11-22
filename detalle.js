let queryString = location.search
let queryStringObj = new URLSearchParams(queryString);
let id = queryStringObj.get("id")

let nombreDetalle= document.querySelector(".Detalle")
let imagenDetalle = document.querySelector(".imagen_receta")
let instruccionesDetalle = document.querySelector(".Instrucciones")
let tiempo_coccionDetalle = document.querySelector(".Tiempo")
let categoriasDetalle = document.querySelector(".Categorias")

let detalleIndividual={
    name: "",
    image:"",
    instructions: "",
    cookTimeMinutes: "",
    mealType: "",
}
fetch(`https://dummyjson.com/recipes/${id}`)
.then(function(response) {
    return response.json()
  })
  .then(function(data){
   
    
    detalleIndividual.name = data.name
    nombreDetalle.innerText = detalleIndividual.name

    detalleIndividual.image = data.image
    imagenDetalle.innerHTML = `<img src=${detalleIndividual.image} />`

    detalleIndividual.instructions = data.instructions
    instruccionesDetalle.innerText = detalleIndividual.instructions

    detalleIndividual.cookTimeMinutes = data.cookTimeMinutes
    tiempo_coccionDetalle.innerText = detalleIndividual.cookTimeMinutes

    detalleIndividual.mealType = data.mealType
    categoriasDetalle.innerText = detalleIndividual.mealType

  })
.catch(function(e){
    console.log(e)
})