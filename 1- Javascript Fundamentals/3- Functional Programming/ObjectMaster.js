const pokemon = Object.freeze ([
    { "id" : 1 , "name" : "Bulbasaur" , "types" : [ "poison" , "grass" ] },
    { "id" : 5 , "name" : "Charmeleon" , "types" : [ "fire" ] },
    { "id" : 9 , "name" : "Blastoise" , "types" : [ "water" ] },
    { "id" : 12 , "name" : "Butterfree" , "types" : [ "bug" , "flying" ] },
    { "id" : 16 , "name" : "Pidgey" , "types" : [ "normal" , "flying" ] },
    { "id" : 23 , "name" : "Ekans" , "types" : [ "poison" ] },
    { "id" : 24 , "name" : "Arbok" , "types" : [ "poison" ] },
    { "id" : 25 , "name" : "Pikachu" , "types" : [ "electric" ] },
    { "id" : 37 , "name" : "Vulpix" , "types" : [ "fire" ] },
    { "id" : 52 , "name" : "Meowth" , "types" : [ "normal" ] },
    { "id" : 63 , "name" : "Abra" , "types" : [ "psychic" ] },
    { "id" : 67 , "name" : "Machamp" , "types" : [ "fighting" ] },
    { "id" : 72 , "name" : "Tentacool" , "types" : [ "water" , "poison" ] },
    { "id" : 74 , "name" : "Geodude" , "types" : [ "rock" , "ground" ] },
    { "id" : 87 , "name" : "Dewgong" , "types" : [ "water" , "ice" ] },
    { "id" : 98 , "name" : "Krabby" , "types" : [ "water" ] },
    { "id" : 115 , "name" : "Kangaskhan" , "types" : [ "normal" ] },
    { "id" : 122 , "name" : "Mr. Mime" , "types" : [ "psychic" ] },
    { "id" : 133 , "name" : "Eevee" , "types" : [ "normal" ] },
    { "id" : 144 , "name" : "Articuno" , "types" : [ "ice" , "flying" ] },
    { "id" : 145 , "name" : "Zapdos" , "types" : [ "electric" , "flying" ] },
    { "id" : 146 , "name" : "Moltres" , "types" : [ "fire" , "flying" ] },
    { "id" : 148 , "name" : "Dragonair" , "types" : [ "dragon" ] }
]);

console.log("An array of Pokémon objects where the id is divisible by 3");
console.log("Una matriz de objetos Pokémon donde la identificación es divisible por 3");
const IdDividedByThree = pokemon.filter(p => p.id%3 === 0);
console.log(IdDividedByThree);
console.log("\n <-----------------------------------------------------------------------------------------------------------------------> \n")

console.log("An array of Pokémon objects that are of the Fire type");
console.log("Una matriz de objetos Pokémon que son del tipo Fuego");
const PokemonByFire = pokemon.filter(p => p.types.includes("fire"));
console.log(PokemonByFire);
console.log("\n <-----------------------------------------------------------------------------------------------------------------------> \n")

console.log("An array of Pokémon objects that have more than one type");
console.log("Una matriz de objetos Pokémon que tienen más de un tipo");
const PokemonTwoTypes = pokemon.filter(p => p.types.length >= 2);
console.log(PokemonTwoTypes);
console.log("\n <-----------------------------------------------------------------------------------------------------------------------> \n")

console.log("An array with just the names of the pokemon");
console.log("Una matriz con solo los nombres de los Pokémon");
const OnlyPokemonNames = pokemon.map(p => p.name);
console.log(OnlyPokemonNames);
console.log("\n <-----------------------------------------------------------------------------------------------------------------------> \n")

console.log("An array with only the names of pokemon with an id greater than 99");
console.log("Una matriz con solo los nombres de Pokémon con una identificación mayor que 99");
const IdOverNinetyNine = pokemon.filter(p => p.id > 99).map(p => p.name);
console.log(IdOverNinetyNine);
console.log("\n <-----------------------------------------------------------------------------------------------------------------------> \n")

console.log("An array with only the names of the pokemon whose only type is poison");
console.log("Una matriz con solo los nombres del pokémon cuyo único tipo es veneno");
const OnlyPoisonPokemon = pokemon.filter(p => p.types.length === 1 && p.types[0] === "poison").map(p => p.name);
console.log(OnlyPoisonPokemon);
console.log("\n <-----------------------------------------------------------------------------------------------------------------------> \n")

console.log("An array containing only the first type of all Pokémon whose second type is flying");
console.log("Una matriz que contiene solo el primer tipo de todos los Pokémon cuyo segundo tipo es volador");
const FirstTypeFlyingPokemon = pokemon.filter(p => p.types.length === 2 && p.types[1] === "flying").map(p=> p.types[0])
console.log(FirstTypeFlyingPokemon);
console.log("\n <-----------------------------------------------------------------------------------------------------------------------> \n")

console.log("A count of the number of pokémon that are normal type");
console.log("Un recuento de la cantidad de pokémon que son de tipo normal");
const CountNormalPokemon = pokemon.filter(p => p.types[0] === "normal").length
console.log(CountNormalPokemon);