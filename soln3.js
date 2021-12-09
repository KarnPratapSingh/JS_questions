// QUESTION
// input: basicOp('+',1,2);
// output: 3

function basicOp(operation, value1, value2)
  {
    // Code
    if(operation=='+'){
      return value1+value2;
    }
    else if(operation=='-'){
      return value1-value2;
    }
    else if(operation=='*'){
      return value1*value2;
    }
    else{
      return value1/value2
    }
  }
  
basicOp('+',1,2);