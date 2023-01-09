
    let totalString = ''
module.exports = function toReadable (number) {
    totalString = ''
    let arrayOfNumbers = number.toString().split('').reverse()

    if(number === 0){
        totalString = 'zero'
    }

    if(arrayOfNumbers[1]){
        arrayOfNumbers[0] = (+(arrayOfNumbers[1] + arrayOfNumbers[0])).toString()
        arrayOfNumbers.splice(1,1)
    }

    if(arrayOfNumbers[0] >= 20){
        let decArray = []
        decArray = arrayOfNumbers[0].split('')
        console.log(decArray)
        fromOneToNine(decArray[1])
        fromTenToNinety(decArray[0])
    } else {
        fromOneToNineteen(arrayOfNumbers[0])
    }

    if(arrayOfNumbers[1] && arrayOfNumbers[1] != '0'){
        totalString = ' hundred ' + totalString
        fromOneToNine(arrayOfNumbers[1])
    }

    if(arrayOfNumbers[2]){
        totalString = ' thousand ' + totalString
        fromOneToNine(arrayOfNumbers[2])
    }

    return totalString.trim()
}


function fromOneToNine(num) {
    switch(num) {
      case '0':
        //   totalString = 'zero'
          break;
      case '1':
          totalString = 'one' + totalString;
          break;
      case '2':
          totalString = 'two' + totalString;
          break;
      case '3':
          totalString = 'three' + totalString;
          break;
      case '4':
          totalString = 'four' + totalString;
          break;
      case '5':
          totalString = 'five' + totalString;
          break;
      case '6':
          totalString = 'six' + totalString;
          break;
      case '7':
          totalString = 'seven' + totalString;
          break;
      case '8':
          totalString = 'eight' + totalString;
          break;
      case '9':
          totalString = 'nine' + totalString;
          break;                  
    }
  }

  function fromOneToNineteen(num) {
    switch(num) {    
        case '1':
            totalString = 'one' + totalString;
            break;
        case '2':
            totalString = 'two' + totalString;
            break;
        case '3':
            totalString = 'three' + totalString;
            break;
        case '4':
            totalString = 'four' + totalString;
            break;
        case '5':
            totalString = 'five' + totalString;
            break;
        case '6':
            totalString = 'six' + totalString;
            break;
        case '7':
            totalString = 'seven' + totalString;
            break;
        case '8':
            totalString = 'eight' + totalString;
            break;
        case '9':
            totalString = 'nine' + totalString;
            break;
        case '10':
            totalString = 'ten' + totalString;
            break;
        case '11':
            totalString = 'eleven' + totalString;
            break;
        case '12':
            totalString = 'twelve' + totalString;
            break;
        case '13':
            totalString = 'thirteen' + totalString;
            break;
        case '14':
            totalString = 'fourteen' + totalString;
            break;
        case '15':
            totalString = 'fifteen' + totalString;
            break;
        case '16':
            totalString = 'sixteen' + totalString;
            break;
        case '17':
            totalString = 'seventeen' + totalString;
            break;
        case '18':
            totalString = 'eighteen' + totalString;
            break;
        case '19':
            totalString = 'nineteen' + totalString;
            break;

    }
  }

function fromTenToNinety(num) {  
  switch(num) {
    case '1':
        totalString = 'ten ' + totalString;
        break;
    case '2':
        totalString = 'twenty ' + totalString;
        break;
    case '3':
        totalString = 'thirty ' + totalString;
        break;
    case '4':
        totalString = 'forty ' + totalString;
        break;
    case '5':
        totalString = 'fifty ' + totalString;
        break;
    case '6':
        totalString = 'sixty ' + totalString;
        break;
    case '7':
        totalString = 'seventy ' + totalString;
        break;
    case '8':
        totalString = 'eighty ' + totalString;
        break;
    case '9':
        totalString = 'ninety ' + totalString;
        break;             
  }
}

    

