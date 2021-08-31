let num = 1832432193324321

function somar(number){
    let soma = 0
        for (i = 0; i <= num; i += 1){
            soma += i 
        }
    return soma
}

console.log(somar(num));