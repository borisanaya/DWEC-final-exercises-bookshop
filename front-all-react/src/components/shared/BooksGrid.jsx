import './BooksGrid.css';

function BooksGrid({ books, loading, children }) {
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
        {children}
      </div>
    </div>
  );
}

export default BooksGrid;
