var minhaVar = 'minha variavel';
function minhaFunc(x, y) {
    return x + y;
}
var num = 2;
var PI = 3.14;
var numeros = [1, 2, 3];
numeros.map(function (valor) {
    valor * 2;
});
numeros.map(function (valor) { return valor * 2; }); //ES2015
var Mathematica = /** @class */ (function () {
    function Mathematica() {
    }
    Mathematica.prototype.soma = function (x, y) {
        return x + y;
    };
    return Mathematica;
}());
var n1 = 'hdhakdhka';
n1 = 2;
