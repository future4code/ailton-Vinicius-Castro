import axios from 'axios'

axios.get("http://localhost:3003/ping").then((res) => {
    console.log(res.data)
})

axios.post("http://localhost:3003/contas", {
    nome: "Francisco",
    cpf: "12345678930",
    dataNascimento: "01/01/2000"
}).then((res) => {
    console.log(res.data)
}).catch((err) => {
    console.log(err.response.data)
})

axios.get("http://localhost:3003/contas/100").then((res) => {
    console.log(res.data)
}).catch((err) => {
    console.log(err.response.data)
})

axios.put("http://localhost:3003/contas/100", {
    saldoAdicional: 5000
}).then((res) => {
    console.log(res.data)
}).catch((err) => {
    console.log(err.response.data)
})

axios.put("http://localhost:3003/contas/1/pagamento", {
    descricao: "iFood - Peixe na rede",
    valor: 120
}).then((res) => {
    console.log(res.data)
}).catch((err) => {
    console.log(err.response.data)
})