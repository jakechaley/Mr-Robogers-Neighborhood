// BUSINESS LOGIC

function numberPrinter(number) {
  let numberList = [];
  for (let currentNumber = 1; currentNumber <= number; currentNumber ++) {
    console.log(currentNumber);
    numberList.push(currentNumber);
  };
  return numberList;
};


// UI LOGIC

$(document).ready(function () {
  $('form#input').submit(function (event) {
    event.preventDefault();
    const number = $('#number').val();
    let result = numberPrinter(number)
    $('#results').empty();
    result.forEach(function(number) {
      $('#results').append([number]);
      
      // console.log(number)

    });
  });
});