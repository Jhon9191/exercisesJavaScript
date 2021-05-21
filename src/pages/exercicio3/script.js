let vetor = [];

document.getElementById("clickMe").onclick = addNumber;
var inputValue = document.getElementById("inputArray");
var inputString = document.getElementById("inputString");
var inputRepeats = document.getElementById("valueForRepeats");
var ul = document.createElement("list").innerHTML;

function addNumber() {
    if (inputValue.value !== "") {
        vetor.push(inputValue.value);
        ul = ul + "<tr><td>" + inputValue.value + "</td></tr>";
        document.getElementById("list").innerHTML = ul;
    }
    else {
        alert("Insira algum item no vetor")
    }
}

const arrayContains = (vetor, string) => {
    
    let data = vetor.filter((item) => item == string);
    console.log(`data: ${data}`)
    
    if (data.length >= 2) {
        document.getElementById("contido").innerHTML = "Sim"
    } else {
        document.getElementById("contido").innerHTML = "Não"
    }
}

const arrayContainsTree = (vetor, string, number) => {
    let data = vetor.filter((item) => item == string);
    console.log(`data: ${data}`)
    
    if (data.length == number) {
        document.getElementById("contido").innerHTML = "Sim"
    } else {
        document.getElementById("contido").innerHTML = "Não"
    }
}