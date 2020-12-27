let p = document.querySelector('p')
let res = document.getElementById('res')
const dolar = parseFloat(window.prompt('Antes de qualquer coisa, digite o valor atual do dolar em R$:').replace(',', '.'))

function converter() {
    let reais = parseFloat(window.prompt('Digite quantos R$ você tem na carteira: ').replace(',', '.'))
    let valor = reais * dolar

    p.innerHTML = `<p><strong>R$ ${reais}, corresponde a $ ${valor}. </strong></p>`
}