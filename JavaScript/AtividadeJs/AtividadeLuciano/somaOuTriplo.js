function somaOuTriplo(a, b) {
    if (a === b) {
      return 3 * (a + b);
    } else {
      return a + b;
    }
  }
  
  const numero1 = 5; 
  const numero2 = 5; 
  
  const resultado = somaOuTriplo(numero1, numero2);
  console.log(resultado);
  