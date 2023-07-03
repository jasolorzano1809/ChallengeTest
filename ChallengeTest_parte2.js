//Definicion de funcion para mostrar el numero primo palindromo siguiente.
function siguientePrimoPalindromo(n) {
  //definicion de funcion interna para que determina si un numero dado es primo o no	
  function esPrimo(numero) {
    if (numero <= 1) {
      return false;
    }

    for (let i = 2; i <= Math.sqrt(numero); i++) {
      if (numero % i === 0) {
        return false;
      }
    }
    return true;
  }
  //funcion interna que determina si un numero dado es palindromo
  function esPalindromo(numeroI) {
  const cadena = numeroI.toString();
  const longitud = cadena.length;
  
  for (let i = 0; i < longitud / 2; i++) {
    if (cadena[i] !== cadena[longitud - i - 1]) {
      return false;
    }
  }
  return true;
 }

 let siguienteNumero = n + 1;
  while (true) {
    if (esPrimo(siguienteNumero) && esPalindromo(siguienteNumero)) {
      return siguienteNumero;
    }
    siguienteNumero++;
  }
}

//Prueba #1
console.log(siguientePrimoPalindromo(13));  // 101
//Prueba #2
console.log(siguientePrimoPalindromo(8));  // 11
//Prueba #3
console.log(siguientePrimoPalindromo(6));  // 7
