const arrays = [
    ['1', '2', '3'],
    [true],
    [4, 5, 6],
  ];
  
  function flatten() {
    // escreva seu código aqui
    const somar = (array1, array2) => {
        array1 = array1 + ', ' + array2
        return array1;
    }

    let resultado = arrays.reduce(somar)
    resultado = [resultado]
    return resultado;
  }

  console.log(flatten());