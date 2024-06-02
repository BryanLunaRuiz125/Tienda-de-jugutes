function actualizarReloj(){
    var ahora = new Date();
    var horas = ahora.getHours();
    var minutos = ahora.getMinutes();
    var segundos = ahora.getSeconds();

    horas = (horas <10)?"0"+horas :horas;
    minutos =(minutos <10)? "0"+segundos:segundos;

    id="reloj"
    document.getElementById("reloj").innerText=tiempo;

}
setInterval(actualizarReloj,1000);