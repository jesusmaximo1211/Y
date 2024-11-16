let animales= ["gato","perro","tiranosaurio rex"];


//FOR IN
for(animal in animales){ //el IN toma la POSICION
    document.write(animal+ " , ")
}

document.write("<br>")


//FOR OF
for (animal of animales){ //of muestra el contenido
    document.write (animal+" ,")
}

document.write("<br>")
document.write("<br>")
document.write("<br>")

//LABEL
array1=["maria","jesus","jose"];
array2=["messi", "lautaro", array1, "dybala"];

forLabel:
for(let array in array2){
    if (array==2){
        for(let array of array1){
            if (array=="jesus"){
                continue forLabel; //se omite el bucle for
            }
            document.write(array+"<br>") //no escribe ninguno del array1
        }
    } else {
        document.write(array2[array]+"<br>")
    }
}