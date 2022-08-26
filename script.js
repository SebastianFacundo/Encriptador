var caja_input = document.getElementById("caja_input");
var caja_output = document.getElementById("caja_output");
var boton_encriptar = document.getElementById("btn_encriptar");
var boton_desencriptar = document.getElementById("btn_desencriptar");
var boton_copiar = document.getElementById("btn_copiar");
boton_encriptar.onclick = encriptar;
boton_desencriptar.onclick = desencriptar;
boton_copiar.onclick = copiar;

function esValido(texto) {
  if (texto == "") {
    alert("Debe ingresar una letra como mínimo");
    return false;
  } else if (!/^[a-z ]*$/.test(texto)) {
    alert(
      "El texto no debe contener mayúsculas,acentos ni carácteres especiales"
    );
    return false;
  }
  return true;
}

function encriptar() {
  var texto = caja_input.value;
  if (esValido(texto)) {
    texto = texto.replace(/e/gm, "enter");
    texto = texto.replace(/i/gm, "imes");
    texto = texto.replace(/a/gm, "ai");
    texto = texto.replace(/o/gm, "ober");
    texto = texto.replace(/u/gm, "ufat");
    caja_input.value = "";
    caja_output.value = texto;
    boton_copiar.style.display="block";
  }
}

function desencriptar() {
  var texto = caja_input.value;
  if (esValido(texto)) {
    texto = texto.replace(/enter/gm, "e");
    texto = texto.replace(/imes/gm, "i");
    texto = texto.replace(/ai/gm, "a");
    texto = texto.replace(/ober/gm, "o");
    texto = texto.replace(/ufat/gm, "u");
    caja_input.value = "";
    caja_output.value = texto;
    boton_copiar.style.display="block";
  }
}

function copiar() {
  caja_output.select();
  navigator.clipboard.writeText(caja_output.value);
  caja_output.value = "Texto copiado";
}
