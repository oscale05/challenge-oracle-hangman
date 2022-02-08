
window.addEventListener("DOMContentLoaded", function() {
    var modo = localStorage.getItem("modo");
    if(modo=='dark'){
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
    var btnIniciar = document.getElementById("iniciar");
    btnIniciar.addEventListener('click', iniciar,false);
    var btnAgregar = document.getElementById("agregar");
    btnAgregar.addEventListener('click', agregar,false);

}

function iniciar(){
    window.location.href='juego.html';
}

function agregar(){
    window.location.href='agregar.html';
}

function modoDark(){
    localStorage.setItem('modo','dark');
    document.getElementById('body').classList.remove("light");
    document.getElementById('body').classList.add('dark');
    document.getElementById('iniciar').classList.remove('bg-dark');
    document.getElementById('iniciar').classList.add('bg-light');
    document.getElementById('agregar').classList.remove('bg-light');
    document.getElementById('agregar').classList.add('bg-dark');
    document.getElementById('logo').src='assets/VectorB.svg';
}

function modoLight(){
    localStorage.setItem('modo','light');
    document.querySelector('body').classList.remove('dark');
    document.querySelector('body').classList.add('light');
    document.getElementById('iniciar').classList.remove('bg-light');
    document.getElementById('iniciar').classList.add('bg-dark');
    document.getElementById('agregar').classList.remove('bg-dark');
    document.getElementById('agregar').classList.add('bg-light');
    document.getElementById('logo').src='assets/Vector.svg';
}