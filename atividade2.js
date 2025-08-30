const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Digite a primeira nota:', function(nota1) {
    rl.question('Digite a segunda nota:', function(nota2){
        rl.question('Digite a terceira nota:', function(nota3){
            let n1 = parseFloat(nota1);
            let n2 = parseFloat(nota2);
            let n3 = parseFloat(nota3);
            let media = (n1 + n2 + n3)/3;
            console.log('A sua média é: ' + media);
            rl.close();
        });
    });
});