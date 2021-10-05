function nota(gabarito, respostas, verifyNotes) {

  return verifyNotes(gabarito, respostas);
}

function verificarNota(gabarito, respostas) {
  let nota = 0;
  for (let i = 0; i < gabarito.length; i++) {
    if (respostas[i] === gabarito[i]) {
      nota += 1;
    } else if (respostas[i] == "N.A") {
    } else {
      nota -= .5;
    }
  }
  return nota;
}
const gabarito = ["A", "C", "B", "D", "A", "A", "D", "A", "D", "B"];
const respostas = ["A", "N.A", "B", "D", "A", "C", "N.A", "A", "D", "B"];

console.log(nota(gabarito, respostas, verificarNota));