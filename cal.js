/* 1° parte */
/* definir constantes y variables */

const botonNumeros = document.getElementsByName('data-number'); //arreglo
const botonOpera = document.getElementsByName('data-opera'); //arreglo
const botonIgual = document.getElementsByName('data-igual')[0];
const botonDelete = document.getElementsByName('data-delete')[0];
var result = document.getElementById('result');
var opeActual = '';
var opeAnterior = '';
var operacion = undefined;

/* 2° parte */
/* relacionar y crear funciones  */

/* funcion "agregarNumero" */
botonNumeros.forEach(function (boton) {
  boton.addEventListener('click', function () {
    agregarNumero(boton.innerText);
  })
});

/* funcion "selectOperacion" */
botonOpera.forEach(function (boton) {
  boton.addEventListener('click', function(){
    selectOperacion(boton.innerText);
  })
});

/* funcion "calcular" */
botonIgual.addEventListener('click', function(){
  calcular();
  actualizarDisplay();
});

/* funcion "clear" */
botonDelete.addEventListener('click', function(){
  clear();
  actualizarDisplay();
});

function selectOperacion(op){
  if(opeActual === '') return;
  if(opeAnterior !== ''){
    calcular()
  }
  operacion = op.toString();
  opeAnterior = opeActual;
  opeActual = '';
}
//una vez hecho esto se define el metodo calcular

function calcular(){
  var calculo;
  const anterior = parseFloat(opeAnterior);
  const actual = parseFloat(opeActual);
  if(isNaN(anterior) || isNaN(actual)) return;
  switch(operacion){
    case '+':
      calculo = anterior + actual;
      break;
    case '-':
      calculo = anterior - actual;
      break;
    case 'x':
      calculo = anterior * actual;
      break;
    case '/':
      calculo = anterior / actual;
      break;
    default:
      return;
  }
  opeActual = calculo;
  operacion = undefined;
  opeAnterior = '';
}

/* parte 3 */
/* implementar los metodos */
/* anters de definir los metosdos, es importante crear unas variables en la Parte 1°:  (var openActual = '';)(var openAnterior = '';)(var operacion = undefined;) */

/* PRIMER METODO */

/* funcion "agregarNumero" */
function agregarNumero(num) {
  opeActual = opeActual.toString() + num.toString();
  actualizarDisplay();
}

function actualizarDisplay() {
    result.value = opeActual;
}

/* SEGUNDO METODO */

/* funcion "clear" */
function clear() {
  opeActual = '';
  opeAnterior = '';
  operacion = undefined;
}
function actualizarDisplay() {
  result.value = opeActual;
}
clear();

/* TERCER METODO */

/* funcion "selectOperacion" */
