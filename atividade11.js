let numero = 0;

while (numero < 30) {
    numero++;
    if(numero % 3 === 0 && numero % 5 != 0){
        console.log(numero + 'Fizz');
    }else if(numero % 3 != 0 && numero % 5 === 0){
        console.log(numero + 'Buzz');
    }else if(numero % 3 === 0 && numero % 5 === 0){
        console.log(numero + 'FizzBuzz');
    }   else{
        console.log(numero);
    }
}