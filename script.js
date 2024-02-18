var user_email = document.getElementById('user_email');
var container = document.querySelector('.container');
var mesage_sucess = document.querySelector('.mesage_sucess')
var progressBar = document.getElementById('carregamento');




// Função de validação de e-mail
function validarEmail(email) {
    var regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
}

document.querySelector('#enviar').addEventListener('click', function () {
    // Obtenha os valores do formulário

    
    emailjs.init("03NHYpS3qlm0Qj1FN");

    // Obtenha os valores do formulário
    var destinatario = document.getElementById("email").value;

    /*https://www.criticossemdiploma@gmail.com*/
    user_email.href = `https://www.${destinatario}`;
    user_email.innerHTML = destinatario;

    // Valide o e-mail usando a função de validação
    if (!validarEmail(destinatario)) {
        // alert("Por favor, digite um e-mail válido.");

        document.getElementById("email").classList.add("campo-invalido");
        
        return; // Não envie o e-mail se o e-mail não for válido

    } else {
        progressBar.style.display = 'flex'
    }

    document.getElementById("email").value = 'Espere um minuto...';

  
    // Envie o email usando o serviço e modelo configurados no painel do EmailJS
    emailjs.send("service_xwl2hps", "template_x6neizr", {
        to_name: destinatario,
        message: 'Mensagem de teste',
    })
        .then(function (response) {
            console.log("Email enviado com sucesso:", response);
            // alert("Email enviado com sucesso!");

            
            progressBar.style.display = 'none'

            container.style.display = 'none'
            mesage_sucess.style.display = 'flex'
        }, function (error) {
            console.error("Erro ao enviar o email:", error);
            alert("Erro ao enviar o email. Por favor, tente novamente.");

        });
})


var email = document.getElementById('email');


email.onclick = function () {
    document.getElementById("email").classList.remove("campo-invalido");
    destinatario = document.getElementById("email").value = ''
}


document.getElementById('close_mesage').onclick = function () {
    container.style.display = 'flex'
    mesage_sucess.style.display = 'none'
    document.getElementById("email").value = ''
}


