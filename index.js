function saludar(nombre){
    console.log("Bienvenidos a Tvomcala, el restaurante de tus sueños. Te deseamos una gran experiencia" + " " + nombre);
}
const nombre = prompt("Ingrese su nombre")
saludar(nombre)


let fechaReserva;

let dia;

while (true) {
    fechaReserva = prompt("Por favor, introduce la fecha de reserva (DD-MM-YYYY):");
    let fecha = fechaReserva.split('-');
    dia = parseInt(fecha[0], 10); 

    if (dia >= 11 && dia <= 30) {
        console.log("Tu fecha de reserva es: " + fechaReserva);
        console.log("Gracias!");
        break; 
    } else {
        console.log("Esta fecha se encuentra reservada, rango permitido (días 11 al 30).");
    }
}

