//vARIABLES

//scripts
alert("Vamos a verificar si aprobaste el curso");
var n1= prompt("Introduce tu primer nota");
var n2= prompt("Introduce tu segunda nota");
var n3= prompt("Introduce tu segunda nota");
var promedio=( (parseFloat(n1)+ parseFloat(n2)+ parseFloat(n3))/3 );

if (promedio >=6) {
	alert("Aprobado tu promedio es: " + promedio.toFixed(2))} 
else{
	alert("Reprobado tu promedio es: " + promedio.toFixed(2))
};
