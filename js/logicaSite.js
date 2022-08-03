function carrinho(element, valor) {
    var descricao = element.name
    adicionaItemNoCarrinho(descricao, valor)
}

function adicionaItemNoCarrinho(descricao, valor) {
    const carrinhoDeComprasTable = document.getElementById("carrinhoDeCompras")
    var tr = document.createElement("tr")
    var tdDescricao = document.createElement("td")
    var tdValor = document.createElement("td")
    var tdRemoverItens = document.createElement("td")

    tdDescricao.style= "border: 1px solid"
    tdValor.style= "border: 1px solid"
    tdRemoverItens.style=" border: 1px"

tdDescricao.innerHTML= descricao
tdValor.innerHTML= valor

tr.appendChild(tdDescricao)
tr.appendChild(tdValor)
tr.appendChild(tdRemoverItens)

carrinhoDeComprasTable.appendChild(tr)

somaTotal(valor)

}
function somaTotal(valorItem){
    const elementOutput = document.getElementById("totalCompra")
    elementOutput.value=parseInt(elementOutput.value) + parseInt(valorItem)
}


function removerItens(){

    const carrinhoDeComprasTable= document.getElementById("carrinhoDeCompras")

    while (carrinhoDeComprasTable.hasChildNodes()){
        carrinhoDeComprasTable.removeChild(carrinhoDeComprasTable.firstChild);
    }


    document.getElementById("totalCompra").value = 0
}