let texto ="";
let textoEncriptado = "";
let textoDesencriptado = "";
let cuadroTexto = document.getElementById('cuadroTexto');
let btnEncriptar = document.querySelector('.btnEncriptar');
let btnDesencriptar = document.querySelector('.btnDesencriptar');

function getText(){
    texto = cuadroTexto.value.toLowerCase();
    return;
}

function caracterEspecial(event){
    var key = event.which || event.keyCode || 0;
      return ((key >= 48 && key <= 57 ) || (key >= 65 && key <= 90 ) || (key >= 97 && key <= 122) || (key == 32) || (key == 209) || (key == 241))
}

function limpiarPanel(){
    document.querySelector('.imagenMuneco').style.visibility = "hidden";
    document.querySelector('.msj1').style.visibility = "hidden";
    document.querySelector('.msj2').style.visibility = "hidden";
    return;
}

function mostrarTextoE(){
    document.getElementById('panelDerecho').value = textoEncriptado;
    return;
}

function mostrarTextoD(){
    document.getElementById('panelDerecho').value = textoDesencriptado;
    return;
}

function reset(){
    document.querySelector('.imagenMuneco').style.visibility = "visible";
    document.querySelector('.msj1').style.visibility = "visible";
    document.querySelector('.msj2').style.visibility = "visible";
    document.getElementById('panelDerecho').value = "";
    document.getElementById('cuadroTexto').value = "";
    document.getElementById('cuadroTexto').focus();
    texto ="";
    textoEncriptado = "";
    textoDesencriptado = "";
    
    return;
}

function encriptar(){
    btnEncriptar.addEventListener('click', getText());

    textoEncriptado = texto.replace(/e/g, "enter").replace(/i/g, "imes").replace(/a/g, "ai").replace(/o/g, "ober").replace(/u/g, "ufat");

    limpiarPanel();
    mostrarTextoE();

    return;
}

function desencriptar(){
    btnDesencriptar.addEventListener('click', getText());

    textoDesencriptado = texto.replace(/enter/gi, "e").replace(/imes/gi, "i").replace(/ai/gi, "a").replace(/ober/gi, "o").replace(/ufat/gi, "u");

    limpiarPanel();
    mostrarTextoD();

    return;
}

