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

    // let data = vetor.filter((valor)=> {
    //     valor === string
    // })
        // if(data.lenght > 0){
        //     alert("true", `vetor:${vetor} string: ${string}`);
        // }
        // else{

        //     alert("false");
        // }
    vetor.forEach(element => {
        if(string == element){
            document.getElementById("contido").innerHTML = "Esta contido"
        }else{
            document.getElementById("contido").innerHTML = "Não esta contido"
        }
    })
}