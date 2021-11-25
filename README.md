# dni_practica
Comprueba si el DNI introducido es correcto.

Se propone realizar una página web que calcule la letra del número de DNI introducido por el usuario.

El programa ha de cumplir los siguientes requisitos:

Se ha de solicitar un número y una letra de DNI al usuario.
Se deben validar las entradas del usuario. En el caso de no sea correcta se deberán indicar los motivos del error. No se debe permitir una entrada vacía ni una entrada no numérica en el caso del número de DNI, ni una entrada numérica y superior a un carácter en el caso de la letra. Se ha de permitir el uso de letras mayúsculas y minúsculas.
Los mensajes de validación se mostrarán mediante ventanas emergentes.
Si se produce un error se borrará la entrada del usuario para que vuelva a introducir de nuevo los datos.
Se usará un array para almacenar las diferentes letras.
Se mostrará en la propia página la letra resultado (utilizando funciones del DOM) usando un tipo de letra grande, mínimo "h1".
Si la letra introducida por el usuario no coincide con la calculada se mostrará en la propia página con un formato "h2" en rojo y el mensaje en verde en caso contrario.
Para el cálculo de la letra del DNI podrá utilizarse un botón para tal fin o bien pulsar la tecla "Enter" una vez tecleada la entrada del usuario. La pulsación de "Enter" se ha de detectar tanto en el campo de entrada para el número como en el campo de entrada para la letra.
