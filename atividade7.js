const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Digite uma palavra:', function(palindromo){
    let Array = palindromo.split("");
    console.log(Array);
    let invertido = Array.reverse();
    console.log(Array);
    let palin = invertido.join('');
    console.log(palin);

    if(palindromo === palin){
        console.log('é um palíndromo');
    }else{
        console.log('Não é um palíndromo');
    }

    rl.close();
});