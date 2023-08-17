const celular = 99918888;

let celularEmString = String(celular)

let celularFormatado = ""
if (celularEmString.length === 8) {

    celularFormatado = "9" + " " + celularEmString.slice(0, 4) + "-" + celularEmString.slice(4, 8)
    console.log(celularFormatado)
}
else if (celularEmString.length === 10) {
    celularFormatado = '(' + celularEmString.slice(0, 2) + ')' + " " + "9" + " " + celularEmString.slice(2, 6) + "-" + celularEmString.slice(6, 10)
    console.log(celularFormatado)
}
