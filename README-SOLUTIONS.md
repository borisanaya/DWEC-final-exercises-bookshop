# Bookshop Atlas - Proyecto de Gestión de Librería

Colección completa de aplicaciones frontend y backend para gestión de una librería online con MongoDB Atlas.

## Estructura del Proyecto


```
bookshop-atlas/
├── back/                      # Servidor backend Node.js + Express
├── front-all-react/           # Aplicación unificada React (Carrito + CRUD)
├── front-cart/                # Carrito de compras vanilla JavaScript
├── front-cart-bootstrap/      # Carrito con Bootstrap 5
├── front-cart-react/          # Carrito con React 18
├── front-crud/                # Gestión CRUD vanilla JavaScript
├── front-crud-bootstrap/      # Gestión CRUD con Bootstrap 5
├── front-crud-react/          # Gestión CRUD con React 18
└── README.md
```

---

## Backend

### back/
**Tecnología:** Node.js + Express + MongoDB

API REST que gestiona operaciones CRUD sobre una base de datos MongoDB Atlas.

**Características:**
- Servidor Express en puerto 3000
- Conexión a MongoDB Atlas
- CORS habilitado
- Servicio de imágenes estáticas

**Endpoints:**
- `GET /api/libros` - Obtener todos los libros
- `GET /api/libros/titulo/:titulo` - Buscar por título
- `GET /api/libros/autor/:autor` - Buscar por autor
- `POST /api/libros` - Crear nuevo libro
- Imágenes servidas desde `/public/`

**Ejecutar:**
```bash
cd back
node server.js
```

---

## Proyectos Vanilla JavaScript


**Ejecutar:**
- Con Live Server

---

### front-cart/
**Tecnología:** HTML + CSS + JavaScript puro

Sistema de carrito de compras con gestión de productos.

**Características:**
- Catálogo de libros
- Carrito de compras lateral deslizante
- Agregar libros al carrito
- Gestión de cantidades
- Contador de productos en header
- Vaciar carrito
- CSS unificado (estilos.css + photon.css combinados)

---

### front-crud/
**Tecnología:** HTML + CSS + JavaScript puro

Aplicación de gestión CRUD completa.

**Características:**
- Ver todos los libros
- Buscar por título
- Buscar por autor
- Crear nuevos libros
- Diálogos nativos HTML
- Notificaciones visuales

---

## Proyectos Bootstrap 5

### front-cart-bootstrap/
**Tecnología:** HTML + Bootstrap 5.3.0 + JavaScript

Carrito de compras implementado con componentes Bootstrap.

**Características:**
- Bootstrap CDN (sin instalación)
- Cards para libros
- Badges para contador
- Panel lateral con animaciones
- Modal para detalles
- Botones estilizados
- Responsive design nativo

---

### front-crud-bootstrap/
**Tecnología:** HTML + Bootstrap 5.3.0 + JavaScript

Gestión CRUD con componentes Bootstrap.

**Características:**
- Modales de Bootstrap para búsquedas
- Modal para crear libro
- Toast para notificaciones
- Navbar responsive
- Cards para visualización
- Validación de formularios
- API de Bootstrap (Modal, Toast)


---

## Proyectos React

### front-cart-react/
**Tecnología:** React 18.2.0 + Vite 5.2.0

Carrito de compras desarrollado con React y componentes modulares.

**Características:**
- 6 componentes React
- Hooks (useState, useEffect)
- Props y event handlers
- Hot Module Replacement (HMR)
- Panel de carrito animado
- Gestión de estado con hooks

**Componentes:**
- Header (con contador)
- BooksGrid
- BookCard
- CartPanel
- CartItem

**Instalación:**
```bash
cd front-cart-react
npm install
npm run dev
```

**URL:** `http://localhost:5173`

---

### front-crud-react/
**Tecnología:** React 18.2.0 + Vite 5.2.0

Gestión CRUD con React y arquitectura de componentes.

**Características:**
- 8 componentes React
- Modales personalizados
- Sistema de notificaciones
- Footer fijo con acciones
- Búsquedas por título y autor
- Crear nuevos libros
- Gestión de estado centralizada

