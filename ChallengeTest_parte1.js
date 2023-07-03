
// Definicion de funcion para determinar si el numero entero dado es palindromo
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
//Prueba #1
console.log(esPalindromo(242));  // true
//Prueba #2
console.log(esPalindromo(45678654));  // false
//Prueba #3
console.log(esPalindromo(10102020101));  // true

