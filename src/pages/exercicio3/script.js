let vetor = [];

document.getElementById("clickMe").onclick = addNumber;
var inputValue = document.getElementById("inputArray");
var inputString = document.getElementById("inputString");
var ul = document.createElement("list").innerHTML;

function addNumber(){
    if(inputValue.value !== ""){
        vetor.push(inputValue.value);
        ul = ul +"<tr><td>"+inputValue.value+"</td></tr>";
        document.getElementById("list").innerHTML = ul;
    }
    else{
        alert("Insira algum item no vetor")
    }
}
 
function fixString(){
    document.getElementById("inputStringResult").innerHTML = inputString.value;
}

const arrayContains = (vetor, string) => {  

    let data = vetor.filter((item) => item == string);
    console.log(`data: ${data}`)

        if(data.length >=2){
            document.getElementById("contido").innerHTML = "Sim"
        }else{
            document.getElementById("contido").innerHTML = "Não"
        }
}