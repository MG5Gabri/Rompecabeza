import { niveles } from "./itemNiveles.js"

function elementosHeader() {
    let divHeader = document.createElement('div')
    divHeader.className = "header"
    let elementsHeader = document.createElement('div')
    elementsHeader.className = "eleHeader"
    divHeader.appendChild(elementsHeader)

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
    
    return divHeader
}

export {elementosHeader}