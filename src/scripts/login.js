const button = document.getElementById('entrar-btn');
const user = document.getElementById('nome')
const pass = document.getElementById('pass')

    
button.addEventListener('click', (event) => {
    event.preventDefault();

    if (user.value == '') {
        user.classList.add('erro-input')
    }else{
        user.classList.remove('erro-input')
    }

    if (pass.value == '') {
        pass.classList.add('erro-input')  
    }else{
        pass.classList.remove('erro-input')
    };
})