let totalGeral = 0;
limpar();

function adicionar() {
    
    //recuperar valores do nome do produto, quantidade e valor
    let produto = document.getElementById('produto').value;
    //split divide uma array
    let nomeProduto = produto.split('-')[0];//aqui se pede que seja divido apartir do (-) e [0] indica que queremos o primeiro caracter
    let valorUnitario =  produto.split('R$')[1];//aqui a mesma coisa, porem sendo divido apartir do R$ e querenod somente o segundo valor [2], sendo o numero
    let quantidade = document.getElementById('quantidade');//pegamos o id do inpu quantidade

    //calcular p preço, nosso subtotal
    let preco = valorUnitario * quantidade.value;
    



//adicionar no carrinho

//validação de quantidade
// if ( !quantidade <= 100) {
//    alert('tem mais do que o permitido')
//    document.getElementById('quantidade').value = 0;
//    return 
// }
let listaProdutos = document.getElementById('lista-produtos');
listaProdutos.innerHTML = listaProdutos.innerHTML + `<section class="carrinho__produtos__produto">
          <span class="texto-azul">${quantidade.value}x</span> ${nomeProduto} <span class="texto-azul">R$${preco}</span>
        </section>`;

     


//atulizaR O VALOR total
totalGeral = totalGeral + preco;
let valorTotal = document.getElementById('valor-total');
valorTotal.textContent = `R$${totalGeral}`;
document.getElementById('quantidade').value = 0;
}

function limpar() {
totalGeral = 0;
document.getElementById('lista-produtos').innerHTML = '';
document.getElementById('valor-total').textContent = 'R$ 0';

}
