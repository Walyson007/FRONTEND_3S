function validarFormulario() {
    let nome = document.getElementById("nome").value;
    let sobrenome = document.getElementById("sobrenome").value;
    let email = document.getElementById("email").value;
    let telefone = document.getElementById("telefone").value;
    let DDD = document.getElementById("DDD").value;
    let numero = document.getElementById("numero").value;
    let CEP = document.getElementById("CEP").value;
    let Endereço = document.getElementById("Endereço").value;
    let complemento = document.getElementById("Complemento").value;
    let bairro = document.getElementById("Bairro").value;
    let cidade = document.getElementById("Cidade").value;

    let quantidadeErros = 0;

    if (nome.trim().length == 0) {
        formError("nome");
        quantidadeErros++;
        alert("O campo 'Nome' é obrigatório.");     
    }
    else{
        reiniciaBorda("nome");
    }

    if (sobrenome.trim().length == 0) {
        formError("sobrenome");
        quantidadeErros++;
        alert("O campo 'Sobrenome' é obrigatório.");     
    }
    else{
        reiniciaBorda("sobrenome");
    }   

    if (email.trim().length == 0) {
        formError("email");
        quantidadeErros++;
        alert("O campo 'Email' é obrigatório.");     
    }else{
        reiniciaBorda("email");
    }

    if (telefone.trim().length == 0) {
        formError("telefone");
        quantidadeErros++;
        alert("O campo 'Telefone' é obrigatório.");     
    }else{
        reiniciaBorda("telefone");
    }

    if (DDD.trim().length == 0) {
        formError("DDD");
        quantidadeErros++;
        alert("O campo 'DDD' é obrigatório.");     
    }else{
        reiniciaBorda("DDD");
    }

    if (numero.trim().length == 0) {
        formError("numero");
        quantidadeErros++;
        alert("O campo 'Número' é obrigatório.");     
    }else{
        reiniciaBorda("numero");
    }

    if (CEP.trim().length == 0) {
        formError("CEP");
        quantidadeErros++;
        alert("O campo 'CEP' é obrigatório.");     
    }else{
        reiniciaBorda("CEP");
    }

    if(quantidadeErros > 0){
        alert("Existe" + quantidadeErros + " erro(s) no formulário. Por favor, corrija-os antes de enviar.");
        quantidadeErros = 0;
    }else{
        alert("Formulário enviado com sucesso!");
        reiniciaTodasAsBordas();
    }

}

function formError(idCampo) {
    document.getElementById(idCampo).style.border = "2px solid red";
}

function reiniciaBorda(idCampo) {
    document.getElementById(idCampo).style.border = "transparent";
}