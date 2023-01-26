const textArea = document.querySelector(".insertText");
const message = document.querySelector(".message");

// Funcion para encriptar

function btnEncriptar(){
    const textoEncriptado = encriptar(textArea.value);
    message.value = textoEncriptado;
    textArea.value = ""; // Para limpiar el campo 
    message.style.backgroundImage = "none"; // Para ocultar la imagen
}

function encriptar(stringEncriptada){
    let matrizCodigo = [["e","enter"],["i","imes"],["a","ai"],["o","ober"],["u","ufat"]];
    stringEncriptada = stringEncriptada.toLowerCase();

    for(let i = 0; i < matrizCodigo.length; i++){
        if(stringEncriptada.includes(matrizCodigo[i][0])){
            stringEncriptada = stringEncriptada.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1]);
        }
    }
    return stringEncriptada;
}

// Funcion para desencriptar 

function btnDesencriptar(){
    const textoEncriptado = desencriptar(textArea.value);
    message.value = textoEncriptado;
    textArea.value = ""; // Para limpiar el campo 
}

function desencriptar(stringDesencriptada){
    let matrizCodigo = [["e","enter"],["i","imes"],["a","ai"],["o","ober"],["u","ufat"]];
    stringDesencriptada = stringDesencriptada.toLowerCase();

    for(let i = 0; i < matrizCodigo.length; i++){
        if(stringDesencriptada.includes(matrizCodigo[i][1])){
            stringDesencriptada = stringDesencriptada.replaceAll(matrizCodigo[i][1], matrizCodigo[i][0]);
        }
    }
    return stringDesencriptada;
}

// Funcion para copiar la encriptación 

function copiarTexto() {
    var copyText = document.getElementById("msnEncriptado");
    copyText.select();
    document.execCommand('copy');
    alert("Texto copiado: " + copyText.value);
}