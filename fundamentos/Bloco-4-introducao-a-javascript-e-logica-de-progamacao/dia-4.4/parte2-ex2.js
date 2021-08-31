let array = [7, 4, 8, 15, 3, 12, 9]

function indiceDoMaiorNumero(array){
    let maiorValor = array[0]
    let indice = 0
    for(i = 0; i < array.length;i += 1){
        if (array[i] > maiorValor){
            maiorValor = array[i]
            indice = i
        }
    }
    return indice
}

console.log(indiceDoMaiorNumero(array))