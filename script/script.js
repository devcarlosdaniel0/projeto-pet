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
    var firstName = document.getElementById('firstname').value;
    var lastName = document.getElementById('lastname').value;
    var email = document.getElementById('email').value;
    var animalName = document.getElementById('animalName').innerText;
    var telefone = document.getElementById('celular').value;
    
    var nomeCompleto = firstName + ' ' + lastName;

    var templateParams = {
        nomeCompleto: nomeCompleto,
        animalName: animalName,
        telefone: telefone,
        user_email: email
    };

    emailjs.send('service_dksna5m', 'template_qquwrag', templateParams)
    .then(function(response) {
        console.log('SUCCESS!', response.status, response.text);
        alert('Email enviado com sucesso!');
        
        var url = "confirmar.html?";
        url += "firstName=" + encodeURIComponent(firstName);
        url += "&lastName=" + encodeURIComponent(lastName);
        url += "&email=" + encodeURIComponent(email);
        url += "&animalName=" + encodeURIComponent(animalName);

        window.location.href = url;

    }, function(error) {
        console.log('FAILED...', error);
        alert('Erro ao enviar email: ' + JSON.stringify(error));
    });

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

    var formattedCPF = numCPF;

    if (numCPF.length > 3) {
        formattedCPF = numCPF.substring(0, 3) + '.' + formattedCPF.substring(3);
    }
    if (numCPF.length > 6) {
        formattedCPF = formattedCPF.substring(0, 7) + '.' + formattedCPF.substring(7);
    }
    if (numCPF.length > 9) {
        formattedCPF = formattedCPF.substring(0, 11) + '-' + formattedCPF.substring(11);
    }

    input.value = formattedCPF;
}

// CEP
    
function formatarCEP(input) {
    var numCEP = input.value.replace(/\D/g, ''); 

    if (numCEP.length > 5) {
        numCEP = numCEP.substring(0, 5) + '-' + numCEP.substring(5);
    }

    if (numCEP.length > 9) {
        numCEP = numCEP.substring(0, 9);
    }

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

// SLIDER

let slides = document.querySelectorAll('.slide');
let indicators = document.querySelectorAll('.indicator');
let currentSlide = 0;

function goToSlide(n) {
  currentSlide = n;
  updateSlider();
}

function updateSlider() {
  slides.forEach((slide, index) => {
    slide.style.transform = `translateX(${-currentSlide * 100}%)`;
  });
  updateIndicators();
}

function updateIndicators() {
  indicators.forEach((indicator, index) => {
    if (index === currentSlide) {
      indicator.classList.add('active');
    } else {
      indicator.classList.remove('active');
    }
  });
}

setInterval(() => {
  currentSlide = (currentSlide + 1) % slides.length;
  updateSlider();
}, 4000); 