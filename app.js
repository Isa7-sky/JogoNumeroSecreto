let listaDeNumerosSorteados = [];
let numeroLimite = 10;
let numeroSecreto = gerarNumeroAleatorio();
let tentativas = 1;
    
function exibirTextoNaTela (tag, texto) {
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
    if ('speechSynthesis' in window) {
        let utterance = new SpeechSynthesisUtterance(texto);
        utterance.lang = 'pt-BR'; 
        utterance.rate = 1.2; 
        window.speechSynthesis.speak(utterance); 
    } else {
        console.log("Web Speech API não suportada neste navegador.");
    }
        }  
function exibirMensagemInicial() {
    exibirTextoNaTela('h1', 'Descubra o número secreto!');
    exibirTextoNaTela('p', 'Escolha um número entre 1 a 10');
    console.log(`O número secreto é ${numeroSecreto}`)
}        
    exibirMensagemInicial()

function verificarChute() {  
    let chute = document.querySelector('input').value;

    if (chute == numeroSecreto) {
            exibirTextoNaTela('h1', 'Acertou!');
        let palavraTentativa = tentativas > 1 ? 'tentativas':'tentativa'
        let mensagemTentativas = `Você acertou com ${tentativas} ${palavraTentativa}!`;
            exibirTextoNaTela('p', mensagemTentativas);
            document.getElementById('reiniciar').removeAttribute('disabled');}
            else {
    
            if (chute > numeroSecreto) {
                exibirTextoNaTela('h1', 'Errou!');
                exibirTextoNaTela('p', 'O número é menor');}
               (chute < numeroSecreto) 
                exibirTextoNaTela('h1', 'Errou!');
                exibirTextoNaTela('p', 'O número é maior');
                limparCampo();}
                tentativas++;
            }
            
        
function gerarNumeroAleatorio() {
    let numeroEscolhido = parseInt(Math.random() * numeroLimite + 1);
    let quantidadeElementosNaLista = listaDeNumerosSorteados.length;

    if (quantidadeElementosNaLista == numeroLimite) {
        listaDeNumerosSorteados = [];
    }

    if  (listaDeNumerosSorteados.includes(numeroEscolhido)) {
        return gerarNumeroAleatorio();
    } else {
    listaDeNumerosSorteados.push(numeroEscolhido);
    console.log(listaDeNumerosSorteados)
    return numeroEscolhido;
}
}
function limparCampo() {
    chute = document.querySelector('input');
    chute.value = '';
}
function reiniciarJogo() {
    limparCampo();
    numeroSecreto = gerarNumeroAleatorio();
    tentativas = 1;
    exibirMensagemInicial();
    document.getElementById('reiniciar');
}