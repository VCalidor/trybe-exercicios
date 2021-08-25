const salarioBruto = 3000.00
let salarioLiquido = 0
let salarioFinal = 0

//INSS
if (salarioBruto <= 1556.94){
    salarioLiquido = salarioBruto * .92 
}
else if (salarioBruto <= 2594.92){
    salarioLiquido = salarioBruto * .91
}
else if (salarioBruto <= 5189.82){
    salarioLiquido = salarioBruto * .89
}
else {
    salarioLiquido = salarioBruto - 570,88
}

// IMPOSTO DE RENDA
if (salarioLiquido <= 1903.98) {
    salarioFinal = salarioLiquido
}
else if (salarioLiquido <= 2826.65){
    salarioFinal = salarioLiquido * 0.925 + 142.8
}
else if (salarioLiquido <= 3751.05){
    salarioFinal = salarioLiquido * 0.85 + 354.8
}
else if (salarioLiquido <= 4664.68){
    salarioFinal = salarioLiquido * 0.775 + 636.13
}

else {
    salarioFinal = salarioLiquido * 0.725 + 869.36
}

console.log(salarioFinal)