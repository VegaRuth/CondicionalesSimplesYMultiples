//scripts
alert("Hola! Vamos a calcular el costo por Alumno y el costo general del viaje");
var numero_alumnos= prompt("¿Cual es el numero de alumnos?");

if ( (numero_alumnos<30) && (numero_alumnos>0) ){ 
		var pago_alumno= 4000 / numero_alumnos;
		alert("El pago por alumno es de: $ "+ pago_alumno + ", el costo del viaje es de $4000");
} 

else if ( (numero_alumnos>=30) && (numero_alumnos<50)){
	var pago_viaje=numero_alumnos*95;
	alert("El pago por alumno es de: $95, el costo del viaje es de $" + pago_viaje);
}
else if ( (numero_alumnos>=50) && (numero_alumnos<100)){
	var pago_viaje=numero_alumnos*70;
	alert("El pago por alumno es de: $70, el costo del viaje es de $" + pago_viaje);
}
else{
	var pago_viaje=numero_alumnos*65;
	alert("El pago por alumno es de: $65, el costo del viaje es de $" + pago_viaje);
}
