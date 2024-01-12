$(document).ready(function(){
    
    $('#telefone').mask('(00) 00000-0000',{ 
        placeholder: '(__) _____-____'
    })

    $('#cpf').mask('000.000.000-00', {
        placeholder: '___.___.___-__'
    })

    $('#cep').mask('00000-000', {
        placeholder: '_____-___'
    })

    $('form').validate({
        rules: {
            nome: {
                required: true
            },
            email: {
                required: true,
                email:true
            },
            telefone: {
                required: true
            },
            cpf: {
                required: true
            },
            cep: {
                required: true
            },
            endereco: {
                required: true
            }
        },
        messages: {
            nome: 'Por favor, insira o seu nome completo!',
            telefone: 'Por favor, insira o seu telefone!',
            email: 'Por favor, insira o seu e-mail!',
            cpf: 'Por favor, insira o seu CPF!',
            cep: 'Por favor, insira o seu CEP!',
            endereco: 'Por favor, insira o seu endereço!'
        },
        errorPlacement: function (error, element) {    
            error.addClass('custom-error-message');
            error.insertAfter(element);
        }
    })
})
