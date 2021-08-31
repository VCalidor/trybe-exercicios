let stringWord = 'trybe'
let stringEnding = 'robe' 

function sufixosIguais(word, ending){
    let v = 1
    for(i = word.length ;i > word.length - ending.length; i -= 1) {
        if(word[i - 1] == ending[ending.length - v]){
            v += 1
            continue
        }

        else {
            return false
        }
    }
    return true
}

console.log(sufixosIguais(stringWord, stringEnding))