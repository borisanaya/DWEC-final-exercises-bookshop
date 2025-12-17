# Bookshop - Ejercicios Finales DWEC

Este proyecto contiene una serie de ejercicios progresivos para desarrollar una aplicación de tienda de libros completa. Los ejercicios están diseñados para practicar diferentes tecnologías y enfoques, desde vanilla JavaScript hasta React.

## 📋 Orden de Realización

Los ejercicios deben realizarse en el siguiente orden:

1. **Backend** (`back/`)
2. **Frontend Vanilla** (`front-cart/` y `front-crud/`)
3. **Frontend Bootstrap** (`front-cart-bootstrap/` y `front-crud-bootstrap/`)
4. **Frontend React** (`front-cart-react/`, `front-crud-react/` y `front-all-react/`)

---

## 🚀 Ejercicio 1: Backend - Servidor Express

**Carpeta:** `back/`

### Objetivo
Crear un servidor Node.js con Express que proporcione una API REST para gestionar libros.

### Tareas
1. Configurar un servidor Express en el puerto 3000
2. Implementar las siguientes rutas:
   - `GET /books` - Obtener todos los libros
   - `GET /books/:id` - Obtener un libro por ID
   - `POST /books` - Crear un nuevo libro
   - `PUT /books/:id` - Actualizar un libro existente
   - `DELETE /books/:id` - Eliminar un libro
3. Configurar CORS para permitir peticiones desde el frontend
4. Servir imágenes estáticas desde la carpeta `public/`

### Instalación y ejecución
```bash
cd back
npm install
node server.js
```

El servidor debe estar corriendo en `http://localhost:3000`

---

## 📚 Ejercicio 2: Frontend Vanilla - Carrito

**Carpeta:** `front-cart/`

### Objetivo
Crear una interfaz de carrito de compras usando HTML, CSS y JavaScript vanilla.

### Tareas
1. Implementar la visualización de libros obtenidos desde la API
2. Agregar funcionalidad de "Añadir al carrito"
3. Mostrar el carrito con los libros añadidos
4. Implementar contador de cantidad en el carrito
5. Calcular y mostrar el total del carrito
6. Permitir eliminar items del carrito
7. Gestionar el estado del carrito (puede usar localStorage)

### Características
- Uso de `fetch` para comunicarse con la API
- Manipulación del DOM
- Eventos de usuario
- Gestión de estado local

### Ejecución
Abrir `index.html` en el navegador (requiere servidor backend activo)

---

## 📚 Ejercicio 3: Frontend Vanilla - CRUD

**Carpeta:** `front-crud/`

### Objetivo
Crear una interfaz de administración (CRUD completo) usando HTML, CSS y JavaScript vanilla.

### Tareas
1. Listar todos los libros desde la API
2. Implementar búsqueda de libros
3. Crear modal/formulario para añadir nuevos libros
4. Editar libros existentes
5. Eliminar libros con confirmación
6. Mostrar notificaciones de éxito/error
7. Implementar paginación o scroll infinito (opcional)

### Características
- CRUD completo (Create, Read, Update, Delete)
- Validación de formularios
- Modales o diálogos personalizados
- Sistema de notificaciones

### Ejecución
Abrir `index.html` en el navegador (requiere servidor backend activo)

---

## 🎨 Ejercicio 4: Frontend Bootstrap - Carrito

**Carpeta:** `front-cart-bootstrap/`

### Objetivo
Recrear la funcionalidad del carrito pero utilizando Bootstrap para el diseño y componentes.

### Tareas
1. Replicar toda la funcionalidad del ejercicio 2
2. Utilizar componentes de Bootstrap:
   - Cards para los libros
   - Badges para el contador del carrito
   - Buttons con estilos de Bootstrap
   - Grid system para el layout responsive
   - Offcanvas o Modal para el carrito
3. Hacer la interfaz completamente responsive

### Características
- Mismo comportamiento que la versión vanilla
- Diseño mejorado con Bootstrap 5
- Mayor responsividad
- Componentes UI consistentes

### Ejecución
Abrir `index.html` en el navegador (requiere servidor backend activo)

---

## 🎨 Ejercicio 5: Frontend Bootstrap - CRUD

**Carpeta:** `front-crud-bootstrap/`

### Objetivo
Recrear la funcionalidad del CRUD pero utilizando Bootstrap para el diseño.

### Tareas
1. Replicar toda la funcionalidad del ejercicio 3
2. Utilizar componentes de Bootstrap:
   - Modals para formularios
   - Forms con estilos de Bootstrap
   - Alerts para notificaciones
   - Tables o Cards para listar libros
   - Navbar para navegación
3. Implementar validación de formularios con estilos de Bootstrap
4. Mejorar la experiencia visual

