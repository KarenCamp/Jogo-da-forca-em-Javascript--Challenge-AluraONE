/* FUNÇÃO PARA ADICIONAR NOVAS PALAVRAS AO JOGO */
var btnAdd = document.querySelector(".bttn-add");
var txtInput = document.querySelector(".input-add");

btnAdd.addEventListener("click", function (event) {
    event.preventDefault();

    var txtGuardado = txtInput.value.toUpperCase();
    if (txtGuardado.length == 0) {
        alert("Caixa vazia!")
    }

    else if (txtGuardado.length >= 36) {
        alert("Tamanho máximo permitido excedido!")
    }
    
    else if (txtGuardado.includes("À") || txtGuardado.includes("Á") || txtGuardado.includes("Ã") || txtGuardado.includes("Õ") || txtGuardado.includes("É") || txtGuardado.includes("Í") || txtGuardado.includes("Ó") || txtGuardado.includes("Ú") || txtGuardado.includes("Ü") || txtGuardado.includes("Â") || txtGuardado.includes("Ê") || txtGuardado.includes("Ô") || txtGuardado.includes("1") || txtGuardado.includes("2") || txtGuardado.includes("3") || txtGuardado.includes("4") || txtGuardado.includes("5") || txtGuardado.includes("6") || txtGuardado.includes("7") || txtGuardado.includes("8") || txtGuardado.includes("9") || txtGuardado.includes("-") ||  txtGuardado.includes("Ç")) {
    alert('Não pode conter números ou acentuações nas palavras! Troque "ç" por "c".') 
    }
    else {
    alert("Adição ao sorteio da sessão realizada com sucesso!");
    arrayDePalavras.push(txtGuardado)
  }
});

/* LIMPAR AO RECARREGAR A PÁGINA */
function limpaAbarra() {
    var limpaAbarra = document.querySelector(".barra-add");
    limpaAbarra.reset();
}
