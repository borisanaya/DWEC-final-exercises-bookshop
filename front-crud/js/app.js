'use strict';

// API base URL
const API_URL = 'http://localhost:3000/api/libros';

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
        toggleDialog('dialogBusquedas');
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
        toggleDialog('dialogBusquedas');
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
            // Cerrar dialog
            toggleDialog('dialogNuevo');
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

// Función para representar los libros en el DOM
function representaLibros(books) {
    let cadenaDOM = "";
    
    if (books.length === 0) {
        cadenaDOM = '<div style="text-align: center; padding: 50px;"><p>No se encontraron libros</p></div>';
    } else {
        books.forEach(book => {
            cadenaDOM += `
                <div style="display: inline-block; margin: 10px; text-align: center;">
                    <div>
                        <img src="http://localhost:3000/public/${book.img}" height="170" width="108" style="border: 1px solid #ccc;">
                        <div><strong>${book.title}</strong></div>
                        <div>${book.author}</div>
                    </div>
                </div>`;
        });
    }
    
    document.getElementById("wrapper").innerHTML = cadenaDOM;
}

// Función para mostrar notificaciones
function mostrarNotificacion(mensaje) {
    const notification = document.getElementById("notification");
    notification.textContent = mensaje;
    notification.classList.add('show');
    
    setTimeout(() => {
        notification.classList.remove('show');
    }, 2000);
}

// Función para abrir/cerrar dialogs
function toggleDialog(dialogId) {
    const dialog = document.getElementById(dialogId);
    if (dialog.open) {
        dialog.close();
    } else {
        dialog.showModal();
    }
}

// Event Listeners

// Botón buscar por título
document.getElementById("btnBuscar").addEventListener('click', buscarTitulo);

// Botón buscar por autor
document.getElementById("btnBuscarAutor").addEventListener('click', buscarAutor);

// Botón nuevo libro
document.getElementById("btnNuevoLibro").addEventListener('click', () => {
    const txtNuevoTitulo = document.getElementById("txtNuevotitulo").value;
    const txtNuevoAutor = document.getElementById("txtNuevoAutor").value;
    const txtNuevaImagen = document.getElementById("txtNuevaImagen").value;
    
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
