let jogosAlugados = 0;


function contarEExibirJogosAlugados() {
    console.log(`Total de jogos alugados: ${jogosAlugados}`);
}


function alterarStatus(id){
    //antes q começar fazer a logica dos acontecimentos, 
    //identificamos o ID do jogo para sabermos o que estraemos motificando
    //a imagem para que possamos mudar dependendo do status
    // o botão para q seja possivel realizar cada função
    //e o nome do jogo que mostra para gente se esta devolcendo o certo
    //Entao antes de começar algo analise o que sera necessario utilizar
    //atraves do html
 let jogoClicado = document.getElementById(`game-${id}`);
 let imagem = jogoClicado.querySelector('.dashboard__item__img');
 let botao = jogoClicado.querySelector('.dashboard__item__button');
 let nomeJogo = jogoClicado.querySelector('.dashboard__item__name');



  //precisa da imagem e do botão pq eles vao mudar vizualmente
  //se o jogo estiver como alugado ao clicar no botao o status dele
  //ira mudar para devolver
  //mudando tanto a imagem como o botao

  if(imagem.classList.contains('dashboard__item__img--rented')){
    if(confirm(`Você tem certeza que deseja devolver o jogo ${nomeJogo.textContent}?`)){
    imagem.classList.remove('dashboard__item__img--rented');
    botao.classList.remove('dashboard__item__button--return');
    botao.textContent= 'Alugar';
    jogosAlugados--
}
  }else{
    imagem.classList.add('dashboard__item__img--rented');
    botao.classList.add('dashboard__item__button--return');
    botao.textContent= 'Devolver';
    jogosAlugados++
  }

  if(botao.classList.contains('dashboard__item__button--return')){
    confirm('certeza que deseja alugar?')
  }

  
  contarEExibirJogosAlugados();
}

//basicamente a logica foi a sxeguinte
//se a imagem que tem uma lista de class chama a class da img desabilidada
// eu peço para função remover, automaticamente add a que esta habilidada
//se nao, eu peço para adiciona-la

// Inicializa a contagem considerando que os jogos já começam alugados
document.addEventListener('DOMContentLoaded', function() {
    jogosAlugados = document.querySelectorAll('.dashboard__item__img--rented').length;
    contarEExibirJogosAlugados();
});