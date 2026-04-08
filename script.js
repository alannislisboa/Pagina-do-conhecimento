function mudarTexto() {
    document.getElementById("titulo").innerHTML = "O título foi alterado!";
    document.getElementById("mensagem").innerHTML = "Você clicou no botão de texto.";
}

function aumentarCaixa() {
    document.getElementById("caixa").style.width = "300px";
    document.getElementById("caixa").style.height = "300px";
    document.getElementById("mensagem").innerHTML = "A caixa aumentou de tamanho.";
}

function arredondarCaixa() {
    document.getElementById("caixa").style.borderRadius = "30px";
    document.getElementById("mensagem").innerHTML = "A caixa ficou com cantos arredondados.";
}
function mudarCor() {
    document.getElementById("caixa").style.backgroundColor = "green";
}
function adicionarBorda() {
    document.getElementById("caixa").style.border = "10px solid black";
}
function Resetar() {
    document.getElementById("caixa").style.width = "200px";
    document.getElementById("caixa").style.height = "200px";
    document.getElementById("caixa").style.backgroundColor = "royalblue";
    document.getElementById("caixa").style.borderRadius = "0px";
    document.getElementById("caixa").style.border = "none";
    document.getElementById("mensagem").innerHTML = "Clique em um botão para ver a mudança.";
}