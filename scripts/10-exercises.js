/*
const button = document.querySelector('.js-button');
console.log(button.classList.contains('js-button'));
*/

function toggleButton(selection)
{
  const button = document.querySelector(selection);
    if(!button.classList.contains('toggle-button-on')){
      turnOffPrevButton();
      button.classList.add('toggle-button-on');
    }
    else{
      button.classList.remove('toggle-button-on');
    }
}

function turnOffPrevButton(){
  const previousButton = document.querySelector('.toggle-button-on');
  if(previousButton){
    previousButton.classList.remove('toggle-button-on');
  }
}