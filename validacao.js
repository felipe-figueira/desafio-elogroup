function validarNome() {
    if (document.getElementById("name").validity.patternMismatch) {
        alert("Por favor, digite pelo menos um sobrenome");
    }
}
function validarTelefone() {
    if (document.getElementById("tel").validity.patternMismatch) {
        alert("Por favor, digite o telefone nesse formato: 99-99999999");
    }
}

function habilitar() {
    if(document.getElementById('facebook').disabled==true){
        document.getElementById('facebook').disabled=false
    }
    if(document.getElementById('linkedin').disabled==true){
        document.getElementById('linkedin').disabled=false
    }
    if(document.getElementById('instagram').disabled==true){
        document.getElementById('instagram').disabled=false
    }
}

function desabilitar() {
    if(document.getElementById('facebook').disabled==false){
        document.getElementById('facebook').disabled=true
    }
    if(document.getElementById('linkedin').disabled==false){
        document.getElementById('linkedin').disabled=true
    }
    if(document.getElementById('instagram').disabled==false){
        document.getElementById('instagram').disabled=true
    }
}

$("#tel").mask("00-00000000");
