
const botao = document.querySelector('#botaoCalc')
const heightInput = document.querySelector('#height')
const weightInput = document.querySelector('#weight')
const resultado = document.querySelector('.resulta')

botao.onclick = function() {

    let valor1 = heightInput.value
    let valor2 = weightInput.value

    let IMC = valor1 / valor2 **2
    
    resultado.innerHTML += `
        <span>
            ${IMC}
        </span>
    `
}