function calculator(newValue){
    document.getElementById('display').value += newValue;
}

function clearDisplay(){
    document.getElementById("display").value = "";
}

function Answer(){
    let x = document.getElementById('display').value;
    let y = eval(x);
    document.getElementById("display").value = y;
}