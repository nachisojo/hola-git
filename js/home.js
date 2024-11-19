formhom = document.querySelector(".formhome");
respi = document.querySelector(".resphome")
bodyhome = document.querySelector(".home")
formhom.addEventListener('submit', function(event){
    if (formhom.value == ""){
        respi.innerText = "Tenes que completar el campo."
        bodyhome.style.display = "block";
        event.preventDefault()
        return;
    }
})
const recetas = document.querySelector(".containerrecetas")
fetch('https://dummyjson.com/recipes')

.then(res => res.json())

.then(console.log)

.catch(console.error);

