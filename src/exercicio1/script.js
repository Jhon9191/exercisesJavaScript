var values = [];
var valorInput = document.getElementById("meu-input");
document.getElementById("clickMe").onclick = addNumber;
document.getElementById("media").onclick = valor;

function addNumber(){
    values.push(valorInput);
    clickMe.addEventListener("click", reset);
}

function reset(){
    valorInput.innerHTML = ""
}

function valor(){
    console.log(values.length);
}