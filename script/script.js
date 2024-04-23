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