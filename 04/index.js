let identificador = "123";
let nome = "felipe ferreira Veras";
let email = "      felipesarev     @email.com              ";

if (identificador.length < 6) {
    console.log(identificador.padStart(6, "0"))
}

let arrayNome = nome.split(" ")
let nomeCompleto = ""

for (let item of arrayNome) {
    nomeCompleto += item.slice(0, 1).toUpperCase() + item.slice(1) + " "
}

console.log(nomeCompleto)
console.log(email.trim())

