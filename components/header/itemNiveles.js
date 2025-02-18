function item(level) {
    let div = document.createElement('div');
    div.innerText = level;
    div.className = "nivel";
    return div;
}

function niveles(listadeniveles) {
    let nivelesJuego = ['1', '2', '3', '4', '5'];

    nivelesJuego.forEach((letra) => {
        listadeniveles.appendChild(item(letra)); // Agrega los niveles al contenedor
    });

    return listadeniveles; // Retorna el div con los niveles añadidos
}

export {niveles}