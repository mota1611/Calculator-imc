document.addEventListener("DOMContentLoaded", function() {
    const calcularBtn = document.getElementById("calcularBtn");
    const resultadoDiv = document.getElementById("resultado");

    calcularBtn.addEventListener("click", function() {
        const peso = parseFloat(document.getElementById("peso").value);
        const altura = parseFloat(document.getElementById("altura").value);

        const imc = peso / (altura ** 2);
        let resultado = "Seu IMC é: " + imc.toFixed(2);

        if (imc < 18.5) {
            resultado += " (Abaixo do peso)";
        } else if (imc < 24.9) {
            resultado += " (Peso normal)";
        } else if (imc < 29.9) {
            resultado += " (Acima do peso)";
        } else {
            resultado += " (Obesidade)";
        }

        resultadoDiv.textContent = resultado;
    });
});
