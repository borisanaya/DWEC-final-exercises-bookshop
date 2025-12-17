'use strict';

// API base URL
const API_URL = 'http://localhost:3000/api/libros';

// Instancias de Bootstrap
let modalBusquedas;
let modalNuevo;
let toastNotification;

// Inicializar componentes de Bootstrap
document.addEventListener('DOMContentLoaded', () => {
    modalBusquedas = new bootstrap.Modal(document.getElementById('modalBusquedas'));
    modalNuevo = new bootstrap.Modal(document.getElementById('modalNuevo'));
    toastNotification = new bootstrap.Toast(document.getElementById('toast'));
});

// Función para cargar todos los libros
async function buscarTodos() {
    try {
        const response = await fetch(API_URL);
        const libros = await response.json();
        representaLibros(libros);
    } catch (error) {
        console.error('Error al cargar libros:', error);
        mostrarNotificacion('Error al cargar los libros');
    }
}

// Función para buscar por título
async function buscarTitulo() {
    const txtBuscar = document.getElementById("txtBuscar").value;
    
    if (txtBuscar === "") {
        mostrarNotificacion("Debe escribir algo");
        return;
    }

    try {
        const response = await fetch(`${API_URL}/titulo/${encodeURIComponent(txtBuscar)}`);
        const libros = await response.json();
        representaLibros(libros);
        modalBusquedas.hide();
        mostrarNotificacion(`Encontrados ${libros.length} libro(s)`);
    } catch (error) {
        console.error('Error al buscar libros:', error);
        mostrarNotificacion('Error al buscar libros');
    }
}

// Función para buscar por autor
async function buscarAutor() {
    const txtBuscarAutor = document.getElementById("txtBuscarAutor").value;
    
    if (txtBuscarAutor === "") {
        mostrarNotificacion("Debe escribir algo");
        return;
    }

    try {
        const response = await fetch(`${API_URL}/autor/${encodeURIComponent(txtBuscarAutor)}`);
        const libros = await response.json();
        representaLibros(libros);
        modalBusquedas.hide();
        mostrarNotificacion(`Encontrados ${libros.length} libro(s)`);
    } catch (error) {
        console.error('Error al buscar libros:', error);
        mostrarNotificacion('Error al buscar libros');
    }
}

// Función para insertar un nuevo libro
async function insertaLibro(libro) {
    try {
        const response = await fetch(API_URL, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(libro)
        });

        if (response.ok) {
            mostrarNotificacion('Libro insertado correctamente');
            // Limpiar campos
            document.getElementById("txtNuevotitulo").value = "";
            document.getElementById("txtNuevoAutor").value = "";
            document.getElementById("txtNuevaImagen").value = "";
            // Cerrar modal
            modalNuevo.hide();
            // Recargar libros
            buscarTodos();
        } else {
            mostrarNotificacion('Error al insertar libro');
        }
    } catch (error) {
        console.error('Error al insertar libro:', error);
        mostrarNotificacion('Error al insertar libro');
    }
}

// Función para representar los libros en el DOM con Bootstrap Cards
function representaLibros(books) {
    let cadenaDOM = "";
    
    if (books.length === 0) {
        cadenaDOM = `
            <div class="col-12">
                <div class="alert alert-info text-center" role="alert">
                    <i class="bi bi-info-circle"></i> No se encontraron libros
                </div>
            </div>`;
    } else {
        books.forEach(book => {
            cadenaDOM += `
                <div class="col">
                    <div class="card book-card">
                        <img src="http://localhost:3000/public/${book.img}" class="card-img-top book-img" alt="${book.title}">
                        <div class="card-body text-center">
                            <h6 class="card-title">${book.title}</h6>
                            <p class="card-text text-muted small">${book.author}</p>
                        </div>
                    </div>
                </div>`;
        });
    }
    
    document.getElementById("wrapper").innerHTML = cadenaDOM;
}

// Función para mostrar notificaciones usando Bootstrap Toast
function mostrarNotificacion(mensaje) {
    const toastMessage = document.getElementById("toastMessage");
    toastMessage.textContent = mensaje;
    toastNotification.show();
}

// Event Listeners

// Botón buscar por título
document.getElementById("btnBuscar").addEventListener('click', buscarTitulo);

// Enter en campo de búsqueda por título
document.getElementById("txtBuscar").addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        buscarTitulo();
    }
});

// Botón buscar por autor
document.getElementById("btnBuscarAutor").addEventListener('click', buscarAutor);

// Enter en campo de búsqueda por autor
document.getElementById("txtBuscarAutor").addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        buscarAutor();
    }
});

// Botón nuevo libro
document.getElementById("btnNuevoLibro").addEventListener('click', () => {
    const txtNuevoTitulo = document.getElementById("txtNuevotitulo").value.trim();
    const txtNuevoAutor = document.getElementById("txtNuevoAutor").value.trim();
    const txtNuevaImagen = document.getElementById("txtNuevaImagen").value.trim();
    
    if (txtNuevoTitulo === "" || txtNuevoAutor === "" || txtNuevaImagen === "") {
        mostrarNotificacion("Debe completar todos los campos");
    } else {
        const libro = {
            title: txtNuevoTitulo,
            author: txtNuevoAutor,
            img: txtNuevaImagen
        };
        insertaLibro(libro);
    }
});

// Botón todos
document.getElementById("btnTodos").addEventListener('click', buscarTodos);

// Cargar todos los libros al iniciar
buscarTodos();
