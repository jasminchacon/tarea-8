fetch('https://pokeapi.co/api/v2/pokemon')
.then((response) => response.json()) 
.then((datos) => {
console.log(datos)
})
.catch((error) => console.log(error));
