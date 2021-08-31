let array = [7, 4, 8, 15, 3, 12, 9]

function indiceDoMenorNumero(array){
    let menorValor = array[0]
    let indice = 0
    for(i = 0; i < array.length;i += 1){
        if (array[i] < menorValor){
            menorValor = array[i]
            indice = i
        }
    }
    return indice
}

console.log(indiceDoMenorNumero(array))