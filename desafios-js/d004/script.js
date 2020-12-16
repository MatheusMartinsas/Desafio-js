function comprar() {
    let prod = window.prompt('Qual produto está comprando?')
    let preço = Number(window.prompt(`Quanto custa o produto ${prod}?`))
    let dinheiro = Number(window.prompt(`Qual valor você deu para pagar o produto ${prod}?`))
    let troco = dinheiro - preço

    window.alert(`Você comprou o produto ${prod} que custou R$ ${preço},00.
Deu R$ ${dinheiro},00 em dinheiro e vai receber R$ ${troco},00 de troco.
Volte Sempre!`
    )
}