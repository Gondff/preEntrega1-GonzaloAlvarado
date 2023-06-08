//Inicializar el contador en cero
let contador =0;

//condicion while para ingresar alumno y dni
while(contador < 5){
    let alumno = prompt("Ingrese el nombre del alumno " + (contador + 1) + ": ");
    let dni = parseInt(prompt("Ingrese el numero de DNI " + (contador + 1) + ": ") );

    //Validar el ingreso de datos
    while((alumno === "" || alumno === null) || (dni === ""  || dni === null)){
        alert("Error, no ingresaste el nombre o el DNI!")
        alumno = prompt("Ingrese el nombre del alumno " + (contador + 1) + ": ");
        dni = parseInt(prompt("Ingrese el numero de DNI " + (contador + 1) + ": ") );
    }

    let comision = obtenerComision(dni);

    alert("Alumno: " + alumno + "\nDNI: " + dni+ "\nComision: " + comision);

    contador++;
}

//funcion con mod para verificar paridad
function obtenerComision(dni){
    if(dni %2 === 0){
        return 43125;
    }else{
        return 43150;
    }
}