### Características
- CRUD completo con mejor UI
- Validación visual de formularios
- Modales nativos de Bootstrap
- Sistema de alertas integrado

### Ejecución
Abrir `index.html` en el navegador (requiere servidor backend activo)

---

## ⚛️ Ejercicio 6: Frontend React - Carrito

**Carpeta:** `front-cart-react/`

### Objetivo
Reimplementar el carrito de compras usando React y hooks.

### Tareas
1. Crear componentes React para:
   - `BookCard` - Tarjeta individual de libro
   - `BooksGrid` - Grid de libros
   - `CartPanel` - Panel lateral del carrito
   - `CartItem` - Item individual en el carrito
   - `Header` - Cabecera con contador
2. Implementar gestión de estado con `useState`
3. Usar `useEffect` para cargar datos de la API
4. Implementar contexto o props drilling para el carrito
5. Crear hooks personalizados (opcional)

### Instalación y ejecución
```bash
cd front-cart-react
npm install
npm run dev
```

### Características
- Componentes funcionales
- React Hooks (useState, useEffect)
- Renderizado condicional
- Listas y keys
- Eventos en React

---

## ⚛️ Ejercicio 7: Frontend React - CRUD

**Carpeta:** `front-crud-react/`

### Objetivo
Implementar el sistema CRUD completo usando React.

### Tareas
1. Crear componentes React para:
   - `BookCard` - Tarjeta con acciones CRUD
   - `BooksGrid` - Grid de libros
   - `NewBookModal` - Modal para crear/editar
   - `SearchModal` - Modal de búsqueda
   - `Notification` - Sistema de notificaciones
   - `Footer` - Pie con estadísticas
2. Implementar formularios controlados
3. Gestionar estado de modales
4. Implementar notificaciones temporales
5. Validación de formularios

### Instalación y ejecución
```bash
cd front-crud-react
npm install
npm run dev
```

### Características
- CRUD completo en React
- Formularios controlados
- Modales como componentes
- Sistema de notificaciones
- Manejo de errores

---

## ⚛️ Ejercicio 8: Frontend React - Aplicación Completa

**Carpeta:** `front-all-react/`

### Objetivo
Crear una aplicación React completa que combine CRUD y Carrito con navegación entre vistas.

### Tareas
1. Implementar navegación entre dos vistas:
   - Vista de Carrito (compras)
   - Vista de Administración (CRUD)
2. Compartir componentes comunes entre vistas
3. Organizar código en carpetas lógicas:
   - `components/shared/` - Componentes compartidos
   - `components/cart/` - Componentes del carrito
   - `components/crud/` - Componentes del CRUD
4. Implementar Context API o estado global
5. Optimizar rendimiento con React.memo o useMemo (opcional)

### Instalación y ejecución
```bash
cd front-all-react
npm install
npm run dev
```

### Características
- Navegación entre vistas
- Arquitectura escalable
- Componentes reutilizables
- Estado global compartido
- Aplicación completa y funcional

---

## 🛠️ Tecnologías Utilizadas

- **Backend:** Node.js, Express, CORS
- **Frontend Vanilla:** HTML5, CSS3, JavaScript ES6+
- **Frontend Bootstrap:** Bootstrap 5, JavaScript ES6+
- **Frontend React:** React 18, Vite, CSS Modules

---

## 📝 Notas Importantes

1. **Requisitos previos:**
   - Node.js instalado (v14 o superior)
   - npm o yarn
   - Navegador moderno

2. **Servidor Backend:**
   - El backend debe estar corriendo antes de usar cualquier frontend
   - Puerto por defecto: 3000

3. **Datos de prueba:**
   - El servidor incluye datos iniciales de libros
   - Las imágenes están en `back/public/`

4. **Buenas prácticas:**
   - Mantener código limpio y comentado
   - Separar lógica de presentación
   - Manejar errores apropiadamente
   - Validar datos del usuario

---

## 🎯 Criterios de Evaluación

- ✅ Funcionalidad completa de cada ejercicio
- ✅ Código limpio y bien organizado
- ✅ Manejo apropiado de errores
- ✅ Interfaz de usuario intuitiva
- ✅ Responsive design
- ✅ Buenas prácticas de programación
- ✅ Comunicación correcta con la API
- ✅ Gestión de estado apropiada

---

## 📚 Recursos Adicionales

- [Documentación de Express](https://expressjs.com/)
- [MDN Web Docs](https://developer.mozilla.org/)
- [Bootstrap Documentation](https://getbootstrap.com/)
- [React Documentation](https://react.dev/)
- [Vite Documentation](https://vitejs.dev/)

---

**¡Buena suerte con los ejercicios!** 🚀
