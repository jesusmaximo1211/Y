let cantidad = prompt("Cuantos alumnos son?"); //cantidad de alumnos solicitada
let alumnosTotales=[];  //lista de alumnos vacia

for (i=0; i<cantidad; i++){ //funcion for: declaracion, condicion, iteracion
    alumnosTotales[i] = [prompt("Nombre del Alumno " + (i+1)), 0] 
}
const tomarAsistencia = (nombre,p)=>{ //funcion para tomar asistencia
    let presencia= prompt(nombre);
    if (presencia=="p") {
        alumnosTotales[p][1]++;
    }
}

for (i=0; i<30;i++){
    for (alumno in alumnosTotales){
        tomarAsistencia(alumnosTotales[alumno][0], alumno);
    }
}

for (alumno in alumnosTotales){
    let resultado=`${alumnosTotales[alumno][0]}:<br> 
            asistencias: ${alumnosTotales[alumno][1]} <br>
            inasistencias: ${30-alumnosTotales[alumno][1]} <br>
    `
    if (30-alumnosTotales[alumno][1] > 18){
        resultado+="REPROBADO <br>"
    } else {
        resultado+= "<br><br>"
    }
    document.write(resultado)
}