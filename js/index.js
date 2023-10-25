const darkMode = document.querySelector('.btn-dark')

darkMode.addEventListener('click', (event) => {
  event.preventDefault()

  const $header = document.querySelector('.cabecalho')
  $header.classList.toggle('cabecalho-escuro')

  const $btnEscuro = document.querySelector('.circle')
  $btnEscuro.classList.toggle('novo-btn-dark')

  const $menu = document.querySelector('.menu')
  $menu.classList.toggle('darkMode')

  const $links = document.querySelectorAll('.links')
  $links.forEach((tags) => {
    tags.classList.toggle('novosLinks')
  })

  const $main = document.querySelector('.menu-principal')
  $main.classList.toggle('main-escuro')

  const $curiosidades = document.querySelector('.subtitulo-curiosidades')
  $curiosidades.classList.toggle('subtitulo-curiosidades-escuro')

  const $rodape = document.querySelector('.rodape')
  $rodape.classList.toggle('rodape-escuro')

})