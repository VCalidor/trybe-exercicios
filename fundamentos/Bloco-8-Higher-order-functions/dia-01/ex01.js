const employees = {
  id1: '', // Nome: Pedro Guerra -> Chame sua função passando o nome Pedro Guerra como parâmetro, substituindo as aspas
  id2: '', // Nome: Luiza Drumond -> Chame sua função passando o nome Luiza Drumond como parâmetro, substituindo as aspas
  id3: '', // Nome: Carla Paiva -> Chame sua função passando o nome Carla Paiva como parâmetro, substituindo as aspas
}

const newEmployees = (name, criarPessoas) => {  
  criarPessoas(name, employees) 
  return employees;   
  };

const criarPessoas = (name, employees) => {
  const newString = name.split(' ')
  let finalString = newString[0]
  for (let j = 0; j < newString.length; j++) {
    if (j === 0) {
        finalString = newString[j]; 
    } else {
        finalString += '_' + newString[j]
    }
  }
  adicionarPessoa(name, finalString, employees);
}

function adicionarPessoa(name, finalString, employees) {
  if (Object.values(employees)[0] === '') {
    employees.id1 = {
      nome: name,
      email: finalString + '@email.com',
  }} else if (Object.values(employees)[1] === '') {
    employees.id2 = {
      nome: name,
      email: finalString + '@email.com',
  }} else {
    employees.id3 = {
      nome: name,
      email: finalString + '@email.com',
    }
  }
}

newEmployees('Pedro Guerra', criarPessoas);
newEmployees('Luiza Drumond', criarPessoas);
newEmployees('Carla Paiva', criarPessoas);
console.log(employees)
