var tracker =function(first, second, third){
  var numberOne= document.getElementById("first").value;
  var numberTwo = document.getElementById("second").value;
  var numberThree = document.getElementById("third").value;

  var first= parseInt(numberOne);
  var second= parseInt(numberTwo);
  var third= parseInt(numberThree);

  var sumOne = second + third;
  var sumTwo = first + third;
  var sumThree = first + second;

  if(sumOne<first || sumTwo < second || sumThree < third){
    document.getElementById("response").innerHTML = "This is NOT a Triangle!";
  }

  else if(second === first || first === third || second === third){
    document.getElementById("response").innerHTML = "This is an Isosceles Triangle!";
  }

  else if(second === first && first === third){
    document.getElementById("response").innerHTML = "This is an Equilateral Triangle!";
  }

  else{
    document.getElementById("response").innerHTML = "This is a Scalene Triangle!";
  }
}
