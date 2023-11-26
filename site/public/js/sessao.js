// sessão
function validarSessao() {
    var email = sessionStorage.EMAIL_USUARIO;
    var user = sessionStorage.USER_USUARIO;
    var nome = sessionStorage.NOME_USUARIO;
    // var recorde = sessionStorage.recorde || 0; 
    var acertos = sessionStorage.acertos || 0;
    var pontos = sessionStorage.pontos || 0;
    var erros = sessionStorage.erros || 0;
    var precisao = sessionStorage.precisao || 0;

    var b_usuario = document.getElementById("b_usuario");
    var b_user = document.getElementById("b_user");
    // var b_recorde = document.getElementById("b_recorde");
    var b_pontos = document.getElementById("b_pontos");
    var b_acertos = document.getElementById("b_acertos");
    var b_erros = document.getElementById("b_erros");
    var b_precisao = document.getElementById("b_precisao");

    if (email != null && nome != null) {
        b_email.innerHTML = email;
        b_usuario.innerHTML = nome;
        b_user.innerHTML = user;
        b_acertos.innerHTML = acertos;
        b_pontos.innerHTML = pontos;
        b_erros.innerHTML = erros;
        b_precisao.innerHTML = precisao;
    } else {
        window.location = "../login.html";
    }
}

function limparSessao() {
    sessionStorage.clear();
    window.location = "../login.html";
}

// carregamento (loading)
function aguardar() {
    var divAguardar = document.getElementById("div_aguardar");
    divAguardar.style.display = "flex";
}

function finalizarAguardar(texto) {
    var divAguardar = document.getElementById("div_aguardar");
    divAguardar.style.display = "none";

    var divErrosLogin = document.getElementById("");
    if (texto) {
        divErrosLogin.style.display = "flex";
        divErrosLogin.innerHTML = texto;
    }
}