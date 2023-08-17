const numeroCartao = '7777222233334444'

let numeroEscondido = ""
let ultimosDigitos = numeroCartao.slice(12, 16)

numeroEscondido = numeroCartao.slice(0, 4) + ultimosDigitos.padStart(12, "*")
console.log(numeroEscondido)