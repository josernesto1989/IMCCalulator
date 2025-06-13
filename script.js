document.getElementById('imcForm').addEventListener('submit', function(event) {
            event.preventDefault();
            const weight = parseFloat(document.getElementById('weight').value);
            const height = parseFloat(document.getElementById('height').value);
            const imc = weight / (height * height);
            document.getElementById('result').innerText = `Tu IMC es: ${imc.toFixed(2)}`;
        });