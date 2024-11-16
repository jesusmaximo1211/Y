//PEDIR DATOS
dineroCofla=prompt("cuanto dinero tienes Cofla?");

//funcion que permite convertir a dato numerico
dineroCofla = parseInt(dineroCofla);

//RECOMENDAR EL HELADO MAS CARO QUE PUEDA COSTEARSE
if (dineroCofla>0.6 && dineroCofla<1){
    alert("comprate el helado de agua");
    alert("y te sobran "+ (dineroCofla-0.6));
}
else if (dineroCofla>=1 && dineroCofla<1.6){
    alert("comprate el helado de crema");
    alert("y te sobran "+ (dineroCofla-1));
}
else if (dineroCofla>=1.6 && dineroCofla<1.7){
    alert("comprate el helado maarca heladix");
    alert("y te sobran "+ (dineroCofla-1.6));
}
else if (dineroCofla>=1.7 && dineroCofla<1.8){
    alert("comprate el helado marca healdovich");
    alert("y te sobran "+ (dineroCofla-1.7));
}
else if (dineroCofla>=1.8 && dineroCofla<2.9){
    alert("comprate el helado marca helardo");
    alert("y te sobran "+ (dineroCofla-1.8));
}
else if (dineroCofla>=2.9){
    alert("comprate el helado con confites, o e el pote de 1/4kg");
    alert("y te sobran "+ (dineroCofla-2.9));
}
else{
    alert("NO TE ALCANZA PARA NADA")
}

