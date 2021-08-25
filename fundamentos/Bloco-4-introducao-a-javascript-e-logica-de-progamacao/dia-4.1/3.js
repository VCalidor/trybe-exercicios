const a = 8
const b = 8
const c = 8

switch (a > b) {
    case true: 
        if (a > c) {
            console.log("A variável 'a' é a maior.")
        }
        else if (a < c) {
            console.log("A variável 'c' é a maior.")

        }
        else {
            console.log("A variável 'a' é igual a c.")

        }
        break
    case false:
        if (b > a) {
            if (b > c) {
            console.log("A variável 'b' é a maior.")
            }
        else if (c > b){
            console.log("A variável 'c' é a maior.")     
        }
        else if (b == c) {
            console.log("A variável 'b' é igual a variável 'c'.")
            }
            if (b == a) {
            console.log("Todas variáveis são iguais")
            }
        }
        break
}