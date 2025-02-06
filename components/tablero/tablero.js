import { mezclarCartas } from "./data.js";

function item(contenido) {
    let div = document.createElement('div');
    div.textContent = contenido;
    div.className = "carta";
    return div;
}

function cargarCartas() {
    let div = document.createElement('div');
    div.className = "div-tablero";

    // Obtener las cartas mezcladas
    let cartasMezcladas = mezclarCartas();

    // Dividir las cartas en dos filas y agregarlas al tablero
    cartasMezcladas.forEach((letra) => {
        div.appendChild(item(letra));
    });

    return div;
}

export { cargarCartas };
