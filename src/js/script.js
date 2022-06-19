const nome_input = document.querySelector('.nome_input');
const button = document.querySelector('.login_button');

const validarInput = ({target}) => {
    if (target.value.length >3){
        button.removeAttribute('disabled')
    }
}

nome_input.addEventListener('nome_input', validarInput);