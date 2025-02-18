import { cargarCartas, mezclarCartas } from "./funcionesCartas.js";

function cargarTablero() {
    let div = document.createElement('div');
    div.className = "div-tablero";
    div.appendChild(cargarCartas(mezclarCartas))

    return div;
}

export { cargarTablero };
