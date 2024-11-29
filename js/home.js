let formuhome = document.querySelector(".formhome")
let resphomee = document.querySelector(".resphome")
let searchinput = document.querySelector(".searchinput")


let containerrecetas = document.querySelector(".containerrecetas");
 
    let search2 = document.getElementById("buscador")
    let home = document.querySelector(".home")
    formuhome.addEventListener('submit', function(e){
        e.preventDefault();
        let errors= false
        if (search2.value === ""){
            home.innerText= "Completar campo"
            home.style.display = "block"
            errors = true
        }else  
        home.style.display = "none"
     
        
        if (search2.value.length <4){
            home.innerText= "Mínimo de letras: 3"
            home.style.display = "block"
            errors = true
        }else  
        home.style.display = "none"
    
        if (!errors){
        this.submit()
        }
    })
const containermas = document.querySelector('.containertres')

const boton = document.querySelector('.get_more')

let skip = 0

function getData(){
  fetch(`https://dummyjson.com/recipes?limit=10&skip=${skip}`)
  .then((response)=>{
    return response.json()
  })
  .then(function(data){
    let contenidos = ""
    for (let i=0; i < data.recipes.length; i++){
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
    containerrecetas.innerHTML += contenidos;
  })
}

getData(); 


boton.addEventListener('click', function(e){
e.preventDefault()
  skip += 10
  getData() 
})
