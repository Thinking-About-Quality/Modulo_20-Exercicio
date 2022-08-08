function mdc(A, B) {
    var resto;
    do {
        resto = A % B;
        A = B
        B = resto;
    } while (resto != 0);
    return A;
}


//console.log(MDC(57,65))


module.exports = mdc
