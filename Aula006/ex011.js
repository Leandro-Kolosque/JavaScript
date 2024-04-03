var idade = 19;

console.log(`Sua idade atual é ${idade} anos`)

if (idade < 16) {
    console.log(`Você ainda não tem idade para votar`)
} else if (idade < 18 || idade > 65) {
    console.log(`Voto Opcional`)
} else {
    console.log(`Voto Obrigatório`)
}
