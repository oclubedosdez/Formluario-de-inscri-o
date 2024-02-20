# Formulário de inscrição em boletim informativo com solução de mensagem de sucesso

![Visualização do design do formulário de inscrição no boletim informativo com desafio de codificação de mensagem de sucesso](https://res.cloudinary.com/dz209s6jk/image/upload/v1685103838/Challenges/rnhx0ccfuqrdx3udhhr8.jpg)


Esta é uma solução para o [formulário de inscrição em boletim informativo com desafio de mensagem de sucesso no Frontend Mentor](https://www.frontendmentor.io/challenges/newsletter-signup-form-with-success-message-3FC1AZbNrv) . Os desafios do Frontend Mentor ajudam você a melhorar suas habilidades de obtenção por meio da construção de projetos realistas.

### O que eu aprendi

Uma das coisas que aprendi foi usar o flex-direction que me permitiu mudar a direção dos elementos dentro da div, em dispositivos menores e tabém aprendi um pouco como mexer com formularios pegando o valor dentro do input e fazer a vereficação se o email e valido usando a regra regex. 

```html
<section class="container">
    <div class="form">

      <article id="titulo">
        <h1>Fique atualizado!</h1>

        <h2>Junte-se a mais de 60.000 gerentes de produto que recebem atualizações mensais sobre:</h2>
      </article>

      <article id="novidades">
        <div>
          <img src="./assets/images/icon-list.svg" alt="">
          <p>Descoberta de produtos e construção do que importa</p>
        </div>

        <div>
          <img src="./assets/images/icon-list.svg" alt="">
          <p>Medir para garantir que as atualizações sejam um sucesso</p>
        </div>

        <div>
          <img src="./assets/images/icon-list.svg" alt="">
          <p>E muito mais!</p>
        </div>


      </article>

      <form id="enviar_email">
        <div>
          <label for="email">Endereço de e-mail</label>
          <p id="invalid_mesage">E-mail invalido</p>
        </div>
        <input type="email" id="email" name="email" required placeholder="ash@loremcompany.com">
      </form>

      <button id="enviar">Assine a newsletter mensal</button>
    </div>

    <img id="banner" src="./assets/images/illustration-sign-up-desktop.svg" alt="">
    <img id="banner_mobile" src="./assets/images/illustration-sign-up-mobile.svg" alt="">
  </section>
```
```css
@media (max-width:1200px) {
    .container {
        flex-direction: column-reverse;
        flex-wrap: wrap;
    }
    .mesage_sucess {
        margin-top: 4%;
        width: 40%;
    }
}
```
```js
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
        invalid_mesage.style.display = 'flex'
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
```

### Recursos úteis

- [Emailjs](https://dashboard.emailjs.com/) - essa api me ajudou muito no envio de email e pratica e facil de usar vou usá-la daqui para frente em projetos onde eu e necessario enviar emails.


## Autor

- Site - [João Vitor Alves Fialho](https://oclubedosdez.github.io/Formulario-de-inscricao/)
- Mentor de Frontend - [@oclubedosdez _](https://www.frontendmentor.io/profile/oclubedosdez)
- Linkedin - [DevJunior](https://www.linkedin.com/in/jo%C3%A3o-vitor-devjunior-oclubedosdez/?originalSubdomain=br)





