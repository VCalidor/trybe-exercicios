function comoEuMeVejoEm2Anos(a) {
    document.getElementsByTagName(a)[0].innerText = 'Rico'
}

function mudarCorDeAmareloParaVermelho(a) {
    document.getElementsByClassName(a)[0].style.backgroundColor = 'rgb(76,164,109)';
}

function mudarCorDeVermelhoParaBranco(a) {
    document.getElementsByClassName(a)[0].style.backgroundColor = '#FFFFFF';
    console.log(document.getElementsByClassName(a)[0].style.backgroundColor)
}

function corrigirTexto(a) {
    document.getElementsByClassName(a)[0].innerText = 'Exercício 5.1 - JavaScript'
}

function paraMaiusculo(a) {
    for (let i = 0; i < document.getElementsByTagName(a).length; i += 1) {
        document.getElementsByTagName(a)[i].style.textTransform = "uppercase"
        console.log(document.getElementsByTagName(a)[i].innerText)
    }
}

comoEuMeVejoEm2Anos('p')
mudarCorDeAmareloParaVermelho('main-content')
mudarCorDeVermelhoParaBranco('center-content')
corrigirTexto('title')
paraMaiusculo('p')  