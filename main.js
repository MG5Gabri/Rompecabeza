let DOM = document.querySelector('#root')

let contenedor = document.createElement('div')
contenedor.className = "contenedor"
DOM.appendChild(contenedor) 


let divHeader = document.createElement('div')
divHeader.className = "header"
contenedor.appendChild(divHeader) 


let divProgreso = document.createElement('div')
divProgreso.className = "progreso"
contenedor.appendChild(divProgreso) 

let divTablero = document.createElement('div')
divTablero.className = "tablero"
contenedor.appendChild(divTablero) 

let divFooter = document.createElement('div')
divFooter.className = "footer"
contenedor.appendChild(divFooter   ) 
