var operandoa;
var operandob;
var operacion;
let h1= document.querySelector("h1");
function init() {

    var resultado = document.getElementById("resultado");
    var multiplicar = document.getElementById("multiplicar");
    var dividir = document.getElementById("divir");
    var sumar = document.getElementById("suma");
    var restar = document.getElementById("restar");
    var reset = document.getElementById("reset");
    var igual = document.getElementById("igual");
    var uno = document.getElementById("1");
    var dos = document.getElementById("2");
    var tres = document.getElementById("3");
    var cuatro = document.getElementById("4");
    var cinco = document.getElementById("5");
    var seis = document.getElementById("6");
    var siete = document.getElementById("7");
    var ocho = document.getElementById("8");
    var nueve = document.getElementById("9")
    var cero = document.getElementById("cero");
    // eventos 
    uno.onclick = function (e) {
        resultado.textContent = resultado.textContent + "1";
    }
    dos.onclick = function (e) {
        resultado.textContent = resultado.textContent + "2";
    }
    tres.onclick = function (e) {
        resultado.textContent = resultado.textContent + "3";
    }

    cuatro.onclick = function (e) {
        resultado.textContent = resultado.textContent + "4";
    }
    cinco.onclick = function (e) {
        resultado.textContent = resultado.textContent + "5";
    }
    seis.onclick = function (e) {
        resultado.textContent = resultado.textContent + "6";
    }
    siete.onclick = function (e) {
        resultado.textContent = resultado.textContent + "7";
    }
    ocho.onclick = function (e) {
        resultado.textContent = resultado.textContent + "8";
    }
    nueve.onclick = function (e) {
        resultado.textContent = resultado.textContent + "9";
    }
    cero.onclick = function (e) {
        resultado.textContent = resultado.textContent + "0";
    }

    reset.onclick = function (e) {
        resetear();
    }

    sumar.onclick = function (e) {
        operandoa = resultado.textContent;
        operacion = "+";
        resultado.textContent = "+";
        limpiar();
    }
    restar.onclick = function (e) {
        operandoa = resultado.textContent;
        operacion = "-";
        limpiar();
    }
    dividir.onclick = function (e) {
        operandoa = resultado.textContent;
        operacion = "/";
        limpiar();
    }
    multiplicar.onclick = function (e) {
        operandoa = resultado.textContent;
        operacion = "*";
        limpiar();
    }
    igual.onclick = function () {
        operandob = resultado.textContent;
        resolver();
    }

    function limpiar() {
        resultado.textContent = "";
    }
    function resetear() {
        resultado.textContent = "";
        operandoa = 0;
        operandob = 0;
        operacion = "";


    }
    function resolver() {
        var res = 0;
        switch (operacion) {
            case "+":
                res = parseFloat(operandoa) + parseFloat(operandob);
                break;
            case "-":
                res = parseFloat(operandoa) - parseFloat(operandob);
                break;
            case "*":
                res = parseFloat(operandoa) * parseFloat(operandob);
                break;
            case "/":
                res = parseFloat(operandoa) / parseFloat(operandob);
                break;
        }
        resetear();
        
        resultado.textContent= res; 

        console.log(res);
        console.log(h1);

    }
    

}


