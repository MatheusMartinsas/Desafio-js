let p = document.querySelector('p')
let res = document.getElementById('res')

function converter() {
    let celsios = parseFloat(window.prompt('Digite uma temperatura em graus Celsios (C°): ').replace(',', '.'))
    let kelvin = celsios + 273
    let fahrenheit = 1.8 * celsios + 32 

    p.innerHTML = `<p><strong>A temperatura de ${celsios}C°, corresponde a: </strong></p>`
    res.innerHTML = `<p>${kelvin} K°.</p>`
    res.innerHTML += `<p>${fahrenheit} F°.</p>`
}