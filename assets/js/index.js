let proibido = '1234567890ABCÇDEFGHIJKLMNOPQRSTUVÉWYXZáãàéêèúùíìóõò´`^~!@#$%¨&*()_-+=[{}]?°ªº,.;:/|';

//Criptografar

function Criptografar() {

    mensagem = document.getElementById('mensagem').value;
    let sumir = document.getElementById('sumir');
    let aparecer = document.getElementById('aparecer');
    let awp = document.getElementById('awp');
    let erro = document.getElementById('erro');
    let error = document.getElementById('error');
    let awp1 = document.getElementById('awp1');

    if (mensagem == "") {
        awp.play()
        sumir.style.display = 'none';
        awp1.style.display = 'flex';
        aparecer.style.display = 'none';
        reset: true;
        return;
    }
    for (let i = 0; i < proibido.length; i++) {
        if (mensagem.indexOf(proibido.charAt(i)) != -1) {

            erro.play()
            error.classList.add('aviso2');
            sumir.style.display = 'flex';
            aparecer.style.display = 'none';
            awp1.style.display = 'none';
            reset: true;
            return;
        }
    }

    sumir.style.display = 'none';
    aparecer.style.display = 'flex';
    awp1.style.display = 'none';
    let mensagemCripto = mensagem

        .replaceAll("e", "enter")
        .replaceAll("i", "imes")
        .replaceAll("a", "ai")
        .replaceAll("o", "ober")
        .replaceAll("u", "ufat");

    document.getElementById('mensagem2').innerHTML = mensagemCripto;
    error.classList.remove('aviso2');
    reset: true;
}

//Descriptografar

function Descriptografar() {
    mensagem = document.getElementById('mensagem').value;
    let sumir = document.getElementById('sumir');
    let aparecer = document.getElementById('aparecer');
    let awp = document.getElementById('awp');
    let erro = document.getElementById('erro');
    let error = document.getElementById('error');
    let awp1 = document.getElementById('awp1');

    if (mensagem == "") {
        awp.play()
        sumir.style.display = 'none';
        awp1.style.display = 'flex';
        aparecer.style.display = 'none';
        reset: true;
        return;
    }

    for (let i = 0; i < proibido.length; i++) {
        if (mensagem.indexOf(proibido.charAt(i)) != -1) {

            erro.play()
            error.classList.add('aviso2');
            sumir.style.display = 'flex';
            aparecer.style.display = 'none';
            awp1.style.display = 'none';
            reset: true;
            return;
        }
    }
    sumir.style.display = 'none';
    aparecer.style.display = 'flex';
    awp1.style.display = 'none';

    let mensagemDescripto = mensagem
        .replaceAll("enter", "e")
        .replaceAll("imes", "i")
        .replaceAll("ai", "a")
        .replaceAll("ober", "o")
        .replaceAll("ufat", "u");

    document.getElementById('mensagem2').innerHTML = mensagemDescripto
    error.classList.remove('aviso2');
    reset: true;
}

//Copiar

function Copiar() {
    let urna = document.getElementById('urna');
    let copyaviso = document.getElementById('copy');

    copyaviso.style.visibility = 'visible';

    copiartexto = document.getElementById('mensagem2').value;
    let copiar = copiartexto;
    navigator.clipboard.writeText(copiar);
    urna.play()

    setTimeout(() => {
        copyaviso.style.visibility = 'hidden';
    }, 1515);

    document.getElementById('mensagem').value = "";
    reset: true;
}