let margarida = {
    personagem: 'Margarida',
    origem: 'Pato Donald',
    nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
  };

  let tioPatinhas = {
    personagem: 'Tio Patinhas',
    origem: "Christmas on Bear Mountain, Dell's Four Color Comics #178",
    nota: 'O último MacPatinhas',
  };


let recorrente = 'sim'

margarida.recorrente = recorrente
tioPatinhas.recorrente = recorrente

for (let keys in margarida){
    console.log(margarida[keys] + ' e ' + tioPatinhas[keys])
}