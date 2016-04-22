
//scripts
alert("Hola! Vamos a comparar 3 numeros");
var n1= prompt("Dame el primer valor");
var n2= prompt("Dame el segundo valor");
var n3= prompt("Dame el tercer valor");

if ( (n1>n2) && (n2>n3)){
	alert( n1 + " es el numero mayor")
} 

else if ( (n2>n1) && (n1>n3)){
	alert( n2 + " es el numero mayor")
}
else {
	alert(n3 + " es el numero mayor ")}