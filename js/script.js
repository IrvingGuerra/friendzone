$(function(){
    var preguntas = [];
    var loading = $('#loadbar').hide();
    $(document)
    .ajaxStart(function () {
        loading.show();
    }).ajaxStop(function () {
    	loading.hide(); 
    });
    
    $("label.btn").on('click',function () {
    	var choice = $(this).find('input:radio').val();
    	$('#loadbar').show();
    	$('#quiz').fadeOut();
    	setTimeout(function(){ 
            $('#quiz').show();
            $('#loadbar').fadeOut();
            n = preguntas.length;
            switch(n){
                case 0:
                    preguntas.push(choice);
                    //Modificamos el numero
                    $("#qid").html("2");
                    //Modificamos la sig preg
                    $("#pregunta").html("¿Quién inicia las conversaciones?");
                    //Modificamos respuestas
                    $("#a").html("Yo y soy quien más habla");
                    $("#b").html("Yo casi siempre pero ambos hablamos muchísimo");
                    $("#c").html("No importa quién hable, siempre estamos mensajeando");
                    break;
                case 1:
                    preguntas.push(choice);
                    //Modificamos el numero
                    $("#qid").html("3");
                    //Modificamos la sig preg
                    $("#pregunta").html("¿Ha hecho algo para que creas que le gustas? Y ¿qué fue?");
                    //Modificamos respuestas
                    $("#a").html("No, sólo hablamos mucho");
                    $("#b").html("Sí, me ha lanzado piropos");
                    $("#c").html("Sí, sus mensajes, sus llamadas, los dates ¡todo!");
                    break;
                case 2:
                    preguntas.push(choice);
                    //Modificamos el numero
                    $("#qid").html("4");
                    //Modificamos la sig preg
                    $("#pregunta").html("¿Te dice algún apodo o sobrenombre?");
                    //Modificamos respuestas
                    $("#a").html("No :(");
                    $("#b").html("Sí, me llama igual que todo el mundo");
                    $("#c").html("Sí, me llama de una forma muy dulce");
                    break;
                case 3:
                    preguntas.push(choice);
                    //Modificamos el numero
                    $("#qid").html("5");
                    //Modificamos la sig preg
                    $("#pregunta").html("Sé sincero/a ¿sus Whats que tono/intención tienen?");
                    //Modificamos respuestas
                    $("#a").html("Amable y amistoso");
                    $("#b").html("Coqueto");
                    $("#c").html("Cariñoso y tierno");
                    break;
                case 4:
                    preguntas.push(choice);
                    //Modificamos el numero
                    $("#qid").html("6");
                    //Modificamos la sig preg
                    $("#pregunta").html("¿Se comporta contigo diferente que con los demás?");
                    //Modificamos respuestas
                    $("#a").html("No, yo lo veo igual");
                    $("#b").html("Con algunas de sus amigas es igual");
                    $("#c").html("No, me da un trato especial y diferente");
                    break;
                case 5:
                    preguntas.push(choice);
                    //Modificamos el numero
                    $("#qid").html("7");
                    //Modificamos la sig preg
                    $("#pregunta").html("¿Te ha dicho “quiero verte”?");
                    //Modificamos respuestas
                    $("#a").html("Noooo");
                    $("#b").html("Sí, no con esas palabras pero sí, algo así");
                    $("#c").html("Cada vez que no nos vemos");
                    break;
                case 6:
                    preguntas.push(choice);
                    //Modificamos el numero
                    $("#qid").html("8");
                    //Modificamos la sig preg
                    $("#pregunta").html("¿Ha hecho cumplidos por tu apariencia?");
                    //Modificamos respuestas
                    $("#a").html("No");
                    $("#b").html("Alguna vez");
                    $("#c").html("Sí, todo el tiempo");
                    break;
                case 7:
                    preguntas.push(choice);
                    //Modificamos el numero
                    $("#qid").html("9");
                    //Modificamos la sig preg
                    $("#pregunta").html("La primera vez que salieron a solas ¿quién invitó a quién?");
                    //Modificamos respuestas
                    $("#a").html("Yo a él/ella");
                    $("#b").html("No lo recuerdo claramente, pudo ser mutuo acuerdo");
                    $("#c").html("Él/ella a mi");
                    break;
                case 8:
                    preguntas.push(choice);
                    //Modificamos el numero
                    $("#qid").html("10");
                    //Modificamos la sig preg
                    $("#pregunta").html("¿Han salido a solas?");
                    //Modificamos respuestas
                    $("#a").html("No");
                    $("#b").html("Sí, alguna vez");
                    $("#c").html("Siempre");
                    break;
                case 9:
                    preguntas.push(choice);
                    var rango = 0;
                    for (var i = 0; i < preguntas.length; i++) {
                        rango += parseInt(preguntas[i]);
                    }
                    if (rango>= 10 && rango< 20) {
                        $("#qid").html("R");
                        $("#pregunta").html(respuesta1[0]);
                        $("#preguntas").css("display","none");
                        $("#resultado").html(
                            '<h4>'+respuesta1[1]+'</h4>'+
                            '<img src="img/respuesta1.jpg" style="width: 100%;margin-top: 25px;">'
                        );
                        $("#resultado").fadeIn();
                    }else if(rango>= 20 && rango< 30){
                        $("#qid").html("R");
                        $("#pregunta").html(respuesta2[0]);
                        $("#preguntas").css("display","none");
                        $("#resultado").html(
                            '<h4>'+respuesta2[1]+'</h4>'+
                            '<img src="img/respuesta2.jpg" style="width: 100%;margin-top: 25px;">'
                        );
                        $("#resultado").fadeIn();
                    }else{
                        $("#qid").html("R");
                        $("#pregunta").html(respuesta3[0]);
                        $("#preguntas").css("display","none");
                        $("#resultado").html(
                            '<h4>'+respuesta3[1]+'</h4>'+
                            '<img src="img/respuesta3.jpg" style="width: 100%;margin-top: 25px;">'
                        );
                        $("#resultado").fadeIn();
                    }


                    break;
            }
    	}, 1500);
    });


});	












var respuesta1 = ["Durisimo","Estás instaladísimo/a en el país de la friendzone, podrías incluso ser la presidenta de la comunidad. Aprende a leer las señales correctas y no te claves, chicos/chicas hay muchísimos/as y quizá él será sólo tú amigo pero ya vendrá el bueno. Da lo que recibes y no te quiebres la cabeza pensando en alguien que te ve con ojos de amistad y no otra cosa."];
var respuesta2 = ["Vas que vuelas","Los chicos/chicas a veces son un poco cabeza dura, no se deciden, nada más andan viendo que pasa y no toman una decisión respecto a lo que sienten. Puede que hayas llamado su atención en algún punto pero no va ni viene, te tiene en la lista de chicas que pueden tomar el tren a la friendzone pero tampoco quiere dejar salir el viaje a su destino. No mereces que un chico coqueto te deje esperando, sé su amiga y no te claves en si le gustas o no, ya vendrá alguien con más decisión."];
var respuesta3 = ["Nada de amigos","Le gustas y están en la etapa de conocerse, enviarse mensajes, salir, conocer a los amigos, hablar hasta tarde #Ayyyñ ¡Felicidades! Disfrútalo mucho y vívelo con toda la responsabilidad del mundo, déjate conquistar por sus detalles y no olvides que a los chicos también les gusta recibirlos. Sé feliz, él no piensa ni por un segundo enviarte a la friendzone."];
