'use strict';

// API base URL
const API_URL = 'http://localhost:3000/api/libros';

let books = [];
let contador = 0;
let librosSel = [];

// Cargar libros desde la API
async function cargarLibros() {
    try {
        const response = await fetch(API_URL);
        books = await response.json();
        crearPanelIzquierda();
    } catch (error) {
        console.error('Error al cargar libros:', error);
        document.getElementById("izquierda").innerHTML = 
            '<div style="padding: 20px; color: red;">Error al cargar los libros. Asegúrate de que el servidor está corriendo.</div>';
    }
}

// Crear el DOM panel Izquierda
function crearPanelIzquierda() {
    let cadenaDOM = "";
    books.forEach((book, i) => {
        cadenaDOM +=
            `<div>
                <img src="http://localhost:3000/public/${book.img}" height="170" width="108" id="img${i}"><br/>
                <strong>${book.title}</strong><br/>
                ${book.author}   
            </div>`;
    });
    document.getElementById("izquierda").innerHTML = cadenaDOM;
    
    // Una vez construido el DOM de imágenes creamos escuchadores
    books.forEach((book, i) => {
        document.getElementById(`img${i}`).addEventListener('click', () => {
            contador++;
            document.getElementById("contador").innerHTML = contador;
            librosSel.push(book);
            panelDerecha();
        });
    });
}

// Función para DOM panel derecha
const panelDerecha = () => {
    let contenido = "";
    librosSel.forEach((book, i) => {
        contenido +=
            `<li class="list-group-item">
                <img class="img-circle media-object pull-left" src="http://localhost:3000/public/${book.img}" width="32" height="32">
                <div class="media-body">
                    <strong>${book.title}</strong>
                    <p>${book.author}</p>
                    <button class="btn btn-mini btn-default" id="btnMinus${i}">
                        <span class="icon icon-minus-circled"></span>
                    </button>  
                </div>
            </li>`;
    });
    document.getElementById("lista").innerHTML = contenido;
    
    // Escuchadores botones minus
    librosSel.forEach((book, i) => {
        document.getElementById(`btnMinus${i}`).addEventListener('click', () => {
            eliminarLibroSel(i);
        });
    });
}

const eliminarLibroSel = (i) => {
    librosSel.splice(i, 1); // Eliminamos el elemento del array
    contador--;
    document.getElementById("contador").innerHTML = contador;
    panelDerecha();
}

// Función muestra/oculta div
const muestra_oculta = id => {
    if (document.getElementById) { // Se obtiene el id
        var el = document.getElementById(id); // Se define la variable "el" igual a nuestro div
        el.style.display = (el.style.display == 'none') ? 'block' : 'none'; // Damos un atributo display:none que oculta el div
    }
}

document.getElementById("contador").addEventListener('click', () => {
    muestra_oculta("derecha");
});

// Inicialmente oculto el div
muestra_oculta("derecha");

// Cargar los libros al iniciar la página
cargarLibros();
