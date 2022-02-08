var palabras = ['SELECTOR','INCLUIR','CLASE','ESPACIO','FUNCION','ATRIBUTO','PENSAR'];
var palabraEnjuego = "";
var contadorIntentos = 0;
var contadorExitos = 0;
var letrasError = [];
var letrasExito = [];
var terminado = false;


window.addEventListener("DOMContentLoaded", function() {
    if(modo != '' && modo == 'dark'){
        modoDark();
    }else{
        modoLight();
    }

    let palabra = localStorage.getItem("palabra");
    localStorage.removeItem('palabra');
    if(palabra){
        palabras.push(palabra);
    }
    inicializarEventos();
}, false);

function inicializarEventos() {  
    var btnDark = document.getElementById("dark");
    btnDark.addEventListener('click', modoDark,false);
    var btnLight = document.getElementById("light");
    btnLight.addEventListener('click', modoLight,false);
    var botonNuevo = document.getElementById("nuevo");
    botonNuevo.addEventListener('click', borrar,false);
    var botonCancelar = document.getElementById("cancelar");
    botonCancelar.addEventListener('click', cancelar,false);
    var input = document.getElementById("input");
    if( navigator.userAgent.match(/Android/i)|| navigator.userAgent.match(/webOS/i)
    || navigator.userAgent.match(/iPhone/i)
    || navigator.userAgent.match(/iPad/i)
    || navigator.userAgent.match(/iPod/i)
    || navigator.userAgent.match(/BlackBerry/i)
    || navigator.userAgent.match(/Windows Phone/i)){
        input.focus();
        input.addEventListener('input', obtenerLetraInput,false);
        input.classList.remove('ocultar');
        input.classList.add('mostrar');
    }else{
        input.classList.remove('mostrar');
        input.classList.add('ocultar');
        var dom = document.querySelector("html");
        dom.addEventListener('keypress', obtenerLetra,false);
    }
    elegirPalabra();

}

function abrirTeclado(){
    document.getElementById("input").focus();
}

function cancelar() {
    window.location.href='index.html';
}

function borrar(){
    document.getElementById("erradas").innerHTML="";
    document.getElementById('resultado').innerHTML=''; 
    letrasError = [];
    letrasExito = [];
    palabraEnjuego="";
    contadorIntentos = 0;
    contadorExitos = 0;
    terminado = false;
    const div = document.querySelectorAll(".contenedor-letra");
    for (var i = 0; i < div.length; i++){ 
        div[i].isConnected;
        div[i].remove();
        div[i].isConnected;
    }
    
    limpiarCanvas();
    inicializarCanvas();
    inicializarEventos();

}

function elegirPalabra(){
    let div;
    let max = palabras.length;
    let posicionPalabras = Math.floor(Math.random() * (max - 0)) + 0;
    palabraEnjuego=palabras[posicionPalabras];
    let contenedor = document.getElementById("guiones")
    for (let i = 0; i < palabraEnjuego.length; i++) {
        div=document.createElement("div");
        div.id=i;
        if(modo=='dark'){
            div.className="contenedor-letra border-color-light";
         }else{
            div.className="contenedor-letra border-color-dark";
        }
        contenedor.appendChild(div);
    }
}

function buscoLetra(letra){
    var hayLetra = false;
    if(letrasExito.indexOf(letra) == -1 ){
        for (let i = 0; i < palabraEnjuego.length; i++) {
            if (palabraEnjuego[i]==letra){
                document.getElementById(i).innerHTML=letra;
                hayLetra=true;
                letrasExito.push(letra);
                contadorExitos++;
            }
        }
    }else{
        hayLetra=true;
    }
    
    if(!hayLetra) {
        if (letrasError.indexOf(letra)==-1) {
            letrasError.push(letra);
            contadorIntentos ++;
            document.getElementById("erradas").innerHTML+=letra;
        }
        switch (contadorIntentos) {
            case 1:
                dibujarPoste(); 
                break;
            case 2:
                dibujarTravesanio(); 
                break;
            case 3:
                dibujarSoga(); 
                break;
            case 4:
                dibujarCara(); 
                break;
            case 5:
                dibujarOjoIzq(); 
                break;
            case 6:
                dibujarOjoDer(); 
                break;
            case 7:
                dibujarTorso(); 
                break;
            case 8:
                dibujarBrazoIzq(); 
                break;
            case 9:
                dibujarBrazoDer(); 
                break;
            case 10:
                dibujarPiernaIzq(); 
                break;
            case 11:
                dibujarPiernaDer(); 
                setInterval(dibujarBoca(), 1000);
                document.getElementById('input').classList.remove('mostrar');
                document.getElementById('input').classList.add('ocultar');
                document.getElementById('resultado').classList.remove('texto-light');
                document.getElementById('resultado').classList.add('texto-error');
                document.getElementById('resultado').innerHTML='Perdiste!!';
                terminado=true;
                break;
            
        }      
    }
    if(contadorExitos==palabraEnjuego.length){
        if(modo=='dark'){
            document.getElementById('resultado').classList.remove('texto-error');
            document.getElementById('resultado').classList.add('texto-light'); 
        }else{
            document.getElementById('resultado').classList.remove('texto-error');
            document.getElementById('resultado').classList.add('texto-dark');
        }
       document.getElementById('input').classList.remove('mostrar');
       document.getElementById('input').classList.add('ocultar');
       document.getElementById('resultado').innerHTML='Ganaste!!'; 
       terminado=true;
    }
    
}


