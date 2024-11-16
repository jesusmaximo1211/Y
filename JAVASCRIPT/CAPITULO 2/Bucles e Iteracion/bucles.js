//BUCLE WHILE
let numeroParaSumar=0;
while (numeroParaSumar<10){
    numeroParaSumar++;
    document.write(numeroParaSumar + "<br>" )
}
//DO WHILE
let result="";
let i = 0;

do {
    i += 1;
    result+= i+"<br>";
} while (i < 5); //primero hace, despues pregunta a while
document.write(result);

//BREAK
let numero=0
while(numero<400){
    numero++;
    document.write(numero+"<br>");
    if (numero==15) {
        break;
    }
}

//FOR
for(let j=6; j>=0; j-- ) { //declaracion, condicion, iteracion
    if(j==4){
        continue; //omitir el 4
    }
    document.write(j+"<br>")
    if(j==2){
        break; //romper al llear a 2
    }
}