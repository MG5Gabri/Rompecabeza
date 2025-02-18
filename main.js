import { cargarFooter } from "./components/footer/footer.js";
import { elementosHeader } from "./components/header/header.js";
import { cargarProgreso } from "./components/progreso/progreso.js";
import { cargarTablero } from "./components/tablero/tablero.js";

function cargarDOM() {
let contenedor = document.createElement('div')
contenedor.className = "contenedor"


contenedor.appendChild(elementosHeader())

contenedor.appendChild(cargarProgreso()) 

contenedor.appendChild(cargarTablero()) 

contenedor.appendChild(cargarFooter())
return contenedor
}

let DOM = document.querySelector('#root')
DOM.appendChild(cargarDOM()) 

let todasLasCartasDelDOM = document.querySelectorAll('.carta')
todasLasCartasDelDOM.forEach(cadaCarta =>{

    cadaCarta.addEventListener("click", ()=>{
        cadaCarta.classList.toggle("marcado") 
        /* toggle es como un interruptor ON/OFF para clases css
            Osea que quita la clase y la pone
        */
    })

})


