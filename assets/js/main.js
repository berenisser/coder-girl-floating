//Boton Inscribirse

var primerMensaje = document.getElementById("chicas");
var segundoMensaje = document.getElementById("cambio");

document.getElementById("btn-inscribete").addEventListener("click", function(){
	primerMensaje.classList.toggle("display-none");
	segundoMensaje.classList.toggle("display-yes");
})

//Boton Hackathon
var imagen = document.getElementById("foto-float");

document.getElementById("btn-hackathon").addEventListener("click",function(){
	imagen.classList.toggle("float-right");
})


//Boton enviar formularion y validación


document.getElementById("btn-enviar").addEventListener("click", function(){
//Llamamos los valores de los inputs
	var inputNombre = document.getElementById("value-nombre");
	var inputEmail = document.getElementById("value-email");
	var inputTexto = document.getElementById("value-texto");

	event.preventDefault(); //previene que la página salte al inicio

	if (validarNombre(inputNombre)){
		if(validarEmail(inputEmail)){
			if (validarTexto(inputTexto,100)){
				alert("Gracias por ingresar su información de contacto");
			}
		}
	}
})



//Funciones de validacion
function validarNombre(inputNombre) {   
	var letrasNombre = /^[A-Za-z]+$/;  
	if(inputNombre.value.match(letrasNombre)){  
		return true;  
	} else {  
		alert('Debe ingresar su nombre');  
		inputNombre.focus();  
		return false;  
	}  
} 


function validarEmail(inputEmail){  
	var formatoCorreo = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;  
	if(inputEmail.value.match(formatoCorreo)){  
		return true;  
	} else {  
		alert("Debe ingresar un formato de email correcto");  
		inputEmail.focus();  
		return false;  
	}  
} 

function validarTexto(inputTexto,largo){
	var valueTexto = inputTexto.value.length;
	if(valueTexto == 0 || valueTexto<largo){
		alert("Debes incluir un mensaje de mas de 100 caracteres");
		inputTexto.focus();
		return false;
	} else{
		return true;
	}
}