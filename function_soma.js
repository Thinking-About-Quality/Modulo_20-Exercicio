// Listando todos os n�meros inteiros abaixo de 10 que s�o m�ltiplos de 3 ou 5, ficamos com 3, 5, 
// 6 e 9. A soma desses m�ltiplos � 23. Crie uma fun��o que retorne a soma de todos os 
// m�ltiplos de 5 ou 7 abaixo de 1000.

somar(1000);
function somar(limite) {
    multiplos = 0;
    for (i = 0; i <= limite; i++) {
        if (i % 7 == 0 || i % 5 == 0)
            multiplos += 1;
    }
}
console.log(multiplos);

