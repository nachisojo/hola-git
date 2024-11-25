let queryString = location.search;
let queryStringObj = new URLSearchParams(queryString);
let id = queryStringObj.get("tags");

let comidai = document.querySelector(".tiposcomida");
categoriacomida = "";
fetch('https://dummyjson.com/recipes/tags')
.then(res => res.json())
.then(function(data){
        for (let i=0; i<data.length; i++){
            let cate = 
            `<article class="BotonComida">
                <a class="verdaderoboton" href="categoria.html?tags=${data[i]}"> ${data[i]} </a>
            </article>
            `
            categoriacomida += cate;
            comidai.innerHTML = categoriacomida;
        } 
})
.catch((error) => console.log('Mi error fue:', error));


