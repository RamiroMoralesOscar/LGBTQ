function calcularResultado(){
    var rCorrectas = 0;
    var rIncorrectas = 0;
    var cantidadPreguntas = 8;
    var porcentajeCorrectas = 0;
    var checkbox = document.getElementsByName("r1");
    var checkbox2 = document.getElementsByName("r2");
    var checkbox3 = document.getElementsByName("r3");
    var checkbox4 = document.getElementsByName("r4");
    var checkbox5 = document.getElementsByName("r5");
    var checkbox6 = document.getElementsByName("r6");
    var checkbox7 = document.getElementsByName("r7");
    var checkbox8 = document.getElementsByName("r8");

    for (var i = 0; i < checkbox.length; i++) {
        if (checkbox[i].checked) {
            if(checkbox[i].value == "0"){   
                rIncorrectas++;
                break;
            }else{
                rCorrectas++;
                break;
            }
        }
    }

    for (var i = 0; i < checkbox2.length; i++) {
        if (checkbox2[i].checked) {
            if(checkbox2[i].value == "0"){
                rIncorrectas++;
                break;
            }else{
                rCorrectas++;
                break;
            }
        }
    }
    for (var i = 0; i < checkbox3.length; i++) {
        if (checkbox3[i].checked) {
            if(checkbox3[i].value == "0"){
                rIncorrectas++;
                break;
            }else{
                rCorrectas++;
                break;
            }
        }
    }
    for (var i = 0; i < checkbox4.length; i++) {
        if (checkbox4[i].checked) {
            if(checkbox4[i].value == "0"){
                rIncorrectas++;
                break;
            }else{
                rCorrectas++;
                break;
            }
        }
    }
    for (var i = 0; i < checkbox5.length; i++) {
        if (checkbox5[i].checked) {
            if(checkbox5[i].value == "0"){
                rIncorrectas++;
                break;
            }else{
                rCorrectas++;
                break;
            }
        }
    }
    for (var i = 0; i < checkbox6.length; i++) {
        if (checkbox6[i].checked) {
            if(checkbox6[i].value == "0"){
                rIncorrectas++;
                break;
            }else{
                rCorrectas++;
                break;
            }
        }
    }
    for (var i = 0; i < checkbox7.length; i++) {
        if (checkbox7[i].checked) {
            if(checkbox7[i].value == "0"){
                rIncorrectas++;
                break;
            }else{
                rCorrectas++;
                break;
            }
        }
    }
    for (var i = 0; i < checkbox8.length; i++) {
        if (checkbox8[i].checked) {
            if(checkbox8[i].value == "0"){
                rIncorrectas++;
                break;
            }else{
                rCorrectas++;
                break;
            }
        }
    }

    
    porcentajeCorrectas = (rCorrectas/cantidadPreguntas)*100;

    document.write("<h3>Porcentaje de preguntas acertadas: "+porcentajeCorrectas+"%,"+"<br>"+ "Preguntas acertadas:"+rCorrectas+"</h3>");
}
