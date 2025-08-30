const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Digite um número:', function(numero){
    if(numero < 0){
        let resposta = 'O número é negativo.';
        console.log(resposta);
    }else if(numero == 0){
        let resposta = 'O número é 0.';
        console.log(resposta);
    }else if(numero > 0){
        let resposta = 'O número é positivo.';
        console.log(resposta);
    }else{
        let resposta = 'Número inválido';
        console.log(resposta);
    }
    rl.close();
});