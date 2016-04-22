alert("Hola! Vamos a calcular el costo por persona y el costo general del viaje");
var tipo_hamburguesa= prompt("¿tipo de Hamburguesa?");
var numero_hamburguesas= prompt("¿Cuantas hamburguesas deseas?");
var pago_tarjeta= prompt("Paga con tarjeta?");//bolean 


	if ( (tipo_hamburguesa === "sencilla" ) || (tipo_hamburguesa === "Sencilla") || (tipo_hamburguesa === "SENCILLA")){ 
	    var pago_total=numero_hamburguesas*20;
	    
	    	if ( (pago_tarjeta === "si" ) || (pago_tarjeta === "Si") || (pago_tarjeta === "SI") ) {
	    		var cargo_tarjeta=20*.05
	    	alert(" El subtotal por " + numero_hamburguesas + " hamburguesa(s) " + tipo_hamburguesa + "(s) " + " es de $" + pago_total + "\n El cargo por pago con tarjeta es de $" + (cargo_tarjeta*numero_hamburguesas) + "\n El total es de $" + (pago_total+(cargo_tarjeta*numero_hamburguesas)) );
	    	} else{
	    		alert("El pago total por " + numero_hamburguesas +  " hamburguesa(s) " + tipo_hamburguesa + "(s) " + " es de $" + pago_total);
	    	};
		
}else if  ( (tipo_hamburguesa === "doble" ) || (tipo_hamburguesa === "Doble") || (tipo_hamburguesa === "DOBLE")){ 
		var pago_total=numero_hamburguesas*25;
	    
	    	if ( (pago_tarjeta === "si" ) || (pago_tarjeta === "Si") || (pago_tarjeta === "SI") ) {
	    		var cargo_tarjeta=25*.05
	    	alert(" El subtotal por " + numero_hamburguesas + " hamburguesa(s) " + tipo_hamburguesa + "(s) " + " es de $" + pago_total + "\n El cargo por pago con tarjeta es de $" + (cargo_tarjeta*numero_hamburguesas) + "\n El total es de $" + (pago_total+(cargo_tarjeta*numero_hamburguesas)) );
	    	} else{
	    		alert("El pago total por " + numero_hamburguesas +  " hamburguesa(s) " + tipo_hamburguesa + "(s) " + " es de $" + pago_total);
	    	};
} 
	else if  ( (tipo_hamburguesa === "triple" ) || (tipo_hamburguesa === "Triple") || (tipo_hamburguesa === "TRIPLE")){ 
		var pago_total=numero_hamburguesas*28;
	    
	    	if ( (pago_tarjeta === "si" ) || (pago_tarjeta === "Si") || (pago_tarjeta === "SI") ) {
	    		var cargo_tarjeta=28*.05
	    	alert(" El subtotal por " + numero_hamburguesas + " hamburguesa(s) " + tipo_hamburguesa + "(s) " + " es de $" + pago_total + "\n El cargo por pago con tarjeta es de $" + (cargo_tarjeta*numero_hamburguesas) + "\n El total es de $" + (pago_total+(cargo_tarjeta*numero_hamburguesas)) );
	    	} else{
	    		alert("El pago total por " + numero_hamburguesas +  " hamburguesa(s) " + tipo_hamburguesa + "(s) " + " es de $" + pago_total);
	    	};
} 
else{
	alert("Selecciona una hamburguesa del menu!!");
}