function IMC(){
	var peso = document.getElementById("peso").value;
	var altura = document.getElementById("altura").value;
	var imc = (peso/(altura*altura));
	var lectura = document.getElementById("estado");
	document.getElementById("resultado").innerHTML = "Resultado: "+imc;
	

}
