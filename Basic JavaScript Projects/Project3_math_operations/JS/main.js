function plusMethod(){
    var plusMethod = 2 + 3;
    document.getElementById("plus").innerHTML = "2 plus 3 = " + plusMethod;
}
function minusMethod(){
    var minusMethod = 50 - 25;
    document.getElementById("minus").innerHTML = "50 minus 25 = " + minusMethod;
}
function timesMethod(){
    var timesMethod = 5 * 5;
    document.getElementById("times").innerHTML = "5 times 5 = " + timesMethod; 
}
function divideMethod(){
    var divideMethod = 5 % 1;
    document.getElementById("divide").innerHTML = "5 divided by 1 = " + divideMethod;
}
function MathRandom(){
    var MathRandom = Math.random()*10;
    document.getElementById("MathRandom").innerHTML = "" + MathRandom;
}