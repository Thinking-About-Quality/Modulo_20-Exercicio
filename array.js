// Dado um array num�rico qualquer sem valores repetidos, descubra qual � o �ndice do maior 
// valor e o �ndice do menor valor
var idade = [15, 25, 1, 30, 89, 45, 55, 87, 78];
var max = idade[0];
var min=idade[0];

for (var i = 0; i < idade.length; i++) {
    if (idade[i] >= max) {
        max = idade[i];
    }
    if (idade [i] <= min){
        min =idade [i]
    }
}
console.log(max)