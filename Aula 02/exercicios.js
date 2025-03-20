let num;

function exercicio1() {
function calculo (num)
{
    let calculo = num^2;
    let cubo = num * num * num;
    document.getElementById("mensagem").innerHTML = "O quadrado do número é: " + calculo;
    document.getElementById("mensagem").innerHTML = "O cubo do número digitado é: " + cubo;
}


function solicitarEntradaDeDados ()
{
  numero1 = Number (prompt("Digite o número 1: "));
  numero2 = Number (prompt("Digite o número 2: "));

  somar(numero1, numero2);
}

function processar() 
{
    numero1 = document.getElementById("numero1").value;
    numero2 = document.getElementById("numero2").value;

    somar(numero1, numero2);
}
}