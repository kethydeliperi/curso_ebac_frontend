$(document).ready(function () {
    $('#telefone').mask('(00) 00000-0000')
    $('#cpf').mask('000.000.000-00')
    $('#cep').mask('00000-000')

    $('form').validate({
        rules: {
            nome: {
                required: true,
            },
            email: {
                required: true,
                email: true
            },
            telefone: {
                required: true,
            },
            mensagem: {
                required: true,
            },
            cpf: {
                required: true,
            },
            endereco: {
                required: true,
            },
            cep: {
                required: true,
            },
        }, 
        messages: {
            nome: 'Campo obrigatório. Por favor, insira seu nome.',
            email: 'Campo obrigatório. Por favor, insira seu e-mail.',
            telefone: 'Campo obrigatório. Por favor, insira seu telefone.',
            mensagem: 'Campo obrigatório. Por favor, insira sua mensagem.',
            cpf: 'Campo obrigatório. Por favor, insira um CPF válido.',
            end: 'Campo obrigatório. Digite um endereço válido.',
            cep: 'Campo obrigatório. Por favor, informar um CEP válido.'
        },
        invalidHandler: function(validador) {
            let camposIncorretos = validador.numberOfInvalids();
            if (camposIncorretos) {
                alert(`Existem ${camposIncorretos} campos incorretos.`)
            }
        }
    })
})