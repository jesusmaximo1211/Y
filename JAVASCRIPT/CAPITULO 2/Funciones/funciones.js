//declarar funcion
function saludar(){
    nombre=prompt("ingresa tu nombre");
    return "BIENVENIDO, la funcion se ejecuto correctamente"; //el TIPO DE DATO que retorna una funcion, ya que la funcion de por si no es ningun tipo de dato. Tambien finaliza la funcion.
}

variableSaludo=saludar();
//llamar la funcion
document.write(variableSaludo);

//
document.write("<br>")
document.write("<br>")
document.write("FUNCION SUMA")
document.write("<br>")

//---PARAMETROS---//
//los parametros son variables declaradas dentro de la funcion.
function suma(parametro1,parametro2){ //se establecen los parametros
    let resultadoSuma=parametro1+parametro2;
    document.write(resultadoSuma);
    document.write("<br>");
}
//llamamos a la funcion
suma(10,20); //le establecemos el valor a los parametros.
suma(1,20);
suma(20,60);
suma(50,10);

document.write("<br>"+"FUNCION SALUDAR"+"<br>")

//funcion saludar2
function saludar2(nombre){
    let frase=`Holaa, ${nombre}, como estás?`;
    document.write(frase+"<br>");
}
saludar2("Jesus");
saludar2("Pedro");
saludar2("Jesus");

document.write("<br>"+"<br>")
document.write("<br>"+"funcion flecha"+"<br>")

const compra = (producto)=>{   //contante, nombreFuncion, parametro y funcion flecha
    let carrito=`vas a comprar ${producto}`;
    document.write(carrito);
}
compra("LECHE");