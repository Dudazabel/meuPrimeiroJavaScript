const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Digite um número:', function(numero){

    let fatorial = 1;

    for(let i = 1; i <= numero; i++){
        fatorial *= i;
    }
    console.log(fatorial);

    rl.close();
});