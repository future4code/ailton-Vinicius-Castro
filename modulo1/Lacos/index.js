// let i = 0
// while (i <10){
// console.log(i)
// i++

// }


// let numeroUsuario = +prompt("digite um numero")
// const numerosDigitados = []
// numeroUsuario.push(numeroUsuario)
// while(numeroUsuario !== 0) {
    
//     numeroUsuario = +prompt("digite um numero")
    
//     numeroUsuario.push(numeroUsuario)

// }

// let numeroUsuario = +prompt("Digite um numero:")
// const numerosDigitados = []

// while (numeroUsuario !== 0) {
//   numeroUsuario = +prompt("Digite um numero:")

//   numerosDigitados.push(numeroUsuario)
// }

// // console.log(numerosDigitados)


// let soma = 0
// while(contador < numerosDigitados.length){
//     soma = numerosDigitados[contador] 

//      contador++
// }
// console.log(soma)

// for(let contador = 0; contador; contador < numerosDigitados.length; contador++){
//     soma = soma +numerosDigitados[contador]
// }


// const maior = (arr) => {
//     let maior = 0
  
//     for(let i = 0; i < arr.length; i++) {
//       const elemento = arr[i]
//       if (elemento > maior) {
//         maior = elemento
//       }
//     }
  
//     console.log(maior)
//   }
  
//   maior([11, 15, 18, 14, 12, 13])
  
const juntaPalavras = (arr) =>
let frase = ""
for(let palavra of arr) {

    frase = frase + " "
    frase = frase + palavra
}
console.log(frase)

juntaPalavras(["oi", "tudo bem"])


// while: Realiza uma ação até que a condição dentro dos 
// seus parênteses se tornar falsa

// for: Usado para realizar loops cujas condições estejam 
// diretamente relacionadas a números e a um 
// incremento fixo

// for... of... : Permite percorrer os elementos de um array 
// de uma forma bem mais simples de se ler