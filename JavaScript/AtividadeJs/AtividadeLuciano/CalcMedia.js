var numero1 = prompt("Digite o primeiro número: ");
var numero2 = prompt("Digite o segundo número: ");

numero1 = parseFloat(numero1);
numero2 = parseFloat(numero2);

if (numero1 >= 0 && numero1 <= 10 && numero2 >= 0 && numero2 <= 10) {
  var media = (numero1 + numero2) / 2;
  console.log("A média é: " + media);
} else {
  console.log("Valor inválido: " + (numero1 < 0 || numero1 > 10 ? numero1 : numero2));
}
