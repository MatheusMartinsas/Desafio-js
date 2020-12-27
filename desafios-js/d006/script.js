let p = document.querySelector('p')
let res = document.getElementById('res')

function converter() {
    let num = parseFloat(window.prompt('Digite uma distância em metros (m): ').replace(',', '.'))
    let km = num / 1000
    let hm = num / 100
    let dam = num / 10
    let dm = num * 10
    let cm = num * 100
    let mm = num * 1000

    p.innerHTML = `<p><strong>A distância de ${num} metros, corresponde a: </strong></p>`
    res.innerHTML = `<p>${km} Km.</p>`
    res.innerHTML += `<p>${hm} Hm.</p>`
    res.innerHTML += `<p>${dam} Dam.</p>`
    res.innerHTML += `<p>${dm} dm.</p>`
    res.innerHTML += `<p>${cm} cm.</p>`
    res.innerHTML += `<p>${mm} mm.</p>`
}