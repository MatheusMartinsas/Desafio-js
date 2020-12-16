function calcular() {
    let num = Number(window.prompt('Digite um número inteiro: '))
    let ant = num - 1
    let suc = num + 1
    window.alert(`Antes de ${num}, tem o número ${ant}.
Depois de ${num}, tem o número ${suc}.`)
}