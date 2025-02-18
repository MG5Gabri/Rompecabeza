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


function elementosHeader() {
    let elementsHeader = document.createElement('div')
    elementsHeader.className = "eleHeader"

        let logo = document.createElement('div')
            logo.className = "dLogo"
        let divImg = document.createElement('div')
            divImg.className = "divImg"
                logo.appendChild(divImg)
        
        let imgLogo = document.createElement('img')
            imgLogo.src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRwAk62mwmUPBppveaHsHlVpIQMTegKOfOJZQ&s"
                divImg.appendChild(imgLogo)
    
        let h1 = document.createElement('h1')
            h1.innerText = "ChillGames.com"
            h1.className = "tEmpresa"
                logo.appendChild(h1)
    
    elementsHeader.appendChild(logo)

    let listadeniveles = document.createElement('div')
    niveles.listadeniveles
    listadeniveles.className = "nivelesList"
    elementsHeader.appendChild(niveles(listadeniveles))
    
    return elementsHeader
}

export {elementosHeader}