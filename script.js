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
console.log(typeof(nome)); //Mostra os tipos de dados, ele determina qual é através do que o usuário digitar na variável.
nome = true;
console.log(typeof(nome));

let frutas = ["maça", "banana", "goiaba"];
console.log(typeof(frutas)); //Ele vai considerar o array um objeto.

const nome = "Maria";
const mensagem = `Olá, ${nome}! Seja bem vinda ao curso de JavaScript.`;//Quando utilizamos a crase antes e depois, não precisamos colocar aspas duplas e nem utilizar o +, apenas colocamos o ${} quando eu estiver chamando uma variável.
console.log(mensgaem);


