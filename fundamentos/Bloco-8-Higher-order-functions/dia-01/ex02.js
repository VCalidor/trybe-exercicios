function sorteio(number, resulted) {
    let numeroSorteado = Math.round(Math.random() * (5 - 1) + 1); 

    return resulted(number, numeroSorteado);
}

function resultado(number, numeroSorteado) {
    console.log(`O número sorteado foi: ${numeroSorteado}`);
    console.log(`O número que você escolheu foi: ${number}`);
    
    if (number === numeroSorteado) {

        return 'Parabéns você ganhou';
    }
    return 'Tente novamente';
}

console.log(sorteio(5, resultado));
