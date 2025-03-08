document.getElementById('quizForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Impede o envio do formulário para realizar a validação

    // Capturar as respostas
    const nome = document.getElementById('nome').value;
    const cor = document.querySelector('input[name="cor"]:checked');
    const frutas = document.querySelectorAll('input[name="frutas"]:checked');

    // Validar as respostas
    let erro = false;
    let mensagemErro = "";

    // Verificar se o nome foi preenchido
    if (!nome) {
        erro = true;
        mensagemErro += "Por favor, preencha seu nome.<br>";
    }

    // Verificar se uma cor foi selecionada
    if (!cor) {
        erro = true;
        mensagemErro += "Por favor, selecione uma cor favorita.<br>";
    }

    // Verificar se pelo menos uma fruta foi escolhida
    if (frutas.length === 0) {
        erro = true;
        mensagemErro += "Por favor, selecione pelo menos uma fruta.<br>";
    }

    // Exibir mensagens de erro ou resultado
    const resultadoDiv = document.getElementById('resultado');
    if (erro) {
        resultadoDiv.innerHTML = "<div class='erro'>" + mensagemErro + "</div>";
    } else {
        let frutasEscolhidas = Array.from(frutas).map(f => f.value).join(", ");
        resultadoDiv.innerHTML = `<p>Obrigado por participar, ${nome}!</p>
                                  <p>Sua cor favorita é: ${cor.value}</p>
                                  <p>Você gosta das frutas: ${frutasEscolhidas}</p>`;
    }
});
