// Este archivo agrupa todas las funciones que me has proporcionado

// Función para convertir de decimal a una base
function aBase(numero, base) {
  let resultado = "";
  let digitos = "0123456789ABCDEF";

  if (numero === 0) return "0";

  while (numero > 0) {
    let residuo = numero % base;
    resultado = digitos[residuo] + resultado;
    numero = Math.floor(numero / base);
  }

  return resultado;
}

// Función para convertir de binario a decimal
function binarioADecimal(binario) {
  let decimal = 0;
  let potencia = 1;

  for (let i = binario.length - 1; i >= 0; i--) {
    if (binario[i] === '1') {
      decimal += potencia;
    }
    potencia *= 2;
  }
  return decimal;
}

// Función para sumar dos números binarios
function sumarBinarios(bin1, bin2) {
  let num1 = binarioADecimal(bin1);
  let num2 = binarioADecimal(bin2);
  let suma = num1 + num2;
  return { decimal: suma, binario: aBase(suma, 2) };
}

// Función para convertir de hexadecimal a decimal
function hexaDecimal(hex) {
  let digitos = "0123456789ABCDEF";
  hex = hex.toUpperCase();
  let decimal = 0;
  let potencia = 1;

  for (let i = hex.length - 1; i >= 0; i--) {
    let valor = digitos.indexOf(hex[i]);
    if (valor === -1) return NaN; // Validación de entrada
    decimal += valor * potencia;
    potencia *= 16;
  }
  return decimal;
}