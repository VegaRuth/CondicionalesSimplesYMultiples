
alert("Hola! Vamos a determinar el descuento del traje!");
var precio= prompt("Dime el precio");


if (precio>=2500){
	var ahorro=precio*.15;
	var precio_final=precio-ahorro;
} 

else {
	var ahorro=.8 * precio;
	var precio_final=precio-ahorro;}


alert("El descuento de tu traje es de " + ahorro + " y el costo final es de " + precio_final);
