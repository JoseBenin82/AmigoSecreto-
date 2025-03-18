// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
// Array para almacenar los nombres de los amigos
let amigos = [];

// Función para agregar un amigo a la lista
function agregarAmigo() {
    const input = document.getElementById('amigo');
    const nombre = input.value.trim();

    if (nombre !== "") {
        amigos.push(nombre);
        input.value = ""; // Limpiar el campo de entrada
        actualizarListaAmigos();
    } else {
        alert("Por favor, ingresa un nombre válido.");
    }
}

// Función para actualizar la lista de amigos en la interfaz
function actualizarListaAmigos() {
    const listaAmigos = document.getElementById('listaAmigos');
    listaAmigos.innerHTML = ""; // Limpiar la lista antes de actualizar

    amigos.forEach((amigo, index) => {
        const li = document.createElement('li');
        li.textContent = `${index + 1}. ${amigo}`;
        listaAmigos.appendChild(li);
    });
}

// Función para sortear los amigos secretos
function sortearAmigo() {
    if (amigos.length < 2) {
        alert("Necesitas al menos 2 amigos para realizar el sorteo.");
        return;
    }

    // Copia del array de amigos para no modificar el original
    let amigosSorteados = [...amigos];
    let resultado = [];

    // Mezclar el array de amigos
    for (let i = amigosSorteados.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [amigosSorteados[i], amigosSorteados[j]] = [amigosSorteados[j], amigosSorteados[i]];
    }

    // Asignar amigos secretos
    for (let i = 0; i < amigosSorteados.length; i++) {
        const amigoSecreto = amigosSorteados[(i + 1) % amigosSorteados.length];
        resultado.push(`${amigos[i]} -> ${amigoSecreto}`);
    }

    // Mostrar el resultado en la interfaz
    const resultadoLista = document.getElementById('resultado');
    resultadoLista.innerHTML = ""; // Limpiar la lista antes de mostrar el resultado

    resultado.forEach((res) => {
        const li = document.createElement('li');
        li.textContent = res;
        resultadoLista.appendChild(li);
    });
}