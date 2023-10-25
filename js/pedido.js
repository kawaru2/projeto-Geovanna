const darkMode = document.querySelector('.btn-dark')

darkMode.addEventListener('click', (event) => {
  event.preventDefault()

  opcaoDarkMode = true

  const $btnEscuro = document.querySelector('.circle')
  $btnEscuro.classList.toggle('novo-btn-dark')

  const $body = document.body
  $body.classList.toggle('body-escuro')

  const $header = document.querySelector('.cabecalho')
  $header.classList.toggle('cabecalho-escuro')

  const $menu = document.querySelector('.menu')
  $menu.classList.toggle('darkMode')

  const $links = document.querySelectorAll('.links')
  $links.forEach((tags) => {
    tags.classList.toggle('novosLinks')
  })

  const $main = document.querySelector('.conteudo-principal')
  $main.classList.toggle('main-pedido-escuro')

  const $pedido = document.querySelector('.solicitacao-cardapio')
  $pedido.classList.toggle('solicitacao-cardapio-escuro')

  const $infoPedido = document.querySelector('.informacoes-pedido')
  $infoPedido.classList.toggle('solicitacao-cardapio-escuro')

  const $tagLink = document.querySelector('.tagLink')
  $tagLink.classList.toggle('nova-tag-link')

  const $rodape = document.querySelector('.rodape')
  $rodape.classList.toggle('rodape-escuro')

  const $socialMedia = document.querySelectorAll('.item-lista-rodape-link')
  $socialMedia.forEach((tags) => {
    tags.classList.toggle('lista-rodape-link-escuro')
  })

})

const $pedido = document.querySelector('#efetuar-pedido')
$pedido.addEventListener('click', (event) => {
  event.preventDefault()

  window.location.href = 'https://wa.me/5591999938362/?text=Boa%20noite,%20gostaria%20de%20fazer%20um%20pedido%2e'

  // VOU LANÇAR O PROJETO MAIS SIMPLES E APÓS O LANÇAMENTO, ADICIONO COM MAIS CALMA UMA FEATURE.
  // A FEATURE É ADICIONAR UMA CAIXA DE TEXTO COM MAIOR VISIBILIDADE E QUE RECEBA UMA RESPOSTA SE A CHAMADA É DE UM PEDIDO OU DE DÚVIDAS.

  // const $body = document.body

  // const $screen = document.createElement('div')
  // $screen.classList.add('cartao-pedido')

  // const $tittle = document.createElement('h3')
  // $tittle.classList.add('titulo-cartao-pedido')
  // $tittle.textContent = 'Olá, você deseja fazer um pedido ou somente tirar suas dúvidas?'
  // $screen.appendChild($tittle)

})
