let queryString = location.search
let queryStringObj = new URLSearchParams(queryString);
let id = queryStringObj.get("tags")

let comidai = "italian"

fetch('https://dummyjson.com/recipes/tag/Pakistani')
.then(res => res.json())
.then(function(data){
    if(id === comidai){
        data.append(comidai)
    }
});
.catch(function (error){
    console.log("Mi error fue", error);
})
