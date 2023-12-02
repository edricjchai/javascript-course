showCalculation();

function getCalculation(){
  return localStorage.getItem('calculation') || '';
}

function showCalculation(){
  document.querySelector('.display-calc')
    .innerHTML = getCalculation();
}

function updateCalculation(calcVar=''){
  let calculation = getCalculation();

  if(calcVar === ' + '){
    calculation += ' + ';
  } else {
    calculation += calcVar;
  }
  localStorage.setItem('calculation', calculation);
  document.querySelector('.display-calc')
    .innerHTML = calculation;
}