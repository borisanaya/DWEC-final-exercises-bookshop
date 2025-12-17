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
            '<div class="col-12"><div class="alert alert-danger" role="alert">Error al cargar los libros. Asegúrate de que el servidor está corriendo.</div></div>';
    }
}

// Crear el DOM panel Izquierda con Bootstrap
function crearPanelIzquierda() {
    let cadenaDOM = "";
    books.forEach((book, i) => {
        cadenaDOM +=
            `<div class="col">
                <div class="card book-card" id="card${i}">
                    <img src="http://localhost:3000/public/${book.img}" class="card-img-top book-img" alt="${book.title}">
                    <div class="card-body text-center">
                        <h6 class="card-title">${book.title}</h6>
                        <p class="card-text text-muted small">${book.author}</p>
                    </div>
                </div>
            </div>`;
    });
    document.getElementById("izquierda").innerHTML = cadenaDOM;
    
    // Una vez construido el DOM de imágenes creamos escuchadores
    books.forEach((book, i) => {
        document.getElementById(`card${i}`).addEventListener('click', () => {
            contador++;
            document.getElementById("contador").innerHTML = contador;
            librosSel.push(book);
            panelDerecha();
            // Mostrar el carrito si está oculto
            document.getElementById("derecha").classList.remove('hidden');
        });
    });
}

// Función para DOM panel derecha con Bootstrap
const panelDerecha = () => {
    let contenido = "";
    
    if (librosSel.length === 0) {
        contenido = '<div class="p-4 text-center text-muted">El carrito está vacío</div>';
    } else {
        librosSel.forEach((book, i) => {
            contenido +=
                `<div class="cart-item">
                    <div class="d-flex align-items-start">
                        <img src="http://localhost:3000/public/${book.img}" class="rounded cart-item-img me-3" alt="${book.title}">
                        <div class="flex-grow-1">
                            <h6 class="mb-1">${book.title}</h6>
                            <p class="text-muted small mb-2">${book.author}</p>
                            <button class="btn btn-sm btn-outline-danger" id="btnMinus${i}">
                                <i class="bi bi-trash"></i> Eliminar
                            </button>
                        </div>
                    </div>
                </div>`;
        });
    }
    
    document.getElementById("lista").innerHTML = contenido;
    
    // Escuchadores botones minus
    librosSel.forEach((book, i) => {
        const btn = document.getElementById(`btnMinus${i}`);
        if (btn) {
            btn.addEventListener('click', () => {
                eliminarLibroSel(i);
            });
        }
    });
}

const eliminarLibroSel = (i) => {
    librosSel.splice(i, 1); // Eliminamos el elemento del array
    contador--;
    document.getElementById("contador").innerHTML = contador;
    panelDerecha();
    
    // Si el carrito queda vacío, mantenerlo visible pero con mensaje
    if (librosSel.length === 0) {
        document.getElementById("contador").innerHTML = '0';
    }
}

// Función muestra/oculta el carrito
const toggleCarrito = () => {
    const carrito = document.getElementById('derecha');
    carrito.classList.toggle('hidden');
}

document.getElementById("contador").addEventListener('click', () => {
    toggleCarrito();
});

// Cargar los libros al iniciar la página
cargarLibros();
