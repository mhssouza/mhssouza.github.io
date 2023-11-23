// sessão
function validarSessao() {
    var email = sessionStorage.EMAIL_USUARIO;
    var user = sessionStorage.USER_USUARIO;
    var nome = sessionStorage.NOME_USUARIO;
    var recorde = sessionStorage.RECORDE_USUARIO;

    var b_usuario = document.getElementById("b_usuario");
    var b_user = document.getElementById("b_user");
    var b_recorde = document.getElementById("b_recorde");

    if (email != null && nome != null) {
        b_usuario.innerHTML = nome;
        b_user.innerHTML = user;
        b_recorde.innerHTML = recorde;
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