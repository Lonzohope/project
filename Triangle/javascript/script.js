var tracker =function(firstNumber, secondNumber, thirdNumber){
  var number1 = document.getElementByID("first").value;
  var number2 = document.getElementByID("second").value;
  var number3 = document.getElementByID("third").value;

  var first= parseInt(number1);
  var second= parseInt(number2);
  var third= parseInt(number3);

  var sumOne = second + third;
  var sumTwo = first + third;
  var sumThree = first + second;

  if(sumOne<first || sumTwo < second || sumThree < third){
    document.getElementByID("find").innerHTML = "This is NOT a Triangle!";
  }

  else if(second === first || first === third || second === third){
    document.getElementByID("find").innerHTML = "This is an Isosceles Triangle!";
  }

  else if(second === first && first === third){
    document.getElementByID("find").innerHTML = "This is an Equilateral Triangle!";
  }

  else{
    document.getElementByID("find").innerHTML = "This is a Scalene Triangle!";
  }
}
