let info = {
    personagem: 'Margarida',
    origem: 'Pato Donald',
    nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
  };

let recorrente = 'sim'

info.recorrente = recorrente

for (let keys in info){
    console.log(info[keys])
}