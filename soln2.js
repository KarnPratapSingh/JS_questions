//QUESTION:
// input : -2,3,-23
// output : 2,-3,23

function opposite(number) {
    //your code here
    var newNumber;
    if(number>0){
      newNumber=number-(2*number);
      return newNumber;
    }
    else if(number<0){
      newNumber=number+(2*Math.abs(number));
      return newNumber
    }
    else{
      return number;
    }
  }
  
  

  