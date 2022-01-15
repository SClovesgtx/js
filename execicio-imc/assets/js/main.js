// capturar evento de submit do formulário
const form = document.querySelector('#form-imc');

function calcIMC(weight, height) {
    return weight / height**2;
}

form.addEventListener('submit', (e) => {
    e.preventDefault();
    const inputWeight = e.target.querySelector('#weight');
    const inputHeight = e.target.querySelector('#height');
    const weight = parseFloat(inputWeight.value);
    const height = parseFloat(inputHeight.value);
    if (weight && height) {
        const imc = calcIMC(weight, height);
        setResult(`Seu IMC é ${imc}!`);
    } else {
        alert("Insira apenas números nos campos!")
    }

})

function createP(className) {
    const p = document.createElement("p");
    p.classList.add(className)
    return p
}

function setResult (msg) {
    const res = document.querySelector("#result");
    res.innerHTML = '';
    const p = createP("result-message")
    p.innerHTML = msg
    res.appendChild(p);
}