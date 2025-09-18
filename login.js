const email = usuario.email;
const senha = usuario.senha;

function verificarCredenciais() {
    const emailInformado = document.getElementById("email").value;
    const senhaInformada = document.getElementById("senha").value;

    if (emailInformado === email) {
        alert("E-mail informado corretamente!");
    }
    else
        alert("E-mail informado incorretamente!");

}