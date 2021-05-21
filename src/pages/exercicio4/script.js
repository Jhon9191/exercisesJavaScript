var ul = document.createElement("container").innerHTML;
var total = 0;
var previous = 1;
var contador = 2;
var n;

while(contador <= 4000000){
    total = total + contador;
    n = contador;
    contador += 2 * (contador + previous);
    previous += 2 * n;
}

function showTotal (){
    document.getElementById("notification").innerHTML = `${total}`
}