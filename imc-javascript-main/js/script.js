function calcular(){
    //Pegar os valores dos campos
    //nome
    const nome = document.getElementById("nome").value;
    //altura
    const altura = parseFloat(document.getElementById("altura").value);
    //peso
    const peso = parseFloat(document.getElementById("peso").value);

    //exibir no console
    console.log("Nome: " + nome);
    console.log("Altura: " + altura);
    console.log("Peso: " + peso);

    //verificar se os campos estão preenchidos
    if(nome.trim().length === 0 || isNaN(altura) || isNaN(peso)){
        alert("Por favor, preencha todos os campos com valores válidos.");
        return;
    }
}