let queryString = location.search;
let queryStringObj = new URLSearchParams(queryString);
let tagg = queryStringObj.get("tag");
fetch('https://dummyjson.com/recipes/search?q=Margherita')
.then(res => res.json())
.then(console.log);