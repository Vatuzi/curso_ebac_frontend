const form = document.getElementById('formValida');
let formValido = false;

function validaNumeros(num1,num2){
    if(parseInt(num1,10) < parseInt(num2,10)){
        return true;
    }else{
        return false;
    }
}

form.addEventListener('submit', function(e){
    e.preventDefault();
    const num1 = document.getElementById('num1');
    const num2 = document.getElementById('num2');
    const msgErro = `<b>O segundo número precisa ser maior que o primeiro</b>`;
    const msgSucesso = `<b>Formulário válido</b>`;

    formValido = validaNumeros(num1.value, num2.value);
    const containerMsgSucesso = document.querySelector('.msgSucesso');
    const containerMsgErro = document.querySelector('.msgErro');
    if(formValido){
    
        containerMsgSucesso.innerHTML = msgSucesso;
        containerMsgSucesso.style.display = 'block';
        containerMsgErro.style.display = 'none';
    }else{

        containerMsgErro.innerHTML = msgErro;
        containerMsgErro.style.display = 'block';
        containerMsgSucesso.style.display = 'none';
    }
})