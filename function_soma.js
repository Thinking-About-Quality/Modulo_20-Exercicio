//somar(1000);
function somar(y, x) {
    multiplos = 0;
    for (let i = 0; i < 1000; i++) {
        if (i % y == 0 || i % x == 0)
            multiplos += i;
    }
    return multiplos
}


module.exports = somar
