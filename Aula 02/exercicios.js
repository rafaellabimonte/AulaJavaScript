let num;

function calculo (num)
{
    let calculo = num^2;
    document.getElementById("mensagem").innerHTML = "O quadrado do número é: " + calculo;
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
