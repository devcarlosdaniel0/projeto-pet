window.onload = function() {
    var urlParams = new URLSearchParams(window.location.search);
    var animal = urlParams.get('animal');
    if (animal) {
        document.getElementById('animalName').innerText = animal;
    }
}

function enviarFormulario() {
    // Capturando os valores dos campos do formulário
    var firstName = document.getElementById('firstname').value;
    var lastName = document.getElementById('lastname').value;
    var email = document.getElementById('email').value;
    var animalName = document.getElementById('animalName').innerText;

    // Construindo a URL com os parâmetros
    var url = "confirmar.html?";
    url += "firstName=" + encodeURIComponent(firstName);
    url += "&lastName=" + encodeURIComponent(lastName);
    url += "&email=" + encodeURIComponent(email);
    url += "&animalName=" + encodeURIComponent(animalName);

    // Redirecionando para a nova página
    window.location.href = url;

    // Evitando o envio padrão do formulário
    return false;
}

document.addEventListener('DOMContentLoaded', function() {
    // Obtém o valor da doação da URL
    var params = new URLSearchParams(window.location.search);
    var nome = params.get('nome');
    var valorDoacao = params.get('valor');

    // Exibe uma mensagem de agradecimento na página
    document.getElementById('mensagem').innerText = 'Obrigado, ' + nome + ', pela sua doação de R$ ' + valorDoacao + '! Sua generosidade faz toda a diferença.';
});

// CELULAR

function formatarCelular(input) {
    var numCelular = input.value.replace(/\D/g, '');
    var formattedNum = '';

    if (numCelular.length > 2) {
        formattedNum += '(' + numCelular.substring(0, 2) + ')';
    } else {
        formattedNum += '(' + numCelular.substring(0, 2);
    }

    if (numCelular.length > 2 && numCelular.length <= 7) {
        formattedNum += ' ' + numCelular.substring(2, 7);
    } else if (numCelular.length > 7) {
        formattedNum += ' ' + numCelular.substring(2, 7) + '-' + numCelular.substring(7);
    }

    input.value = formattedNum;
}

// CPF 

function formatarCPF(input) {
    var numCPF = input.value.replace(/\D/g, '');

    // Garante que o usuário possa digitar livremente sem interferência na entrada
    var formattedCPF = numCPF;

    // Adiciona os pontos e o hífen conforme necessário
    if (numCPF.length > 3) {
        formattedCPF = numCPF.substring(0, 3) + '.' + formattedCPF.substring(3);
    }
    if (numCPF.length > 6) {
        formattedCPF = formattedCPF.substring(0, 7) + '.' + formattedCPF.substring(7);
    }
    if (numCPF.length > 9) {
        formattedCPF = formattedCPF.substring(0, 11) + '-' + formattedCPF.substring(11);
    }

    // Atualiza o valor do campo de entrada com o CPF formatado
    input.value = formattedCPF;
}