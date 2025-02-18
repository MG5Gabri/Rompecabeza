import { cartas } from "./data.js";
import { item } from "./itemCartas.js";

function mezclarCartas() {
    let todas_las_cartas = cartas.concat(cartas) // Duplicamos las cartas para formar pares
    
    for (let i = todas_las_cartas.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        [todas_las_cartas[i], todas_las_cartas[j]] = [todas_las_cartas[j], todas_las_cartas[i]];
    }
    
    return todas_las_cartas;
}

function cargarCartas(mezclarCartas) {
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

export {cargarCartas}
export { mezclarCartas };
