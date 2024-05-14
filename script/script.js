// Localizar nome do animal

window.onload = function() {
    var urlParams = new URLSearchParams(window.location.search);
    var animal = urlParams.get('animal');
    if (animal) {
        document.getElementById('animalName').innerText = animal;
    }
}

// Coletar dados do envio do formulário

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

// CEP
    
function formatarCEP(input) {
    var numCEP = input.value.replace(/\D/g, ''); // Remove caracteres não numéricos

    // Adiciona um hífen após os primeiros 5 dígitos, se houver mais de 5 dígitos
    if (numCEP.length > 5) {
        numCEP = numCEP.substring(0, 5) + '-' + numCEP.substring(5);
    }

    // Limita o comprimento do CEP formatado para 9 caracteres
    if (numCEP.length > 9) {
        numCEP = numCEP.substring(0, 9);
    }

    // Atualiza o valor do campo de entrada com o CEP formatado
    input.value = numCEP;
}

// Menu mobile

const menuBtn = document.getElementById('btn-mobile');

function toggleMenu() {
    if (event.type === 'touchstart') event.preventDefault();
    const nav = document.getElementById('nav');
    nav.classList.toggle('active');
    const active = nav.classList.contains('active');
    event.currentTarget.setAttribute('aria-expanded', active);
    if (active) {
        event.currentTarget.setAttribute('aria-label', 'Fechar Menu')
    } else {
        event.currentTarget.setAttribute('aria-label', 'Abrir Menu')
    }
}

menuBtn.addEventListener('click', toggleMenu);
menuBtn.addEventListener('touchstart', toggleMenu);