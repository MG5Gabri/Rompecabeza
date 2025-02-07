import { elementosHeader } from "./components/header/header.js";
import { cargarCartas } from "./components/tablero/tablero.js";

let DOM = document.querySelector('#root')

let contenedor = document.createElement('div')
contenedor.className = "contenedor"
DOM.appendChild(contenedor) 


let divHeader = document.createElement('div')
divHeader.className = "header"
contenedor.appendChild(divHeader) 
divHeader.appendChild(elementosHeader())

let divProgreso = document.createElement('div')
divProgreso.className = "progreso"
contenedor.appendChild(divProgreso) 

let divTablero = document.createElement('div')
divTablero.className = "tablero"
contenedor.appendChild(divTablero) 
divTablero.appendChild(cargarCartas())

let divFooter = document.createElement('div')
divFooter.className = "footer"
contenedor.appendChild(divFooter)

cargarCartas()

