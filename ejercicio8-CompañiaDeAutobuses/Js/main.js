alert("Hola! Vamos a calcular el costo por persona y el costo general del viaje");
var tipo_autobus= prompt("¿tipo de Autobus?");
var km_distancia= prompt("¿Cuantos son los kilometros a recorrer?");

	switch(tipo_autobus){
		case "a":var costo_persona= km_distancia * 2;
				 var costo_total=costo_persona *20
				alert("El costo del viaje por persona es de: $ "+ costo_persona + ", el costo total es $ " + costo_total);
		break
		case "A":var costo_persona= km_distancia * 2;
				 var costo_total=costo_persona *20
				alert("El costo del viaje por persona es de: $ "+ costo_persona + ", el costo total es $ " + costo_total);
		break
		case 'b':var costo_persona= km_distancia * 2.5;
				 var costo_total=costo_persona *20
				alert("El costo del viaje por persona es de: $ "+ costo_persona + ", el costo total es $ " + costo_total);
		break
		case 'B':var costo_persona= km_distancia * 2.5;
				var costo_total=costo_persona *20
				alert("El costo del viaje por persona es de: $ "+ costo_persona + ", el costo total es $ " + costo_total);
		break
		case 'c':var costo_persona= km_distancia * 3;
				 var costo_total=costo_persona *20
				 alert("El costo del viaje por persona es de: $ "+ costo_persona + ", el costo total es $ " + costo_total);
		break
		case "C":var costo_persona= km_distancia * 3;
				var costo_total=costo_persona *20
				alert("El costo del viaje por persona es de: $ "+ costo_persona + ", el costo total es $ " + costo_total);
		break
		default:alert("Ese autobus no existe");
	}