**Componentes:**
- Header
- Footer
- BooksGrid
- BookCard
- SearchModal
- NewBookModal
- Notification

**Instalación:**
```bash
cd front-crud-react
npm install
npm run dev
```

**URL:** `http://localhost:5173`

---

### front-all-react/
**Tecnología:** React 18.2.0 + Vite 5.2.0

Aplicación unificada que combina funcionalidades de carrito y CRUD.

**Características:**
- Navegación por tabs (Carrito / CRUD)
- Estado global centralizado
- Componentes compartidos reutilizables
- 12 componentes organizados por funcionalidad
- Máxima reutilización de código
- Experiencia de usuario integrada

**Estructura de componentes:**

**shared/** (7 componentes reutilizables)
- Header
- Navigation
- BooksGrid
- BookCard (unificado para ambas vistas)
- SearchModal
- NewBookModal
- Notification

**cart/** (3 componentes específicos)
- CartView
- CartPanel
- CartItem

**crud/** (2 componentes específicos)
- CrudView
- CrudFooter

**Instalación:**
```bash
cd front-all-react
npm install
npm run dev
```

**URL:** `http://localhost:5173`

---

## Comparativa de Proyectos

### Vanilla JavaScript
**Ventajas:**
- Sin dependencias
- Carga rápida
- Fácil mantenimiento
- Control total del código

**Uso recomendado:** Proyectos pequeños, aprendizaje, prototipos rápidos

---

### Bootstrap
**Ventajas:**
- Diseño profesional sin CSS personalizado
- Componentes listos para usar
- Responsive automático
- Documentación extensa

**Uso recomendado:** Proyectos que necesitan UI profesional rápidamente

---

### React
**Ventajas:**
- Componentes reutilizables
- Gestión de estado eficiente
- Ecosistema robusto
- Escalabilidad
- Hot Module Replacement

**Uso recomendado:** Aplicaciones complejas, SPAs, proyectos escalables

---

## Requisitos

### Backend
- Node.js 14+
- npm o yarn
- MongoDB Atlas (cuenta configurada)

### Frontend Vanilla y Bootstrap
- Navegador moderno
- Backend corriendo en puerto 3000

### Frontend React
- Node.js 14+
- npm o yarn
- Backend corriendo en puerto 3000

---

## Configuración Inicial

1. **Configurar MongoDB Atlas:**
   - Crear cuenta en MongoDB Atlas
   - Crear cluster
   - Configurar usuario y contraseña
   - Actualizar connection string en `back/server.js`

2. **Instalar dependencias del backend:**
   ```bash
   cd back
   npm install
   ```

3. **Iniciar el servidor:**
   ```bash
   cd back
   node server.js
   ```

4. **Para proyectos React:**
   ```bash
   cd [proyecto-react]
   npm install
   npm run dev
   ```

---

## Puertos Utilizados

- **Backend:** 3000
- **React (Vite):** 5173

---

## Base de Datos

**Colección:** libros

**Estructura de documento:**
```json
{
  "_id": "ObjectId",
  "title": "string",
  "author": "string",
  "img": "string"
}
```

---

## Notas Técnicas

### Vanilla JavaScript
- Fetch API para peticiones HTTP
- Template literals para renderizado
- CSS Grid y Flexbox
- Eventos nativos del navegador

### Bootstrap
- Bootstrap 5.3.0 desde CDN
- Bootstrap Icons 1.11.0
- API JavaScript de Bootstrap (Modal, Toast)
- Utility classes

### React
- Hooks: useState, useEffect
- Props drilling
- Component composition
- CSS Modules (archivos .css por componente)
- Vite como bundler

---

## Mejoras Futuras

- Implementar UPDATE y DELETE en CRUD
- Autenticación de usuarios
- Persistencia del carrito (localStorage)
- Sistema de precios y checkout
- Paginación de resultados
- Filtros avanzados
- Tests unitarios y de integración
- Docker para deployment
- CI/CD pipeline

