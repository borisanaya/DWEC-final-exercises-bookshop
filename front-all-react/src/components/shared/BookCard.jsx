import './BookCard.css';

function BookCard({ book, showAddButton = false, onAddToCart = null }) {
  return (
    <div className="book-card">
      <img 
        src={`http://localhost:3000/public/${book.img}`}
        alt={book.title}
        className="book-img"
      />
      <div className="book-info">
        <h3 className="book-title">{book.title}</h3>
        <p className="book-author">{book.author}</p>
        {showAddButton && onAddToCart && (
          <button 
            className="add-to-cart-btn"
            onClick={() => onAddToCart(book)}
          >
            ➕ Agregar
          </button>
        )}
      </div>
    </div>
  );
}

export default BookCard;
