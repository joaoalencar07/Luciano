function calcularDiferenca(numero) {
    var diferenca = Math.abs(numero - 13); 
  
    if (numero > 13) {
      return diferenca * 2;
    } else {
      return diferenca;
    }
  }
  
  var numero = 20; 
  var resultado = calcularDiferenca(numero);
  console.log(resultado);
  