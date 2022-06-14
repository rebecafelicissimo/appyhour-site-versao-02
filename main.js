// Criamos uma função para adicionar a classe scroll via JS na tag nav no HTML quando eu der scroll no mouse.
function changeNavColorWhenScrolled() {
  const navigationTag = document.querySelector('#navigation')

  if (scrollY > 0) {
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

//====== Formulário ======
// const form = document.querySelector('#form')
// const userName = document.querySelector('#userName')
// const email = document.querySelector('#email')
// const phoneNumber = document.querySelector('#phoneNumber')

// form.addEventListener('submit', function (e) {
//   e.preventDefault() // para não enviar o formulário
//   checkInputs()

//   // form.submit()
//   if (checkInputs()) {
//     e.target.submit()
//   }
// })

// function checkInputs() {
//   // pegar os valores dos inputs e armazenar em variáveis
//   const userNameValue = userName.value
//   const emailValue = email.value

//   if (userNameValue === '') {
//     setErrorFor(userName, 'O nome é obrigatório.')
//   } else {
//     setSuccessFor(userName)
//   }

//   if (emailValue === '') {
//     setErrorFor(email, 'O email é obrigatório.')
//   } else if (!checkEmail(emailValue)) {
//     setErrorFor(email, 'Por favor digite um e-mail válido.')
//   } else {
//     setSuccessFor(email)
//   }

//   const formControls = form.querySelectorAll('.form-control')
//   const formIsValid = [...formControls].every(formControl => {
//     return formControl.className === 'form-control success'
//   }) // [... formControls] é um NodeList

//   if (formIsValid) {
//     console.log('O formulário está 100% válido!')
//   }
// }

// function setErrorFor(input, message) {
//   const formControl = input.parentElement
//   const small = formControl.querySelector('small')

//   //Adicionar a mensagem de erro
//   small.innerText = message

//   // Adicionar a classe de erro
//   formControl.className = 'form-control error'
// }

// function setSuccessFor(input) {
//   const formControl = input.parentElement

//   //Adicionar a classe de sucesso
//   formControl.className = 'form-control success'
// }

// function checkEmail(email) {
//   return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
//     email
//   )
// }
