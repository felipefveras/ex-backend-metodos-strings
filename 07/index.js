const email = "mes.sias@cubos"

let bandeira = 0
let bandeira1 = 0
for (let itens of email) {
    if (itens === '@') bandeira++
    if (itens === '.') bandeira1++
}

if (bandeira === 1 && bandeira1 >= 1 && email.indexOf('.') !== 0 && email.indexOf('.', email.length - 2) !== email.length - 1) {
    console.log('email valido')

} else {
    console.log('email invalido')
}

