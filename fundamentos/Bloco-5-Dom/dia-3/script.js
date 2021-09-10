function createDaysOfTheWeek() {
    const weekDays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']
    const weekDaysList = document.querySelector('.week-days');
  
    for (let index = 0; index < weekDays.length; index += 1) {
      const days = weekDays[index];
      const dayListItem = document.createElement('li');
      dayListItem.innerHTML = days;
  
      weekDaysList.appendChild(dayListItem);
    };
  };
  
  createDaysOfTheWeek();
  // Escreva seu código abaixo.
  //exercício 1

  let monthContainer = document.querySelector('ul')
  const dezDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];;
  for(i = 0; i < dezDaysList.length;i += 1) {
      let li = document.createElement('li')
      monthContainer.appendChild(li)
      li.innerText = dezDaysList[i]    
      li.className = 'day '
      if (dezDaysList[i] == 4 || li.innerText == 11 || li.innerText == 18 || li.innerText == 25) {
        li.className += 'friday ';
      } if (dezDaysList[i] == 24 || li.innerText == 25 || li.innerText == 31){
        li.className += 'holiday ';
      }
  }

  //exercício 2
  let feriados = 'Feriados'
  function buttonHolidays(string) {
    let buttonsContainer = document.querySelector('.buttons-container')
    let button = document.createElement('button')
    button.id = 'btn_holiday'
    button.innerText = string
    buttonsContainer.appendChild(button)
  }

  buttonHolidays(feriados)

  //exercicio 3
  function addEventListenerButtonHolidays() {
    let buttonsContainer = document.querySelector('.buttons-container')
    buttonsContainer.firstElementChild.addEventListener('click', changeColor)
    
    
    function changeColor() {
        for (let i = 0; i < monthContainer.children.length; i += 1) {
            if (monthContainer.children[i].style.backgroundColor === 'rgb(238, 238, 238)'){
                monthContainer.children[i].style.backgroundColor = 'green'
                console.log('deu certo');
            }
            else if (monthContainer.children[i].className.includes('holiday')) {
                monthContainer.children[i].style.backgroundColor = 'rgb(238,238,238)'
            }
        }
    }
  }

  addEventListenerButtonHolidays()

  //exercicio 4
  let sextaFeira = 'Sexta-feira'
  function buttonFridays(string) {
    let buttonsContainer = document.querySelector('.buttons-container')
    let button = document.createElement('button')
    button.id = 'btn_friday'
    button.innerText = string
    buttonsContainer.appendChild(button)
  }

  buttonFridays(sextaFeira)

  //exercicio 5
  function addEventListenerButtonFrydays() {
    let buttonsContainer = document.querySelector('.buttons-container')
    buttonsContainer.lastElementChild.addEventListener('click', changeText)
    
    function changeText() {
        for (let i = 0; i < monthContainer.children.length; i += 1) {
            if (monthContainer.children[i].innerHTML == 'Sexta-feira'){
                monthContainer.children[i].innerText = i + 1;
            }
            else if (monthContainer.children[i].className.includes('friday')) {
                monthContainer.children[i].innerText = 'Sexta-feira'
                console.log(monthContainer.children[i].innerHTML);;
            }
        }
    }
  }

  addEventListenerButtonFrydays()
  
  //exercicio 6
  function addEventListenerZoomIn (){
    monthContainer.children.addEventListener('mouseover', zoomIn)
  }

  function zoomIn(evento) {
      console.log(evento.target);
  }

  addEventListenerZoomIn()