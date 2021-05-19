var values = [];

var valorInput = document.getElementById("meu-input");
// var container = document.getElementById("container").innerHTML;
document.getElementById("clickMe").onclick = addNumber;
document.getElementById("executar").onclick = valor;

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
    
    document.getElementById("menor").innerHTML = min;
    document.getElementById("maior").innerHTML = max;
    document.getElementById("par").innerHTML = isPar;

    ul = [];
    values = [];
    document.getElementById("list").innerHTML = ul;
}