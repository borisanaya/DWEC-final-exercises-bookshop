import BookCard from './BookCard';
import './BooksGrid.css';

function BooksGrid({ books, loading }) {
  if (loading) {
    return (
      <div className="books-grid-container">
        <div className="loading-message">Cargando...</div>
      </div>
    );
  }

  if (books.length === 0) {
    return (
      <div className="books-grid-container">
        <div className="empty-message">No se encontraron libros</div>
      </div>
    );
  }

  return (
    <div className="books-grid-container">
      <div className="books-grid">
        {books.map((book, index) => (
          <BookCard 
            key={book._id || index}
            book={book}
          />
        ))}
      </div>
    </div>
  );
}

export default BooksGrid;
