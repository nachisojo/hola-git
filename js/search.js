let queryString = location.search;
let queryStringObj = new URLSearchParams(queryString);
let tagg = queryStringObj.get("id");

fetch('https://dummyjson.com/recipes/search?q=Margherita')
.then(res => res.json())
.then());