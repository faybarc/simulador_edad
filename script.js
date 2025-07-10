function calcular_nivel(){
    const fecha = new Date(document.getElementById("fecha_nacimiento").value);
    const hoy = new Date();
    const edad = hoy.getFullYear() - fecha.getFullYear();
    let mensaje = "";

    if(edad < 12){
        mensaje = "Nivel Primario";
    } else if (edad >= 12 && edad <= 15){
        mensaje = "Nivel Secundario Inicial";
    }else if (edad >= 16 && edad <= 18) {
        mensaje = "Nivel Secundario Final";
    }else {
        mensaje = "🛑 Edad fuera del rango escolar obligatorio";
    }

    document.getElementById("resultado").innerText = mensaje;

}