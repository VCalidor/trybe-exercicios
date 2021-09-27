const lesson1 = {
  materia: 'Matemática',
  numeroEstudantes: 20,
  professor: 'Maria Clara',
  turno: 'manhã',
};

const lesson2 = {
  materia: 'História',
  numeroEstudantes: 20,
  professor: 'Carlos',
};

const lesson3 = {
  materia: 'Matemática',
  numeroEstudantes: 10,
  professor: 'Maria Clara',
  turno: 'noite',
};

function addKeyValue (object, key, value) {
    object[key]= value
}

function listObjectKeys (object) {
console.log(Object.keys(object));
}

function listObjectValues (object) {
    console.log(Object.values(object));
    }

function showObjectSize (object) {
    console.log(Object.keys(object).length);
}

addKeyValue(lesson2, 'turno', 'noite');

listObjectKeys(lesson2);

listObjectValues(lesson2);

showObjectSize(lesson2);
