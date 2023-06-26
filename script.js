const textArea = document.querySelector(".textarea");
const mensaje = document.querySelector(".mensaje");


// La letra "e" es convertida para "enter"
// La letra "i" es convertida para "imes"
// La letra "a" es convertida para "ai"
// La letra "o" es convertida para "ober"
// La letra "u" es convertida para "ufat"

function btnEncriptar() {
    //alert(textArea.value)
    const textoEncriptado = encriptar(textArea.value)

    mensaje.value = textoEncriptado;
    textArea.value = "";
    mensaje.style.backgroundImage = "none";
}

function encriptar(stringEncriptar) {
    let mastrizCodigo = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];
    //console.table(mastrizCodigo)
    stringEncriptar = stringEncriptar.toLowerCase()
    for (let i = 0; i < mastrizCodigo.length; i++) {
        if (stringEncriptar.includes(mastrizCodigo[i][0])) {
            stringEncriptar = stringEncriptar.replaceAll(mastrizCodigo[i][0], mastrizCodigo[i][1])

        }
    } return stringEncriptar
}

function btnDesencriptar() {
    const textoDesencriptado = desencriptar(textArea.value)
    mensaje.value = textoDesencriptado;
    textArea.value = "";

}

function desencriptar(stringDesencriptar) {
    let mastrizCodigo = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];
    //console.table(mastrizCodigo)
    stringDesencriptar = stringDesencriptar.toLowerCase()
    for (let i = 0; i < mastrizCodigo.length; i++) {
        if (stringDesencriptar.includes(mastrizCodigo[i][1])) {
            stringDesencriptar = stringDesencriptar.replaceAll(mastrizCodigo[i][1], mastrizCodigo[i][0])

        }
    } return stringDesencriptar
}

function btnCopiar() {
    const textoCopiado = encriptar(mensaje.value)
    //alert(mensaje.value)
    navigator.clipboard.writeText(textoCopiado)
        .then(() => {
            console.log('Texto copiado');
        })
        .catch(err => {
            console.log('Error al copiar: ', err);
        });
}
