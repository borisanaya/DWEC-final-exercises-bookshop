import BookCard from './BookCard';
import './BooksGrid.css';

function BooksGrid({ books, onBookClick }) {
  return (
    <div className="books-panel">
      <div className="books-grid">
        {books.map((book, index) => (
          <BookCard 
            key={`${book._id || index}`}
            book={book}
            onClick={() => onBookClick(book)}
          />
        ))}
      </div>
    </div>
  );
}

export default BooksGrid;
