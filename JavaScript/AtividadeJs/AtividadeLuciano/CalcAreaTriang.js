function calcularAreaTriangulo(a, b, c) {
    var s = (a + b + c) / 2;
    var area = Math.sqrt(s * (s - a) * (s - b) * (s - c));
    return area;
  }
  
  var ladoA = 5;
  var ladoB = 6;
  var ladoC = 7;
  
  var area = calcularAreaTriangulo(ladoA, ladoB, ladoC);
  
  console.log("A área do triângulo é: " + area);
  