var values = [];

var valorInput = document.getElementById("meu-input");
// var container = document.getElementById("container").innerHTML;
document.getElementById("clickMe").onclick = addNumber;
document.getElementById("executar").onclick = valor;
document.getElementById("limpar").onclick = limpar
var ul = document.createElement("list").innerHTML;

async function addNumber(){
    if(valorInput.value !== ""){
        await values.push(valorInput.value);
        ul = ul +"<tr><td>"+valorInput.value+"</td></tr>";
        document.getElementById("list").innerHTML = ul;
    }
    else{
        alert("Preencha o campo")
    }
    //document.getElementById("meu-input").value = "";
}

function limpar(){
    document.getElementById("menor").innerHTML = `Menor número:`;
    document.getElementById("maior").innerHTML = `Maior número: `;
    document.getElementById("soma").innerHTML = `Soma total:`;
    document.getElementById("par").innerHTML = `Existe par?`;

    ul = [];
    values = [];
    document.getElementById("list").innerHTML = ul;
}

function valor(){
    let total = 0;
    var max = 0;
    var min = 0;
    var isPar = false;
    for(let i = 0; i <= values.length-1; i++){
        if(parseFloat(values[i]) % 2 == 0){
            isPar = true;
        }
        total+=parseFloat(values[i]);
        max = Math.max(...values);
        min = Math.min(...values);
    }

    console.log(total);
    console.log(max);
    console.log(min);
    console.log(isPar);
    
    document.getElementById("menor").innerHTML = `Menor número: ${min}`;
    document.getElementById("maior").innerHTML = `Maior número: ${max}`;
    document.getElementById("soma").innerHTML = `Soma total: ${total}`;
    document.getElementById("par").innerHTML = `Existe par? ${isPar == true ? "sim" : "não"}`;

}