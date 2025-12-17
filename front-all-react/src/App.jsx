import { useState, useEffect } from 'react';
import './App.css';
import Header from './components/shared/Header';
import Navigation from './components/shared/Navigation';
import Notification from './components/shared/Notification';
import CrudView from './components/crud/CrudView';
import CartView from './components/cart/CartView';

const API_URL = 'http://localhost:3000/api/libros';

function App() {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [currentView, setCurrentView] = useState('cart'); // 'cart' o 'crud'
  const [notification, setNotification] = useState({ show: false, message: '' });
  const [cart, setCart] = useState([]);

  // Cargar todos los libros
  const fetchAllBooks = async () => {
    try {
      setLoading(true);
      const response = await fetch(API_URL);
      if (!response.ok) {
        throw new Error('Error al cargar los libros');
      }
      const data = await response.json();
      setBooks(data);
      setLoading(false);
    } catch (err) {
      setError(err.message);
      setLoading(false);
    }
  };

  // Cargar libros al iniciar
  useEffect(() => {
    fetchAllBooks();
  }, []);

  // Buscar por título
  const searchByTitle = async (title) => {
    try {
      setLoading(true);
      const response = await fetch(`${API_URL}/titulo/${encodeURIComponent(title)}`);
      if (!response.ok) {
        throw new Error('Error al buscar libros');
      }
      const data = await response.json();
      setBooks(data);
      setLoading(false);
      showNotification(`Encontrados ${data.length} libro(s)`);
    } catch (err) {
      showNotification('Error al buscar libros');
      setLoading(false);
    }
  };

  // Buscar por autor
  const searchByAuthor = async (author) => {
    try {
      setLoading(true);
      const response = await fetch(`${API_URL}/autor/${encodeURIComponent(author)}`);
      if (!response.ok) {
        throw new Error('Error al buscar libros');
      }
      const data = await response.json();
      setBooks(data);
      setLoading(false);
      showNotification(`Encontrados ${data.length} libro(s)`);
    } catch (err) {
      showNotification('Error al buscar libros');
      setLoading(false);
    }
  };

  // Crear nuevo libro
  const createBook = async (book) => {
    try {
      const response = await fetch(API_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(book)
      });

      if (!response.ok) {
        throw new Error('Error al crear el libro');
      }

      showNotification('Libro insertado correctamente');
      fetchAllBooks();
      return true;
    } catch (err) {
      showNotification('Error al insertar libro');
      return false;
    }
  };

  // Agregar al carrito
  const addToCart = (book) => {
    const existingItem = cart.find(item => item._id === book._id);
    
    if (existingItem) {
      setCart(cart.map(item =>
        item._id === book._id
          ? { ...item, quantity: item.quantity + 1 }
          : item
      ));
      showNotification(`Cantidad actualizada: ${book.title}`);
    } else {
      setCart([...cart, { ...book, quantity: 1 }]);
      showNotification(`Agregado al carrito: ${book.title}`);
    }
  };

  // Eliminar del carrito
  const removeFromCart = (bookId) => {
    setCart(cart.filter(item => item._id !== bookId));
    showNotification('Libro eliminado del carrito');
  };

  // Limpiar carrito
  const clearCart = () => {
    setCart([]);
    showNotification('Carrito vacío');
  };

  // Mostrar notificación
  const showNotification = (message) => {
    setNotification({ show: true, message });
    setTimeout(() => {
      setNotification({ show: false, message: '' });
    }, 3000);
  };

  if (loading && books.length === 0) {
    return (
      <div className="app">
        <div className="loading">Cargando libros...</div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="app">
        <div className="error">Error: {error}</div>
      </div>
    );
  }

  return (
    <div className="app">
      <Header cartCount={cart.reduce((sum, item) => sum + item.quantity, 0)} />
      
      <Navigation 
        currentView={currentView} 
        onViewChange={setCurrentView} 
      />

      <div className="main-content">
        {currentView === 'cart' ? (
          <CartView
            books={books}
            loading={loading}
            cart={cart}
            onAddToCart={addToCart}
            onRemoveFromCart={removeFromCart}
            onClearCart={clearCart}
          />
        ) : (
          <CrudView
            books={books}
            loading={loading}
            onSearchByTitle={searchByTitle}
            onSearchByAuthor={searchByAuthor}
            onCreate={createBook}
            onLoadAll={fetchAllBooks}
          />
        )}
      </div>

      <Notification 
        show={notification.show}
        message={notification.message}
      />
    </div>
  );
}

export default App;
