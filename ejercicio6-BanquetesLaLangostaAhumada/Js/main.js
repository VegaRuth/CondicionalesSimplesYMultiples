//scripts
alert("Hola! Vamos a calcular el presupuesto");
var numero_personas= prompt("¿Cual es el numero de invitados?");

if (numero_personas<200){ 
		var presupuesto=numero_personas*95;
		alert("El presupuesto para "+ numero_personas + " personas es de: $ " + presupuesto);
} 

else if ( (numero_personas>200) && (numero_personas<300)){
	var presupuesto=numero_personas*85;
	alert("El presupuesto para "+ numero_personas + " personas es de: $ " + presupuesto);
}
else {
	var presupuesto=numero_personas*75;
	alert("El presupuesto para "+ numero_personas + " personas es de: $ " + presupuesto);
}

	///////////////////////////////7