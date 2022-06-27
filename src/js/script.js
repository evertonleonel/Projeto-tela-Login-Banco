function habilitaBotao(){
    let nome_input = document.querySelector('.nome_input').value;
    let senha_input = document.querySelector('.senha_input').value;

    if (nome_input && senha_input){
        let button = document.querySelector('.login_button').disabled = false
        return;
    }
        document.querySelector('.login_button').disabled = true
}


