function item(contenido) {
    let div = document.createElement('div');
    div.className = "carta";

    let frente = document.createElement('div');
    frente.className = "frente";  // Lado visible al inicio
    frente.textContent = "❓";  // Puedes cambiarlo por una imagen o algo que indique que está volteada

    let atras = document.createElement('div');
    atras.className = "atras";  // Lado que muestra el emoji
    atras.textContent = contenido;

    div.appendChild(frente);
    div.appendChild(atras);

    return div;
}

export { item };
