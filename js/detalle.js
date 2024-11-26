let queryString = location.search
let queryStringObj = new URLSearchParams(queryString);
let id = queryStringObj.get("id")

let nombreDetalle= document.querySelector(".nombre_detalle")
let imagenDetalle = document.querySelector(".imagen_detalle")
let instruccionesDetalle = document.querySelector(".instrucciones_detalle")
let tiempo_coccionDetalle = document.querySelector(".tiempo_coccion")
let categoriasDetalle = document.querySelector(".categorias_detalle")

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
