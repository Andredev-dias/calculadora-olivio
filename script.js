function soma(){
    var n1 = document.getElementById('n1').valueAsNumber
    var n2 = document.getElementById('n2').valueAsNumber
    var resposta = document.getElementById('respSoma') 
    resposta.textContent = n1 + n2
}

function sub(){
    var n1 = document.getElementById('n3').valueAsNumber
    var n2 = document.getElementById('n4').valueAsNumber
    var resposta = document.getElementById('respSub') 
    resposta.textContent = n1 - n2
}


function mult(){
    var n1 = document.getElementById('n5').valueAsNumber
    var n2 = document.getElementById('n6').valueAsNumber
    var resposta = document.getElementById('respMult') 
    resposta.textContent = n1*- n2
}


function sub(){
    var n1 = document.getElementById('n7').valueAsNumber
    var n2 = document.getElementById('n8').valueAsNumber
    var resposta = document.getElementById('respDiv') 
    resposta.textContent = n1 / n2
}