const a = 1
const b = 2
const c = 3
const d = 4
const e = 5
const f = 6
const g = 7
const h = 8
const i = 9


function somarElementos(...elementos) {
    console.log(elementos);
    return elementos.reduce((num1, num2) => {
        console.log(num1);
        return num1 + num2 
    })
}

console.log(somarElementos(a, b, c, d, e, f, g, h, i)); 