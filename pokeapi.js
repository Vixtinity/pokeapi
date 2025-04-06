      const fetchData = async (id) => {
      try {
      const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
      if (!res.ok) throw new Error("Pokémon no encontrado");
      const data = await res.json();
      const pokemon = {
      numero: data.id,
      img: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${data.id}.png`,
      nombre: data.name,
      };
      document.getElementById("pokemons").innerHTML += `
      <div>
      <h3>${pokemon.nombre.toUpperCase()} (#${pokemon.numero})</h3>
      <img src="${pokemon.img}" alt="${pokemon.nombre}" width="200">
      </div>
      `;
      } catch (error) {
      console.error(error);
      }
      };
      const fetchData2 = async () => {
      const res = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=10`)
      const data = await res.json()
      let pokemon;
      //Recorrer cada pokemon
      document.getElementById("tabla").innerHTML +=data.results.map((x,index)=> {
      pokemon = {
      numero: index+1,
      img: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${index+1}.png`,nombre: x.name,
      }
      return `<tr> <td> ${pokemon.numero} </td> <td>${pokemon.nombre}</td> <td><img src=${pokemon.img} alt="pokemon" width="200"/></td> </tr>`;
      }).join("");//Mira el efecto si no se hace este join
      }

//genera numeros aleatorios dentro del rango a y b que sone l inicio y fin de una generacion
const getPokemonAleatorioEnRango = (a, b) => {
   return Math.floor(Math.random() * (a - b + 1)) + b;
 };
 
   //con a y b me refiero al primer y ultimo pokemon de la generacion, limitandolo a que carguen 10 pokemons
 const cargarGeneracion = (a, b) => {
   document.getElementById("pokemons").innerHTML = "";
   // en ids.generados se guardan los ids generados y como Set no permite numeros duplicados pues no aparecera
      const idsGenerados = new Set();
         
   while (idsGenerados.size < 10) {
     idsGenerados.add(getPokemonAleatorioEnRango(a, b));
   }
   idsGenerados.forEach((id) => fetchData(id));
 };
 
 document.getElementById('primera').addEventListener('click', () => {
   cargarGeneracion(1, 151)
 });
 
 document.getElementById("segunda").addEventListener("click", () => {
   cargarGeneracion(152, 252);
 });
 
 document.getElementById("tercera").addEventListener("click", () => {
   cargarGeneracion(253, 387);
 });
 

      const getpokemonAleatorio = () => Math.floor(Math.random() * 1010) + 1;
for (let i = 0; i < 10; i++) {
  const pokemonAleatorio = getpokemonAleatorio();
  fetchData(pokemonAleatorio);
}

      