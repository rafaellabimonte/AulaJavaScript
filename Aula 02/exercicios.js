function exercicio1() 
{
    //variaveis
    let numero, resultado1, resultado2;

    //entrada de dados
    numero = Number(document.getElementById("numero").value);

    //processamento
    resultado1 = numero ** 2;
    resultado2 = numero ** 3;

    //saida
    document.getElementById("mensagem").innerHTML = "O quadrado do número é: " + resultado1 +
                                                    "<br>O cubo do número digitado é: " + resultado2;
}

function exercicio2() 
{
  let temperatura, resultado;
  
  temperatura = Number(document.getElementById("temperatura").value);

  resultado = (temperatura - 32) * 5 / 9;

  document.getElementById("mensagem").innerHTML = "A temperatura em graus Fahrenheit foi " + temperatura +
                                                    "<br>A temperatura em graus Fahrenheit é " + resultado;
}

function exercicio3() 
{
 let valor, taxa, tempo, parcela;

 valor = Number(document.getElementById("valor").value);
 taxa = Number(document.getElementById("taxa").value);
 tempo = Number(document.getElementById("tempo").value);

 parcela = valor + (valor * (taxa**2 / 100) * tempo);

 document.getElementById("mensagem").innerHTML = "Valor = " + valor +
                                                    "<br>Taxa = " + taxa +
                                                    "<br>Tempo = " + tempo +
                                                    "<br><br>O valor atualizado é: " + parcela;

}

function exercicio4() 
{
let base, altura, area;

 base = Number(document.getElementById("base").value);
 altura = Number(document.getElementById("altura").value);

 area = base && altura / 2;

 document.getElementById("mensagem").innerHTML = "Base = " + base +
                                                    "<br>Altura = " + altura +
                                                    "<br>A área do triângulo é: " + area;
}                                                   

function exercicio5() 
{
let valor, area;

valor = Number(document.getElementById("valor").value);

area = valor ** 2;

document.getElementById("mensagem").innerHTML = "O lado do quadrado é: " + valor +
                                                    "<br>A área do quadrado é:  = " + area;
}