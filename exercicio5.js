/*
5) Escreva um programa que inverta os caracteres de um string.

IMPORTANTE:

a) Essa string pode ser informada através de qualquer entrada de sua preferência ou 
pode ser previamente definida no código;

b) Evite usar funções prontas, como, por exemplo, reverse;
*/

const texto = "Pedro Henrique";
let listaLetras = [];
let textoInvertido = "";

//Laço para percorrer a String de trás para frente e armazenar cada letra em um Array
for (let i = texto.length - 1; i >= 0; i--) {
    listaLetras.push(texto[i]);
}

//Laço para percorrer o Array e concatenar cada posição que é uma letra em uma String inicialmente vazia(textoInvertido)
for (let j = 0; j < listaLetras.length; j++) {
    textoInvertido = textoInvertido + listaLetras[j] ;
}

console.log(textoInvertido);