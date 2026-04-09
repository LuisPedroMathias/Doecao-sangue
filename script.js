let doadores = [];

function enviar() {

    let nome = document.getElementById("nome").value;
    let email = document.getElementById("email").value;
    let idade = document.getElementById("idade").value;
    let peso = document.getElementById("peso").value;
    let tipo = document.getElementById("Tipo").value;
    let telefone = document.getElementById("Telefone").value;
    let cidade = document.getElementById("cidade").value;
    let estado = document.getElementById("estado").value;

    if (nome == "" || email == "" || idade == "" || peso == "" || telefone == "" || cidade == "" || estado == "") {
        alert("Preencha todos os campos");
        return false;
    }

    if (nome.indexOf(" ") == -1) {
        alert("Digite nome e sobrenome");
        return false;
    }

    if (email.indexOf("@") == -1) {
        alert("Email inválido");
        return false;
    }

    if (idade < 16) {
        alert("Precisa ter pelo menos 16 anos");
        return false;
    }

    if (peso < 50) {
        alert("Precisa ter pelo menos 50kg");
        return false;
    }

    if (isNaN(telefone)) {
        alert("Telefone só pode ter números");
        return false;
    }

    let doador = {
        nome: nome,
        email: email,
        idade: idade,
        peso: peso,
        tipoSanguineo: tipo,
        telefone: telefone,
        cidade: cidade,
        estado: estado
    };

    doadores.push(doador);
    console.log(doadores);
    alert("Cadastrado com sucesso!");

    return true;
}