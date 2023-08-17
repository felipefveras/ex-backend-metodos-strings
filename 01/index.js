let comentario = "Essa pandemia é muito perigosa!";

if (comentario.includes("COVID" || "Covid" || 'covid') || comentario.includes("pandemia" || "PANDEMIA" || 'Pandemia')) {
    console.log('comentario bloqueado por conter palavras proibidas')
} else {
    console.log('comentario autorizado')
}