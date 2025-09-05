const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question ('Digite o ano para descobrir se ele é bissexto ou não:', function(ano){
    let anoo = parseInt(ano);
    if((anoo % 4 == 0 && anoo % 100 != 0)|| anoo % 400 == 0){
        let resposta = 'Ano bissexto.'
        console.log(resposta);
    }else {
        let resposta = 'Ano não é bissexto.'
        console.log(resposta);
    }
    rl.close()
});