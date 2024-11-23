function somar(){

    let num1 = document.getElementById('numero1').value
    let num2 = document.getElementById('numero2').value

    num1 = parseFloat(num1);
    num2 = parseFloat(num2);

    if (isNaN(num1) || isNaN(num2))
    alert('Insira somente números.')

    let resultado = num1 + num2

    document.getElementById('resultadoCalc').textContent = 'Resultado: ' +  resultado 
}

function subtrair(){

    let num1 = document.getElementById('numero1').value
    let num2 = document.getElementById('numero2').value

    num1 = parseFloat(num1);
    num2 = parseFloat(num2);

    if (isNaN(num1) || isNaN(num2))
    alert('Insira somente números.')

    let resultado = num1 - num2
    document.getElementById('resultadoCalc').textContent = 'Resultado: ' +  resultado 

}

function dividir(){

    let num1 = document.getElementById('numero1').value
    let num2 = document.getElementById('numero2').value

    num1 = parseFloat(num1);
    num2 = parseFloat(num2);

    if (isNaN(num1) || isNaN(num2))
    alert('Insira somente números.')

    let resultado = num1 / num2
    document.getElementById('resultadoCalc').textContent = 'Resultado: ' +  resultado 

}

function multiplicar(){

    let num1 = document.getElementById('numero1').value
    let num2 = document.getElementById('numero2').value

    num1 = parseFloat(num1);
    num2 = parseFloat(num2);

    if (isNaN(num1) || isNaN(num2))
    alert('Insira somente números.')

    let resultado = num1 * num2
    document.getElementById('resultadoCalc').textContent = 'Resultado: ' +  resultado 

}

function limpar(){
    document.getElementById('numero1').value = '';
    document.getElementById('numero2').value = '';
    document.getElementById('numero3').value = '';
}

function calcularNota(){

    let num1 = document.getElementById('AP1').value
    let num2 = document.getElementById('AP2').value
    let num3 = document.getElementById('AS').value

    num1 = parseFloat(num1);
    num2 = parseFloat(num2);
    num3 = parseFloat(num3);

    let resultado = num1 + num2 + num3

    if (num1 < 0 || num1 > 1.5 || num2 < 0 || num2 > 2.5 || num3 < 0 || num3 > 6.0) {
    alert('Insira valores válidos.')
    }

    else if(isNaN(num1) || isNaN(num2) || isNaN(num3)){
    alert('Insira somente números.')
    }

    
    // else if(num1 > 0 || num1 < 1.5 || num2 > 0 || num2 < 2.5 || num3 > 0 || num3 < 6.0){
    // alert('Sua nota final é: ' +  resultado + '.')
    // }
    else if(resultado > 6){
        document.getElementById('mostrar').textContent = 'Sua nota final é: ' +  resultado.toFixed(1) + '   Aprovado!'
    }

    else if(resultado < 6){
        document.getElementById('mostrar').textContent = 'Sua nota final é: ' +  resultado.toFixed(1) + '   Reprovado!';
    }
    

}


function validar(){

    let num1 = document.getElementById('AP1').value
    let num2 = document.getElementById('AP2').value
    let num3 = document.getElementById('AS').value

    num1 = parseFloat(num1);
    num2 = parseFloat(num2);
    num3 = parseFloat(num3);

    if (num1 < 0 || num1 > 1.5 || num2 < 0 || num2 > 2.5 || num3 < 0 || num3 > 6.0) {
        document.getElementById('AP1').value = '';
        document.getElementById('AP2').value = '';
        document.getElementById('AS').value = '';
        alert('Insira valores válidos.')
        }

}
    

