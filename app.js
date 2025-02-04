let listaAmigos=document.getElementById("listaAmigos");
let amigos=[];

function esNombreValido(nombre) {
    let regex = /^[A-Za-zÁÉÍÓÚáéíóúÑñ\s]+$/; // Solo permite letras y espacios
    return nombre.trim() !== "" && regex.test(nombre); // Evita nombres vacíos y caracteres no permitidos
}


function agregarAmigo(){
    let nombre = document.getElementById("amigo").value.trim();
    
    if (esNombreValido(nombre) && !amigos.includes(nombre)){
        amigos.push(nombre);
        document.getElementById("amigo").value = ""; //limpiar campo de texto

        actualizarLista();
    } else if (!esNombreValido(nombre)) {
        alert("Por favor, inserte un nombre.");
    } else {
        alert("Nombre ya agregado.");
    }
}

function actualizarLista() {
    listaAmigos.innerHTML = ""; //Limpiar la lista antes de agregar los nuevos elementos

    for (let i = 0; i < amigos.length; i++) {
        let li = document.createElement('li');
        li.textContent = amigos[i];
        listaAmigos.appendChild(li);
    }
}

function sortearAmigo(){
    let resultado = document.getElementById("resultado"); // Obtener la lista de resultados

    if (amigos.length === 0) {
        alert("No hay amigos para sortear.");
        return; // Salir de la función si no hay amigos
    } 

    let indiceRandom = Math.floor(Math.random() * amigos.length); // Índice aleatorio
    let amigoSorteado = amigos[indiceRandom]; // Nombre sorteado

    resultado.innerHTML = "";  // Limpiar resultados anteriores

    let li = document.createElement('li');
    li.textContent = amigoSorteado;
    resultado.appendChild(li);
}
