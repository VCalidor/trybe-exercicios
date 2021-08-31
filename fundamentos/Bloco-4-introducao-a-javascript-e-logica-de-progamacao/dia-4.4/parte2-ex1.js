function isWordPalindrome(word){
    if (word == revertWord(word)){
        console.log(true)
    }
    else {
        console.log(false)
    }
}

function revertWord(palavra){
    let word2 = ''
    for (i = palavra.length - 1;i >= 0;i -= 1){
        word2 += palavra[i]
    } 
    return word2
}

let arara = 'arara'
let desenvolvimento = 'desenvolvmento'
isWordPalindrome(arara);
isWordPalindrome(desenvolvimento)