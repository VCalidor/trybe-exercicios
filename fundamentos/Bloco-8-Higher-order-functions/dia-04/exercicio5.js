const names = [
    'Aanemarie', 'Adervandes', 'Akifusa',
    'Abegildo', 'Adicellia', 'Aladonata',
    'Abeladerco', 'Adieidy', 'Alarucha', 
  ];
  
  function containsA() {
    // escreva seu código aqui
    const amountOfA = names.reduce((quantidade, nome2) => {
        let quantidadeDeA = 0;
        const nameSeparated = nome2.toLowerCase().split('a')
        console.log(nameSeparated);
        quantidadeDeA += nameSeparated.length - 1;

        return quantidade + quantidadeDeA;
    }, 0)

    return amountOfA;
  }

  console.log(containsA())
