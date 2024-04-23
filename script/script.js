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

    // Exibindo a mensagem personalizada
    var mensagem = "Olá, " + firstName + " " + lastName + "! Você está adotando o animal " + animalName + ". Iremos analisar a sua adoção e entraremos em contato pelo e-mail " + email + ".";
    alert(mensagem);
}