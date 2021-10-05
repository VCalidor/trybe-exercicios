const assert = require('assert');

const books = [
  {
    id: 1,
    name: 'As Crônicas de Gelo e Fogo',
    genre: 'Fantasia',
    author: {
      name: 'George R. R. Martin',
      birthYear: 1948,
    },
    releaseYear: 1991,
  },
  {
    id: 2,
    name: 'O Senhor dos Anéis',
    genre: 'Fantasia',
    author: {
      name: 'J. R. R. Tolkien',
      birthYear: 1892,
    },
    releaseYear: 1954,
  },
  {
    id: 3,
    name: 'Fundação',
    genre: 'Ficção Científica',
    author: {
      name: 'Isaac Asimov',
      birthYear: 1920,
    },
    releaseYear: 1951,
  },
  {
    id: 4,
    name: 'Duna',
    genre: 'Ficção Científica',
    author: {
      name: 'Frank Herbert',
      birthYear: 1920,
    },
    releaseYear: 1965,
  },
  {
    id: 5,
    name: 'A Coisa',
    genre: 'Terror',
    author: {
      name: 'Stephen King',
      birthYear: 1947,
    },
    releaseYear: 1986,
  },
  {
    id: 6,
    name: 'O Chamado de Cthulhu',
    genre: 'Terror',
    author: {
      name: 'H. P. Lovecraft',
      birthYear: 1890,
    },
    releaseYear: 1928,
  },
];

// Adicione o código do exercício aqui:
const expectedResult = false;

function authorUnique() {
  // escreva seu código aqui
  let trueOrFalse = true;
  const booksSorted = books.sort(function(book1, book2) {
    return book1.author.birthYear - book2.author.birthYear;
  })
  
  let lastAuthor = 12233131323;
  
  booksSorted.forEach(object => {
      if (object.author.birthYear === lastAuthor) {
          return true;
      } 
  })

  booksSorted.forEach(object => {

      console.log(lastAuthor);
    if (object.author.birthYear === lastAuthor) {
        trueOrFalse = false;
    } else {
        lastAuthor = object.author.birthYear;
    }
});
    return trueOrFalse;
}

assert.strictEqual(authorUnique(), expectedResult);