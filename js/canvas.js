var color = '';
var modo = '';

window.addEventListener("DOMContentLoaded", function() {
    inicializarCanvas();
}, false);

function inicializarCanvas() {
    modo = localStorage.getItem("modo");
    if(modo != '' && modo == 'dark'){
        color = '#E5E5E5';
    }else{
        color = '#0A3871';
    }
    var canvas = document.getElementById("ahorcado");
    dibujo = canvas.getContext("2d");
    dibujarBase();
}

function dibujarBase(){
    dibujo.beginPath();
    dibujo.moveTo(0,300);
    dibujo.lineTo(280,300);
    dibujo.strokeStyle = color;
    dibujo.lineWidth = 5;
    dibujo.lineCap = "round";
    dibujo.stroke();
    dibujo.closePath();
}

function dibujarPoste(){
    dibujo.beginPath();
    dibujo.moveTo(80,300);
    dibujo.lineTo(80,16);
    dibujo.strokeStyle = color;
    dibujo.lineWidth = 5;
    dibujo.stroke();
    dibujo.closePath();
}

function dibujarTravesanio(){
    dibujo.beginPath();
    dibujo.moveTo(80,16);
    dibujo.lineTo(254,16);
    dibujo.strokeStyle = color;
    dibujo.lineWidth = 5;
    dibujo.stroke();
    dibujo.closePath();
}

function dibujarSoga(){
    dibujo.beginPath();
    dibujo.moveTo(255,16);
    dibujo.lineTo(255,65);
    dibujo.strokeStyle = color;
    dibujo.lineWidth = 5;
    dibujo.stroke();
    dibujo.closePath();
}


function dibujarCara(){
    dibujo.beginPath();
    dibujo.arc(255, 90, 25, 0, Math.PI * 2, false);
    dibujo.strokeStyle = color;
    dibujo.lineWidth = 5;
    dibujo.stroke();
    dibujo.closePath();
}

function dibujarTorso(){
    dibujo.beginPath();
    dibujo.moveTo(255,115);
    dibujo.lineTo(255,225);
    dibujo.strokeStyle = color;
    dibujo.lineWidth = 5;
    dibujo.stroke();
    dibujo.closePath();
}

function dibujarBrazoIzq(){
    dibujo.beginPath();
    dibujo.moveTo(255,115);
    dibujo.lineTo(220,175);
    dibujo.strokeStyle = color;
    dibujo.lineWidth = 5;
    dibujo.stroke();
    dibujo.closePath();
}

function dibujarBrazoDer(){
    dibujo.beginPath();
    dibujo.moveTo(255,115);
    dibujo.lineTo(290,175);
    dibujo.strokeStyle = color;
    dibujo.lineWidth = 5;
    dibujo.stroke();
    dibujo.closePath();
}


function dibujarPiernaIzq(){
    dibujo.beginPath();
    dibujo.moveTo(255,225);
    dibujo.lineTo(220,285);
    dibujo.strokeStyle = color;
    dibujo.lineWidth = 5;
    dibujo.stroke();
    dibujo.closePath();
}

function dibujarPiernaDer(){
    dibujo.beginPath();
    dibujo.moveTo(255,225);
    dibujo.lineTo(290,285);
    dibujo.strokeStyle = color;
    dibujo.lineWidth = 5;
    dibujo.stroke();
    dibujo.closePath();
}

function dibujarOjoIzq(){
    dibujo.beginPath();
    dibujo.arc(245, 85, 1, 0, Math.PI * 2, false);
    dibujo.strokeStyle = color;
    dibujo.lineWidth = 2;
    dibujo.stroke();
    dibujo.closePath();
}

function dibujarOjoDer(){
    dibujo.beginPath();
    dibujo.arc(265, 85, 1, 0, Math.PI * 2, false);
    dibujo.strokeStyle = color;
    dibujo.lineWidth = 2;
    dibujo.stroke();
    dibujo.closePath();
}


function dibujarBoca(){
    dibujo.beginPath();
    dibujo.arc(255, 105, 10, 0, Math.PI, true);
    dibujo.strokeStyle = color;
    dibujo.lineWidth = 3;
    dibujo.stroke();
    dibujo.closePath();
}

function limpiarCanvas(){
    let canvas = document.getElementById("ahorcado");
	canvas.width=canvas.width;

}