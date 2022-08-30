window.onload = function(){
  //pegar os elementos e adicionar em uma variavel
  const FORMULARIO   = document.querySelector('#enviar')
  const NOME_DA_BANDA = document.getElementById('exampleInputText1')
  const DESCRICAO_DA_BANDA = document.getElementById('exampleInputText2')
  const IMAGEM_DA_BANDA = document.getElementById('exampleInputText3')
  
  //adicionar envento ao clicar no botao 'adicionar'
  FORMULARIO.addEventListener('submit', event => {
      event.preventDefault()
  
      //criar cards
      let criaCard = document.createElement('div')
      criaCard.innerHTML = `
        <div class="card">
          <img src= '${IMAGEM_DA_BANDA.value}' class="card-img-top" alt="...">
          <div class="card-body">
            <h5 class="card-title">${NOME_DA_BANDA.value}</h5>
            <p class="card-text">${DESCRICAO_DA_BANDA.value}</p>
              <a href="./view/detalhes.html" class="btn-abrir" target="_blank">Abrir</a>
          </div>
        </div>  
      `
      document.querySelector('.itens').appendChild(criaCard)
  })
}