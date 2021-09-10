//atividade1
let body = document.querySelector('body')
let h1 = document.createElement('h1');
h1.innerText = 'Exercício 5.2 - JavaScript DOM';

body.appendChild(h1);

//atividade2
let main = document.createElement('main');
main.className = 'main-content';
body.appendChild(main);

//atividade3
let section = document.createElement('section')
main.appendChild(section)

//atividade4
let p = document.createElement('p')
section.appendChild(p)

//atividade5
let leftSection = document.createElement('section')
leftSection.className = 'left-content';
main.appendChild(leftSection);

//atividade6
let rightSection = document.createElement('section')
rightSection.className = 'right-content';
main.appendChild(rightSection)

//atividade7
let image = document.createElement('img');
image.src = 'https://picsum.photos/200'
image.className = 'small-image'
section.appendChild(image)

//atividade8
let ul = document.createElement('ul')
section.appendChild(ul)
let lista = ['um', 'dois', 'três', 'quatro', 'cinco', 'seis', 'sete', 'oito', 'nove', 'dez']
for (let i = 0; i < 10;i += 1){
    let li = document.createElement('li')
    li.innerText = lista[i];
    ul.appendChild(li)
}

//atividade9
for (let i = 0; i < 3; i += 1) {
    let h3 = document.createElement('h3')
    main.appendChild(h3)
}

//parte2
//atividade1
h1.className = 'title';

//atividade2
let h3 = document.querySelectorAll('h3');
for (let i = 0; i < h3.length ;i += 1){
    h3[i].className = 'description'
}

//atividade3
let removedChild = elemento.removeChild('.left-content');   
removedChild.main.removeChild(filho);

//atividade4
rightSection.style.marginRight = 'auto' 

//atividade5
