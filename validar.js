function validar() {
  let letras = ["T","R","W","A","G","M","Y","F","P","D","X","B","N","J","Z","S","Q","V","H","L","C","K","E"];
  dni = document.getElementById("numeros").value;
  letr = document.getElementById("letra").value;
  letra = letr.toUpperCase();
  const pattern = new RegExp("^[A-Z]+$", "i");

  if (isNaN(dni) || dni < 0 || dni > 99999999  ) {
    alert("Introduce un número correcto en el campo DNI");
	form.reset();
  } else if (dni == "" || dni == " ") {
    alert("El número debe tener 8 caracteres");
	form.reset();
  } else if (dni.length < 8) {
    alert("El número no puede quedar vacío o con espacios");
	form.reset();
  } else if (!pattern.test(letra) || letra.length > 1) {
    alert("Introduce una letra en el campo LETRA");
    form.reset();
  } else {
	var resultado = dni % 23;
    dniLetra = letras[resultado];
    calculoLetra = dni + " " + dniLetra;
    document.getElementById("dni_correcto").innerHTML = calculoLetra;

    if (letra == dniLetra) {
      verde = document.createElement("h1");
      verde.textContent = letra + "\n" + " ES CORRECTA";
      verde.setAttribute("id", "verde");
      document.getElementById("resultado").appendChild(verde);
      document.getElementById("verde").style.color = "#568A37";
    } else {
      rojo = document.createElement("h2");
      rojo.textContent = letra + "\n" + " ES ERRÓNEA";
      rojo.setAttribute("id", "rojo");
      document.getElementById("resultado").appendChild(rojo);
      document.getElementById("rojo").style.color = "#C62A2A";
    }

    form.reset();
  }
  
}

function handle(event){
	if(event.keyCode === 13){
		event.preventDefault();
		document.getElementById("aceptar").click();
		form.reset();		
    }
}

	
  

