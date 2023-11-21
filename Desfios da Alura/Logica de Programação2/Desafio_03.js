//Desafio03
alert('Você está feliz');

/*
//01
/*
	Crie uma função que calcule o índice de massa corporal (IMC) de uma pessoa, a partir de sua altura, em metros, e peso, 
	em quilogramas, que serão recebidos como parâmetro.
*/

let nome = '';
let altura = 0;
let peso = 0;

function calculoDoIMC(altura, peso){
	nome = prompt('Qual é o seu nome: ');
	altura = parseFloat(prompt('Qual é a sua altura? '));
	peso = parseFloat(prompt('Qual é o seu peso? '));
	
	let IMC = parseInt(peso / (altura * altura));
	
	alert(`${IMC}kg/m2`);
}

calculoDoIMC();

//02
/*
	Crie uma função que calcule o valor do fatorial de um número passado como parâmetro.
*/

var fatorial = parseInt(prompt('Insira um numero para ser vatorado. '));
var resultado = 1;

function calcularFatorial (fatorial) {
    if (isNaN(fatorial)) {
        return 'Não existe fatorial de um texto';
    }     
    if (!Number.isInteger(fatorial) || fatorial < 0) {
        return 'Não existe fatorial de um número não natural';
    }     
    if (fatorial === 0 || fatorial === 1) {
        return 1;
    }     
    var resultado = fatorial;
    var primeiroMultipicador = fatorial - 1;
    for (var i = primeiroMultipicador; i > 1; i--) {
        resultado *= i;
    }     
    return resultado;
}
alert(calcularFatorial(fatorial));
/*
#_Na linha 26, instanciamos nossa função calcularFatorial recebendo por parâmetro o número a ser calculado seu fatorial;
#_Na linha 27, fazemos verificação do dado, utilizando a função isNaN (is Not a Number) para verificar se o valor recebido na variável 
fatorial é um texto;
#_Na linha 31, fazemos verificação do dado, utilizando o sinal de negação (!) com o método Number.isInteger() para verificar se o valor 
recebido na variável fatorial é um número decimal (não inteiro) ou se é um número negativo;
#_Na linha 35, verificamos se o valor recebido na variável fatorial é um ou zero e retornamos o resultado correto;
#_Na linha 47, temos a apresentação do resultado da operação através do alert requisitando a função e passando como 
parâmetro.
*/


//03
/*
	Crie uma função que converte um valor em dólar, passado como parâmetro, e retorna o valor equivalente em reais. Para isso, 
	considere a cotação do dólar igual a R$4,80.
*/

let valorEmReal = 4.80;
let dolar = 0;

function converterDeDolarParaReal(dolar){
    dolar = parseFloat(prompt('Insira o valor de que quer converter: '));
    let real = dolar * valorEmReal;
    alert(`Esse é o de dolar que covê queria converter US$${dolar} esse é o valor comvertido R$${real}`);
}

converterDeDolarParaReal();

//04
/*
	Crie uma função que mostre na tela a área e o perímetro de uma sala retangular, utilizando altura e largura que serão dadas 
	como parâmetro.
*/

let alturaDoRetangulo = 0;
let baseDoRetangulo = 0;

function calculoDaArea(){
	alert('Vamos calcular a area do retangulo! ');
	alturaDoRetangulo = parseInt(prompt('Insira o valor da altura do retangulo? '));
	baseDoRetangulo = parseInt(prompt('Insira o valor da base do retangulo? '));
	
	let areaDoRetangulo = alturaDoRetangulo * baseDoRetangulo;
	
	alert(`O valor da area do retangulo é ${areaDoRetangulo}`);
}

calculoDaArea();

//05
/*
	Crie uma função que mostre na tela a área e o perímetro de uma sala circular, utilizando seu raio que será fornecido como 
	parâmetro. Considere Pi = 3,14.
*/

let raioDoCirculo = 0;
let Pi = 3.14;
let perimetroDoCirculo = 0;
let areaDoCirculo = 0;

alert('Vamos calcular a area e o pereimetro da sala');

function calculoDoPerimetroEDaArea(raioDoCirculo){
	raioDoCirculo = parseFloat(prompt('Insira a valor do raio'));
	
	perimetroDoCirculo = 2 * Pi*raioDoCirculo;
	areaDoCirculo = Pi*raioDoCirculo**2;
	
	alert(`Esse é o pereimetro da sala ${perimetroDoCirculo}`);
	alert(`Essa é a area da sala ${areaDoCirculo}`);
}

calculoDoPerimetroEDaArea();

//06
/*
	Crie uma função que mostre na tela a tabuada de um número dado como parâmetro.
*/


function tabuada(){
  var num = parseInt(document.getElementById("num").value);
  var resposta = document.getElementById('resposta');
  var tabuada = '';

  for(var count=1; count<=10 ; count++)
   tabuada += num+" x "+count+" = "+num*count+"<br />";
  
  resposta.innerHTML = tabuada;
}

tabuada();
