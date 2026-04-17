// 1. Estructura de datos: Arreglo de Objetos
const diccionario = [
{ ingles: "apple", espanol: "manzana" },
{ ingles: "cat", espanol: "gato" },
{ ingles: "house", espanol: "casa" },
{ ingles: "blue", espanol: "azul" },
{ ingles: "water", espanol: "agua" }
];
// 2. Selección de elementos del DOM
const elementoIngles = document.getElementById("palabra-ingles");
const inputEspanol = document.getElementById("input-espanol");
const btnComprobar = document.getElementById("btn-comprobar");
const elementoMensaje = document.getElementById("mensaje");
let palabraActual = {};
// 3. Función para seleccionar y mostrar una palabra al azar
function cargarNuevaPalabra() {
// Generar índice aleatorio
const indiceAzar = Math.floor(Math.random() * diccionario.length);
palabraActual = diccionario[indiceAzar];
// Actualizar la interfaz
elementoIngles.textContent = palabraActual.ingles.toUpperCase();
inputEspanol.value = ""; // Limpiar el input
elementoMensaje.textContent = ""; // Limpiar mensajes previos
}
// 4. Lógica de validación
btnComprobar.addEventListener("click", function() {
// Obtenemos lo que escribió el usuario, quitamos espacios extra y pasamos a minúsculas
const respuestaUsuario = inputEspanol.value.trim().toLowerCase();

if (respuestaUsuario === palabraActual.espanol) {
elementoMensaje.textContent = "¡Correcto! Excelente trabajo.";
elementoMensaje.style.color = "green";
// Esperamos 1.5 segundos y cargamos una nueva palabra
setTimeout(cargarNuevaPalabra, 1500);
} else {
elementoMensaje.textContent = "Incorrecto. ¡Intenta de nuevo!";
elementoMensaje.style.color = "red";
// No llamamos a cargarNuevaPalabra(), por lo que se queda en la misma
}
});
// 5. Iniciar el juego al cargar la página
cargarNuevaPalabra();