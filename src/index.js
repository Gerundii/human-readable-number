module.exports = function toReadable (number) {  
  let zero = ["zero"];
  let units = ["one", "two", "three", "four", "five","six", "seven", "eight", "nine"];
  let teens = ["ten", "eleven", "twelve", "thirteen", "fourteen", "fifteen", "sixteen", "seventeen", "eighteen", "nineteen"] 
  let tens = ["twenty", "thirty", "forty", "fifty", "sixty", "seventy", "eighty", "ninety"];
  let bigs = ["hundred"];
    
  let result = "";
  
  let numberLength = (number.toString().length)
  
  function unitsText (number) {
    for (i = 0; i < units.length; i++) {
      if ((number % 10) === i + 1) {
        return result += units [i] + ' ';
      }    
    }  
  }
  
  function teensText (number) {
    for (i = 0; i < teens.length; i++) {
      if ((number % 100) === i + 10) {
        return result += teens [i] + ' ';
      }    
    }  
  }
  
  function tensText (number) {
    for (i = 0; i < tens.length; i++) {
      if (((((number % 100) - (number % 10)) / 10) - 2 ) === (i)) {
        return result += tens [i] + ' ';
      }    
    }  
  }
  
  function bigsText (number) {
    for (i = 0; i < units.length; i++) {
      if (((number - (number % 100)) / 100) === i + 1) {
        return result += units [i] + ' ' + bigs [0] + ' ';
      }    
    }  
  }
  
  switch (numberLength) {
    case 1: {
      if (number === 0) {
        result += zero [0];
      }
      else {
        unitsText(number); 
      }              
    }
      break;
    case 2: {
      if ((number >= 10) && (number <= 19)) {
        teensText(number);      
      }
      else if ((number >= 20) && ((number % 10) === 0)) {
        tensText(number);      
      }
      else {
        tensText(number);      
        unitsText(number);      
      }
      break;
    }
    case 3: {
      if ((number % 100) === 0) {
        bigsText(number);  
      }
      else if ((number % 100) <= 9) {
        bigsText(number);  
        unitsText(number); 
      }
      else if (((number % 100) >= 10) && ((number % 100) <= 19)) {
        bigsText(number);  
        teensText(number);  
      }
      else {
        bigsText(number); 
        tensText(number); 
        unitsText(number); 
      }
  
    }
      break;
  }
  console.log(result);
  return result.trim();
}
