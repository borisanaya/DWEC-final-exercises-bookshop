import { useState, useEffect } from 'react';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import BooksGrid from './components/BooksGrid';
import SearchModal from './components/SearchModal';
import NewBookModal from './components/NewBookModal';
import Notification from './components/Notification';

const API_URL = 'http://localhost:3000/api/libros';

function App() {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [isSearchModalOpen, setIsSearchModalOpen] = useState(false);
  const [isNewBookModalOpen, setIsNewBookModalOpen] = useState(false);
  const [notification, setNotification] = useState({ show: false, message: '' });

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
      <Header />
      
      <div className="main-content">
        <BooksGrid books={books} loading={loading} />
      </div>

      <Footer 
        onSearchClick={() => setIsSearchModalOpen(true)}
        onNewBookClick={() => setIsNewBookModalOpen(true)}
        onAllBooksClick={fetchAllBooks}
      />

      <SearchModal
        isOpen={isSearchModalOpen}
        onClose={() => setIsSearchModalOpen(false)}
        onSearchByTitle={searchByTitle}
        onSearchByAuthor={searchByAuthor}
      />

      <NewBookModal
        isOpen={isNewBookModalOpen}
        onClose={() => setIsNewBookModalOpen(false)}
        onSubmit={createBook}
      />

      <Notification 
        show={notification.show}
        message={notification.message}
      />
    </div>
  );
}

export default App;
