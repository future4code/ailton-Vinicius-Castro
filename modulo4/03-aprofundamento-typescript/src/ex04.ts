type pokemon = {
	name: string,
  types: string,
	healthPoints: number
}

const pokemon1: pokemon = {
  name: "Charmander",
  types: "Fire",
  healthPoints: 28
}

const pokemon2: pokemon = {
  name: "Bulbasaur",
  types: "Grass/Poison",
  healthPoints: 31
}

const pokemon3: pokemon = {
  name: "Squirtle",
  types: "Water",
  healthPoints: 35
}


// b) Como você faria, já com a extensão instalada,,
//  para transpilar(converter) esse arquivo typescript em um arquivo javascript?

// Resposta: com o comando tsc && node ./build/nomedoarquivo.js no arquivo package.json

// c) E se este arquivo estivesse dentro de uma pasta chamada `src`.
//  O processo seria diferente? Se sim, descreva as diferenças.

// Resposta: Não haveria comunicação se levar em conta a testrutura de dados.

// d) Existe alguma maneira de transpilar múltilplos arquivos de uma vez só?
//  Caso conheça, explique como fazer.

