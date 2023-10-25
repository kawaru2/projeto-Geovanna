const darkMode = document.querySelector('.btn-dark')
darkMode.addEventListener('click', (event) => {
  event.preventDefault()

  const $btnCircle = document.querySelector('.circle')
  $btnCircle.classList.toggle('novo-btn-dark')

  const $header = document.querySelector('.cabecalho')
  $header.classList.toggle('cabecalho-escuro')

  const $menu = document.querySelector('.menu')
  $menu.classList.toggle('darkMode')

  const $links = document.querySelectorAll('.links')
  $links.forEach((tags) => {
    tags.classList.toggle('novosLinks')

  const $main = document.querySelector('.conteudo-principal')
  $main.classList.toggle('main-escuro')

  const $section = document.querySelector('.secao-cardapio')
  $section.classList.toggle('cardapio-escuro')

  const $tituloSection = document.querySelector('.titulo-cardapio')
  $tituloSection.classList.toggle('titulo-cardapio-escuro')

  const $options = document.querySelector('.lista-cardapio')
  $options.classList.toggle('opcoes-escuro')

  const $optionsList = document.querySelectorAll('.item-lista-cardapio')
  $optionsList.forEach((tags) => {
    tags.classList.toggle('item-lista-cardapio-escuro')
  })

  const $rodape = document.querySelector('.rodape')
  $rodape.classList.toggle('rodape-escuro')

  })

})