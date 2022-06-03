// Criamos uma função para adicionar a classe scroll via JS na tag nav no HTML quando eu der scroll no mouse.
function changeNavColorWhenScrolled() {
  const navigationTag = document.querySelector('#navigation');

  if(scrollY > 0) {
    navigationTag.classList.add('scroll')
  } else {
    navigationTag.classList.remove('scroll')
  }
}