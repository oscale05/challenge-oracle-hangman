
var modo='';


window.addEventListener("DOMContentLoaded", function() {
    modo = localStorage.getItem("modo");
    if(modo!='' && modo=='dark'){
        modoDark();
    }else{
        modoLight();
    }
    inicializarEventos();
}, false);

function inicializarEventos() {
    
    var btnDark = document.getElementById("dark");
    btnDark.addEventListener('click', modoDark,false);
    var btnLight = document.getElementById("light");
    btnLight.addEventListener('click', modoLight,false);
    var btnIniciar = document.getElementById("agregar");
    btnIniciar.addEventListener('click', guardar,false);
    var btnAgregar = document.getElementById("cancelar");
    btnAgregar.addEventListener('click', cancelar,false);
    var textarea = document.getElementById("palabraNueva");
    textarea.addEventListener('focus', reset,false);
}

function guardar(){
    let palabraNueva = document.getElementById("palabraNueva").value.toUpperCase();
    let textnoNumero = palabraNueva.replace(/[0-9]/g, '');
    let textnoAcentos = textnoNumero.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
    if(textnoAcentos!=''){
        localStorage.setItem('palabra', textnoAcentos)
        window.location.href='juego.html';
    }else{
        document.getElementById('textAlerta').innerHTML = 'Completá este campo';
        document.getElementById('alerta').classList.remove('text-light');
        document.getElementById('alerta').classList.remove('text-dark');
        document.getElementById('alerta').classList.add('text-error');
    }
}

function cancelar(){
    window.location.href='index.html';
}

function reset(){
    document.getElementById("palabraNueva").value='';
    document.getElementById('textAlerta').innerHTML = 'Máx. de 8 caracteres';
    if(localStorage.getItem("modo")=='dark'){
        document.getElementById('alerta').classList.remove('text-error');
        document.getElementById('alerta').classList.add('text-dark');  
    }else{
        document.getElementById('alerta').classList.remove('text-error');
        document.getElementById('alerta').classList.remove('text-light');
    }
}
function modoDark(){
    localStorage.setItem('modo','dark');
    document.getElementById('body').classList.remove("light");
    document.getElementById('body').classList.add('dark');
    document.getElementById('agregar').classList.remove('bg-dark');
    document.getElementById('agregar').classList.add('bg-light');
    document.getElementById('cancelar').classList.remove('bg-light');
    document.getElementById('cancelar').classList.add('bg-dark');
    document.getElementById('alerta').classList.remove('text-light');
    document.getElementById('alerta').classList.add('text-dark');
    document.getElementById('logo').src='assets/VectorB.svg';
}

function modoLight(){
    localStorage.setItem('modo','light');
    document.getElementById('body').classList.remove('dark');
    document.getElementById('body').classList.add('light');
    document.getElementById('agregar').classList.remove('bg-light');
    document.getElementById('agregar').classList.add('bg-dark');
    document.getElementById('cancelar').classList.remove('bg-dark');
    document.getElementById('cancelar').classList.add('bg-light');
    document.getElementById('alerta').classList.remove('text-dark');
    document.getElementById('alerta').classList.add('text-light');
    document.getElementById('logo').src='assets/Vector.svg';
}