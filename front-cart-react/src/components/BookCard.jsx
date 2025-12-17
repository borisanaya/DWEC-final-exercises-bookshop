import './BookCard.css';

function BookCard({ book, onClick }) {
  return (
    <div className="book-card" onClick={onClick}>
      <img 
        src={`http://localhost:3000/public/${book.img}`}
        alt={book.title}
        className="book-img"
      />
      <div className="book-info">
        <h3 className="book-title">{book.title}</h3>
        <p className="book-author">{book.author}</p>
      </div>
    </div>
  );
}

export default BookCard;
