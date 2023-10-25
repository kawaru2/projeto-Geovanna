const darkMode = document.querySelector('.btn-dark')

darkMode.addEventListener('click', (event) => {
  event.preventDefault()

  const $btnEscuro = document.querySelector('.circle')
  $btnEscuro.classList.toggle('novo-btn-dark')

  const $header = document.querySelector('.cabecalho')
  $header.classList.toggle('cabecalho-escuro')

  const $menu = document.querySelector('.menu')
  $menu.classList.toggle('darkMode')

  const $links = document.querySelectorAll('.links')
  $links.forEach((tags) => {
    tags.classList.toggle('novosLinks')
  })

  const $main = document.querySelector('.conteudo-principal')
  $main.classList.toggle('main-escuro')

  const $article = document.querySelector('.sobre-nos')
  $article.classList.toggle('novo-main-escuro')

  const $conteudoArticle = document.querySelector('.conteudo-sobre-nos')
  $conteudoArticle.classList.toggle('conteudo-sobre-nos-escuro')

  const $rodape = document.querySelector('.rodape')
  $rodape.classList.toggle('rodape-escuro')

})