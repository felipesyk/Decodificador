const textoInput = document.querySelector("textarea");
const textoOutput = document.getElementById('textoResultado');

function hideOutputText() {
    document.getElementById("output-Botoes").style.display = "";
    document.getElementById("textoResultado").removeAttribute("hidden");
    document.getElementById("imagem").style.display = "none";
    document.getElementById("titulo").style.display = "none";
    document.getElementById("paragrafo").style.display = "none";
}

function validate(str){
  const regexEspecial = /[@!#$%^&*()/\\]/;
  const regexMaiuscula = /[A-Z]/;
  const regexNumero = /[0-9]/;
  return !(str == "" || regexEspecial.test(str) || regexMaiuscula.test(str) || regexNumero.test(str));
}

function encrypt() {   
    if (!validate(textoInput.value)){
        alert('Apenas caracteres minusculos são aceitos!');
        return;
    } 
    const textoEncriptado = encriptar(textoInput.value);
    textoOutput.innerHTML = textoEncriptado;    
    textoInput.value = '';
    hideOutputText();
}

function encriptar(resultadoEncrypt) {    
    let matrizCodigo = [['e' , 'enter'],['i' , 'imes'],['a' , 'ant'],['o' , 'over'],['u' , 'undo']];
    resultadoEncrypt = resultadoEncrypt.toLowerCase();

    for(let i = 0; i < matrizCodigo.length; i++) {
        if(resultadoEncrypt.includes(matrizCodigo[i][0])) {
            resultadoEncrypt = resultadoEncrypt.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1]);
        }
    }
    return resultadoEncrypt;
}

function descrypt() {    
    const textoDesencriptado = desencriptar(textoInput.value);
    textoOutput.innerHTML = textoDesencriptado;    
    textoInput.value = '';
    hideOutputText();
}

function desencriptar(resultadoDescrypt) {    
    let matrizCodigo = [['a' , 'ant'],['e' , 'enter'],['i' , 'imes'],['o' , 'over'],['u' , 'undo']];
    resultadoDescrypt = resultadoDescrypt.toLowerCase();

    for(let i = 0; i < matrizCodigo.length; i++) {
        if(resultadoDescrypt.includes(matrizCodigo[i][1])) {
            resultadoDescrypt = resultadoDescrypt.replaceAll(matrizCodigo[i][1], matrizCodigo[i][0]);
        }
    }
    return resultadoDescrypt;
}

function copiarTextoCriptografado () {
    let textoCopiado = textoOutput.innerHTML;    
    navigator.clipboard.writeText(textoCopiado);
    alert("Texto copiado SUCESSO!");
}

function limparTexto () {
    document.getElementById("imagem").style.display = "";
    document.getElementById("titulo").style.display = "";
    document.getElementById("paragrafo").style.display = "";
    document.getElementById("textoResultado").hidden = true;
    document.getElementById("textoResultado").innerHTML = "";
    document.getElementById("output-Botoes").style.display = "none";
    document.getElementById("textInput").value = "";
}
