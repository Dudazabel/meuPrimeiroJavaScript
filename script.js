var nome = "Maria";
console.log(nome);
var nome = "João"; //O var não bloqueia a criação de duas variáveis com o mesmo nome.
console.log(nome);

let nome1 = "Maria";
console.log(nome1);
nome = "João"; //O let bloqueia.
console.log(nome1);

const nome2 = "Maria";
console.log(nome2); //É uma constante não permite sobreescrita.

let nome3 = "Maria";
console.log(typeof(nome3)); //Mostra os tipos de dados, ele determina qual é através do que o usuário digitar na variável.
nome = true;
console.log(typeof(nome3));

let frutas = ["maça", "banana", "goiaba"];
console.log(typeof(frutas)); //Ele vai considerar o array um objeto.

const nome4 = "Maria";
const mensagem = `Olá, ${nome4}! Seja bem vinda ao curso de JavaScript.`;//Quando utilizamos a crase antes e depois, não precisamos colocar aspas duplas e nem utilizar o +, apenas colocamos o ${} quando eu estiver chamando uma variável.
console.log(mensagem);

//criando um Array
let frutinhass = ["Maça", "Banana", "Manga"];
console.log(frutinhass);
let frutinha = new Array (1,2,3,4,5);
console.log(frutinha);
frutinhass.push("Morango"); //Adiciona elementos no final do Array.
console.log(frutinhass);
frutinhass.pop(); //Tira o último elemento do Array.
console.log(frutinhass);
frutinhass.unshift("Tangerina"); //Adiciona um elemento no começo.
console.log(frutinhass);
frutinhass.shift; //Remove o primeiro elemento do Array.
console.log(frutinhass);
frutinhass.splice(1, 1, "Jabuticaba"); //O primeiro número representa a posição do elemento que eu quero começar modificando, o segundo é a quantidade de elementos que eu vou tirar e o terceiro é o elemento que eu vou adicionar.
console.log(frutinhass);
let todas = frutinhass.concat(frutinha); //Junta os dois Arrays.
console.log(todas);
frutinhass.sort(); //Ordena asfrutas, por ordem alfabética.
console.log(frutinhass);
frutinhass.reverse(); //Inverte a ordem de trás para frente.
console.log(frutinhass);

//For each
frutinhass.forEach(function(indice, item){
    console.log(item, indice);
});

//MAP
let frutaria = frutas.map(function(fruta){
    return fruta + " em oferta";
});
console.log(frutaria);

//FILTER
let numeros = [1, 2, 3, 4, 5];
let pares = numeros.filter(function(numero){
    return numero % 2 === 0;
});
console.log(pares);

//REDUCE 
let soma = numeros.reduce(function(total, numero){
    return total * numero;
}, 10);
console.log(soma); //Valor 10 indica o numero que seria nosso valor inicial, já o total vai somar 1+2+3+4+5, que vai dar 15, ai somamos com o 10.


//REDUCE RIGHT
let soma2 = numeros.reduceRight(function(total, numero){
    return total * numero
}, 10);
console.log(soma2);

//FIND
let encontrado = frutinhass.find(function(fruta){
    return fruta < "Jabuticaba";
});
console.log(encontrado);

//JOIN
let Ffrutinha = frutinha.join(" !");
console.log(Ffrutinha);

//SLICE
//Faz uma cópia de uma página
let podres = frutinhass.slice(1,3); //Ele vai da posição 1 até a posição 3, ou seja ele não pega a posição 3.
console.log(podres);

//INCLUDES
let procura = frutinhass.includes("Banana", "Tangerina"); //Procura se está na lista.
console.log(procura);

//Para tirar os dois primeiros números
const input = require('prompt-sync')();

let ano = input('Digite um valor: ');

let arrayNumero = ano.split("");

console.log("Array antes de remover elementos:", arrayNumero);

arrayNumero.shift(); 
arrayNumero.shift(); 

console.log("Array após remover elementos:", arrayNumero);

arrayNumero.join();

console.log(arrayNumero)