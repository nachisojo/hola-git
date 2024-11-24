let queryString = location.search
let queryStringObj = new URLSearchParams(queryString);
let id = queryStringObj.get("tags")

let comidai = document.querySelector(".tiposcomidas")

fetch('https://dummyjson.com/recipes/tags')
.then(res => res.json())
.then(function(data){
        for (let i=0; i<data.length; i++){
            
        } 
    }
});
.catch(function (error){
    console.log("Mi error fue", error);
})
