// Criamos uma função para adicionar a classe scroll via JS na tag nav no HTML quando eu der scroll no mouse.
function changeNavColorWhenScrolled() {
  const navigationTag = document.querySelector('#navigation');

  if(scrollY > 0) {
    navigationTag.classList.add('scroll')
  } else {
    navigationTag.classList.remove('scroll')
  }
}

// adicionando a classe menu-expanded quando clicar no open-menu
// function openMenu() {
//   document.body.classList.add('menu-expanded')
// }

// removendo a classe menu-expanded quando clicar no close-menu
// function closeMenu() {
//   document.body.classList.remove('menu-expanded')
// }