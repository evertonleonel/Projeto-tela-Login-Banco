function habilitaBotao() {
  let nome_input = document.querySelector('.nome_input').value;
  let senha_input = document.querySelector('.senha_input').value;

  if (nome_input && senha_input) {
    let button = document.querySelector('.login_button').disabled = false
    return;
  }
  document.querySelector('.login_button').disabled = true
}

function abrirLink() {
  window.location.href = "/src/html/banco.html";
}

// Mudar a senha

let password = document.getElementById('password')
let olho = document.querySelector('.olho');
let imgOlho = document.querySelector('.olho img')


olho.addEventListener('click', function () {

  let tipoPassword = password.type === 'password'

  if (tipoPassword) {
    mostrarPassword();
    imgMostraSenha();
  } else {
    escondePassord();
    imgEscondeSenha();
  };

  function mostrarPassword() {
    password.setAttribute('type', 'text');
  }

  function escondePassord() {
    password.setAttribute('type', 'password');
  }

  function imgMostraSenha() {
    imgOlho.setAttribute('src', '/src/imagens/eye.png');
  }

  function imgEscondeSenha() {
    imgOlho.setAttribute('src', '/src/imagens/close.png');
  }
});