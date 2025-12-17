import { useState, useEffect } from 'react';
import './App.css';
import Header from './components/Header';
import BooksGrid from './components/BooksGrid';
import CartPanel from './components/CartPanel';

const API_URL = 'http://localhost:3000/api/libros';

function App() {
  const [books, setBooks] = useState([]);
  const [cart, setCart] = useState([]);
  const [isCartVisible, setIsCartVisible] = useState(false);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Cargar libros desde la API
  useEffect(() => {
    const fetchBooks = async () => {
      try {
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

    fetchBooks();
  }, []);

  // Agregar libro al carrito
  const addToCart = (book) => {
    setCart([...cart, book]);
    setIsCartVisible(true);
  };

  // Eliminar libro del carrito
  const removeFromCart = (index) => {
    const newCart = cart.filter((_, i) => i !== index);
    setCart(newCart);
  };

  // Toggle visibilidad del carrito
  const toggleCart = () => {
    setIsCartVisible(!isCartVisible);
  };

  if (loading) {
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
      <Header 
        cartCount={cart.length} 
        onCartClick={toggleCart}
      />
      <div className="main-content">
        <BooksGrid 
          books={books} 
          onBookClick={addToCart}
        />
        <CartPanel 
          cart={cart}
          isVisible={isCartVisible}
          onRemove={removeFromCart}
        />
      </div>
    </div>
  );
}

export default App;
