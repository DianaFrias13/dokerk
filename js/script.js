document.getElementById('player').addEventListener("mouseover",sumaPuntos);
/*Marcador*/ 
puntos=0;
tiempo=60;
sigNivel=10;

function sumaPuntos(){
    
    puntos++;
    document.getElementById("puntos").innerHTML="Puntos: <b>"+puntos+"/"+sigNivel+"</b>";
    /*Funciones matematicas */
    randNum= Math.round(Math.random()*500);
    randNum2= Math.round(Math.random()*500);
    document.getElementById("player").style.marginTop =randNum + "px";
    document.getElementById("player").style.marginLeft =randNum2 + "px";
    //document.getElementById("player").style.margin=randNum+"px "+randNum2+"px";
    if(puntos==10)
    {

        document.getElementById('estilo').href = 'css/segundo.css';

        alert("Ganaste")
        sigNivel=20;

        tiempo=60;
        puntos=0;
        document.getElementById("puntos").innerHTML="Puntos: <b>"+puntos+"/"+sigNivel+"</b>";

        
    }
    if(puntos==20)
    {

        document.getElementById('estilo').href = 'css/tercero.css';

        alert("Ganaste")
        sigNivel=30;

        tiempo=60;
        puntos=0;
    }
    if(puntos==30)
    {

        sigNivel=40;
        document.getElementById('estilo').href = 'css/tercero.css';

        alert("Ganaste")
        tiempo=60;
        puntos=0;
    }
}
function tiempoJuego(){
tiempo --;
document.getElementById("tiempo").innerHTML="Tiempo: <b> "+ tiempo +"</b>";
if(tiempo==0){
alert("Perdiste el juego")
tiempo=0;
puntos=0;
}

}
setInterval(tiempoJuego,1000)