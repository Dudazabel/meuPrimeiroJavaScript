const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Digite a temperatura em graus Celsius: ', function(temp){
    let temperatura = parseFloat(temp);
    let fahrenheit = (temperatura * (9/5)) + 32;
    let resposta = 'A temperatura convertida é: ' + fahrenheit;
    console.log(resposta);
    rl.close();
});