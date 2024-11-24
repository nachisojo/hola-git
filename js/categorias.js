let comidai = document.querySelector(".italiana");

fetch('https://dummyjson.com/recipes/tag/Pakistani')
.then(res => res.json())
.then(function(data){
    if(tags === comidai){
        data.append(comidai)
    }
});
.catch(function (error){
    console.log("Mi error fue", error);
})
