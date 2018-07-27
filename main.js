function add() {

    var x = document.getElementById("num1").value;
    var y = document.getElementById("num2").value;

    x = parseInt(x);
    y = parseInt(y);

    console.log("Answer: " + (x + y))
    document.getElementById("answer").innerHTML = x+y
}

function subtract() {

    var x = document.getElementById("num1").value;
    var y = document.getElementById("num2").value;

    x = parseInt(x);
    y = parseInt(y);

    console.log("Answer: " + (x - y))
    document.getElementById("answer").innerHTML = x-y
}

function multiply() {

    var x = document.getElementById("num1").value;
    var y = document.getElementById("num2").value;

    x = parseInt(x);
    y = parseInt(y);

    console.log("Answer: " + (x * y))
    document.getElementById("answer").innerHTML = x*y
}

function divide() {

    var x = document.getElementById("num1").value;
    var y = document.getElementById("num2").value;

    x = parseInt(x);
    y = parseInt(y);

    console.log("Answer: " + (x / y))
    document.getElementById("answer").innerHTML = x/y
}