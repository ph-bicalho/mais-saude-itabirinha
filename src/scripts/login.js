const button = document.getElementById('entrar-btn');
const user = document.getElementById('nome')
const pass = document.getElementById('pass')

const userList = [{usuario: "admin", senha: "ssss"}, ]

let userValid = {
    nome: '',
    senha: '',
}



function atualizarInput() {
    
    if (user.value > ''){
        user.classList.remove('erro-input')
        
    }
    if (pass.value > ''){
        pass.classList.remove('erro-input')
        
}

    
button.addEventListener('click', (event) => {
     event.preventDefault();

    if (user.value == '') {
        user.classList.add('erro-input')      
    }

    if (pass.value == '') {
        pass.classList.add('erro-input')
    }


    
    userList.forEach((item) => {
   
    if(user.value == item.usuario && pass.value == item.senha){
        userValid = {
            nome: item.usuario,
            senha: item.senha,
        }
    } else{

    }
})

    if(user.value == userValid.nome && pass.value == userValid.senha){
        alert('deu certo')
    }else{
        user.classList.add('erro-input') ;
        pass.classList.add('erro-input');
        alert('Usuário ou senha inválidos'); 
    }
})}
