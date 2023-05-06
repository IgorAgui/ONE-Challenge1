let proibido = '1234567890ABCÇDEFGHIJKLMNOPQRSTUVWYXZáãàéêèúùíìóõò´`^~!@#$%¨&*()_-+=[{}]?°ªº,.;:/|';


//Criptografar

function Criptografar() {

    mensagem = document.getElementById('mensagem').value;
    var foto = document.getElementById('foto');
    var efeito = document.getElementById('efeito');
    var spy = document.getElementById('spy');
    var awp = document.getElementById('awp');
    var erro = document.getElementById('erro');

    if (mensagem == "") {
        awp.play()
        spy.style.display = 'block';
        setTimeout(function () {
            window.location.reload(1);
        }, 2600);
        return;
    }
    for (let i = 0; i < proibido.length; i++) {
        if (mensagem.indexOf(proibido.charAt(i)) != -1) {

            erro.play()
            efeito.style.display = 'block';


            foto.style.display = 'block';
            document.getElementById('mensagem2').value = "";

            setTimeout(function () {
                window.location.reload(1);
            }, 2600);

            return;
        }
    }


    foto.style.display = 'none';
    foto.style.display = 'none';

    var mensagemCripto = mensagem

        .replaceAll("e", "enter")
        .replaceAll("i", "imes")
        .replaceAll("a", "ai")
        .replaceAll("o", "ober")
        .replaceAll("u", "ufat");

    document.getElementById('mensagem2').innerHTML = mensagemCripto;
}

//Descriptografar

function Descriptografar() {
    mensagem = document.getElementById('mensagem').value;
    var foto = document.getElementById('foto');
    var efeito = document.getElementById('efeito');
    var spy = document.getElementById('spy');
    var awp = document.getElementById('awp');
    var erro = document.getElementById('erro');

    if (mensagem == "") {
        awp.play()
        spy.style.display = 'block';
        setTimeout(function () {
            window.location.reload(1);
        }, 2600);
        return;
    }

    for (let i = 0; i < proibido.length; i++) {
        if (mensagem.indexOf(proibido.charAt(i)) != -1) {
            erro.play()
            efeito.style.display = 'block';


            foto.style.display = 'block';
            document.getElementById('mensagem2').value = "";

            setTimeout(function () {
                window.location.reload(1);
            }, 2600);

            return;
        }
    }

    var foto = document.getElementById('foto');
    foto.style.display = 'none';


    var mensagemDescripto = mensagem
        .replaceAll("enter", "e")
        .replaceAll("imes", "i")
        .replaceAll("ai", "a")
        .replaceAll("ober", "o")
        .replaceAll("ufat", "u");

    document.getElementById('mensagem2').innerHTML = mensagemDescripto
}

//Copiar

function Copiar() {
    var urna = document.getElementById('urna');
    
    copiartexto = document.getElementById('mensagem2').value;
    var copiar = copiartexto;
    navigator.clipboard.writeText(copiar);
    urna.play()

    document.getElementById('mensagem').value = "";
}