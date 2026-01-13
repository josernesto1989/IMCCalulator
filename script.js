let heightMultiply = {
    'm': 1,
    'cm': 100,
}

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
            document.getElementById('result').innerText = `Tu IMC es: ${imc.toFixed(2)}\n ${getTextResult(imc)}`;
            document.getElementById('result-container').removeAttribute('hidden');
            let margin= Math.max(0,Math.min(39.5-16,(imc-16)) * 10-10)
            document.getElementById('scale-pointer').style.marginLeft=(`${margin}px`); 
                      //100/1.59*1.59=
        });

        const slider = document.querySelector('.slider');

const options = document.querySelectorAll('.option');

let selectedIndex = 0;
const genderValue={0: 'Hombre', 1: 'Mujer'};
options.forEach((option, index) => {
  option.addEventListener('click', () => {
    selectedIndex = index;
    console.log(`Selected index: ${genderValue[selectedIndex]}`);
    updateSlider();
  });
});

function updateSlider() {
  slider.style.transform = `translateX(${selectedIndex * 100}px)`;
}

function getTextResult(value) {
    let result = '';
    if(value < 16.0) {
        result = 'Bajo peso\nsevero';
    }
    else if(value < 17.0) {
        result = 'Bajo peso\nmoderado';
    }
    else if(value < 18.5) {
        result = 'Bajo peso\nleve';
    }
    else if(value < 25.0) {
        result = 'Peso normal';
    }
    else if(value < 30.0) {
        result = 'Sobrepeso';
    }
    else if(value < 35.0) {
        result = 'Obesidad\ngrado I';
    }
    else if(value < 40.0) {
        result = 'Obesidad\ngrado II';
    }
    else {
        result = 'Obesidad\ngrado III';
    }
    return result;
}