const palio = ['Palio', 'Fiat', 2019];
const shelbyCobra = ['Shelby Cobra', 'Ford', 1963];
const chiron = ['Chiron', 'Bugatti', 2016];

// escreva toObject abaixo
const toObject = ([car, brand, year]) => {
    return {
        'car': car,
        'brand': brand,
        'year': year,
    }
}

console.log(toObject(palio));
console.log(toObject(chiron));
console.log(toObject(shelbyCobra));
