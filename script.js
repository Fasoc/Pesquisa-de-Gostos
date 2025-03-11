document.getElementById('quizForm').addEventListener('submit', function(event) {
    event.preventDefault(); 

    const nome = document.getElementById('nome').value;
    const cor = document.querySelector('input[name="cor"]:checked');
    const frutas = document.querySelectorAll('input[name="frutas"]:checked');
    const filme = document.querySelector('input[name="filme"]:checked');
    const musica = document.querySelector('input[name="musica"]:checked');
    const trilogia = document.querySelector('input[name="trilogia"]:checked');
    const temaMusica = document.querySelector('input[name="temaMusica"]:checked');
    const joker = document.querySelector('input[name="joker"]:checked');
    
    let erro = false;
    let mensagemErro = "";

    if (!nome) {
        erro = true;
        mensagemErro += "Por favor, preencha seu nome.<br>";
    }

    if (!cor || !filme || !musica || !trilogia || !temaMusica || !joker) {
        erro = true;
        mensagemErro += "Por favor selecione um resposta para todas as perguntas.<br>";
    }

    if (frutas.length === 0) {
        erro = true;
        mensagemErro += "Por favor selecione pelo menos uma fruta.<br>";
    }

    const resultadoDiv = document.getElementById('resultado');
    if (erro) {
        resultadoDiv.innerHTML = "<div class='erro'>" + mensagemErro + "</div>";
    } else {
        let frutasEscolhidas = Array.from(frutas).map(f => f.value).join(", ");
        resultadoDiv.innerHTML = `<p>Obrigado por participar, ${nome}!</p>
                                  <p>Sua cor favorita é: ${cor.value}</p>
                                  <p>Você gosta da(s) fruta(s): ${frutasEscolhidas}</p>
                                  <p>Seu filme favorito da Marvel é: ${filme.value}</p>
                                  <p>O cantor que você mais gosta de escutar é: ${musica.value}</p>
                                  <p>Você mais gosta da trilogia: ${trilogia.value}</p>
                                  <p>A música que você colocaria num jantar romântico é: ${temaMusica.value}</p>
                                  <p>O intérprete do Coringa que mais te marcou foi: ${joker.value}</p>`;
    }

    resultadoDiv.style.display = 'block';

});

    document.getElementById('nome').addEventListener('input', function() {
        let nome = this.value;
    
        this.value = nome.charAt(0).toUpperCase() + nome.slice(1).toLowerCase();
});