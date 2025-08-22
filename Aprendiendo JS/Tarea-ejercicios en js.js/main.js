document.addEventListener("DOMContentLoaded", () => {

    // Lógica para Conversor Decimal a Base
    const decimalInput = document.getElementById("decimal-input");
    const binarioResult = document.getElementById("binario-result");
    const octalResult = document.getElementById("octal-result");
    const hexResult = document.getElementById("hex-result");

    decimalInput.addEventListener("input", () => {
        const numero = parseInt(decimalInput.value);
        if (!isNaN(numero)) {
            binarioResult.textContent = aBase(numero, 2);
            octalResult.textContent = aBase(numero, 8);
            hexResult.textContent = aBase(numero, 16);
        } else {
            binarioResult.textContent = "";
            octalResult.textContent = "";
            hexResult.textContent = "";
        }
    });

    // Lógica para Suma de Binarios
    const bin1SumInput = document.getElementById("bin1-sum-input");
    const bin2SumInput = document.getElementById("bin2-sum-input");
    const sumarBtn = document.getElementById("sumar-btn");
    const sumaDecimalResult = document.getElementById("suma-decimal-result");

    sumarBtn.addEventListener("click", () => {
        const bin1 = bin1SumInput.value;
        const bin2 = bin2SumInput.value;
        if (bin1 && bin2) {
            const resultado = sumarBinarios(bin1, bin2);
            sumaDecimalResult.textContent = resultado.decimal;
        } else {
            sumaDecimalResult.textContent = "Error";
        }
    });

    // Lógica para Conversor Hexadecimal a Decimal
    const hexInput = document.getElementById("hex-input");
    const hexBinarioResult = document.getElementById("hex-binario-result");
    const hexDecimalResult = document.getElementById("hex-decimal-result");

    hexInput.addEventListener("input", () => {
        const hex = hexInput.value;
        const decimal = hexaDecimal(hex);
        if (!isNaN(decimal)) {
            hexDecimalResult.textContent = decimal;
            hexBinarioResult.textContent = aBase(decimal, 2);
        } else {
            hexDecimalResult.textContent = "";
            hexBinarioResult.textContent = "";
        }
    });
});