function obtenerLetra(e){
    if(!terminado){
        let letra = e.key.toUpperCase();
        if(verificarLetra(letra)){
            buscoLetra(letra);
         };
    }
}

function obtenerLetraInput(e){
    if(!terminado){
        let letra = e.target.value.toUpperCase(); 
        if(verificarLetra(letra)){
            buscoLetra(letra);
         };
         e.target.value = '';
    }
}


function verificarLetra(letra){
    var letras_mayusculas="ABCDEFGHIJKLMNÑOPQRSTUVWXYZ";
    return (letras_mayusculas.indexOf(letra)!=-1); 
}


function modoDark(){
    localStorage.setItem('modo','dark');
    document.getElementById('body').classList.remove("light");
    document.getElementById('body').classList.add('dark');
    document.getElementById('nuevo').classList.remove('bg-dark');
    document.getElementById('nuevo').classList.add('bg-light');
    document.getElementById('cancelar').classList.remove('bg-light');
    document.getElementById('cancelar').classList.add('bg-dark');
    document.getElementById('resultado').classList.remove('texto-dark');
    document.getElementById('resultado').classList.add('texto-light');
    document.getElementById('erradas').classList.remove('texto-dark');
    document.getElementById('erradas').classList.add('texto-light');
    const div = document.querySelectorAll(".contenedor-letra");
    for (var i = 0; i < div.length; i++){ 
        div[i].classList.remove('border-color-dark');
        div[i].classList.add('border-color-light');
    }
    document.getElementById('logo').src='assets/VectorB.svg';
    limpiarCanvas();
    inicializarCanvas();
    cambiarColor();
}

function modoLight(){
    localStorage.setItem('modo','light');
    document.getElementById('body').classList.remove('dark');
    document.getElementById('body').classList.add('light');
    document.getElementById('nuevo').classList.remove('bg-light');
    document.getElementById('nuevo').classList.add('bg-dark');
    document.getElementById('cancelar').classList.remove('bg-dark');
    document.getElementById('cancelar').classList.add('bg-light');
    document.getElementById('resultado').classList.remove('texto-light');
    document.getElementById('resultado').classList.add('texto-dark');
    document.getElementById('erradas').classList.remove('texto-light');
    document.getElementById('erradas').classList.add('texto-dark');
    const div = document.querySelectorAll(".contenedor-letra");
    for (var i = 0; i < div.length; i++){ 
        div[i].classList.remove('border-color-light');
        div[i].classList.add('border-color-dark');
    }
    document.getElementById('logo').src='assets/Vector.svg';
    limpiarCanvas();
    inicializarCanvas();
    cambiarColor();
}

function cambiarColor(){
    switch (contadorIntentos) {
        case 1:
            dibujarPoste(); 
            break;
        case 2:
            dibujarPoste(); 
            dibujarTravesanio(); 
            break;
        case 3:
            dibujarPoste(); 
            dibujarTravesanio(); 
            dibujarSoga(); 
            break;
        case 4:
            dibujarPoste(); 
            dibujarTravesanio(); 
            dibujarSoga(); 
            dibujarCara(); 
            break;
        case 5:
            dibujarPoste(); 
            dibujarTravesanio(); 
            dibujarSoga(); 
            dibujarCara();
            dibujarOjoIzq(); 
            break;
        case 6:
            dibujarPoste(); 
            dibujarTravesanio(); 
            dibujarSoga(); 
            dibujarCara();
            dibujarOjoIzq(); 
            dibujarOjoDer(); 
            break;
        case 7:
            dibujarPoste(); 
            dibujarTravesanio(); 
            dibujarSoga(); 
            dibujarCara();
            dibujarOjoIzq(); 
            dibujarOjoDer(); 
            dibujarTorso(); 
            break;
        case 8:
            dibujarPoste(); 
            dibujarTravesanio(); 
            dibujarSoga(); 
            dibujarCara();
            dibujarOjoIzq(); 
            dibujarOjoDer(); 
            dibujarTorso();
            dibujarBrazoIzq(); 
            break;
        case 9:
            dibujarPoste(); 
            dibujarTravesanio(); 
            dibujarSoga(); 
            dibujarCara();
            dibujarOjoIzq(); 
            dibujarOjoDer(); 
            dibujarTorso();
            dibujarBrazoIzq(); 
            dibujarBrazoDer(); 
            break;
        case 10:
            dibujarPoste(); 
            dibujarTravesanio(); 
            dibujarSoga(); 
            dibujarCara();
            dibujarOjoIzq(); 
            dibujarOjoDer(); 
            dibujarTorso();
            dibujarBrazoIzq(); 
            dibujarBrazoDer();
            dibujarPiernaIzq(); 
            break;
        case 11:
            dibujarPoste(); 
            dibujarTravesanio(); 
            dibujarSoga(); 
            dibujarCara();
            dibujarOjoIzq(); 
            dibujarOjoDer(); 
            dibujarTorso();
            dibujarBrazoIzq(); 
            dibujarBrazoDer();
            dibujarPiernaIzq(); 
            dibujarPiernaDer(); 
            setInterval(dibujarBoca(), 1000);
            break;
        
    } 
}