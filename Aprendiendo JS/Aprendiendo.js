// Sin return
function mi_primer_algoritmo() {
    var mensaje = "¡Hola, mundo!";
    alert(mensaje);
}
// Con return
function binarioADecimal(binario) {
  let decimal = 0;
  for (let i = 0; i < binario.length; i++) {
    decimal = decimal * 2 + (binario[i] === '1' ? 1 : 0);
  }
  return decimal;
}

function sumarBinarios(bin1, bin2) {
  const dec1 = binarioADecimal(bin1);
  const dec2 = binarioADecimal(bin2);
  return dec1 + dec2;
}

// Ejemplo
let bin1 = "1010";
let bin2 = "1101";
console.log("Suma en decimal:", sumarBinarios(bin1, bin2));