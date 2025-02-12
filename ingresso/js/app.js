function comprar(){
let ingressos = document.getElementById('tipo-ingresso').value;
let quantidade =  parseInt(document.getElementById('qtd').value);
//quando for pegar a quantidade de x lugar, esse valor deve ser subtraido do mesmo

    // Verificar se a quantidade é um número positivo
    if (isNaN(qtd) || qtd <= 0) {
        alert('Por favor, insira uma quantidade válida.');
        return;
    }

if(ingressos == 'pista'){
    comprarPista(quantidade);
}else if (ingressos == 'superior'){
    compraSuperior(quantidade);
}if (ingressos == 'inferior'){
    compraInferior(quantidade);
}

//obter os ingressos 
//subtrair das quantidades que ficaram

}
// parseInt para converter o valor de texto para número

function  comprarPista(quantidade){
    let pista = parseInt(document.getElementById('qtd-pista').textContent);
    if (quantidade > pista ){
        alert('não temos ingressos disponiveis');
    }else{
        pista = pista - quantidade 
        document.getElementById('qtd-pista').textContent = pista;
      alert('Parabéns, você conseguiu comprar!');
      
    }
}



function  compraSuperior(quantidade){
    let superior = parseInt(document.getElementById('qtd-superior').textContent);
    if (quantidade > superior ){
        alert('não temos ingressos disponiveis');
    }else{
        superior = superior - quantidade 
        document.getElementById('qtd-superior').textContent = superior;
      alert('Parabéns, você conseguiu comprar!');
      
    }
}

function  compraInferior(quantidade){
    let inferior = parseInt(document.getElementById('qtd-inferior').textContent);
    if (quantidade > inferior ){
        alert('não temos ingressos disponiveis');
    }else{
        inferior = inferior - quantidade 
        document.getElementById('qtd-inferior').textContent = inferior;
      alert('Parabéns, você conseguiu comprar!');
      
    }
}
