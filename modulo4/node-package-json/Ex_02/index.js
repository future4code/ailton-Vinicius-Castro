// - **Exercício 2**
    
//     Crie uma aplicação Node que recebe uma string representando uma operação matemática e dois valores numéricos.
//      O retorno deverá ser o resultado da operação selecionada utilizando os 2 valores fornecidos.

function exeOperacao() {
const operacao = process.argv[2]
const a = Number(process.argv[3])
const b = Number(process.argv[4])

switch (operacao){
    case "adic":
        return a + b
    case "sub":
        return a - b
    case "mult":
        return a * b
    case "div":
        return a / b 
    default:
        return "Por favor insira os dados primeiro!"

    }
}

    console.log(exeOperacao())