/*
2) Dado a sequência de Fibonacci, onde se inicia por 0 e 1 e o próximo valor sempre será a soma dos 2 valores anteriores 
(exemplo: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34...), escreva um programa na linguagem que desejar onde, informado um número, 
ele calcule a sequência de Fibonacci e retorne uma mensagem avisando se o número informado pertence ou não a sequência.

IMPORTANTE:

Esse número pode ser informado através de qualquer entrada de sua preferência ou pode ser previamente definido no código;
*/

function fibonacci(num) {
    if (num <= 1) {
        return num;
    } else {
        return fibonacci(num - 1) + fibonacci(num - 2);
    }
}

const num = 7;
let pertence = false;

console.log(`Primeiros ${num} termos da Sequência de Fibonacci:`);

for (let i = 0; i < num; i++) {
    let numAtual = fibonacci(i);
    console.log(fibonacci(i));
    if (numAtual == num) {
        pertence = true;
    }
};

if (pertence) {
    console.log(`O número ${num} pertence à Sequência de Fibonacci.`);
} else {
    console.log(`O número ${num} não pertence à Sequência de Fibonacci.`);
}