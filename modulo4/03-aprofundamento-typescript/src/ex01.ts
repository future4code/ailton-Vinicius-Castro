// - **Exercício 1**
    
//     O Typescript é uma linguagem um pouco mais criteriosa que o Javascript, então vamos
//      conhecer um pouco desses critérios.
    
//     a) Crie uma variável **minhaString** do tipo `string` e atribua um valor a ela.
//      Tente atribuir um número a esta variável. O que acontece?
    
//     b) Crie uma variável **meuNumero** do tipo `number` e atribua um valor numérico. 
//     Como fazer para que essa variável também aceite strings? Ou seja, como criamos no
//      typescript uma variável que aceite mais de um tipo de valor?
    
//     c) Agora crie um novo objeto. Este objeto é uma pessoa, e deve possuir três propriedades:
    
//     `nome`, que é uma string;
    
//     `idade`, que é um número;
    
//     `corFavorita`, que é uma string.
    
//     Crie mais três objetos, que também precisam ter apenas os campos definidos acima.
//      Crie um **tipo** `Pessoa` para garantir que todos os objetos tenham os mesmos campos.
    
//     d) Modifique a propriedade `corFavorita` para que apenas seja possível escolher 
//     entre as cores do arco-íris. Utilize um `enum` para isso.


enum cores {
  Violeta = "violeta",
  Anil = "anil",
  Azul = "azul",
  Verde = "verde",
  Amarelo = "amarelo",
  Laranja = "laranja",
  Vermelho = "vermelho",
}

type Usuario = {
    nome: string,
    idade: number,
    corFavorita: cores
}

const meuUsuario: Usuario = {
    nome: "Vinicius",
    idade: 31,
    corFavorita: cores.Azul
}

console.log(meuUsuario)
