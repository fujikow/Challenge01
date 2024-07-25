// funcao exibir texto
function displayText(tag, text) 
{
    let userOutput = document.querySelector(tag);
    userOutput.innerHTML = text;
}

// limpar campos a direita
function limparTela()
{
    // limpar textos
    displayText("h3", "");
    displayText("h4", "");
    //remover imagem
    document.getElementById("imagemdireita").style.display = "none";
    //aparecer botao copiar
    let botaoCopiar = document.getElementById("buttonCopiar");
    botaoCopiar.style.visibility = "visible";
    botaoCopiar.style.pointerEvents = "auto";
    document.getElementById("textoencriptado").style.visibility = "visible";
}

function botaoCriptografar() 
{
    let inputText = document.querySelector("textarea").value;
       //check mensagem em branco
        if (inputText != ""){
            let textoencriptado = inputText.toLowerCase()
                .replace(/e/g, "enter")
                .replace(/i/g, "imes")
                .replace(/a/g, "ai")
                .replace(/o/g, "ober")
                .replace(/u/g, "ufat");
            
            displayText("h2", textoencriptado);
            limparTela();
            document.querySelector("textarea").value = ""; 
        } else {
            alert("Erro:\nDigite uma mensagem.")
        }

}

function botaoDescriptografar(){
    let outputText = document.querySelector("textarea").value;
        //check mensagem em branco
        if (outputText != ""){
            let textodesencriptado = outputText.toLowerCase()
                .replace(/enter/g, "e")
                .replace(/imes/g, "i")
                .replace(/ai/g, "a")
                .replace(/ober/g, "o")
                .replace(/ufat/g, "u");

            displayText("h2", textodesencriptado);
            limparTela();
            document.querySelector("textarea").value = "";
}
}

function botaoCopiar() {
    let copiartexto = document.getElementById("textoencriptado").innerText;
    navigator.clipboard.writeText(copiartexto);
    document.getElementById("textoencriptado").innerText = "";
    document.getElementById("textoencriptado").style.visibility = "hidden";
}