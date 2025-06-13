let heightMultiply = {
    'm': 1,
    'cm': 100,
}

console.log('tet');
let heightUnit = 'meter';

let heightChange = function() {
    
    const height = parseFloat(this.value);
    if (height < 3) {
        heightUnit = 'm'
    }
    else{
        heightUnit = 'cm';
    }
    document.getElementById('height-label').innerText = `Altura (${heightUnit}):`;
};

document.getElementById('height').addEventListener('change', heightChange);
document.getElementById('height').addEventListener('keyup', heightChange);


document.getElementById('imcForm').addEventListener('submit', function(event) {
            event.preventDefault();
            const weight = parseFloat(document.getElementById('weight').value);
            const height = parseFloat(document.getElementById('height').value);
            const divisor = heightMultiply[heightUnit];
            const imc = weight / (height * height/(divisor*divisor));
            document.getElementById('result').innerText = `Tu IMC es: ${imc.toFixed(2)}`;
        });
