let free=false;

const validarCliente=(horario)=>{
    let edad= prompt("¿Cuantos años tenes?");
    if (edad>=18){
        if (horario>=2 && horario<7 && free==false){
            alert("Puedes pasar gratis porque sos el primero");
            free=true;
        }else {
            alert("Podes pasar. Son $500")
        }
    } else {
        alert("No puedes pasar")
    }
}

validarCliente(23);
validarCliente(24);
validarCliente(1);
validarCliente(2);
validarCliente(3);
