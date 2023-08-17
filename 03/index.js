const texto = "desenvolvimento de software cubos academy";

const palavraDoTexto = texto.split(" ")

let nomeTotal = " "
cont = 0

for (let i = 0; i < palavraDoTexto.length - 1; i++) {

    nomeTotal += palavraDoTexto[i] + "-"

}

console.log(nomeTotal + palavraDoTexto[palavraDoTexto.length - 1])